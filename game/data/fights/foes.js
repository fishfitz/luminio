import random from 'just-random'
import { monochromatic } from './auras'
import { griffesDOmbre, hurlementDOmbre, obscurcissement } from './actions'

export const ombre = ({ name = 'Ombre', intensity = 1 }) => {
  return {
    name,
    gender: 'fem',
    proper: false,
    maxLife: 5 + intensity * 3,
    power: intensity - 1,
    auraSlots: 3,
    auraDarkening: () => obscurcissement(),
    refreshAuraPattern: monochromatic(),
    behavior () {
      return random([griffesDOmbre(), griffesDOmbre(), hurlementDOmbre()])
    }
  }
}
