import { intensityName, intensityUpgrade } from '../../utils/french'

// cartes de base

const flammeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Flamme de Céleste', 'fem', intensity),
  description: `J'inflige à ma cible 3 dégâts + ${intensity} par tour{{currently(3 + ${intensity} * FIGHT_TURN)}}.`,
  upgrade: intensityUpgrade('flammeCeleste', 'fem', intensity),
  targetted: true,
  base: intensity === 1,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'blue' })
    foe.receiveDamages(3 + intensity * $world.FIGHT_TURN, 'blue')
  }
})

export const flammeCeleste = flammeCelesteBase(1)
export const flammeCelesteMajeure = flammeCelesteBase(2)
export const flammeCelesteSupreme = flammeCelesteBase(3)

const bouclierCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Bouclier de Céleste', 'masc', intensity),
  description: `Je gagne 3 de protection + ${intensity} par tour{{currently(3 + ${intensity} * FIGHT_TURN)}}.`,
  upgrade: intensityUpgrade('bouclierCeleste', 'masc', intensity),
  targetted: false,
  base: intensity === 1,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'blue' })
    this.addProtection(3 + intensity * $world.FIGHT_TURN, 'blue')
  }
})

export const bouclierCeleste = bouclierCelesteBase(1)
export const bouclierCelesteMajeur = bouclierCelesteBase(2)
export const bouclierCelesteSupreme = bouclierCelesteBase(3)

// cartes communes

const armureDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Armure de Céleste', 'fem', intensity),
  description: `Je gagne ${2 + intensity * 2} de protection + ${1 + intensity} par tour{{currently(2 + ${intensity * 2} + ${1 + intensity} * FIGHT_TURN)}}.`,
  upgrade: intensityUpgrade('armureDeCeleste', 'fem', intensity),
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'blue' })
    this.addProtection(2 + intensity * 2 + (1 + intensity) * $world.FIGHT_TURN, 'blue')
  }
})

export const armureDeCeleste = armureDeCelesteBase(1)
export const armureDeCelesteMajeure = armureDeCelesteBase(2)
export const armureDeCelesteSupreme = armureDeCelesteBase(3)

const brasierDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Brasier de Céleste', 'masc', intensity),
  description: `J'inflige à tous mes ennemis 3 dégâts + ${intensity} par tour et je termine mon tour{{currently(3 + ${intensity} * FIGHT_TURN)}}.`,
  upgrade: intensityUpgrade('brasierDeCeleste', 'masc', intensity),
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierDeCeleste')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(3 + intensity * $world.FIGHT_TURN, 'blue')
    })
  }
})

export const brasierDeCeleste = brasierDeCelesteBase(1)
export const brasierDeCelesteMajeur = brasierDeCelesteBase(2)
export const brasierDeCelesteSupreme = brasierDeCelesteBase(3)

const eclatDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Éclat de Céleste', 'masc', intensity),
  description: `Si cette carte permet de surcharger l'aura de ma cible, je lui inflige ${1 + intensity * 4} dégâts + ${3 + intensity * 2} par tour{{currently(${1 + intensity * 4} + ${3 + intensity * 2} * FIGHT_TURN)}}.`,
  upgrade: intensityUpgrade('eclatDeCeleste', 'masc', intensity),
  targetted: true,
  execute (foe) {
    foe.addAura('blue')
    if (foe.stunned) {
      $world.LOG('cards.eclatReussite', { foe, color: 'blue' })
      foe.receiveDamages(1 + intensity * 4 + (3 + intensity * 2) * $world.FIGHT_TURN)
    } else {
      $world.LOG('cards.eclatEchec', { color: 'blue' })
    }
  }
})

export const eclatDeCeleste = eclatDeCelesteBase(1)
export const eclatDeCelesteMajeur = eclatDeCelesteBase(2)
export const eclatDeCelesteSupreme = eclatDeCelesteBase(3)

const glypheDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Glyphe de Céleste', 'masc', intensity),
  description: `J'inflige à chaque ennemi ayant un élément de Belarcane dans son aura ${2 + intensity * 2} dégâts + ${1 + intensity} par tour{{currently(2 + ${intensity * 2} + ${1 + intensity} * FIGHT_TURN)}} et je termine mon tour.`,
  upgrade: intensityUpgrade('glypheDeCeleste', 'masc', intensity),
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('blue')) ? 'cards.glypheReussite' : 'cards.glypheEchec',
      { color: 'purple' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('purple'))
      .forEach(foe => {
        foe.receiveDamages(2 + intensity * 2 + (1 + intensity) * $world.FIGHT_TURN, 'blue')
      })
  }
})

export const glypheDeCeleste = glypheDeCelesteBase(1)
export const glypheDeCelesteMajeur = glypheDeCelesteBase(2)
export const glypheDeCelesteSupreme = glypheDeCelesteBase(3)

const mainDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Main de Céleste', 'fem', intensity),
  description: `J'inflige à ma cible ${intensity} dégâts + ${intensity === 3 ? 2 : 1} par tour par autre sort de Céleste dans ma main{{currently(${intensity} + ${(intensity === 3 ? 2 : 1)} * FIGHT_TURN * (HAND.filter(function(c) { return c.color === "blue" }).length - 1))}}.`,
  upgrade: intensityUpgrade('mainDeCeleste', 'fem', intensity),
  targetted: true,
  execute (foe) {
    const damages = (intensity + (intensity === 3 ? 2 : 1) * $world.FIGHT_TURN) * $world.HAND.filter(c => c.color === 'blue').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'blue' })
    if (damages) foe.receiveDamages(damages, 'blue')
  }
})

export const mainDeCeleste = mainDeCelesteBase(1)
export const mainDeCelesteMajeure = mainDeCelesteBase(2)
export const mainDeCelesteSupreme = mainDeCelesteBase(3)

const motDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Mot de Céleste', 'masc', intensity),
  description: `Ce sort me coûte 1 candela de moins. Je gagne 3 protection + ${intensity} par tour{{currently(3 + ${intensity})}} et je pioche 1 carte.`,
  upgrade: intensityUpgrade('motDeCeleste', 'masc', intensity),
  targetted: false,
  cost (amount) {
    return Math.max(0, amount - 1)
  },
  execute () {
    $world.LOG('cards.mot', { color: 'blue' })
    this.addProtection(3 + intensity * $world.FIGHT_TURN, 'blue')
    this.draw(1)
  }
})

export const motDeCeleste = motDeCelesteBase(1)
export const motDeCelesteMajeur = motDeCelesteBase(2)
export const motDeCelesteSuprême = motDeCelesteBase(3)

const radianceDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Radiance de Céleste', 'fem', intensity),
  description: `Je mets ${1 + intensity} éléments de Céleste dans l'aura de ma cible, au lieu d'un seul.`,
  upgrade: intensityUpgrade('radianceDeCeleste', 'fem', intensity),
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'blue' })
    foe.addAura('blue')
    for (let i = 0; i < intensity; i++) {
      foe.addAura('blue')
    }
  }
})

export const radianceDeCeleste = radianceDeCelesteBase(1)
export const radianceDeCelesteMajeure = radianceDeCelesteBase(2)
export const radianceDeCelesteSupreme = radianceDeCelesteBase(3)

const rayonDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Rayon de Céleste', 'masc', intensity),
  description: `J'inflige à ma cible 3 dégâts + ${intensity} par tour {{currently(3 + ${intensity})}} par élément de Céleste dans son aura.`,
  upgrade: intensityUpgrade('rayonDeCeleste', 'masc', intensity),
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'blue' })
    foe.receiveDamages(foe.aura.filter(a => a === 'blue').length * (3 + intensity * $world.FIGHT_TURN), 'blue')
  }
})

export const rayonDeCeleste = rayonDeCelesteBase(1)
export const rayonDeCelesteMajeur = rayonDeCelesteBase(2)
export const rayonDeCelesteSupreme = rayonDeCelesteBase(3)

const runeDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Rune de Céleste', 'fem', intensity),
  description: `J'inflige à chaque ennemi ayant un élément d'Orfeu dans son aura ${2 + intensity * 2} dégâts + ${1 + intensity} par tour{{currently(${2 + intensity * 2} + ${1 + intensity} * FIGHT_TURN)}} et je termine mon tour.`,
  upgrade: intensityUpgrade('runeDeCeleste', 'fem', intensity),
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('yellow')) ? 'cards.runeReussite' : 'cards.runeEchec',
      { color: 'blue' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('yellow'))
      .forEach(foe => {
        foe.receiveDamages(2 + intensity * 2 + (1 + intensity) * $world.FIGHT_TURN, 'blue')
      })
  }
})

export const runeDeCeleste = runeDeCelesteBase(1)
export const runeDeCelesteMajeure = runeDeCelesteBase(2)
export const runeDeCelesteSupreme = runeDeCelesteBase(3)

const siropDeCelesteBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Sirop de Céleste', 'masc', intensity),
  description: `Je récupère ${3 * (intensity - 1)} candelas + 1 par tour {{currently(${3 * (intensity - 1)} + FIGHT_TURN)}} et exile cette carte.`,
  upgrade: intensityUpgrade('siropDeCeleste', 'masc', intensity),
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropDeCeleste')
    const candelasBefore = $world.CANDELAS
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + 3 * (intensity - 1) + $world.FIGHT_TURN)
    $world.LOG('fight.jeRecupereCandelas', { amount: $world.CANDELAS - candelasBefore })
  }
})

export const siropDeCeleste = siropDeCelesteBase(1)
export const siropDeCelesteMajeur = siropDeCelesteBase(2)
export const siropDeCelesteSupreme = siropDeCelesteBase(3)

const cracheFeuDivinBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Crache feu divin', 'masc', intensity),
  description: `J'inflige à ma cible 3 dégâts + ${1 + intensity * 2} par fois où j'ai joué cette carte lors de ce combat. {{currently(1 + ${2 * intensity} * EFFECTS.CRACHE_FEU_DIVIN)}}.`,
  upgrade: intensityUpgrade('cracheFeuDivin', 'masc', intensity),
  targetted: true,
  base: intensity === 1,
  execute (foe) {
    $world.LOG('cards.cracheFeuDivin', { foe })
    foe.receiveDamages(3 + (1 + intensity * 2) * $world.EFFECTS.CRACHE_FEU_DIVIN, 'blue')
    $world.EFFECTS.CRACHE_FEU_DIVIN += 1
  }
})

export const cracheFeuDivin = cracheFeuDivinBase(1)
export const cracheFeuDivinMajeur = cracheFeuDivinBase(2)
export const cracheFeuDivinSupreme = cracheFeuDivinBase(3)

const toupieSansFinBase = (intensity) => ({
  intensity,
  color: 'blue',
  name: intensityName('Toupie sans fin', 'fem', intensity),
  description: `J'inflige à ma cible 3 dégâts + ${1 + intensity * 2} par fois où j'ai joué cette carte lors de ce combat. {{currently(1 + ${2 * intensity} * EFFECTS.CRACHE_FEU_DIVIN)}}.`,
  upgrade: intensityUpgrade('toupieSansFin', 'fem', intensity),
  targetted: false,
  base: intensity === 1,
  destination: 'EXILE',
  startOnHand: true,
  execute () {
    $world.LOG('cards.toupieSansFin')
    this.addProtection(10 + intensity * 10, 'blue')
    $world.EFFECTS.TOUPIE += (10 + intensity * 10) / 20
  }
})

export const toupieSansFin = toupieSansFinBase(1)
export const toupieSansFinMajeure = toupieSansFinBase(2)
export const toupieSansFinSupreme = toupieSansFinBase(3)
