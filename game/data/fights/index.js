import { ombre } from './foes'

export default {
  monster1: (intensity = 1) => ({
    foes: [
      ombre({ name: 'Première ombre', intensity }),
      ombre({ name: 'Seconde ombre', intensity }),
      ombre({ name: 'Troisième ombre', intensity })
    ]
  })
}
