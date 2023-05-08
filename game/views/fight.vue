<template>
  <div>
    <div role="presentation" aria-live="off">
      <state
        :items="['settings', 'luminio', 'trinkets', 'journal', 'deck']"
        :luminio-items="['candelas', 'protection', 'will']"
      />

      <foes
        :selected-card="selectedCard"
        @select-foe="selectFoe"/>

      <hand
        :selected-card="selectedCard"
        :card-cost="cardCost"
        @select-card="selectCard"
      />

      <div class="sr" v-tab>
        Terminer le tour Touche d'accès : F
      </div>

      <div
        class="action-button"
        :tabgroup="$world.GROUP === 'hand'"
      >
        <action v-if="isWin" v-tab @click="afterWin" id="continue">
          Continuer
        </action>
        <action v-else-if="isLoss" v-tab @click="afterLose" id="continue">
          Continuer
        </action>
        <action v-else v-tab :disabled="!!selectedCard" @click="resolveTurn" id="continue">
          Passer
        </action>
      </div>
    </div>
  </div>
</template>

<script setup>
import state from '../components/state/index.vue'
import foes from '../components/fight/foes/index.vue'
import hand from '../components/fight/hand/index.vue'

import { nextTick } from 'vue'
import shuffle from 'just-shuffle'
import clone from 'just-clone'
import { damagePlayer, discardPlayer, addAura, addProtection, uniqueName } from '../utils/fights'

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

const summon = (minion) => {
  const clonedMinion = {
    name: uniqueName(minion),
    ...minion
  }
  $world.FIGHT_FOES = [...$world.FIGHT_FOES, clonedMinion]
  resetFoe(clonedMinion)
}

let isWin = $ref(false)
let isLoss = $ref(false)
let cardCost = $ref(0)

const lose = () => {
  isLoss = true
  nextTick(() => {
    $ui.focus('#continue')
  })
}

const resolveTurn = () => {
  $world.EFFECTS.GRIMOIRE_COUNT = 0

  $world.DISCARDED.push(...$world.HAND.filter(c => !c.sticky))
  $world.HAND = $world.HAND.filter(c => c.sticky)
  draw($world.ALTER('startOfTurnDrawAmount', 5 - $world.HAND.length))

  $world.FIGHT_TURN_START?.({ summon, lose })

  if (!isWin && !isLoss) {
    for (const foe of $world.FIGHT_FOES) {
      if (foe.stunned) {
        foe.stunned = false
        $world.LOG('fight.estEtourditEtNeJouePas', { foe })
      } else if (foe.intention) foe.intention.execute.apply(foe)
    }

    if ($world.EFFECTS.BOMBE_DE_LUMIERE) {
      $world.EFFECTS.BOMBE_DE_LUMIERE = false
      $world.FIGHT_FOES.forEach(foe => {
        $world.LOG('cards.bombeDeLumiere2')
        foe.receiveDamages($world.PROTECTION, 'white')
      })
    }

    if (!isWin && !isLoss) {
      $world.FIGHT_TURN++
      declareFoeIntentions()
      cardCost = 0

      const hadProtection = !!$world.PROTECTION
      $world.PROTECTION -= $world.ALTER('startOfTurnProtectionLoss', $world.PROTECTION)
      if (!$world.PROTECTION) $world.SHIELD = null
      if ($world.PROTECTION) $world.LOG('fight.jeConserveMaProtection', { amount: $world.PROTECTION })
      else if (hadProtection) $world.LOG('fight.maSphereDisparait')

      if ($world.EFFECTS.TOUPIE) {
        addProtection($world.EFFECTS.TOUPIE, 'blue')
        $world.EFFECTS.TOUPIE = 0
      }

      nextTick(() => {
        if ($world.HAND.length) $world.focusGroup('hand')
        else $ui.focus('#continue')
      })
    }
  }
}

let selectedCard = $ref(null)
const playCard = (card, foe) => {
  card.addProtection = addProtection
  card.draw = draw

  card.execute(foe)

  $world.FIGHT_ACTION_AFTER?.({ summon, lose })
  $world.CANDELAS -= Math.max($world.ALTER('cardCost', card.cost ? card.cost(cardCost) : cardCost, card), 0)

  selectedCard = null

  if (!isWin && !isLoss) {
    ($world[card.destination] || $world.DISCARDED).push(...$world.HAND.splice($world.HAND.indexOf(card), 1))
    cardCost++

    if (card.endTurn) resolveTurn()
    else {
      nextTick(() => {
        if ($world.HAND.length) $world.focusGroup('hand')
        else $ui.focus('#continue')
      })
    }
  }
}

const selectFoe = (foe) => {
  if (foe && selectedCard) playCard(selectedCard, foe)
  else if (selectedCard) {
    selectedCard = null
    $world.focusGroup('hand')
  }
}

const selectCard = (card) => {
  if (!card.targetted) playCard(card)
  else {
    selectedCard = card
    $world.focusGroup('foes')
  }
}

const win = () => {
  if ($world.FIGHT_LOCK) return

  isWin = true
  nextTick(() => {
    $ui.focus('#continue')
  })
}

const afterWin = () => {
  $world.DECK.push(...$world.DISCARDED, ...$world.EXILE, ...$world.HAND)
  $world.DECK = shuffle($world.DECK.filter(c => !c.temporary))

  $world.DISCARDED.length = 0
  $world.EXILE.length = 0
  $world.HAND.length = 0

  if ($world.WILL < 10) $world.WILL += 1
  $world.FIGHT_TURN = 0

  $world.GOTO($world.FIGHT_VICTORY)
  $world.VIEW('play')
}

const afterLose = () => {
  $world.FIGHT_TURN = 0
  $world.VIEW('play')
  $world.GOTO($world.FIGHT_DEFEAT)
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
    const result = damagePlayer(amount, ignoreProtection, foe)
    if (result.dead) lose()

    return result
  }

  foe.summon = summon

  foe.receiveDamages = (amount, color) => {
    foe.life = Math.max(foe.life - amount, 0)

    if (foe.life) $world.LOG('fight.XSubitDegats', { foe, amount })

    if (color) foe.addAura(color)
    if (foe.life <= 0) {
      $world.LOG('fight.XSubitDegatsEtEstDetruit', { foe, amount })
      $world.ON('foeDeath', foe)
      $world.FIGHT_FOES.splice($world.FIGHT_FOES.indexOf(foe), 1)
    }
    if (!$world.FIGHT_FOES.length) win()
  }
}

$world.FIGHT_FOES.forEach(resetFoe)

onMounted(() => {
  $world.EFFECTS.BOMBE_DE_LUMIERE = false
  $world.EFFECTS.CRACHE_FEU_DIVIN = 0
  $world.EFFECTS.TOUPIE = 0

  $world.HAND = []

  $world.FIGHT_TURN_START?.({ summon, lose })
  $world.FIGHT_TURN = 1
  $world.SHUFFLE_DECK()
  declareFoeIntentions()

  $world.focusGroup('foes')

  const startOnHand = $world.DECK.filter(c => c.startOnHand)
  if (startOnHand.length) {
    $world.HAND.push(...startOnHand)
    $world.DECK = $world.DECK.filter(c => !c.startOnHand)
  }
  draw($world.ALTER('startOfTurnDrawAmount', 5 - $world.HAND.length))
})
</script>

<style lang="scss" scoped>
  .action-button {
    background-color: white;
    position: absolute;
    right: 100px;
    bottom: 100px;
    padding: 20px;
    border-radius: 30px;
  }
</style>
