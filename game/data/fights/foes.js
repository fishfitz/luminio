import randomPick from 'just-random'
import random from 'just-random-integer'
import { monochromatic, polychromatic, chaos, organist } from './auras'
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
  motivationDEquipe,
  regardFixe,
  coupDePoignard,
  frappeDesarticulee,
  horribleContorsion,
  morsure,
  flammeNoire,
  bouclierNoir,
  balayage,
  presenceImposante,
  coupDePoing,
  rugissement,
  bousculade,
  pietinement,
  pincette,
  furie,
  radioVolume,
  radioOrdre,
  radioFumee,
  giffle,
  masseHumide,
  eclairNoir,
  laFoule,
  yeuxLumineux,
  laVoiture,
  leBombardier,
  explosionEmeraude,
  leMiroir,
  enzo
} from './actions'

// Acte 1

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

// Acte 2

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

// Acte 3

export const sinistreIndividu = () => {
  return {
    name: 'Sinistre individu',
    gender: 'masc',
    proper: false,
    maxLife: random(90, 110),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: monochromatic(),
    behavior () {
      return randomPick([regardFixe(), regardFixe(), coupDePoignard()])
    }
  }
}

export const pantin = () => {
  return {
    name: 'Pantin',
    gender: 'masc',
    proper: false,
    maxLife: random(90, 110),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: monochromatic(),
    behavior () {
      if (this.life !== this.maxLife) return [frappeDesarticulee(), horribleContorsion()]
      return frappeDesarticulee()
    }
  }
}

export const cannibale = () => {
  return {
    name: 'Pantin',
    gender: 'masc',
    proper: false,
    maxLife: random(80, 100),
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: chaos(),
    behavior () {
      return morsure()
    }
  }
}

export const refletMalefique = () => {
  return {
    name: 'Reflet maléfique',
    gender: 'masc',
    proper: false,
    maxLife: 220 - $world.CANDELAS * 2,
    power: 20 - $world.WILL * 2,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: polychromatic(),
    behavior () {
      return $world.FIGHT_TURN % 2 ? flammeNoire() : bouclierNoir()
    }
  }
}

export const lafoule$geant1 = () => {
  return {
    name: 'Géant',
    gender: 'masc',
    proper: false,
    maxLife: 120,
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: chaos(),
    behavior () {
      return randomPick([balayage(), presenceImposante()])
    }
  }
}

export const lafoule$geant2 = () => {
  return {
    name: 'Géant instable',
    gender: 'masc',
    proper: false,
    maxLife: 100,
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: chaos(),
    behavior () {
      return randomPick([coupDePoing(), rugissement()])
    }
  }
}

export const lafoule$geant3 = () => {
  return {
    name: 'Humanoïde',
    gender: 'masc',
    proper: false,
    maxLife: 80,
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: chaos(),
    behavior () {
      return randomPick([bousculade(), pietinement()])
    }
  }
}

export const lafoule$geant4 = () => {
  return {
    name: 'Humanoïde amoindri',
    gender: 'masc',
    proper: false,
    maxLife: 60,
    power: 0,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: chaos(),
    behavior () {
      return randomPick([pincette(), furie()])
    }
  }
}

export const leBombardier$laRadio = () => {
  return {
    name: 'Radio',
    gender: 'fem',
    proper: false,
    maxLife: 150,
    power: 0,
    auraSlots: 9,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: polychromatic(),
    behavior () {
      const cycle = $world.FIGHT_TURN % 3
      if (cycle === 0) return radioVolume()
      if (cycle === 1) return radioOrdre()
      radioFumee()
    }
  }
}

export const laVoiture$monstruositeHumide = () => {
  return {
    name: 'Monstruosité humide',
    gender: 'fem',
    proper: false,
    maxLife: 500,
    power: 0,
    auraSlots: 9,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: chaos(),
    behavior () {
      return randomPick([giffle(), masseHumide()])
    }
  }
}

export const organiste = () => {
  return {
    name: 'L\'Organiste',
    gender: 'masc',
    proper: true,
    maxLife: 2500,
    power: 0,
    auraSlots: 9,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: organist(),
    behavior () {
      const getNightmare = (index) => $world.LEVELS[index].map.flatMap(c => c).find(c => c.type === 'nightmare').sceneId

      const cycle = $world.FIGHT_TURN % 7
      if (cycle === 1) return eclairNoir()
      if (cycle === 2) {
        const nightmare = getNightmare(0)
        if (nightmare === 'laFoule') laFoule()
        return eclairNoir() // Placeholder for second & third nightmare
      }
      if (cycle === 3) return yeuxLumineux()
      if (cycle === 4) {
        const nightmare = getNightmare(1)
        if (nightmare === 'laVoiture') laVoiture()
        if (nightmare === 'leBombardier') leBombardier()
        return eclairNoir() // Placeholder for third nightmare
      }
      if (cycle === 5) return explosionEmeraude()
      if (cycle === 6) {
        const nightmare = getNightmare(2)
        if (nightmare === 'leMiroir') leMiroir()
        return eclairNoir() // Placeholder for second & third nightmare
      }
      if (cycle === 0) return enzo()
    }
  }
}
