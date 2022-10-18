// Cartes de base

export const flammeOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Flamme d\'Orfeu',
  description: 'J’inflige à ma cible 6 dégâts.',
  upgrade: 'flammeOrfeuMajeure',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'yellow' })
    foe.receiveDamages(6, 'yellow')
  }
}

export const flammeOrfeuMajeure = {
  intensity: 2,
  color: 'yellow',
  name: 'Flamme d\'Orfeu Majeure',
  description: 'J’inflige à ma cible 9 dégâts.',
  upgrade: 'flammeOrfeuSupreme',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'yellow' })
    foe.receiveDamages(9, 'yellow')
  }
}

export const flammeOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Flamme d\'Orfeu Suprême',
  description: 'J’inflige à ma cible 12 dégâts.',
  upgrade: false,
  targetted: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'yellow' })
    foe.receiveDamages(12, 'yellow')
  }
}

export const bouclierOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Bouclier d\'Orfeu',
  description: 'Je gagne 6 de protection.',
  upgrade: 'bouclierOrfeuMajeur',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'yellow' })
    this.addProtection(6, 'yellow')
  }
}

export const bouclierOrfeuMajeur = {
  intensity: 2,
  color: 'yellow',
  name: 'Bouclier d\'Orfeu Majeur',
  description: 'Je gagne 9 de protection.',
  upgrade: 'bouclierOrfeuSupreme',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'yellow' })
    this.addProtection(9, 'yellow')
  }
}

export const bouclierOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Bouclier d\'Orfeu Suprême',
  description: 'Je gagne 12 de protection.',
  upgrade: false,
  targetted: false,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'yellow' })
    this.addProtection(12, 'yellow')
  }
}

// Cartes communes

export const armureOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Armure d\'Orfeu',
  description: 'Je gagne 10 de protection.',
  upgrade: 'armureOrfeuMajeur',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'yellow' })
    this.addProtection(10, 'yellow')
  }
}

export const armureOrfeuMajeur = {
  intensity: 2,
  color: 'yellow',
  name: 'Armure d\'Orfeu Majeur',
  description: 'Je gagne 15 de protection.',
  upgrade: 'armureOrfeuSupreme',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'yellow' })
    this.addProtection(15, 'yellow')
  }
}

export const armureOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Armure d\'Orfeu Suprême',
  description: 'Je gagne 20 de protection.',
  upgrade: false,
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'yellow' })
    this.addProtection(20, 'yellow')
  }
}

export const brasierOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Brasier d\'Orfeu',
  description: 'J’inflige à tous mes ennemis 6 dégâts et je termine mon tour.',
  upgrade: 'brasierOrfeuMajeur',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierDOrfeu')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(6, 'yellow')
    })
  }
}

export const brasierOrfeuMajeur = {
  intensity: 2,
  color: 'yellow',
  name: 'Brasier d\'Orfeu Majeur',
  description: 'J’inflige à tous mes ennemis 9 dégâts et je termine mon tour.',
  upgrade: 'brasierOrfeuSupreme',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierDOrfeu')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(9, 'yellow')
    })
  }
}

export const brasierOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Brasier d\'Orfeu Suprême',
  description: 'J’inflige à tous mes ennemis 12 dégâts et je termine mon tour.',
  upgrade: false,
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierDOrfeu')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(12, 'yellow')
    })
  }
}

export const eclatOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Éclat d\'Orfeu',
  description: 'Si cette carte permet de surcharger l’aura de ma cible, je lui inflige 20 dégâts.',
  upgrade: 'eclatOrfeuMajeur',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.eclat', { color: 'yellow' })
  }
}

export const glypheOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Glyphe d\'Orfeu',
  description: 'J’inflige à chaque ennemi ayant un élément Céleste dans son aura 10 dégâts et je termine mon tour.',
  upgrade: 'glypheOrfeuMajeur',
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
        foe.receiveDamages(10, 'yellow')
      })
  }
}

export const glypheOrfeuMajeur = {
  intensity: 2,
  color: 'yellow',
  name: 'Glyphe d\'Orfeu Majeure',
  description: 'J’inflige à chaque ennemi ayant un élément Céleste dans son aura 15 dégâts et je termine mon tour.',
  upgrade: 'glypheOrfeuMajeur',
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
        foe.receiveDamages(15, 'yellow')
      })
  }
}

export const glypheOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Glyphe d\'Orfeu Majeure',
  description: 'J’inflige à chaque ennemi ayant un élément Céleste dans son aura 20 dégâts et je termine mon tour.',
  upgrade: false,
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
        foe.receiveDamages(20, 'yellow')
      })
  }
}

export const mainOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Main d\'Orfeu',
  description: 'J’inflige à ma cible 4 dégâts par autre sort d\'Orfeu dans ma main (actuellement {{4 * (HAND.filter(function(c) { return c.color === "yellow" }).length - 1)}}).',
  upgrade: 'mainOrfeuMajeure',
  targetted: true,
  execute (foe) {
    const damages = 4 * $world.HAND.filter(c => c.color === 'yellow').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'yellow' })
    if (damages) foe.receiveDamages(damages, 'yellow')
  }
}

export const mainOrfeuMajeure = {
  intensity: 2,
  color: 'yellow',
  name: 'Main d\'Orfeu Majeure',
  description: 'J’inflige à ma cible 5 dégâts par autre sort d\'Orfeu dans ma main (actuellement {{5 * (HAND.filter(function(c) { return c.color === "yellow" }).length - 1)}}).',
  upgrade: 'mainOrfeuSupreme',
  targetted: true,
  execute (foe) {
    const damages = 5 * $world.HAND.filter(c => c.color === 'yellow').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'yellow' })
    if (damages) foe.receiveDamages(damages, 'yellow')
  }
}

export const mainOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Main d\'Orfeu Supreme',
  description: 'J’inflige à ma cible 6 dégâts par autre sort d\'Orfeu dans ma main (actuellement {{6 * (HAND.filter(function(c) { return c.color === "yellow" }).length - 1)}}).',
  upgrade: false,
  targetted: true,
  execute (foe) {
    const damages = 6 * $world.HAND.filter(c => c.color === 'yellow').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'yellow' })
    if (damages) foe.receiveDamages(damages, 'yellow')
  }
}

export const motOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Mot d\'Orfeu',
  description: 'Ce sort me coûte 1 candela de moins. Je gagne 6 protection et je pioche 1 carte.',
  upgrade: 'motOrfeuMajeur',
  targetted: false,
  execute () {
    // TODO: coute 1 candela de moins
    $world.LOG('cards.mot', { color: 'yellow' })
    this.addProtection(6, 'yellow')
    this.draw(1)
  }
}

export const motOrfeuMajeur = {
  intensity: 2,
  color: 'yellow',
  name: 'Mot d\'Orfeu Majeur',
  description: 'Ce sort me coûte 1 candela de moins. Je gagne 9 protection et je pioche 1 carte.',
  upgrade: 'motOrfeuSupreme',
  targetted: false,
  execute () {
    // TODO: coute 1 candela de moins
    $world.LOG('cards.mot', { color: 'yellow' })
    this.addProtection(9, 'yellow')
    this.draw(1)
  }
}

export const motOrfeuSuprême = {
  intensity: 3,
  color: 'yellow',
  name: 'Mot d\'Orfeu Suprême',
  description: 'Ce sort me coûte 1 candela de moins. Je gagne 12 protection et je pioche 2 cartes.',
  upgrade: false,
  targetted: false,
  execute () {
    // TODO: coute 1 candela de moins
    $world.LOG('cards.mot', { color: 'yellow' })
    this.addProtection(12, 'yellow')
    this.draw(2)
  }
}

export const radianceOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Radiance d\'Orfeu',
  description: 'Je mets 2 éléments d’Orfeu dans l’aura de ma cible, au lieu d’un seul.',
  upgrade: 'radianceOrfeuMajeure',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'yellow' })
    foe.addAura('yellow')
    foe.addAura('yellow')
  }
}

export const radianceOrfeuMajeure = {
  intensity: 2,
  color: 'yellow',
  name: 'Radiance d\'Orfeu Majeure',
  description: 'Je mets 3 éléments d’Orfeu dans l’aura de ma cible, au lieu d’un seul.',
  upgrade: 'radianceOrfeuSupreme',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'yellow' })
    foe.addAura('yellow')
    foe.addAura('yellow')
    foe.addAura('yellow')
  }
}

export const radianceOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Radiance d\'Orfeu Supreme',
  description: 'Je mets 4 éléments d’Orfeu dans l’aura de ma cible, au lieu d’un seul.',
  upgrade: false,
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'yellow' })
    foe.addAura('yellow')
    foe.addAura('yellow')
    foe.addAura('yellow')
    foe.addAura('yellow')
  }
}

export const rayonOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Rayon d\'Orfeu',
  description: 'J’inflige à ma cible 6 dégâts par élément d’Orfeu dans son aura.',
  upgrade: 'rayonOrfeuMajeur',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'yellow' })
    foe.receiveDamages(foe.aura.filter(a => a === 'yellow').length * 6, 'yellow')
  }
}

export const rayonOrfeuMajeur = {
  intensity: 2,
  color: 'yellow',
  name: 'Rayon d\'Orfeu Majeur',
  description: 'J’inflige à ma cible 9 dégâts par élément d’Orfeu dans son aura.',
  upgrade: 'rayonOrfeuSupreme',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'yellow' })
    foe.receiveDamages(foe.aura.filter(a => a === 'yellow').length * 9, 'yellow')
  }
}

export const rayonOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Rayon d\'Orfeu Supreme',
  description: 'J’inflige à ma cible 12 dégâts par élément d’Orfeu dans son aura.',
  upgrade: false,
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'yellow' })
    foe.receiveDamages(foe.aura.filter(a => a === 'yellow').length * 12, 'yellow')
  }
}

export const runeOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Rune d\'Orfeu',
  description: 'J’inflige à chaque ennemi ayant un élément Belarcane dans son aura 10 dégâts et je termine mon tour.',
  upgrade: 'runeOrfeuMajeure',
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
        foe.receiveDamages(10, 'yellow')
      })
  }
}

export const runeOrfeuMajeure = {
  intensity: 2,
  color: 'yellow',
  name: 'Rune d\'Orfeu Majeure',
  description: 'J’inflige à chaque ennemi ayant un élément Belarcane dans son aura 15 dégâts et je termine mon tour.',
  upgrade: 'runeOrfeuSupreme',
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
        foe.receiveDamages(15, 'yellow')
      })
  }
}

export const runeOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Rune d\'Orfeu Suprême',
  description: 'J’inflige à chaque ennemi ayant un élément Belarcane dans son aura 20 dégâts et je termine mon tour.',
  upgrade: false,
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
        foe.receiveDamages(20, 'yellow')
      })
  }
}

export const siropOrfeu = {
  intensity: 1,
  color: 'yellow',
  name: 'Sirop d\'Orfeu',
  description: 'Je récupère 3 candelas et exile cette carte.',
  upgrade: 'siropOrfeuMajeur',
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropOrfeu')
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + 3)
    // TODO: add the gain to log
  }
}

export const siropOrfeuMajeur = {
  intensity: 2,
  color: 'yellow',
  name: 'Sirop d\'Orfeu Majeur',
  description: 'Je récupère 6 candelas et exile cette carte.',
  upgrade: 'siropOrfeuSupreme',
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropOrfeu')
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + 6)
    // TODO: add the gain to log
  }
}

export const siropOrfeuSupreme = {
  intensity: 3,
  color: 'yellow',
  name: 'Sirop d\'Orfeu',
  description: 'Je récupère 9 candelas et exile cette carte.',
  upgrade: false,
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropOrfeu')
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + 9)
    // TODO: add the gain to log
  }
}
