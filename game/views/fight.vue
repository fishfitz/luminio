<template>
  <div>
    <div aria-live="off" style="display: inline-block; width: 50%">
      <div tabindex="0" id="luminio">
        Luminio
        <br/>
        Candelas : {{ $world.CANDELAS }} sur {{ $world.MAX_CANDELAS }}
        <template v-if="$world.PROTECTION">
          <br/>
          Protection : {{ $world.PROTECTION }}
          <template v-if="$world.SHIELD"> ({{ aura($world.SHIELD) }}) </template>
        </template>
        <br/>
        Volonté : {{ $world.WILL }} sur 10
      </div>
      <br/><br/><br/>
      <div tabgroup class="foes">
        <action
          v-for="(foe, index) in $world.FIGHT_FOES"
          :key="index"
          @click="selectedCard && playCard(selectedCard, foe)"
          :id="`foe_${index}`">
          {{ foe.name }} <br/>
          Ténèbre : {{ foe.life }} sur {{ foe.maxLife }} <br/>
          Aura :
          <div v-for="(auraPattern, index) in foe.auraPattern">
            <template v-if="foe.aura[index]"> {{ aura(foe.aura[index]) }} Remplie </template>
            <template v-else>
              <template v-if="isPatternCorrect(foe)"> {{ aura(auraPattern) }} </template>
              <template v-else> Vide </template>
            </template>
          </div> <br/>
          Intention : {{ foe.intention?.type }}
          <br/><br/><br/><br/>
        </action>
        <action v-if="selectedCard" @click="selectedCard = null">
          Annuler
        </action>
      </div>

      <div tabgroup class="hand">
        <div v-for="(card, index) in $world.HAND" :key="card.id">
          <action
            :disabled="!!selectedCard"
            @click="selectCard(card)"
            :id="`card_${index}`">
            {{ card.name }}
            <template v-if="card.name.toLowerCase().indexOf(aura(card.color).toLowerCase()) === -1">
              ({{ aura(card.color) }})
            </template>
            Coût : {{ Math.max(cardCost + $world.CARD_COST[card.color], 0) }} candelas
            {{ render(card.description, $world) }}
          </action>
        </div>
      </div>

      <br/><br/><br/>

      <action :disabled="!!selectedCard" @click="resolveTurn" id="skip"> Passer </action>
    </div>

    <div tabgroup tabstartlast role="log" aria-live="assertive" style="display: inline-block; width: 50%">
      <div v-for="(line, index) in $story.journal.filter(l => l.type === 'log').slice(-50)"
        tabindex="0"
        :id="index === $story.journal.filter(l => l.type === 'log').length - 1 ? 'journal' : undefined">
        {{ line.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from 'vue'
import shuffle from 'just-shuffle'
import clone from 'just-clone'
import render from '~carni/render'
import { aura } from '../utils/french'
import { damagePlayer, discardPlayer, addAura, addProtection, uniqueName, isPatternCorrect } from '../utils/fights'

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

let cardCost = $ref(0)
const resolveTurn = () => {
  $world.DISCARDED.push(...$world.HAND)
  $world.HAND.length = 0
  draw(5)

  for (const foe of $world.FIGHT_FOES) {
    if (foe.stunned) {
      foe.stunned = false
      $world.LOG('fight.estEtourditEtNeJouePas', { foe })
    } else if (foe.intention) foe.intention.execute.apply(foe)
  }

  declareFoeIntentions()
  $world.FIGHT_TURN++
  cardCost = 0

  if ($world.PROTECTION) $world.LOG('fight.maSphereDisparait')
  $world.PROTECTION = 0
  $world.SHIELD = null

  nextTick(() => {
    if ($world.HAND.length) $ui.focus('#card_0')
    else $ui.focus('skip')
  })
}

let selectedCard = $ref(null)
const playCard = (card, foe) => {
  card.addProtection = addProtection
  card.draw = draw

  card.execute(foe)

  $world.CANDELAS -= Math.max(cardCost + $world.CARD_COST[card.color], 0);

  ($world[card.destination] || $world.DISCARDED).push(...$world.HAND.splice($world.HAND.indexOf(card), 1))
  selectedCard = null
  cardCost++

  if (card.endTurn) resolveTurn()
  else {
    nextTick(() => {
      if ($world.HAND.length) $ui.focus('#card_0')
      else $ui.focus('skip')
    })
  }
}

const selectCard = (card) => {
  if (!card.targetted) playCard(card)
  else {
    selectedCard = card
    $ui.focus('#foe_0')
  }
}

const win = () => {
  $world.DECK.push(...$world.DISCARDED, ...$world.EXILE, ...$world.HAND)
  $world.DECK = shuffle($world.DECK)

  $world.DISCARDED.length = 0
  $world.EXILE.length = 0
  $world.HAND.length = 0

  if ($world.WILL < 10) $world.WILL += 1

  $world.GOTO($world.FIGHT_VICTORY)
}

const resetFoe = (foe) => {
  foe.intention = null
  foe.life = foe.maxLife
  foe.aura = []
  resetAura(foe)

  foe.addAura = (color) => {
    return addAura(color, foe)
  }

  foe.inflictDiscard = (amount) => {
    return discardPlayer(amount)
  }

  foe.inflictDamages = (amount, ignoreProtection = false) => {
    return damagePlayer(amount, ignoreProtection, foe)
  }

  foe.summon = (minion) => {
    const clonedMinion = clone({
      name: uniqueName(minion),
      ...minion
    })
    resetFoe(clonedMinion)
    $world.FIGHT_FOES.push(clonedMinion)
  }

  foe.receiveDamages = (amount, color) => {
    foe.life = Math.max(foe.life - amount, 0)

    if (foe.life) $world.LOG('fight.XSubitDegats', { foe, amount })
    else $world.LOG('fight.XSubitDegatsEtEstDetruit', { foe, amount })

    if (color) foe.addAura(color)
    if (!foe.life) $world.FIGHT_FOES.splice($world.FIGHT_FOES.indexOf(foe), 1)
    if (!$world.FIGHT_FOES.length) win()
  }
}

$world.FIGHT_FOES.forEach(resetFoe)

onMounted(() => {
  $ui.focus('#luminio')
  $world.SHUFFLE_DECK()
  declareFoeIntentions()
  draw(5)
})
</script>
