import createLevels from './utils/levels/create'
import { createBaseDeck } from './utils/cards'
import * as foes from './data/fights/foes'

export default {
  // Levels
  LEVELS: createLevels(),
  CURRENT_LEVEL: 3,
  TIME_CANDELA_GAIN: 0,
  MAX_TIME: 12,
  PICKED_NIGHTMARES: [],
  FORCE_CHOICE: false,

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
  FIGHT_TURN: 0,
  FIGHT_TURN_START: null,
  FIGHT_VICTORY: null,
  FIGHT_DEFEAT: null,
  FIGHT_LOCK: false,
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
  EFFECTS: {
    TOUPIE: 0,
    GRIMOIRE_COUNT: 0,
    CRACHE_FEU_DIVIN: 0,
    BOMBE_DE_LUMIERE: false
  },

  // Mysteries
  BIBLIOTHEQUE_COUNT: 0,
  DEBARRAT_RESULTS: ['leDebarratPoussiereuxFiole', 'leDebarratPoussiereuxTresor', 'leDebarratPoussiereuxSouvenir'],
  PILES_COUNT: 0,
  PEUR: ['Doute', 'Peur', 'Peur diffuse', 'Peur intense'],
  JETONS: 0,

  // Nightmares
  NIGHTMARES: {
    LA_FORET: {
      GAUGE: 0,
      ANEANTIR_COST: 1
    },
    LA_FOULE: {
      GAUGE: 0,
      TURN_START ({ summon }) {
        const gauge = $world.NIGHTMARES.LA_FOULE.GAUGE

        let foe
        if (gauge >= 9) foe = 'lafoule$geant4'
        else if (gauge >= 6) foe = 'lafoule$geant3'
        else if (gauge >= 3) foe = 'lafoule$geant2'
        else foe = 'lafoule$geant1'
        $world.LOG(`nightmares.${foe}`)
        summon(foes[foe]())

        if ($world.HAND.every(card => card.name !== 'Alexandre')) $world.ADD_CARD('alexandre', $world.HAND)
      },
      ACTION_AFTER () {
        const gauge = $world.NIGHTMARES.LA_FOULE.GAUGE
        if (gauge >= 12) {
          $world.FIGHT_LOCK = false
          $world.FIGHT_FOES.forEach(foe => foe?.receiveDamages(10000))
        } else $world.FIGHT_LOCK = true
      }
    },
    LE_BOMBARDIER: {
      TURN_START ({ lose }) {
        if ($world.HAND.length && $world.HAND.every(c => ['Ordre de tuer', 'Ordre patriotique', 'Ordre humiliant'].includes(c.name))) lose()
      }
    },
    LA_VOITURE: {
      PORTIERE_ARRACHEE: false,
      TURN_START ({ lose }) {
        if ([...$world.DISCARDED, ...$world.DECK, ...$world.HAND].filter(c => c.name === 'Eau').length >= 12) lose()
      },
      ACTION_AFTER ({ lose }) {
        if (!$world.FIGHT_FOES.length && !$world.NIGHTMARES.LA_VOITURE.PORTIERE_ARRACHEE) lose()
      }
    },
    ORGANISTE: {
      TURN_START ({ lose }) {
        if ($world.HAND.filter(c => c.name === 'Souvenir exacerbé').length >= 3) lose()
      }
    }
  },

  // Challenge
  CHALLENGE_BONUS: 0,

  // Trinkets
  TRINKET_CHOICE: null,
  TRINKETS: [],

  // Debug mode
  DEBUG_MODE: true
}
