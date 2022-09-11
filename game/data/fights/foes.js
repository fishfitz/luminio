import random from 'just-random'
import { monochromatic } from './auras'
import { griffesDOmbre, hurlementDOmbre } from './actions'

export const ombre = ({ name = 'Ombre', intensity = 1 } = { name: 'Ombre', intensity: 1 }) => {
  return {
    name,
    maxLife: 5 + intensity * 3,
    power: intensity - 1,
    auraSlots: 3,
    refreshAuraPattern: monochromatic(),
    behavior () {
      return random([griffesDOmbre(), griffesDOmbre(), hurlementDOmbre()])
    }
  }
}
