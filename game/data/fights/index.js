import { ombre } from './foes'

export default {
  monster1: (intensity = 1) => ({
    foes: [
      ombre({ name: 'Ombre 1', intensity }),
      ombre({ name: 'Ombre 2', intensity }),
      ombre({ name: 'Ombre 3', intensity })
    ]
  })
}
