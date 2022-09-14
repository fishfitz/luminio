export const griffesDOmbre = () => ({
  type: 'buff',
  execute () {
    $world.LOG('actions.griffesDOmbre1', { foe: this })
    const { candelasRemoved } = this.inflictDamages(5 + this.power)

    if (candelasRemoved) {
      $world.LOG('actions.griffesDOmbre2', { foe: this, candelasRemoved })
      this.addAura('black')
      this.life = Math.min(this.life + candelasRemoved, this.maxLife)
    }
  }
})

export const hurlementDOmbre = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.hurlementDOmbre', { foe: this })
      $world.INFLICT_DISCARD(1)
    }
  }
}

export const obscurcissement = () => {
  return {
    type: 'buff',
    execute () {
      $world.LOG('actions.obscurcissement', { foe: this })
      this.power += 5
      this.life = this.maxLife
    }
  }
}
