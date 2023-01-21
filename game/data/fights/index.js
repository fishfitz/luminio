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
  contremaitre
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
  })

}
