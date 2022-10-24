// cartes de base

export const flammeCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Flamme Céleste',
  description: 'J\'inflige à ma cible 3 dégâts + 1 par tour (actuellement {{3 + FIGHT_TURN}}).',
  upgrade: 'flammeCelesteMajeure',
  targetted: true,
  base: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'blue' })
    foe.receiveDamages(3 + $world.FIGHT_TURN, 'blue')
  }
}

export const flammeCelesteMajeure = {
  intensity: 2,
  color: 'blue',
  name: 'Flamme Céleste Majeure',
  description: 'J\'inflige à ma cible 3 dégâts + 2 par tour (actuellement {{3 + 2 * FIGHT_TURN}}).',
  upgrade: 'flammeCelesteSupreme',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'blue' })
    foe.receiveDamages(3 + 2 * $world.FIGHT_TURN, 'blue')
  }
}

export const flammeCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Flamme Céleste Suprême',
  description: 'J\'inflige à ma cible 3 dégâts + 3 par tour (actuellement {{3 + 3 * FIGHT_TURN}}).',
  upgrade: false,
  targetted: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'blue' })
    foe.receiveDamages(3 + 3 * $world.FIGHT_TURN, 'blue')
  }
}

export const bouclierCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Bouclier Céleste',
  description: 'Je gagne 3 de protection + 1 par tour (actuellement {{3 + FIGHT_TURN}}).',
  upgrade: 'bouclierCelesteMajeur',
  targetted: false,
  base: true,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'blue' })
    this.addProtection(3 + $world.FIGHT_TURN, 'blue')
  }
}

export const bouclierCelesteMajeur = {
  intensity: 2,
  color: 'blue',
  name: 'Bouclier Céleste Majeur',
  description: 'Je gagne 3 de protection + 2 par tour (actuellement {{3 + 2 * FIGHT_TURN}}).',
  upgrade: 'bouclierCelesteSupreme',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'blue' })
    this.addProtection(3 + 2 * $world.FIGHT_TURN, 'blue')
  }
}

export const bouclierCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Bouclier Céleste Suprême',
  description: 'Je gagne 3 de protection + 3 par tour (actuellement {{3 + 3 * FIGHT_TURN}}).',
  upgrade: false,
  targetted: false,
  execute (foe) {
    $world.LOG('cards.bouclier', { color: 'blue' })
    this.addProtection(3 + 3 * $world.FIGHT_TURN, 'blue')
  }
}

// cartes communes

export const armureCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Armure Céleste',
  description: 'Je gagne 4 de protection + 2 par tour.',
  upgrade: 'armureCélesteMajeur',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'blue' })
    this.addProtection(4 + 2 * $world.FIGHT_TURN, 'blue')
  }
}

export const armureCelesteMajeur = {
  intensity: 2,
  color: 'blue',
  name: 'Armure Céleste Majeur',
  description: 'Je gagne 6 de protection + 3 par tour.',
  upgrade: 'armureCélesteSupreme',
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'blue' })
    this.addProtection(6 + 3 * $world.FIGHT_TURN, 'blue')
  }
}

export const armureCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Armure Céleste Suprême',
  description: 'Je gagne 8 de protection + 4 par tour.',
  upgrade: false,
  targetted: false,
  execute (foe) {
    $world.LOG('cards.armure', { color: 'blue' })
    this.addProtection(8 + 4 * $world.FIGHT_TURN, 'blue')
  }
}

export const brasierCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Brasier Céleste',
  description: 'J\'inflige à tous mes ennemis 3 dégâts + 1 par tour et je termine mon tour.',
  upgrade: 'brasierCélesteMajeur',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierCeleste')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(3 + $world.FIGHT_TURN, 'blue')
    })
  }
}

export const brasierCelesteMajeur = {
  intensity: 2,
  color: 'blue',
  name: 'Brasier Céleste Majeur',
  description: 'J\'inflige à tous mes ennemis 3 dégâts + 2 par tour et je termine mon tour.',
  upgrade: 'brasierCélesteSupreme',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierCeleste')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(3 + 2 * $world.FIGHT_TURN, 'blue')
    })
  }
}

export const brasierCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Brasier Céleste Suprême',
  description: 'J\'inflige à tous mes ennemis 3 dégâts + 3 par tour et je termine mon tour.',
  upgrade: false,
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.brasierCeleste')
    $world.FIGHT_FOES.forEach(foe => {
      foe.receiveDamages(3 + 3 * $world.FIGHT_TURN, 'blue')
    })
  }
}

export const eclatCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Éclat Céleste',
  description: 'Si cette carte permet de surcharger l\'aura de ma cible, je lui inflige 5 dégâts + 5 par tour.',
  upgrade: 'eclatCélesteMajeur',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.eclat', { color: 'blue' })
  }
}

export const glypheCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Glyphe Céleste',
  description: 'J\'inflige à chaque ennemi ayant un élément de Belarcane dans son aura 4 dégâts + 2 par tour et je termine mon tour.',
  upgrade: 'glypheCélesteMajeur',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('purple')) ? 'cards.glypheReussite' : 'cards.glypheEchec',
      { color: 'blue' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('purple'))
      .forEach(foe => {
        foe.receiveDamages(4 + 2 * $world.FIGHT_TURN, 'blue')
      })
  }
}

export const glypheCelesteMajeur = {
  intensity: 2,
  color: 'blue',
  name: 'Glyphe Céleste Majeure',
  description: 'J\'inflige à chaque ennemi ayant un élément de Belarcane dans son aura 6 dégâts + 3 par tour et je termine mon tour.',
  upgrade: 'glypheCélesteMajeur',
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('purple')) ? 'cards.glypheReussite' : 'cards.glypheEchec',
      { color: 'blue' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('purple'))
      .forEach(foe => {
        foe.receiveDamages(6 + 3 * $world.FIGHT_TURN, 'blue')
      })
  }
}

export const glypheCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Glyphe Céleste Majeure',
  description: 'J\'inflige à chaque ennemi ayant un élément de Belarcane dans son aura 8 dégâts + 4 par tour et je termine mon tour.',
  upgrade: false,
  targetted: false,
  endTurn: true,
  execute () {
    $world.LOG(
      $world.FIGHT_FOES.some(foe => foe.aura.includes('purple')) ? 'cards.glypheReussite' : 'cards.glypheEchec',
      { color: 'blue' }
    )
    $world.FIGHT_FOES
      .filter(foe => foe.aura.includes('purple'))
      .forEach(foe => {
        foe.receiveDamages(8 + 4 * $world.FIGHT_TURN, 'blue')
      })
  }
}

export const mainCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Main Céleste',
  description: 'J\'inflige à ma cible 1 dégâts + 1 par tour par autre sort Céleste dans ma main (actuellement {{(1 + $world.FIGHT_TURN) * (HAND.filter(function(c) { return c.color == "yellow" }).length - 1)}}).',
  upgrade: 'mainCélesteMajeure',
  targetted: true,
  execute (foe) {
    const damages = (1 + $world.FIGHT_TURN) * $world.HAND.filter(c => c.color === 'blue').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'blue' })
    if (damages) foe.receiveDamages(damages, 'blue')
  }
}

export const mainCelesteMajeure = {
  intensity: 2,
  color: 'blue',
  name: 'Main Céleste Majeure',
  description: 'J\'inflige à ma cible 2 dégâts + 1 par tour par autre sort Céleste dans ma main (actuellement {{(2 + $world.FIGHT_TURN) * (HAND.filter(function(c) { return c.color == "yellow" }).length - 1)}}).',
  upgrade: 'mainCélesteSupreme',
  targetted: true,
  execute (foe) {
    const damages = (2 + $world.FIGHT_TURN) * $world.HAND.filter(c => c.color === 'blue').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'blue' })
    if (damages) foe.receiveDamages(damages, 'blue')
  }
}

export const mainCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Main Céleste Supreme',
  description: 'J\'inflige à ma cible 0 dégâts + 2 par tour par autre sort Céleste dans ma main (actuellement {{2 * $world.FIGHT_TURN * (HAND.filter(function(c) { return c.color == "yellow" }).length - 1)}}).',
  upgrade: false,
  targetted: true,
  execute (foe) {
    const damages = 2 * $world.FIGHT_TURN * $world.HAND.filter(c => c.color === 'blue').length - 1
    $world.LOG(damages ? 'cards.mainReussite' : 'cards.mainEchec', { foe, color: 'blue' })
    if (damages) foe.receiveDamages(damages, 'blue')
  }
}

export const motCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Mot Céleste',
  description: 'Ce sort me coûte 1 candela de moins. Je gagne 3 protection + 1 par tour et je pioche 1 carte.',
  upgrade: 'motCélesteMajeur',
  targetted: false,
  execute () {
    // TODO: coute 1 candela de moins
    $world.LOG('cards.mot', { color: 'blue' })
    this.addProtection(3 + $world.FIGHT_TURN, 'blue')
    this.draw(1)
  }
}

export const motCelesteMajeur = {
  intensity: 2,
  color: 'blue',
  name: 'Mot Céleste Majeur',
  description: 'Ce sort me coûte 2 candelas de moins. Je gagne 3 protection + 2 par tour et je pioche 1 carte.',
  upgrade: 'motCélesteSupreme',
  targetted: false,
  execute () {
    // TODO: coute 2 candelas de moins
    $world.LOG('cards.mot', { color: 'blue' })
    this.addProtection(3 + 2 * $world.FIGHT_TURN, 'blue')
    this.draw(1)
  }
}

export const motCelesteSuprême = {
  intensity: 3,
  color: 'blue',
  name: 'Mot Céleste Suprême',
  description: 'Ce sort me coûte 3 candelas de moins. Je gagne 3 protection + 3 par tour et je pioche 2 cartes.',
  upgrade: false,
  targetted: false,
  execute () {
    // TODO: coute 3 candelas de moins
    $world.LOG('cards.mot', { color: 'blue' })
    this.addProtection(3 + 3 * $world.FIGHT_TURN, 'blue')
    this.draw(2)
  }
}

export const radianceCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Radiance Céleste',
  description: 'Je mets 2 éléments Céleste dans l\'aura de ma cible, au lieu d\'un seul.',
  upgrade: 'radianceCélesteMajeure',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'blue' })
    foe.addAura('blue')
    foe.addAura('blue')
  }
}

export const radianceCelesteMajeure = {
  intensity: 2,
  color: 'blue',
  name: 'Radiance Céleste Majeure',
  description: 'Je mets 3 éléments Céleste dans l\'aura de ma cible, au lieu d\'un seul.',
  upgrade: 'radianceCélesteSupreme',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'blue' })
    foe.addAura('blue')
    foe.addAura('blue')
    foe.addAura('blue')
  }
}

export const radianceCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Radiance Céleste Supreme',
  description: 'Je mets 4 éléments Céleste dans l\'aura de ma cible, au lieu d\'un seul.',
  upgrade: false,
  targetted: true,
  execute (foe) {
    $world.LOG('cards.radiance', { foe, color: 'blue' })
    foe.addAura('blue')
    foe.addAura('blue')
    foe.addAura('blue')
    foe.addAura('blue')
  }
}

export const rayonCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Rayon Céleste',
  description: 'J\'inflige à ma cible 3 dégâts + 1 par tour par élément Céleste dans son aura.',
  upgrade: 'rayonCélesteMajeur',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'blue' })
    foe.receiveDamages(foe.aura.filter(a => a === 'blue').length * 3 + $world.FIGHT_TURN, 'blue')
  }
}

export const rayonCelesteMajeur = {
  intensity: 2,
  color: 'blue',
  name: 'Rayon Céleste Majeur',
  description: 'J\'inflige à ma cible 3 dégâts + 2 par tour par élément Céleste dans son aura.',
  upgrade: 'rayonCélesteSupreme',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'blue' })
    foe.receiveDamages(foe.aura.filter(a => a === 'blue').length * 3 + 2 * $world.FIGHT_TURN, 'blue')
  }
}

export const rayonCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Rayon Céleste Supreme',
  description: 'J\'inflige à ma cible 3 dégâts + 3 par tour par élément Céleste dans son aura.',
  upgrade: false,
  targetted: true,
  execute (foe) {
    $world.LOG('cards.rayon', { foe, color: 'blue' })
    foe.receiveDamages(foe.aura.filter(a => a === 'blue').length * 3 + 3 * $world.FIGHT_TURN, 'blue')
  }
}

export const runeCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Rune Céleste',
  description: 'J\'inflige à chaque ennemi ayant un élément d\'Orfeu dans son aura 4 dégâts + 2 par tour et je termine mon tour.',
  upgrade: 'runeCélesteMajeure',
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
        foe.receiveDamages(4 + 2 * $world.FIGHT_TURN, 'blue')
      })
  }
}

export const runeCelesteMajeure = {
  intensity: 2,
  color: 'blue',
  name: 'Rune Céleste Majeure',
  description: 'J\'inflige à chaque ennemi ayant un élément d\'Orfeu dans son aura 6 dégâts + 2 par tour et je termine mon tour.',
  upgrade: 'runeCélesteSupreme',
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
        foe.receiveDamages(6 + 2 * $world.FIGHT_TURN, 'blue')
      })
  }
}

export const runeCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Rune Céleste Suprême',
  description: 'J\'inflige à chaque ennemi ayant un élément d\'Orfeu dans son aura 8 dégâts + 3 par tour et je termine mon tour.',
  upgrade: false,
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
        foe.receiveDamages(8 + 3 * $world.FIGHT_TURN, 'blue')
      })
  }
}

export const siropCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Sirop Céleste',
  description: 'Je récupère 0 candelas + 1 par tour et exile cette carte.',
  upgrade: 'siropCélesteMajeur',
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropCeleste')
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + $world.FIGHT_TURN)
    // TODO: add the gain to log
  }
}

export const siropCelesteMajeur = {
  intensity: 2,
  color: 'blue',
  name: 'Sirop Céleste Majeur',
  description: 'Je récupère 3 candelas + 1 par tour et exile cette carte.',
  upgrade: 'siropCélesteSupreme',
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropCeleste')
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + 3 + $world.FIGHT_TURN)
    // TODO: add the gain to log
  }
}

export const siropCelesteSupreme = {
  intensity: 3,
  color: 'blue',
  name: 'Sirop Céleste',
  description: 'Je récupère 6 candelas + 1 par tour et exile cette carte.',
  upgrade: false,
  targetted: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.siropCeleste')
    $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + 6 + $world.FIGHT_TURN)
    // TODO: add the gain to log
  }
}
