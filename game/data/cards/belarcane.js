import randomInt from 'just-random-integer'

// cartes de base

export const flammeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Flamme de Belarcane',
  description: 'J\'inflige à ma cible entre 1 et 11 dégâts.',
  upgrade: 'flammeBelarcaneMajeure',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'purple' })
    foe.receiveDamages(randomInt(1, 11), 'purple')
  }
}

export const flammeBelarcaneMajeure = {
  intensity: 2,
  color: 'purple',
  name: 'Flamme de Belarcane Majeure',
  description: 'J\'inflige à ma cible entre 4 et 14 dégâts.',
  upgrade: 'flammeBelarcaneSupreme',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'purple' })
    foe.receiveDamages(randomInt(4, 14), 'purple')
  }
}

export const flammeBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Flamme de Belarcane Suprême',
  description: 'J\'inflige à ma cible entre 7 et 17 dégâts.',
  upgrade: false,
  targetted: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'purple' })
    foe.receiveDamages(randomInt(7, 17), 'purple')
  }
}

export const bouclierBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Bouclier de Belarcane',
  description: 'Je gagne entre 1 et 11 de protection.',
  upgrade: 'bouclierBelarcaneMajeur',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'purple' })
    this.addProtection(randomInt(1, 11), 'purple')
  }
}

export const bouclierBelarcaneMajeur = {
  intensity: 2,
  color: 'purple',
  name: 'Bouclier de Belarcane Majeur',
  description: 'Je gagne entre 4 et 14 de protection.',
  upgrade: 'bouclierBelarcaneSupreme',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'purple' })
    this.addProtection(randomInt(4, 14), 'purple')
  }
}

export const bouclierBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Bouclier de Belarcane Suprême',
  description: 'Je gagne entre 7 et 17 de protection.',
  upgrade: false,
  targetted: false,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'purple' })
    this.addProtection(randomInt(7, 17), 'purple')
  }
}

// cartes communes

export const armureDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Armure de Belarcane',
  description: 'Je gagne entre 1 et 19 de protection.',
  upgrade: 'armureDeBelarcaneMajeure',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'purple' })
    this.addProtection(randomInt(1, 19), 'purple')
  }
}

export const armureDeBelarcaneMajeure = {
  intensity: 2,
  color: 'purple',
  name: 'Armure de Belarcane Majeure',
  description: 'Je gagne entre 6 et 24 de protection.',
  upgrade: 'armureDeBelarcaneSupreme',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'purple' })
    this.addProtection(randomInt(6, 24), 'purple')
  }
}

export const armureDeBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Armure de Belarcane Suprême',
  description: 'Je gagne entre 11 et 29 de protection.',
  upgrade: false,
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'purple' })
    this.addProtection(randomInt(11, 29), 'purple')
  }
}

export const brasierDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Brasier de Belarcane',
  description: 'J\'inflige à tous mes ennemis entre 1 et 11 dégâts et je termine mon tour.',
  upgrade: 'brasierDeBelarcaneMajeur',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierDeBelarcane')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(randomInt(1, 11), 'purple')
    })
  }
}

export const brasierDeBelarcaneMajeur = {
  intensity: 2,
  color: 'purple',
  name: 'Brasier de Belarcane Majeur',
  description: 'J\'inflige à tous mes ennemis entre 4 et 14 dégâts et je termine mon tour.',
  upgrade: 'brasierDeBelarcaneSupreme',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierDeBelarcane')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(randomInt(4, 14), 'purple')
    })
  }
}

export const brasierDeBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Brasier de Belarcane Suprême',
  description: 'J\'inflige à tous mes ennemis entre 7 et 17 dégâts et je termine mon tour.',
  upgrade: false,
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierDeBelarcane')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(randomInt(7, 17), 'purple')
    })
  }
}

export const eclatDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Éclat de Belarcane',
  description: 'Si cette carte permet de surcharger l\'aura de ma cible, je lui inflige entre 1 et 39 dégâts.',
  upgrade: 'eclatDeBelarcaneMajeur',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.eclat', { color: 'purple' })
  }
}

export const glypheDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Glyphe de Belarcane',
  description: 'J\'inflige à chaque ennemi ayant un élément d\'Orfeu dans son aura entre 1 et 19 dégâts et je termine mon tour.',
  upgrade: 'glypheDeBelarcaneMajeur',
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
        foe.receiveDamages(randomInt(1, 19), 'purple')
      })
  }
}

export const glypheDeBelarcaneMajeur = {
  intensity: 2,
  color: 'purple',
  name: 'Glyphe de Belarcane Majeure',
  description: 'J\'inflige à chaque ennemi ayant un élément d\'Orfeu dans son aura entre 6 et 24 dégâts et je termine mon tour.',
  upgrade: 'glypheDeBelarcaneMajeur',
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
        foe.receiveDamages(randomInt(6, 24), 'purple')
      })
  }
}

export const glypheDeBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Glyphe de Belarcane Majeure',
  description: 'J\'inflige à chaque ennemi ayant un élément d\'Orfeu dans son aura entre 11 et 29 dégâts et je termine mon tour.',
  upgrade: false,
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
        foe.receiveDamages(randomInt(11, 29), 'purple')
      })
  }
}

export const mainDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Main de Belarcane',
  description: 'J\'inflige à ma cible entre 1 et 7 dégâts par autre sort de Belarcane dans ma main (actuellement entre {{1 * (HAND.filter(function(c) { return c.color === "purple" }).length - 1)}} et {{7 * (HAND.filter(function(c) { return c.color === "purple" }).length - 1)}}).',
  upgrade: 'mainDeBelarcaneMajeure',
  targetted: true,
  execute (foe) {
    const damages = randomInt(1, 7) * $world.HAND.filter(c => c.color === 'purple').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'purple' })
    if (damages) foe.receiveDamages(damages, 'purple')
  }
}

export const mainDeBelarcaneMajeure = {
  intensity: 2,
  color: 'purple',
  name: 'Main de Belarcane Majeure',
  description: 'J\'inflige à ma cible entre 2 et 8 dégâts par autre sort de Belarcane dans ma main (actuellement entre {{2 * (HAND.filter(function(c) { return c.color === "purple" }).length - 1)}} et {{8 * (HAND.filter(function(c) { return c.color === "purple" }).length - 1)}}).',
  upgrade: 'mainDeBelarcaneSupreme',
  targetted: true,
  execute (foe) {
    const damages = randomInt(2, 8) * $world.HAND.filter(c => c.color === 'purple').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'purple' })
    if (damages) foe.receiveDamages(damages, 'purple')
  }
}

export const mainDeBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Main de Belarcane Supreme',
  description: 'J\'inflige à ma cible entre 3 et 9 dégâts par autre sort de Belarcane dans ma main (actuellement entre {{3 * (HAND.filter(function(c) { return c.color === "purple" }).length - 1)}} et {{9 * (HAND.filter(function(c) { return c.color === "purple" }).length - 1)}}).',
  upgrade: false,
  targetted: true,
  execute (foe) {
    const damages = randomInt(3, 9) * $world.HAND.filter(c => c.color === 'purple').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'purple' })
    if (damages) foe.receiveDamages(damages, 'purple')
  }
}

export const motDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Mot de Belarcane',
  description: 'Ce sort me coûte 1 candela de moins. Je gagne entre 1 et 11 protection et je pioche 1 carte.',
  upgrade: 'motDeBelarcaneMajeur',
  targetted: false,
  execute () {
    // TODO: coute 1 candela de moins
    $world.LOG('cards.mot', { color: 'purple' })
    this.addProtection(randomInt(1, 11), 'purple')
    this.draw(1)
  }
}

export const motDeBelarcaneMajeur = {
  intensity: 2,
  color: 'purple',
  name: 'Mot de Belarcane Majeur',
  description: 'Ce sort me coûte 2 candelas de moins. Je gagne entre 4 et 14 protection et je pioche 1 carte.',
  upgrade: 'motDeBelarcaneSupreme',
  targetted: false,
  execute () {
    // TODO: coute 2 candelas de moins
    $world.LOG('cards.mot', { color: 'purple' })
    this.addProtection(randomInt(4, 14), 'purple')
    this.draw(1)
  }
}

export const motDeBelarcaneSuprême = {
  intensity: 3,
  color: 'purple',
  name: 'Mot de Belarcane Suprême',
  description: 'Ce sort me coûte 3 candelas de moins. Je gagne entre 7 et 17 protection et je pioche 2 cartes.',
  upgrade: false,
  targetted: false,
  execute () {
    // TODO: coute 3 candelas de moins
    $world.LOG('cards.mot', { color: 'purple' })
    this.addProtection(randomInt(7, 17), 'purple')
    this.draw(2)
  }
}

export const radianceDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Radiance de Belarcane',
  description: 'Je mets 2 éléments de Belarcane dans l\'aura de ma cible, au lieu d\'un seul.',
  upgrade: 'radianceDeBelarcaneMajeure',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'purple' })
    foe.addAura('purple')
    foe.addAura('purple')
  }
}

export const radianceDeBelarcaneMajeure = {
  intensity: 2,
  color: 'purple',
  name: 'Radiance de Belarcane Majeure',
  description: 'Je mets 3 éléments de Belarcane dans l\'aura de ma cible, au lieu d\'un seul.',
  upgrade: 'radianceDeBelarcaneSupreme',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'purple' })
    foe.addAura('purple')
    foe.addAura('purple')
    foe.addAura('purple')
  }
}

export const radianceDeBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Radiance de Belarcane Supreme',
  description: 'Je mets 4 éléments de Belarcane dans l\'aura de ma cible, au lieu d\'un seul.',
  upgrade: false,
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'purple' })
    foe.addAura('purple')
    foe.addAura('purple')
    foe.addAura('purple')
    foe.addAura('purple')
  }
}

export const rayonDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Rayon de Belarcane',
  description: 'J\'inflige à ma cible entre 1 et 11 dégâts par élément de Belarcane dans son aura.',
  upgrade: 'rayonDeBelarcaneMajeur',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'purple' })
    foe.receiveDamages(foe.aura.filter(a => a === 'purple').length * randomInt(1, 11), 'purple')
  }
}

export const rayonDeBelarcaneMajeur = {
  intensity: 2,
  color: 'purple',
  name: 'Rayon de Belarcane Majeur',
  description: 'J\'inflige à ma cible entre 4 et 14 dégâts par élément de Belarcane dans son aura.',
  upgrade: 'rayonDeBelarcaneSupreme',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'purple' })
    foe.receiveDamages(foe.aura.filter(a => a === 'purple').length * randomInt(4, 14), 'purple')
  }
}

export const rayonDeBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Rayon de Belarcane Supreme',
  description: 'J\'inflige à ma cible entre 7 et 17 dégâts par élément de Belarcane dans son aura.',
  upgrade: false,
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'purple' })
    foe.receiveDamages(foe.aura.filter(a => a === 'purple').length * randomInt(7, 17), 'purple')
  }
}

export const runeDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Rune de Belarcane',
  description: 'J\'inflige à chaque ennemi ayant un élément Céleste dans son aura 10 dégâts et je termine mon tour.',
  upgrade: 'runeDeBelarcaneMajeure',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('blue')) ? 'cards.runeReussite' : 'cards.runeEchec',
      { color: 'purple' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('blue'))
      .forEach(foe => {
        foe.receiveDamages(randomInt(1, 19), 'purple')
      })
  }
}

export const runeDeBelarcaneMajeure = {
  intensity: 2,
  color: 'purple',
  name: 'Rune de Belarcane Majeure',
  description: 'J\'inflige à chaque ennemi ayant un élément Céleste dans son aura entre 6 et 24 dégâts et je termine mon tour.',
  upgrade: 'runeDeBelarcaneSupreme',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('blue')) ? 'cards.runeReussite' : 'cards.runeEchec',
      { color: 'purple' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('blue'))
      .forEach(foe => {
        foe.receiveDamages(randomInt(6, 24), 'purple')
      })
  }
}

export const runeDeBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Rune de Belarcane Suprême',
  description: 'J\'inflige à chaque ennemi ayant un élément Céleste dans son aura entre 11 et 29 dégâts et je termine mon tour.',
  upgrade: false,
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('blue')) ? 'cards.runeReussite' : 'cards.runeEchec',
      { color: 'purple' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('blue'))
      .forEach(foe => {
        foe.receiveDamages(randomInt(11, 29), 'purple')
      })
  }
}

export const siropDeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Sirop de Belarcane',
  description: 'Je récupère entre 1 et 5 candelas et exile cette carte.',
  upgrade: 'siropDeBelarcaneMajeur',
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropDeBelarcane')
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + randomInt(1, 5))
    // TODO: add the gain to log
  }
}

export const siropDeBelarcaneMajeur = {
  intensity: 2,
  color: 'purple',
  name: 'Sirop de Belarcane Majeur',
  description: 'Je récupère entre 4 et 8 candelas et exile cette carte.',
  upgrade: 'siropDeBelarcaneSupreme',
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropDeBelarcane')
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + randomInt(4, 8))
    // TODO: add the gain to log
  }
}

export const siropDeBelarcaneSupreme = {
  intensity: 3,
  color: 'purple',
  name: 'Sirop de Belarcane',
  description: 'Je récupère entre 7 et 11 candelas et exile cette carte.',
  upgrade: false,
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropDeBelarcane')
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + randomInt(7, 11))
    // TODO: add the gain to log
  }
}
