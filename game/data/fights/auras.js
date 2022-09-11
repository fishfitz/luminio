import random from 'just-random'
import shuffle from 'just-shuffle'

export const monochromatic = (colors = ['yellow', 'purple', 'blue']) => {
  return function () {
    const color = random(colors)
    this.auraPattern = Array(this.auraSlots).fill(color)
  }
}

export const polychromatic = (colors = ['yellow', 'purple', 'blue']) => {
  return function () {
    const colorCycle = shuffle(colors)
    this.auraPattern = []
    for (let i = 0; i < this.auraSlots; i++) {
      this.auraPattern[i] = colorCycle[i % colorCycle.length]
    }
  }
}

export const chaos = (colors = ['yellow', 'purple', 'blue']) => {
  return function () {
    this.auraPattern = []
    for (let i = 0; i < this.auraSlots; i++) {
      this.auraPattern[i] = random(colors)
    }
  }
}
