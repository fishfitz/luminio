<template>
  <div>
    <div tabindex="0">
      Luminio candelas :
      {{ $world.CANDELAS }} / {{ $world.MAX_CANDELAS }}
    </div>
    <br/>  <br/><br/>
    <div class="foes">
      <action
        v-for="(foe, index) in $world.FIGHT_FOES"
        :key="index"
        @click="selectedCard && playCard(selectedCard, foe)"
        ref="foes">
        {{ foe.name }} <br/>
        Imergie : {{ foe.life }} / {{ foe.maxLife }} <br/>
        Aura :
        <span v-for="(auraPattern, index) in foe.auraPattern">
          <template v-if="foe.aura[index]"> {{ auraName(foe.aura[index]) }} Remplie </template>
          <template v-else>
            <template v-if="isPatternCorrect(foe)"> {{ auraName(auraPattern) }} </template>
            Vide
          </template>
        </span> <br/>
        Intention : {{ foe.intention?.type }}
        <br/><br/> <br/><br/>
      </action>
      <action v-if="selectedCard" @click="selectedCard = null">
        Annuler
      </action>
    </div>

    <div class="hand">
      <div v-for="card in $world.HAND">
        <action :disabled="!!selectedCard" @click="selectCard(card)">
          {{ card.name }} ({{ auraName(card.color) }}) :
          {{ render(card.description, $world) }}
        </action>
      </div>
    </div>

    <br/>  <br/><br/>

    <action :disabled="!!selectedCard" @click="resolveTurn"> Passer </action>
  </div>
</template>

<script setup>
import intersect from 'just-intersect'
import curry from 'just-curry-it'
import shuffle from 'just-shuffle'
import render from '~carni/render'

const auraName = (color) => {
  switch (color) {
    case 'yellow':
      return 'Orfeu'
    case 'purple':
      return 'Belarcane'
    case 'blue':
      return 'Céleste'
    case 'black':
      return 'Imergie'
    case 'white':
      return 'Lumière'
  }
}

const isPatternCorrect = (foe) => {
  return foe.aura.every(color => color !== 'black') &&
    !intersect(foe.aura, foe.auraPattern).some(color => color !== 'white')
}

const addAura = (foe, color) => {
  foe.aura.push(color)

  if (foe.aura.length >= foe.auraSlots) {
    if (foe.aura.every(color => color !== 'black')) {
      foe.stunned = true
      if (isPatternCorrect(foe)) {
        $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + 2 * foe.auraSlots)
      }
    }
    foe.aura.length = 0
  }
}

const declareFoeIntentions = () => {
  for (const foe of $world.FIGHT_FOES) {
    foe.intention = foe.behavior.apply(foe)
  }
}

const resetAura = (foe) => {
  foe.refreshAuraPattern.apply(foe)
  foe.aura.length = 0
}

const draw = (amount) => {
  for (let i = 0; i < amount; i++) {
    if (!$world.DECK.length) {
      console.log('shuffle discarded')
      $world.DECK = shuffle($world.DISCARDED)
      $world.DISCARDED.length = 0
    }
    $world.HAND.push($world.DECK.pop())
  }
}

let selectedCard = $ref(null)
let cardCost = $ref(0)
const playCard = (card, foe) => {
  card.execute(foe)
  $world.CANDELAS -= cardCost
  $world.DISCARDED.push($world.HAND.splice($world.HAND.indexOf(card), 1))
  selectedCard = null
  cardCost++
}

const foes = ref([])
const selectCard = (card) => {
  if (!card.targetted) playCard(card)
  else {
    selectedCard = card
    foes.value[0].$el.focus()
  }
}

const resolveTurn = () => {
  $world.DISCARDED.push(...$world.HAND)
  $world.HAND.length = 0
  draw(3)

  for (const foe of $world.FIGHT_FOES) {
    if (foe.stunned) foe.stunned = false
    else if (foe.intention) foe.intention.execute.apply(foe)

    if (!$world.CANDELAS) {
      if ($world.WILL === 10) {
        $world.WILL = 0
        $world.CANDELAS = $world.MAX_CANDELAS
      } else {
        $world.GOTO($world.FIGHT_DEFEAT)
      }
    }
  }

  declareFoeIntentions()
  $world.FIGHT_TURN++
  cardCost = 0
}

const win = () => {
  console.log('win!!', $world.FIGHT_VICTORY)
  $world.GOTO($world.FIGHT_VICTORY)
}

$world.FIGHT_FOES.forEach(foe => {
  foe.aura = []
  resetAura(foe)
  foe.addAura = curry(addAura)(foe)
  foe.inflictDamages = (amount, color) => {
    foe.life = Math.max(foe.life - amount, 0)
    if (color) foe.addAura(color)
    if (!foe.life) $world.FIGHT_FOES.splice($world.FIGHT_FOES.indexOf(foe), 1)
    if (!$world.FIGHT_FOES.length) win()
  }
})

onMounted(() => {
  declareFoeIntentions()
  draw(3)
})
</script>
