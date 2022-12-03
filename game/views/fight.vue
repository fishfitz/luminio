<template>
  <div>
    <div role="presentation" aria-live="off" style="display: inline-block; width: 50%">
      <action tabgroup id="luminio">
        Luminio
        <br/>
        <action> Candelas : {{ $world.CANDELAS }} sur {{ $world.MAX_CANDELAS }} </action>
        <action v-if="$world.PROTECTION">
          <br/>
          Protection : {{ $world.PROTECTION }}
          <template v-if="$world.SHIELD"> ({{ aura($world.SHIELD) }}) </template>
        </action>
        <br/>
        <action> Volonté : {{ $world.WILL }} sur 10 </action>
      </action>
      <br/><br/><br/>
      <div tabgroup class="foes">
        <action
          v-for="(foe, index) in $world.FIGHT_FOES"
            :key="index"
          @click="selectedCard && playCard(selectedCard, foe)"
          :id="`foe_${index}`">
          {{ foe.name }}
          <br/>
          <action> Ténèbre : {{ foe.life }} sur {{ foe.maxLife }} </action> <br/>
          <action>
            Aura :
            <span v-for="(auraPattern, index) in foe.auraPattern" :key="index">
              <template v-if="foe.aura[index]"> {{ aura(foe.aura[index]) }} Remplie </template>
              <template v-else>
                <template v-if="isPatternCorrect(foe)"> {{ aura(auraPattern) }} </template>
                <template v-else> Vide </template>
              </template>
            </span>
            <br/>
          </action>
          <action> Intention : {{ intention(foe.intention?.type) }} </action>
          <br/><br/><br/><br/>
        </action>
        <action v-if="selectedCard" @click="selectedCard = null">
          Annuler
        </action>
      </div>

      <div tabgroup class="hand">
        <template v-if="$world.HAND.length">
          <div v-for="(card, index) in $world.HAND" :key="card.id">
            <action
              :disabled="!!selectedCard"
              @click="selectCard(card)"
              :id="`card_${index}`">
              {{ card.name }}
              <template v-if="card.name.toLowerCase().indexOf(aura(card.color).toLowerCase()) === -1">
                ({{ aura(card.color) }})
              </template>
              Coût : {{ Math.max($world.ALTER('cardCost', cardCost, card), 0) }} candelas
              {{ render(card.description, $world) }}
            </action>
          </div>
        </template>
        <template v-else>
          <action :disabled="!!selectedCard" id="card_0"> Aucune carte en main </action>
        </template>
      </div>

      <br/><br/><br/>

      <action :disabled="!!selectedCard" @click="resolveTurn" id="skip"> Passer </action>
    </div>

    <div aria-live="assertive" aria-relevant="additions" tabgroup tabstartlast
      style="display: inline-block; width: 50%">
      <action v-for="(line, index) in logs"
        :key="line.id"
        :id="index === logs.length - 1 ? 'journal' : undefined"
        :style="{ display: logs.length - index < 10 ? 'block' : 'none' }">
        {{ line.text }}
      </action>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from 'vue'
import shuffle from 'just-shuffle'
import clone from 'just-clone'
import render from '~carni/render'
import { aura, intention } from '../utils/french'
import { damagePlayer, discardPlayer, addAura, addProtection, uniqueName, isPatternCorrect } from '../utils/fights'
import { findLast } from '../utils/common'

const logs = $computed(() => $story.journal
  .slice(findLast($story.journal, l => l.type !== 'log') + 1))

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
  draw($world.ALTER('startOfTurnDrawAmount', 5))

  for (const foe of $world.FIGHT_FOES) {
    if (foe.stunned) {
      foe.stunned = false
      $world.LOG('fight.estEtourditEtNeJouePas', { foe })
    } else if (foe.intention) foe.intention.execute.apply(foe)
  }

  $world.FIGHT_TURN++
  declareFoeIntentions()
  cardCost = 0

  const hadProtection = !!$world.PROTECTION
  $world.PROTECTION -= $world.ALTER('startOfTurnProtectionLoss', $world.PROTECTION)
  if (!$world.PROTECTION) $world.SHIELD = null
  if ($world.PROTECTION) $world.LOG('fight.jeConserveMaProtection', { amount: $world.PROTECTION })
  else if (hadProtection) $world.LOG('fight.maSphereDisparait')

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

  $world.CANDELAS -= Math.max($world.ALTER('cardCost', card.cost ? card.cost(cardCost) : cardCost, card), 0);

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
  $world.FIGHT_TURN = 0

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

    if (color) foe.addAura(color)
    if (!foe.life) {
      $world.LOG('fight.XSubitDegatsEtEstDetruit', { foe, amount })
      $world.ON('foeDeath', foe)
      $world.FIGHT_FOES.splice($world.FIGHT_FOES.indexOf(foe), 1)
    }
    if (!$world.FIGHT_FOES.length) win()
  }
}

$world.FIGHT_FOES.forEach(resetFoe)

onMounted(() => {
  $ui.focus('#luminio')
  $world.FIGHT_TURN = 1
  $world.SHUFFLE_DECK()
  declareFoeIntentions()
  draw($world.ALTER('startOfTurnDrawAmount', 5))
})
</script>
