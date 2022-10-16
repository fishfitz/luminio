import random from 'just-random-integer'
import randomPick from 'just-random'
import get from 'just-safe-get'
import render from '~carni/render'
import * as french from './utils/french'
import texts from './data/texts/fr'
import * as cards from './utils/cards'
import * as scenes from './utils/scenes'

export default {
  RANDOM: random,
  RANDOM_PICK: randomPick,

  // Journal
  LOG (key, data, nextSceneId, nextLineIndex = 0) {
    if (nextSceneId) {
      $world.$STORY.speak(
        render(get(texts, key), { ...$world, ...french, ...data }),
        typeof nextSceneId === 'string' ? nextSceneId : null,
        nextLineIndex
      )
    } else {
      $world.$STORY.journal.push({
        text: render(get(texts, key), { ...$world, ...french, ...data }),
        type: 'log'
      })
    }
  },

  // Scenes
  FIGHT: scenes.fight,
  ADD_TRINKET: scenes.addTrinket,
  TEST: scenes.test,
  PROGRESSIVE_TEST: scenes.progressiveTest,
  DAMAGE_PLAYER: scenes.damagePlayer,

  // Deck
  EVOLVE_DECK: cards.evolveDeck,
  SHUFFLE_DECK: cards.shuffleDeck,
  ADD_CARD: cards.addCard,
  REMOVE_CARD: cards.removeCard
}
