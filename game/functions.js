import random from 'just-random-integer'
import randomPick from 'just-random'
import get from 'just-safe-get'
import render from '~carni/render'
import * as french from './utils/french'
import fights from './data/fights'
import trinkets from './data/trinkets'
import texts from './data/texts/fr'
import * as cards from './utils/cards'

export default {
  RANDOM: random,

  // Journal
  LOG (key, data) {
    $world.$STORY.journal.push({
      text: render(get(texts, key), { ...$world, ...french, ...data }),
      type: 'log'
    })
  },

  // Fights
  FIGHT (fightId, options, victorySceneId = 'default_victory', defeatSceneId = 'default_defeat') {
    const { foes } = fights[fightId](options)
    $world.FIGHT_FOES = foes.map(foe => ({
      ...foe,
      life: foe.maxLife,
      intention: null
    }))
    $world.HAND = []
    $world.FIGHT_VICTORY = victorySceneId
    $world.FIGHT_DEFEAT = defeatSceneId
    $world.VIEW('fight')
  },

  ADD_TRINKET (trinket) {
    $world.VIEW('play')
    $world.TRINKET_CHOICE = trinkets[trinket]
  },

  INFLICT_DISCARD (amount) {
    $world.LOG('fight.jeMeDefausse', { amount: Math.min(amount, $world.HAND.length) })
    let amountLeft = amount
    while ($world.HAND.length && amountLeft) {
      $world.DISCARDED.push(...$world.HAND.splice(random(0, $world.HAND.length - 1), 1))
      amountLeft -= 1
    }
    return { amountDiscarded: amount - amountLeft }
  },

  SET_PROTECTION (amount, color) {
    if (!$world.PROTECTION) $world.LOG('fight.uneSphereApparait', { color, amount })
    else if ($world.SHIELD === color) $world.LOG('fight.maSphereSeRenforce', { amount })
    else $world.LOG('fight.maSphereSeRenforceChangementCouleur', { color, amount })

    $world.PROTECTION += amount
    if (typeof color !== 'undefined') $world.SHIELD = color
  },

  EVOLVE_DECK (type) {
    $world.VIEW('play')
    $world.DECK_EVOLUTION = { type, cards: [], selectedCard: null }
    for (let i = 0; i < 3; i++) {
      const eligibleCards = $world.DECK
        .filter(({ id }) => !$world.DECK_EVOLUTION.cards.some(c => c.id === id))
      if (eligibleCards.length) $world.DECK_EVOLUTION.cards.push(randomPick(eligibleCards))
    }
  },

  // Deck
  SHUFFLE_DECK: cards.shuffleDeck,
  ADD_CARD: cards.addCard,
  REMOVE_CARD: cards.removeCard
}
