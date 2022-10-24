import { ombreFugace } from './foes'

export const griffesDOmbre = () => ({
  type: 'buff',
  execute () {
    $world.LOG('actions.griffesDOmbre1', { foe: this })
    const { candelasRemoved } = this.inflictDamages(5)

    if (candelasRemoved) {
      $world.LOG('actions.griffesDOmbre2', { foe: this, candelasRemoved })
      this.addAura('black')
      this.life = Math.min(this.life + candelasRemoved, this.maxLife)
    }
  }
})

export const etouffementDOmbre = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.etouffementDOmbre', { foe: this })
      this.inflictDiscard(1)
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

export const contactGlacial = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.contactGlacial', { foe: this })
      this.inflictDamages(8)
    }
  }
}

export const murmureAction = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.murmure', { foe: this })
      $world.ADD_CARD('peurDiffuse', $world.DISCARDED)
    }
  }
}

export const litanieAction = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.litanie', { foe: this })
      $world.ADD_CARD('peur', $world.DISCARDED)
    }
  }
}

export const lenteur = () => {
  return {
    type: 'none',
    execute () {
      $world.LOG('actions.lenteur', { foe: this })
    }
  }
}

export const coupDEpee = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.coupDEpee', { foe: this })
      this.inflictDamages(10)
    }
  }
}

export const coupDeLanterne = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.coupDeLanterne', { foe: this })
      this.inflictDamages(8)
    }
  }
}

export const danseDesOmbres = () => {
  return {
    type: 'special',
    execute () {
      $world.LOG('actions.danseDesOmbres', { foe: this })
      this.summon(ombreFugace())
    }
  }
}
