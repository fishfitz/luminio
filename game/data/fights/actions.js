export const griffesDOmbre = () => {
  return {
    type: 'buff',
    execute () {
      const { candelasRemoved } = $world.INFLICT_DAMAGES(5 + this.power)
      if (candelasRemoved) {
        this.addAura('black')
        this.life = Math.min(this.life + candelasRemoved, this.maxLife)
      }
    }
  }
}

export const hurlementDOmbre = () => {
  return {
    type: 'debuff',
    execute () {
      $world.INFLICT_DISCARD(1)
    }
  }
}
