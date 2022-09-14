<template>
  <div>
    <div aria-live="off" style="display: inline-block; width: 50%">
      <div tabindex="0" ref="luminio">
        Luminio
        <br/>
        Candelas : {{ $world.CANDELAS }} sur {{ $world.MAX_CANDELAS }}
        <template v-if="$world.PROTECTION">
          <br/>
          Protection : {{ $world.PROTECTION }}
          <template v-if="$world.SHIELD"> ({{aura($world.SHIELD)}}) </template>
        </template>
        <br/>
        Volonté: {{ $world.WILL }} sur 10
      </div>
      <br/>  <br/><br/>
      <div class="foes">
        <action
          v-for="(foe, index) in $world.FIGHT_FOES"
          :key="index"
          @click="selectedCard && playCard(selectedCard, foe)"
          ref="foes">
          {{ foe.name }} <br/>
          Imergie : {{ foe.life }} sur {{ foe.maxLife }} <br/>
          Aura :
          <span v-for="(auraPattern, index) in foe.auraPattern">
            <template v-if="foe.aura[index]"> {{ aura(foe.aura[index]) }} Remplie </template>
            <template v-else>
              <template v-if="isPatternCorrect(foe)"> {{ aura(auraPattern) }} </template>
              <template v-else> Vide </template>
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
        <div v-for="card in $world.HAND" :key="card.id">
          <action
            :disabled="!!selectedCard"
            @click="selectCard(card)"
            ref="cards">
            {{ card.name }} ({{ aura(card.color) }}) :
            {{ render(card.description, $world) }}
          </action>
        </div>
      </div>

      <br/>  <br/><br/>

      <action :disabled="!!selectedCard" @click="resolveTurn" ref="skip"> Passer </action>
    </div>

    <div role="log" aria-live="assertive" style="display: inline-block; width: 50%">
      <div v-for="line in $story.journal.filter(l => l.type === 'log')">
        {{ line.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from 'vue'
import intersect from 'just-intersect'
import shuffle from 'just-shuffle'
import render from '~carni/render'
import { aura } from '../utils/french'

const isPatternCorrect = (foe) => {
  return foe.aura.every(color => color !== 'black') &&
    !intersect(foe.aura, foe.auraPattern).some(color => color !== 'white')
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
  $world.LOG('fight.jePioche', { amount })
  for (let i = 0; i < amount; i++) {
    if (!$world.DECK.length) {
      $world.DECK = shuffle($world.DISCARDED)
      $world.DISCARDED.length = 0
    }
    $world.HAND.push($world.DECK.pop())
  }
}

const luminio = ref()
const foes = ref([])
const cards = ref([])
const skip = ref()
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
  draw(5)

  for (const foe of $world.FIGHT_FOES) {
    if (foe.stunned) {
      foe.stunned = false
      $world.LOG('fight.estEtourditEtNeJouePas', { foe })
    } else if (foe.intention) foe.intention.execute.apply(foe)

    if (!$world.CANDELAS) {
      if ($world.WILL === 10) {
        $world.LOG('fight.jeNePeuxPasEchouer')
        $world.WILL = 0
        $world.CANDELAS = $world.MAX_CANDELAS
      } else {
        $world.LOG('fight.jAiEchoue')
        $world.GOTO($world.FIGHT_DEFEAT)
      }
    }
  }

  declareFoeIntentions()
  $world.FIGHT_TURN++
  cardCost = 0
  if ($world.PROTECTION) $world.LOG('fight.maSphereDisparait')
  $world.PROTECTION = 0
  $world.SHIELD = null
  nextTick(() => {
    if (cards.value.length) cards.value[0].$el.focus()
    else skip.value.$el.focus()
  })
}

let selectedCard = $ref(null)
let cardCost = $ref(0)
const playCard = (card, foe) => {
  card.execute(foe)
  $world.CANDELAS -= cardCost
  $world.DISCARDED.push(...$world.HAND.splice($world.HAND.indexOf(card), 1))
  selectedCard = null
  cardCost++
  nextTick(() => {
    if (cards.value.length) cards.value[0].$el.focus()
    else skip.value.$el.focus()
  })
}

const win = () => {
  $world.GOTO($world.FIGHT_VICTORY)
}

$world.FIGHT_FOES.forEach(foe => {
  foe.aura = []
  resetAura(foe)
  foe.addAura = (color) => {
    foe.aura.push(color)

    if (foe.aura.length >= foe.auraSlots) {
      if (foe.aura.every(color => color !== 'black')) {
        foe.stunned = true
        if (isPatternCorrect(foe)) {
          const candelasGain = $world.CANDELAS + 2 * foe.auraSlots
          $world.CANDELAS = Math.min($world.MAX_CANDELAS, candelasGain)
          $world.LOG('fight.sonAuraEstHarmonisee', { candelasGain })
        } else $world.LOG('fight.sonAuraSurcharge')
      } else if (foe.aura.every(color => color === 'black')) {
        $world.LOG('fight.sonAuraSObscurcit')
        foe.auraDarkening()
      } else $world.LOG('fight.sonAuraEstSouillee')
      foe.aura.length = 0
    }
  }

  foe.inflictDamages = function (amount, ignoreProtection = false) {
    let protectionRemoved = 0
    if (!ignoreProtection) {
      protectionRemoved = $world.PROTECTION >= amount ? amount : $world.PROTECTION
      $world.PROTECTION -= protectionRemoved
    }

    const afterProtection = amount - protectionRemoved
    const candelasRemoved = $world.CANDELAS >= amount - afterProtection ? afterProtection : $world.CANDELAS
    $world.CANDELAS -= candelasRemoved

    if (protectionRemoved) $world.LOG('fight.maSphereAbsorbe', { protectionRemoved, broken: !$world.PROTECTION })
    if ($world.SHIELD) {
      $world.LOG('fight.maSphereTeinte', { foe, color: $world.SHIELD })
      foe.addAura($world.SHIELD)
      if (!$world.PROTECTION) $world.SHIELD = null
    }
    if (candelasRemoved) {
      let severity
      if ($world.CANDELAS <= 0) severity = '6'
      else if ($world.CANDELAS <= 9) severity = '5'
      else if ($world.CANDELAS <= 29) severity = '4'
      else if ($world.CANDELAS <= 54) severity = '3'
      else if ($world.CANDELAS <= 79) severity = '2'
      else severity = '1'
      $world.LOG(`fight.encaisse${severity}`, { candelasRemoved })
    }
    return {
      protectionRemoved,
      candelasRemoved
    }
  }

  foe.receiveDamages = (amount, color) => {
    foe.life = Math.max(foe.life - amount, 0)

    if (foe.life) $world.LOG('fight.XSubitDegats', { foe, amount })
    else $world.LOG('fight.XSubitDegatsEtEstDetruit', { foe, amount })

    if (color) foe.addAura(color)
    if (!foe.life) {
      $world.FIGHT_FOES.splice($world.FIGHT_FOES.indexOf(foe), 1)
    }
    if (!$world.FIGHT_FOES.length) win()
  }
})

onMounted(() => {
  luminio.value.focus()
  $world.SHUFFLE_DECK()
  declareFoeIntentions()
  draw(5)
})
</script>
