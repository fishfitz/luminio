import createLevels from './utils/levels/create'
import { createBaseDeck } from './utils/cards'

export default {
  // Levels
  LEVELS: createLevels(),
  CURRENT_LEVEL: 0,
  TIME_CANDELA_GAIN: 0,
  MAX_TIME: 12,

  // Player
  CANDELAS: 100,
  MAX_CANDELAS: 100,
  SHIELD: null,
  PROTECTION: 0,
  WILL: 10,
  DECK: createBaseDeck(),
  DECK_EVOLUTION: null,
  DECK_EVOLUTION_AMOUNT: 3,

  // Fight
  FIGHT_FOES: [],
  FIGHT_TURN: 1,
  FIGHT_VICTORY: null,
  FIGHT_DEFEAT: null,
  HAND: [],
  DISCARDED: [],
  EXILE: [],
  VOID: [],
  CARD_COST: {
    black: 0,
    white: 0,
    yellow: 0,
    purple: 0,
    blue: 0
  },

  // Challenge
  CHALLENGE_BONUS: 0,

  // Trinkets
  TRINKET_CHOICE: null,
  TRINKETS: []
}
