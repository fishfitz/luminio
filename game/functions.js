import random from 'just-random-integer'
import randomPick from 'just-random'
import get from 'just-safe-get'
import render from '~carni/render'
import * as french from './utils/french'
import texts from './data/texts/fr'
import * as cards from './utils/cards'
import * as scenes from './utils/scenes'
import * as common from './utils/common'
import { nanoid } from 'nanoid'

export default {
  // Common
  RANDOM: random,
  RANDOM_PICK: randomPick,
  ALTER: common.alter,
  ON: common.on,

  // Journal
  LOG (key, data = {}, nextSceneId, nextLineIndex = 0) {
    if (nextSceneId) {
      $story.speak(
        render(get(texts, key), { ...$world, ...data }),
        typeof nextSceneId === 'string' ? nextSceneId : null,
        typeof nextSceneId === 'string' ? nextLineIndex : null
      )
    } else {
      $story.journal.push({
        id: nanoid(),
        text: render(get(texts, key), { ...$world, ...data }),
        type: 'log',
        turn: $world.FIGHT_TURN || undefined
      })
    }
    console.info('Journal:', $story.journal.at(-1).text)
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
  ADD_WHITE_CARD: cards.addWhiteCard,
  REMOVE_CARD: cards.removeCard,

  ...french
}
