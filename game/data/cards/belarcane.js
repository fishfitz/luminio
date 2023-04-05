import randomInt from 'just-random-integer'
import randomPick from 'just-random'
import { intensityName, intensityUpgrade } from '../../utils/french'

const belarcaneRandom = (min, max) => {
  if ($world.EFFECTS.GRIMOIRE_COUNT) {
    $world.EFFECTS.GRIMOIRE_COUNT--
    return max
  }
  return randomInt(min, max)
}

// cartes de base

const flammeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Flamme de Belarcane', 'fem', intensity),
  description: `J'inflige à ma cible entre ${1 + (intensity - 1) * 3} et ${11 + (intensity - 1) * 3} dégâts.`,
  upgrade: intensityUpgrade('flammeBelarcane', 'fem', intensity),
  targetted: true,
  base: intensity === 1,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'purple' })
    foe.receiveDamages(belarcaneRandom(1 + (intensity - 1) * 3, 11 + (intensity - 1) * 3), 'purple')
  }
})

export const flammeBelarcane = flammeBelarcaneBase(1)
export const flammeBelarcaneMajeure = flammeBelarcaneBase(2)
export const flammeBelarcaneSupreme = flammeBelarcaneBase(3)

const bouclierBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Bouclier de Belarcane', 'masc', intensity),
  description: `Je gagne entre ${1 + (intensity - 1) * 3} et ${11 + (intensity - 1) * 3} de protection.`,
  upgrade: intensityUpgrade('bouclierBelarcane', 'masc', intensity),
  targetted: false,
  base: intensity === 1,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'purple' })
    this.addProtection(belarcaneRandom(1 + (intensity - 1) * 3, 11 + (intensity - 1) * 3), 'purple')
  }
})

export const bouclierBelarcane = bouclierBelarcaneBase(1)
export const bouclierBelarcaneMajeur = bouclierBelarcaneBase(2)
export const bouclierBelarcaneSupreme = bouclierBelarcaneBase(3)

// cartes communes

const armureDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Armure de Belarcane', 'fem', intensity),
  description: `Je gagne entre ${1 + (intensity - 1) * 5} et ${19 + (intensity - 1) * 5} de protection.`,
  upgrade: intensityUpgrade('armureDeBelarcane', 'fem', intensity),
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'purple' })
    this.addProtection(belarcaneRandom(1 + (intensity - 1) * 5, 19 + (intensity - 1) * 5), 'purple')
  }
})

export const armureDeBelarcane = armureDeBelarcaneBase(1)
export const armureDeBelarcaneMajeure = armureDeBelarcaneBase(2)
export const armureDeBelarcaneSupreme = armureDeBelarcaneBase(3)

const brasierDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Brasier de Belarcane', 'masc', intensity),
  description: `J'inflige à tous mes ennemis entre ${1 + (intensity - 1) * 3} et ${11 + (intensity - 1) * 3} dégâts et je termine mon tour.`,
  upgrade: intensityUpgrade('brasierDeBelarcane', 'masc', intensity),
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierDeBelarcane')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(belarcaneRandom(1 + (intensity - 1) * 3, 11 + (intensity - 1) * 3), 'purple')
    })
  }
})

export const brasierDeBelarcane = brasierDeBelarcaneBase(1)
export const brasierDeBelarcaneMajeur = brasierDeBelarcaneBase(2)
export const brasierDeBelarcaneSupreme = brasierDeBelarcaneBase(3)

const eclatDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Éclat de Belarcane', 'masc', intensity),
  description: `Si cette carte permet de surcharger l'aura de ma cible, je lui inflige entre ${1 + (intensity - 1) * 10} et ${39 + (intensity - 1) * 10} dégâts.`,
  upgrade: intensityUpgrade('eclatDeBelarcane', 'masc', intensity),
  targetted: true,
  execute (foe) {
    foe.addAura('purple')
    if (foe.stunned) {
      $world.LOG('cards.eclatReussite', { foe, color: 'purple' })
      foe.receiveDamages(belarcaneRandom(1 + (intensity - 1) * 10, 39 + (intensity - 1) * 10))
    } else {
      $world.LOG('cards.eclatEchec', { color: 'purple' })
    }
  }
})

export const eclatDeBelarcane = eclatDeBelarcaneBase(1)
export const eclatDeBelarcaneMajeur = eclatDeBelarcaneBase(2)
export const eclatDeBelarcaneSupreme = eclatDeBelarcaneBase(3)

const glypheDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Glyphe de Belarcane', 'masc', intensity),
  description: `J'inflige à chaque ennemi ayant un élément d'Orfeu dans son aura entre ${1 + (intensity - 1) * 5} et ${19 + (intensity - 1) * 5} dégâts et je termine mon tour.`,
  upgrade: intensityUpgrade('glypheDeBelarcane', 'masc', intensity),
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('yellow')) ? 'cards.glypheReussite' : 'cards.glypheEchec',
      { color: 'purple' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('yellow'))
      .forEach(foe => {
        foe.receiveDamages(belarcaneRandom(1 + (intensity - 1) * 3, 11 + (intensity - 1) * 3), 'purple')
      })
  }
})

export const glypheDeBelarcane = glypheDeBelarcaneBase(1)
export const glypheDeBelarcaneMajeur = glypheDeBelarcaneBase(2)
export const glypheDeBelarcaneSupreme = glypheDeBelarcaneBase(3)

const mainDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Main de Belarcane', 'fem', intensity),
  description: `J'inflige à ma cible entre ${intensity} et ${6 + intensity} dégâts par autre sort de Belarcane dans ma main.`,
  upgrade: intensityUpgrade('mainDeBelarcane', 'fem', intensity),
  targetted: true,
  execute (foe) {
    const damages = belarcaneRandom(intensity, 6 + intensity) * $world.HAND.filter(c => c.color === 'purple').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'purple' })
    if (damages) foe.receiveDamages(damages, 'purple')
  }
})

export const mainDeBelarcane = mainDeBelarcaneBase(1)
export const mainDeBelarcaneMajeure = mainDeBelarcaneBase(2)
export const mainDeBelarcaneSupreme = mainDeBelarcaneBase(3)

const motDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Mot de Belarcane', 'masc', intensity),
  description: `Ce sort me coûte 1 candela de moins. Je gagne entre ${1 + (intensity - 1) * 3} et ${11 + (intensity - 1) * 3} protection et je pioche 1 carte.`,
  upgrade: intensityUpgrade('motDeBelarcane', 'masc', intensity),
  targetted: false,
  cost (amount) {
    return Math.max(0, amount - 1)
  },
  execute () {
    $world.LOG('cards.mot', { color: 'purple' })
    this.addProtection(belarcaneRandom(1 + (intensity - 1) * 3, 11 + (intensity - 1) * 3), 'purple')
    this.draw(1)
  }
})

export const motDeBelarcane = motDeBelarcaneBase(1)
export const motDeBelarcaneMajeur = motDeBelarcaneBase(2)
export const motDeBelarcaneSuprême = motDeBelarcaneBase(3)

const radianceDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Radiance de Belarcane', 'fem', intensity),
  description: `Je mets ${1 + intensity} éléments de Belarcane dans l'aura de ma cible, au lieu d'un seul.`,
  upgrade: intensityUpgrade('radianceDeBelarcane', 'fem', intensity),
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'purple' })
    foe.addAura('purple')
    for (let i = 0; i < intensity; i++) {
      foe.addAura('purple')
    }
  }
})

export const radianceDeBelarcane = radianceDeBelarcaneBase(1)
export const radianceDeBelarcaneMajeure = radianceDeBelarcaneBase(2)
export const radianceDeBelarcaneSupreme = radianceDeBelarcaneBase(3)

const rayonDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Rayon de Belarcane', 'masc', intensity),
  description: `J'inflige à ma cible entre ${1 + (intensity - 1) * 3} et ${11 + (intensity - 1) * 3} dégâts par élément de Belarcane dans son aura.`,
  upgrade: intensityUpgrade('rayonDeBelarcane', 'masc', intensity),
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'purple' })
    foe.receiveDamages(foe.aura.filter(a => a === 'purple').length * belarcaneRandom(1 + (intensity - 1) * 3, 11 + (intensity - 1) * 3), 'purple')
  }
})

export const rayonDeBelarcane = rayonDeBelarcaneBase(1)
export const rayonDeBelarcaneMajeur = rayonDeBelarcaneBase(2)
export const rayonDeBelarcaneSupreme = rayonDeBelarcaneBase(3)

const runeDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Rune de Belarcane', 'fem', intensity),
  description: `J'inflige à chaque ennemi ayant un élément de Céleste dans son aura entre ${1 + (intensity - 1) * 5} et ${19 + (intensity - 1) * 5} dégâts et je termine mon tour.`,
  upgrade: intensityUpgrade('runeDeBelarcane', 'fem', intensity),
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('yellow')) ? 'cards.runeReussite' : 'cards.runeEchec',
      { color: 'purple' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('blue'))
      .forEach(foe => {
        foe.receiveDamages(belarcaneRandom(1 + (intensity - 1) * 3, 11 + (intensity - 1) * 3), 'purple')
      })
  }
})

export const runeDeBelarcane = runeDeBelarcaneBase(1)
export const runeDeBelarcaneMajeure = runeDeBelarcaneBase(2)
export const runeDeBelarcaneSupreme = runeDeBelarcaneBase(3)

const siropDeBelarcaneBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Sirop de Belarcane', 'masc', intensity),
  description: `Je récupère entre ${1 + (intensity - 1) * 3} et ${5 + (intensity - 1) * 3} candelas et exile cette carte.`,
  upgrade: intensityUpgrade('siropDeBelarcane', 'masc', intensity),
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropDeBelarcane')
    const candelasBefore = $world.CANDELAS
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + belarcaneRandom(1 + (intensity - 1) * 3, 5 + (intensity - 1) * 3))
    $world.LOG('fight.jeRecupereCandelas', { amount: $world.CANDELAS - candelasBefore })
  }
})

export const siropDeBelarcane = siropDeBelarcaneBase(1)
export const siropDeBelarcaneMajeur = siropDeBelarcaneBase(2)
export const siropDeBelarcaneSupreme = siropDeBelarcaneBase(3)

const deDuDestinBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Dé du destin', 'masc', intensity),
  description: 'Cette carte peut faire un tas de trucs, ou rien du tout, c’est comme elle veut.',
  upgrade: intensityUpgrade('deDuDestin', 'masc', intensity),
  targetted: false,
  base: intensity === 1,
  execute () {
    const roll = belarcaneRandom(1, 6)
    $world.LOG('cards.desDuDestin', { roll })
    const foe = randomPick($world.FIGHT_FOES)
    if (roll === 1) $world.LOG('cards.desDuDestin1')
    if (roll === 2) {
      $world.LOG('cards.desDuDestin2', { foe })
      foe.receiveDamages(belarcaneRandom(1 + (intensity - 1) * 3, 1 + (intensity - 1) * 3 + 10), 'purple')
    }
    if (roll === 3) {
      $world.LOG('cards.desDuDestin3', { foe })
      foe.addAura('purple')
      foe.addAura('purple')
      if (intensity > 1) foe.addAura('purple')
      if (intensity > 2) foe.addAura('purple')
    }
    if (roll === 4) {
      $world.LOG('cards.desDuDestin4')
      this.addProtection(belarcaneRandom(1 + (intensity - 1) * 5, 19 + (intensity - 1) * 5), 'purple')
    }
    if (roll === 5) {
      $world.LOG('cards.desDuDestin5')
      const amount = belarcaneRandom(1 + (intensity - 1) * 3, 1 + (intensity - 1) * 3 + 10)
      const candelasBefore = $world.CANDELAS
      $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + amount)
      $world.LOG('fight.jeRecupereCandelas', { amount: $world.CANDELAS - candelasBefore })
    }
    if (roll === 6) {
      $world.LOG('cards.desDuDestin6')
      const amount = belarcaneRandom(1 + (intensity - 1) * 3, 1 + (intensity - 1) * 3 + 10)
      $world.FIGHT_FOES(foe => foe.receiveDamages(amount, 'purple'))
    }
  }
})

export const deDuDestin = deDuDestinBase(1)
export const deDuDestinMajeur = deDuDestinBase(2)
export const deDuDestinSupreme = deDuDestinBase(3)

export const grimoireMysterieuxBase = (intensity) => ({
  intensity,
  color: 'purple',
  name: intensityName('Grimoire mystérieux', 'masc', intensity),
  description: intensity === 1
    ? 'Le prochain sort de Belarcane que je joue ce tour est maximisé.'
    : `Les ${intensity} prochains sorts de Belarcane que je joue ce tour sont maximisés.`,
  execute () {
    $world.LOG('cards.grimoireMysterieux')
    $world.EFFECTS.GRIMOIRE_COUNT = intensity
  }
})
