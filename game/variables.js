import { createLevels } from './utils/levels'
import { createBaseDeck } from './utils/cards'

export default {
  // Levels
  LEVELS: createLevels(),
  CURRENT_LEVEL: 0,

  // Player
  CANDELAS: 100,
  MAX_CANDELAS: 100,
  SHIELD: null,
  PROTECTION: 0,
  WILL: 10,
  DECK: createBaseDeck(),

  // Fight
  FIGHT_FOES: [],
  FIGHT_TURN: 1,
  FIGHT_VICTORY: null,
  FIGHT_DEFEAT: null,
  HAND: [],
  DISCARDED: []
}
