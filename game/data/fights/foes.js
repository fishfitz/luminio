import randomPick from 'just-random'
import random from 'just-random-integer'
import { monochromatic, polychromatic, chaos } from './auras'
import {
  griffesDOmbre,
  etouffementDOmbre,
  obscurcissement,
  contactGlacial,
  murmureAction,
  litanieAction,
  lenteur,
  coupDEpee,
  coupDeLanterne,
  danseDesOmbres
} from './actions'

export const ombreFugace = () => {
  return {
    name: 'Ombre fugace',
    gender: 'fem',
    proper: false,
    maxLife: random(10, 15),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: monochromatic(),
    behavior () {
      return randomPick([griffesDOmbre(), griffesDOmbre(), etouffementDOmbre()])
    }
  }
}

export const ombreEpaisse = () => {
  return {
    name: 'Ombre épaisse',
    gender: 'fem',
    proper: false,
    maxLife: random(20, 25),
    power: 5,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: monochromatic(),
    behavior () {
      return randomPick([griffesDOmbre(), griffesDOmbre(), etouffementDOmbre()])
    }
  }
}

export const griffeNuit = () => {
  return {
    name: 'Ombre épaisse',
    gender: 'fem',
    proper: false,
    maxLife: random(50, 60),
    power: 10,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: monochromatic(),
    behavior () {
      return randomPick([griffesDOmbre(), griffesDOmbre(), etouffementDOmbre()])
    }
  }
}

export const murmure = () => {
  return {
    name: 'Murmure',
    gender: 'masc',
    proper: false,
    maxLife: random(15, 20),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: polychromatic(),
    behavior () {
      return randomPick([contactGlacial(), murmureAction()])
    }
  }
}

export const litanie = () => {
  return {
    name: 'Litanie',
    gender: 'fem',
    proper: false,
    maxLife: random(25, 30),
    power: 8,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: polychromatic(),
    behavior () {
      return randomPick([contactGlacial(), litanieAction()])
    }
  }
}

export const armureHantee = () => {
  return {
    name: 'Armure hantée',
    gender: 'fem',
    proper: false,
    maxLife: 60,
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: chaos(),
    behavior () {
      return $world.FIGHT_TURN % 2 ? lenteur() : coupDEpee()
    }
  }
}

export const faiseurDOmbres = () => {
  return {
    name: 'Faiseur d\'ombres',
    gender: 'masc',
    proper: false,
    maxLife: random(25, 30),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: polychromatic(),
    behavior () {
      return $world.FIGHT_FOES.length === 5 ? coupDeLanterne() : danseDesOmbres()
    }
  }
}
