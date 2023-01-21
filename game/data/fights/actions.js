import randomPick from 'just-random'
import { ombreFugace, agent, robotSentinelle, robotBombe } from './foes'

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

export const mitrailleuse1 = () => {
  return {
    type: 'aggro',
    execute () {
      this.chargeCount--
      $world.LOG('actions.mitrailleuse1', { foe: this })
      this.inflictDamages(10)
    }
  }
}

export const mitrailleuse2 = () => {
  return {
    type: 'aggro',
    execute () {
      this.chargeCount--
      $world.LOG('actions.mitrailleuse2', { foe: this })
      this.inflictDamages(20)
    }
  }
}

export const rechargement = () => {
  return {
    type: 'none',
    execute () {
      this.chargeCount = 2
      $world.LOG('actions.rechargement', { foe: this })
    }
  }
}

export const boom2 = () => {
  return {
    type: 'special',
    execute () {
      this.boomCount++
      $world.LOG('actions.boom2', { foe: this })
    }
  }
}

export const boom1 = () => {
  return {
    type: 'special',
    execute () {
      this.boomCount++
      $world.LOG('actions.boom1', { foe: this })
    }
  }
}

export const boom0 = () => {
  return {
    type: 'special',
    execute () {
      $world.LOG('actions.boom0', { foe: this })
      this.inflictDamages(50)
      this.receiveDamages(this.life)
    }
  }
}

export const coupDeMatraque = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.coupDeMatraque', { foe: this })
      this.inflictDamages(10)
    }
  }
}

export const appelDeRenfort = () => {
  return {
    type: 'special',
    execute () {
      $world.LOG('actions.appelDeRenfort', { foe: this })
      const newFoe = randomPick([robotSentinelle, robotBombe, agent])()
      this.summon(newFoe)
      $world.LOG('actions.appelDeRenfort2', { foe: newFoe })
    }
  }
}

export const coupDeFouet = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.coupDeFouet', { foe: this })
      this.inflictDamages(30)
    }
  }
}

export const motivationDEquipe = () => {
  return {
    type: 'special',
    execute () {
      $world.LOG('actions.motivationDEquipe', { foe: this })
      $world.FIGHT_FOES
        .filter(f => f !== this)
        .forEach(foe => {
          foe.addAura('black')
          foe.power += 2
        })
    }
  }
}
