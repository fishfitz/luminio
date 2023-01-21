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
  danseDesOmbres,
  mitrailleuse1,
  mitrailleuse2,
  rechargement,
  boom2,
  boom1,
  boom0,
  coupDeMatraque,
  appelDeRenfort,
  coupDeFouet,
  motivationDEquipe
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

export const robotSentinelle = () => {
  return {
    name: 'Robot sentinelle',
    gender: 'masc',
    proper: false,
    maxLife: random(30, 50),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: chaos(),
    chargeCount: 2,
    behavior () {
      if (this.chargeCount === 2) return mitrailleuse1()
      if (this.chargeCount === 1) return mitrailleuse2()
      return rechargement()
    }
  }
}

export const robotBombe = () => {
  return {
    name: 'Robot bombe',
    gender: 'masc',
    proper: false,
    maxLife: random(50, 80),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: chaos(),
    boomCount: 0,
    behavior () {
      if (this.boomCount === 0) return boom2()
      if (this.boomCount === 1) return boom1()
      return boom0()
    }
  }
}

export const agent = () => {
  return {
    name: 'Agent de sécurité',
    gender: 'masc',
    proper: false,
    maxLife: random(30, 50),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: polychromatic(),
    behavior () {
      if (this.life === this.maxLife || $world.FIGHT_FOES.length === 5) return coupDeMatraque()
      else return appelDeRenfort()
    }
  }
}

export const contremaitre = () => {
  return {
    name: 'Contremaître',
    gender: 'masc',
    proper: false,
    maxLife: random(80, 100),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: monochromatic(),
    behavior () {
      if ($world.FIGHT_FOES.length === 1) return coupDeFouet()
      else return motivationDEquipe()
    }
  }
}
