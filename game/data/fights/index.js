import {
  ombreFugace,
  murmure,
  armureHantee,
  ombreEpaisse,
  litanie,
  faiseurDOmbres
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
  })
}
