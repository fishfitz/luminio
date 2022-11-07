import { intensityName, intensityUpgrade } from '../../utils/french'

// cartes de base

const flammeOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Flamme d\'Orfeu', 'fem', intensity),
  description: `J'inflige à ma cible ${3 + intensity * 3} dégâts.`,
  upgrade: intensityUpgrade('flammeOrfeu', 'fem', intensity),
  targetted: true,
  base: intensity === 1,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'yellow' })
    foe.receiveDamages(3 + intensity * 3, 'yellow')
  }
})

export const flammeOrfeu = flammeOrfeuBase(1)
export const flammeOrfeuMajeure = flammeOrfeuBase(2)
export const flammeOrfeuSupreme = flammeOrfeuBase(3)

const bouclierOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Bouclier d\'Orfeu', 'masc', intensity),
  description: `Je gagne ${3 + intensity * 3} de protection.`,
  upgrade: intensityUpgrade('bouclierOrfeu', 'masc', intensity),
  targetted: false,
  base: intensity === 1,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'yellow' })
    this.addProtection(3 + intensity * 3, 'yellow')
  }
})

export const bouclierOrfeu = bouclierOrfeuBase(1)
export const bouclierOrfeuMajeur = bouclierOrfeuBase(2)
export const bouclierOrfeuSupreme = bouclierOrfeuBase(3)

// cartes communes

const armureDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Armure d\'Orfeu', 'fem', intensity),
  description: `Je gagne ${5 + intensity * 5} de protection.`,
  upgrade: intensityUpgrade('armureDOrfeu', 'fem', intensity),
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'yellow' })
    this.addProtection(5 + intensity * 5, 'yellow')
  }
})

export const armureDOrfeu = armureDOrfeuBase(1)
export const armureDOrfeuMajeure = armureDOrfeuBase(2)
export const armureDOrfeuSupreme = armureDOrfeuBase(3)

const brasierDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Brasier d\'Orfeu', 'masc', intensity),
  description: `J'inflige à tous mes ennemis ${3 + intensity * 3} dégâts et je termine mon tour.`,
  upgrade: intensityUpgrade('brasierDOrfeu', 'masc', intensity),
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierDOrfeu')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(3 + intensity * 3, 'yellow')
    })
  }
})

export const brasierDOrfeu = brasierDOrfeuBase(1)
export const brasierDOrfeuMajeur = brasierDOrfeuBase(2)
export const brasierDOrfeuSupreme = brasierDOrfeuBase(3)

const eclatDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Éclat d\'Orfeu', 'masc', intensity),
  description: `Si cette carte permet de surcharger l'aura de ma cible, je lui inflige ${10 + intensity * 10} dégâts.`,
  upgrade: intensityUpgrade('eclatDOrfeu', 'masc', intensity),
  targetted: true,
  execute (foe) {
    foe.addAura('yellow')
    if (foe.stunned) {
      $world.LOG('cards.eclatReussite', { foe, color: 'yellow' })
      foe.receiveDamages(10 + intensity * 10)
    } else {
      $world.LOG('cards.eclatEchec', { color: 'yellow' })
    }
  }
})

export const eclatDOrfeu = eclatDOrfeuBase(1)
export const eclatDOrfeuMajeur = eclatDOrfeuBase(2)
export const eclatDOrfeuSupreme = eclatDOrfeuBase(3)

const glypheDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Glyphe d\'Orfeu', 'masc', intensity),
  description: `J'inflige à chaque ennemi ayant un élément de Céleste dans son aura ${5 + intensity * 5} dégâts et je termine mon tour.`,
  upgrade: intensityUpgrade('glypheDOrfeu', 'masc', intensity),
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('blue')) ? 'cards.glypheReussite' : 'cards.glypheEchec',
      { color: 'yellow' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('blue'))
      .forEach(foe => {
        foe.receiveDamages(5 + intensity * 5, 'yellow')
      })
  }
})

export const glypheDOrfeu = glypheDOrfeuBase(1)
export const glypheDOrfeuMajeur = glypheDOrfeuBase(2)
export const glypheDOrfeuSupreme = glypheDOrfeuBase(3)

const mainDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Main d\'Orfeu', 'fem', intensity),
  description: `J'inflige à ma cible ${3 + intensity} dégâts par autre sort d'Orfeu dans ma main.`,
  upgrade: intensityUpgrade('mainDOrfeu', 'fem', intensity),
  targetted: true,
  execute (foe) {
    const damages = (3 + intensity) * $world.HAND.filter(c => c.color === 'yellow').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'yellow' })
    if (damages) foe.receiveDamages(damages, 'yellow')
  }
})

export const mainDOrfeu = mainDOrfeuBase(1)
export const mainDOrfeuMajeure = mainDOrfeuBase(2)
export const mainDOrfeuSupreme = mainDOrfeuBase(3)

const motDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Mot d\'Orfeu', 'masc', intensity),
  description: `Ce sort me coûte 1 candela de moins. Je gagne ${3 + intensity * 3} protection et je pioche 1 carte.`,
  upgrade: intensityUpgrade('motDOrfeu', 'masc', intensity),
  targetted: false,
  cost (amount) {
    return Math.max(0, amount - 1)
  },
  execute () {
    $world.LOG('cards.mot', { color: 'yellow' })
    this.addProtection(3 + intensity * 3, 'yellow')
    this.draw(1)
  }
})

export const motDOrfeu = motDOrfeuBase(1)
export const motDOrfeuMajeur = motDOrfeuBase(2)
export const motDOrfeuSuprême = motDOrfeuBase(3)

const radianceDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Radiance d\'Orfeu', 'fem', intensity),
  description: `Je mets ${1 + intensity} éléments d'Orfeu dans l'aura de ma cible, au lieu d'un seul.`,
  upgrade: intensityUpgrade('radianceDOrfeu', 'fem', intensity),
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'yellow' })
    foe.addAura('yellow')
    for (let i = 0; i < intensity; i++) {
      foe.addAura('yellow')
    }
  }
})

export const radianceDOrfeu = radianceDOrfeuBase(1)
export const radianceDOrfeuMajeure = radianceDOrfeuBase(2)
export const radianceDOrfeuSupreme = radianceDOrfeuBase(3)

const rayonDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Rayon d\'Orfeu', 'masc', intensity),
  description: `J'inflige à ma cible ${3 + intensity * 3} dégâts par élément d'Orfeu dans son aura.`,
  upgrade: intensityUpgrade('rayonDOrfeu', 'masc', intensity),
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'yellow' })
    foe.receiveDamages(foe.aura.filter(a => a === 'yellow').length * (3 + intensity * 3), 'yellow')
  }
})

export const rayonDOrfeu = rayonDOrfeuBase(1)
export const rayonDOrfeuMajeur = rayonDOrfeuBase(2)
export const rayonDOrfeuSupreme = rayonDOrfeuBase(3)

const runeDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Rune d\'Orfeu', 'fem', intensity),
  description: `J'inflige à chaque ennemi ayant un élément de Belarcane dans son aura ${5 + intensity * 5} dégâts et je termine mon tour.`,
  upgrade: intensityUpgrade('runeDOrfeu', 'fem', intensity),
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('purple')) ? 'cards.runeReussite' : 'cards.runeEchec',
      { color: 'yellow' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('purple'))
      .forEach(foe => {
        foe.receiveDamages(5 + intensity * 5, 'yellow')
      })
  }
})

export const runeDOrfeu = runeDOrfeuBase(1)
export const runeDOrfeuMajeure = runeDOrfeuBase(2)
export const runeDOrfeuSupreme = runeDOrfeuBase(3)

const siropDOrfeuBase = (intensity) => ({
  intensity,
  color: 'yellow',
  name: intensityName('Sirop d\'Orfeu', 'masc', intensity),
  description: `Je récupère ${intensity * 3} candelas et exile cette carte.`,
  upgrade: intensityUpgrade('siropDOrfeu', 'masc', intensity),
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropDOrfeu')
    const candelasBefore = $world.CANDELAS
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + intensity * 3)
    $world.LOG('fight.jeRecupereCandelas', { amount: $world.CANDELAS - candelasBefore })
  }
})

export const siropDOrfeu = siropDOrfeuBase(1)
export const siropDOrfeuMajeur = siropDOrfeuBase(2)
export const siropDOrfeuSupreme = siropDOrfeuBase(3)
