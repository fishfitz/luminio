import random from 'just-random-integer'
import randomPick from 'just-random'

import {
  ombreFugace,
  murmure,
  armureHantee,
  ombreEpaisse,
  litanie,
  faiseurDOmbres,
  agent,
  robotBombe,
  robotSentinelle,
  contremaitre,
  sinistreIndividu,
  pantin,
  cannibale,
  refletMalefique,
  leBombardier$laRadio,
  laVoiture$monstruositeHumide,
  organiste
} from './foes'

export default {

  // Chateau combats mineurs
  duoDOmbresFugaces: () => ({
    foes: [
      { ...ombreFugace(), name: 'Première ombre fugace' },
      { ...ombreFugace(), name: 'Seconde ombre fugace' }
    ]
  }),
  murmure: () => ({
    foes: [
      murmure()
    ]
  }),
  armureHantee: () => ({
    foes: [
      armureHantee()
    ]
  }),
  armureHantee2: () => ({
    foes: [
      { ...armureHantee(), name: 'Première armure hantée' },
      { ...armureHantee(), name: 'Deuxième armure hantée' }
    ]
  }),
  armureHantee3: () => ({
    foes: [
      { ...armureHantee(), name: 'Première armure hantée' },
      { ...armureHantee(), name: 'Deuxième armure hantée' },
      { ...armureHantee(), name: 'Troisième armure hantée' }
    ]
  }),
  armureHantee4: () => ({
    foes: [
      { ...armureHantee(), name: 'Première armure hantée' },
      { ...armureHantee(), name: 'Deuxième armure hantée' },
      { ...armureHantee(), name: 'Troisième armure hantée' },
      { ...armureHantee(), name: 'Quatrième armure hantée' }
    ]
  }),
  armureEtFantome: () => ({
    foes: [
      murmure(),
      armureHantee()
    ]
  }),

  // Chateau combats intermédiaires
  ombreEpaisse: () => ({
    foes: [
      ombreEpaisse()
    ]
  }),
  litanie: () => ({
    foes: [
      litanie()
    ]
  }),
  embuscade: () => ({
    foes: [
      { ...ombreFugace(), name: 'Première ombre fugace' },
      { ...ombreFugace(), name: 'Seconde ombre fugace' },
      murmure()
    ]
  }),

  // Chateau combats majeurs
  laGalerieAuxArmures: () => ({
    foes: [
      { ...armureHantee(), name: 'Première armure hantée', maxLife: 100, power: 5 },
      { ...armureHantee(), name: 'Deuxième armure hantée', maxLife: 100, power: 5 },
      { ...armureHantee(), name: 'Troisième armure hantée', maxLife: 100, power: 5 },
      { ...armureHantee(), name: 'Quatrième armure hantée', maxLife: 100, power: 5 }
    ]
  }),
  leFaiseurDOmbres: () => ({
    foes: [
      faiseurDOmbres(),
      { ...ombreFugace(), name: 'Première ombre fugace' },
      { ...ombreFugace(), name: 'Seconde ombre fugace' }
    ]
  }),
  leGriffeNuit: () => ({
    foes: [
      { ...ombreEpaisse(), name: 'Première ombre épaisse' },
      { ...ombreEpaisse(), name: 'Griffe nuit', maxLife: random(50, 60), power: 10 },
      { ...ombreEpaisse(), name: 'Deuxième ombre épaisse' }
    ]
  }),
  lesHurleuses: () => ({
    foes: [
      { ...litanie(), name: 'Première hurleuse' },
      { ...litanie(), name: 'Deuxième hurleuse' },
      { ...litanie(), name: 'Troisième hurleuse' }
    ]
  }),

  // Chateau cauchemars
  laFoule: () => ({
    foes: []
  }),

  // Usine combats mineurs
  agent: () => ({
    foes: [
      agent()
    ]
  }),
  doubleAgents: () => ({
    foes: [
      { ...agent(), name: 'Premier agent' },
      { ...agent(), name: 'Second agent' }
    ]
  }),
  robot: () => ({
    foes: [
      randomPick([robotBombe, robotSentinelle])()
    ]
  }),
  contremaitre: () => ({
    foes: [
      contremaitre()
    ]
  }),

  // Usine combats intermédiaires
  salleDeProduction: () => ({
    foes: [
      contremaitre(),
      { ...agent(), name: 'Premier agent' },
      { ...agent(), name: 'Second agent' }
    ]
  }),
  patrouille: () => ({
    foes: [
      { ...agent(), maxLife: 60, power: 5, name: 'Agent de sécurité d\'élite' },
      agent()
    ]
  }),
  patrouilleRobotique: () => ({
    foes: [
      { ...robotSentinelle(), name: 'Premier robot sentinelle' },
      robotBombe(),
      { ...robotSentinelle(), name: 'Deuxième robot sentinelle' }
    ]
  }),
  lesPrisonniers: () => ({
    foes: [
      contremaitre(),
      { ...agent(), name: 'Premier agent' },
      { ...agent(), name: 'Second agent' },
      { ...agent(), name: 'Troisième agent' }
    ]
  }),
  gardeCorruptible: () => ({
    foes: [
      { ...robotSentinelle(), name: 'Premier robot sentinelle' },
      { ...agent(), maxLife: 60, power: 5, name: 'Agent de sécurité d\'élite' },
      { ...robotSentinelle(), name: 'Deuxième robot sentinelle' }
    ]
  }),

  // Usine combats majeurs
  salleDuGenerateur: () => ({
    foes: [
      { ...robotBombe(), maxLife: 100, power: 5, name: 'Premier robot bombe amélioré' },
      { ...robotBombe(), maxLife: 100, power: 5, name: 'Second robot bombe amélioré' },
      { ...robotBombe(), maxLife: 100, power: 5, name: 'Troisième robot bombe amélioré' },
      { ...robotBombe(), maxLife: 100, power: 5, name: 'Quatrième robot bombe amélioré' }
    ]
  }),
  troupeDeChoc: () => ({
    foes: [
      { ...contremaitre(), maxLife: 120, power: 5, name: 'Contremaître amélioré' },
      { ...agent(), maxLife: 60, power: 5, name: 'Premier agent de sécurité d\'élite' },
      { ...agent(), maxLife: 60, power: 5, name: 'Second agent de sécurité d\'élite' },
      robotBombe(),
      robotSentinelle()
    ]
  }),
  leGrandFabricateur1: () => ({
    foes: [
      { ...robotSentinelle(), name: 'Premier robot sentinelle' },
      robotBombe(),
      { ...robotSentinelle(), name: 'Deuxième robot sentinelle' }
    ]
  }),
  leGrandFabricateur2: () => ({
    foes: [
      { ...robotSentinelle(), maxLife: random(60, 80), power: 5, name: 'Premier robot sentinelle lourd' },
      { ...robotBombe(), maxLife: 100, power: 5, name: 'Robot bombe amélioré' },
      { ...robotSentinelle(), maxLife: random(60, 80), power: 5, name: 'Deuxième robot sentinelle lourd' }
    ]
  }),
  leDRI: () => ({
    foes: [
      { ...agent(), maxLife: 60, power: 5, name: 'Premier agent de sécurité d\'élite' },
      { ...agent(), maxLife: 60, power: 5, name: 'Deuxième agent de sécurité d\'élite' },
      { ...contremaitre(), maxLife: 120, power: 10, name: 'Le DRI' },
      { ...agent(), maxLife: 60, power: 5, name: 'Troisième agent de sécurité d\'élite' }
    ]
  }),

  // Usine cauchemars
  laVoiture: () => ({
    foes: [
      { ...laVoiture$monstruositeHumide(), name: 'Monstruosité humide' }
    ]
  }),

  // Hotel combats mineurs
  individuSinistre: () => ({
    foes: [
      sinistreIndividu()
    ]
  }),
  desIndividuSinistres: () => ({
    foes: [
      { ...sinistreIndividu(), name: 'Premier individu sinistre' },
      { ...sinistreIndividu(), name: 'Second individu sinistre' }
    ]
  }),
  pantinEtIndividuSinistre: () => ({
    foes: [
      sinistreIndividu(),
      pantin()
    ]
  }),
  cannibale: () => ({
    foes: [
      cannibale()
    ]
  }),

  // Hotel combats intermédiaires
  refletMalefique: () => ({
    foes: [
      refletMalefique()
    ]
  }),
  fouleHostile: () => ({
    foes: [
      { ...sinistreIndividu(), name: 'Premier individu sinistre' },
      { ...sinistreIndividu(), name: 'Second individu sinistre' },
      { ...sinistreIndividu(), name: 'Troisième individu sinistre' },
      { ...sinistreIndividu(), name: 'Quatrième individu sinistre' },
      { ...sinistreIndividu(), name: 'Cinquième individu sinistre' }
    ]
  }),
  leTheatre: () => ({
    foes: [
      { ...pantin(), name: 'Premier pantin' },
      { ...pantin(), name: 'Second pantin' },
      { ...pantin(), name: 'Troisième pantin' }
    ]
  }),

  // Hotel combats majeurs
  laSouris: () => ({
    foes: [
      { ...cannibale(), name: 'Premier cannibale' },
      { ...cannibale(), name: 'Second cannibale' },
      { ...cannibale(), name: 'Troisième cannibale' }
    ]
  }),
  galerieDesMiroirs: () => ({
    foes: [
      { ...refletMalefique(), name: 'Premier reflet maléfique' },
      { ...refletMalefique(), name: 'Second reflet maléfique' },
      { ...refletMalefique(), name: 'Troisième reflet maléfique' }
    ]
  }),

  // Hotel cauchemars
  leBombardier: () => ({
    foes: [
      { ...leBombardier$laRadio(), name: 'Radio' }
    ]
  }),

  // Acte 4

  organiste: () => ({
    foes: [
      organiste()
    ]
  })
}
