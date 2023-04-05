import randomPick from 'just-random'
import randomInt from 'just-random-integer'
import { ombreFugace, ombreEpaisse, agent, robotSentinelle, robotBombe, refletMalefique } from './foes'

// Acte 1

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

// Acte 2

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

// Acte 3

export const regardFixe = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.regardFixe', { foe: this })
      // TODO
      // si le joueur a dans sa main une carte Peur diffuse ou Peur, la transforme en sa version supérieure. Sinon, le joueur reçois une carte Peur diffuse dans sa pioche.
    }
  }
}

export const coupDePoignard = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.coupDePoignard', { foe: this })
      this.inflictDamages(25)
      this.life = Math.min(this.life + 25 + this.power, this.maxLife)
      $world.LOG('actions.gainLife', { foe: this, gain: 25 + this.power })
    }
  }
}

export const frappeDesarticulee = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.frappeDesarticulee', { foe: this })
      this.inflictDamages(20)
    }
  }
}

export const horribleContorsion = () => {
  return {
    type: 'special',
    execute () {
      $world.LOG('actions.horribleContorsion', { foe: this })
      // On reçoit une carte peur diffuse dans la défausse
      this.life = Math.min(this.life + 25 + this.power, this.maxLife)
      $world.LOG('actions.gainLife', { foe: this, gain: 25 + this.power })
    }
  }
}

export const morsure = () => {
  return {
    type: 'aggro',
    execute () {
      const { candelasRemoved } = this.inflictDamages(20)
      $world.LOG('actions.morsure', { foe: this })
      if (candelasRemoved) {
        this.addAura('black')
        this.addAura('black')
        this.addAura('black')
      }
    }
  }
}

export const flammeNoire = () => {
  return {
    type: 'aggro',
    execute () {
      this.inflictDamages(15)
      $world.LOG('actions.flammeNoire', { foe: this })
    }
  }
}

export const bouclierNoir = () => {
  return {
    type: 'buff',
    execute () {
      $world.LOG('actions.bouclierNoir', { foe: this })
      this.power += 2
      this.life = Math.min(this.life + 50 + this.power, this.maxLife)
      $world.LOG('actions.gainLife', { foe: this, gain: 50 + this.power })
    }
  }
}

export const balayage = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.balayage', { foe: this })
      this.inflictDamages(25)
      $world.FIGHT_FOES.forEach(foe => {
        foe.addAura('black')
      })
    }
  }
}

export const presenceImposante = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.presenceImposante', { foe: this })
      this.inflictDamages(10)
      this.inflictDiscard(1)
      $world.FIGHT_FOES.forEach(foe => {
        foe.addAura('black')
      })
    }
  }
}

export const coupDePoing = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.coupDePoing', { foe: this })
      this.inflictDamages(20)
      $world.FIGHT_FOES.forEach(foe => {
        foe.addAura('black')
      })
    }
  }
}

export const rugissement = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.rugissement', { foe: this })
      this.inflictDiscard(1)
      $world.FIGHT_FOES.forEach(foe => {
        foe.addAura('black')
      })
    }
  }
}

export const bousculade = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.bousculade', { foe: this })
      this.inflictDamages(15)
      $world.FIGHT_FOES.forEach(foe => {
        foe.addAura('black')
      })
    }
  }
}

export const pietinement = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.pietinement', { foe: this })
      this.inflictDamages(20)
      $world.FIGHT_FOES.forEach(foe => {
        foe.addAura('black')
      })
    }
  }
}

export const pincette = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.pincette', { foe: this })
      this.inflictDamages(10)
      $world.FIGHT_FOES.forEach(foe => {
        foe.addAura('black')
      })
    }
  }
}

export const furie = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.furie', { foe: this })
      this.inflictDamages(randomInt(1, 20))
      $world.FIGHT_FOES.forEach(foe => {
        foe.addAura('black')
      })
    }
  }
}

// Le bombardier

const ordres = ['ordreDeTuer', 'ordreHumiliant', 'ordrePatriotique']

export const radioVolume = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.radioVolume')
      this.inflictDamages(30)
      $world.ADD_CARD(randomPick(ordres), $world.HAND)
    }
  }
}

export const radioFumee = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.radioFumee')
      this.inflictDamages(10)
      $world.ADD_CARD(randomPick(ordres), $world.HAND)
      $world.ADD_CARD('stress', $world.DISCARDED)
      $world.ADD_CARD('stress', $world.DISCARDED)
    }
  }
}

export const radioOrdre = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.radioOrdre')
      this.inflictDamages(10)
      $world.ADD_CARD(randomPick(ordres), $world.HAND)
    }
  }
}

export const giffle = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.giffle')
      this.inflictDamages(15)
    }
  }
}

export const masseHumide = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.masseHumide')
      this.inflictDiscard(1)
      $world.ADD_CARD('eau', $world.HAND)
    }
  }
}

export const eclairNoir = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.eclairNoir')
      this.inflictDamages(15)
    }
  }
}

export const yeuxLumineux = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.yeuxLumineux')
      $world.ADD_CARD('doute', $world.DISCARDED)
    }
  }
}

export const explosionEmeraude = () => {
  return {
    type: 'aggro',
    execute () {
      $world.LOG('actions.explosionEmeraude')
      this.inflictDamages(25)
    }
  }
}

export const enzo = () => {
  return {
    type: 'special',
    execute () {
      $world.LOG('actions.enzo')
      $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + 10)
      $world.WILL = Math.min(10, $world.WILL + 1)
    }
  }
}

export const laFoule = () => {
  return {
    type: 'special',
    execute () {
      if ($world.FIGHT_FOES.length < 5) {
        $world.LOG('actions.laFoule1')
        this.summon(ombreEpaisse())
        this.summon(ombreEpaisse())
      } else {
        $world.LOG('actions.laFoule2')
        $world.FIGHT_FOES.forEach(foe => {
          foe.addAura('black')
          foe.addAura('black')
          foe.addAura('black')
        })
      }
    }
  }
}

export const laVoiture = () => {
  return {
    type: 'debuff',
    execute () {
      $world.LOG('actions.eau')

      const isEau = c => c.name === 'Eau'

      const eauCount =
        Math.min(
          5,
          $world.DECK.filter(isEau).length + $world.DISCARDED.filter(isEau).length
        )

      for (let i = 0; i < eauCount; i++) $world.ADD_CARD('eau')

      $world.DECK = $world.DECK.filter(c => !isEau(c))
      $world.DISCARDED = $world.DISCARDED.filter(c => !isEau(c))

      $world.ADD_CARD('eau')
      $world.ADD_CARD('eau')
      $world.ADD_CARD('eau')
    }
  }
}

export const leBombardier = () => {
  return {
    type: 'debuff',
    execute () {
      const isSouvenir = c => c.name === 'Souvenir cuisant'
      if ($world.DECK.some(isSouvenir) || $world.DISCARDED.some(isSouvenir) || $world.HAND.some(isSouvenir)) {
        $world.DECK = $world.DECK.filter(c => !isSouvenir(c))
        $world.DISCARDED = $world.DISCARDED.filter(c => !isSouvenir(c))
        $world.HAND = $world.HAND.filter(c => !isSouvenir(c))
        $world.LOG('actions.leBombardier1')
      } else $world.LOG('actions.leBombardier2')
      $world.ADD_CARD('souvenirExacerbe', $world.HAND)
    }
  }
}

export const leMiroir = () => {
  return {
    type: 'special',
    execute () {
      const reflet = $world.FIGHT_FOES.find(foe => foe.name === 'Reflet maléfique')
      if (!reflet) {
        if ($world.FIGHT_FOES.length >= 5) $world.FIGHT_FOES.splice(4, 1)
        this.summon(refletMalefique())
        $world.LOG('actions.leMiroir1')
      } else {
        reflet.power += 20
        reflet.maxLife *= 2
        reflet.life = reflet.maxLife
        $world.LOG('actions.leMiroir2')
      }
    }
  }
}
