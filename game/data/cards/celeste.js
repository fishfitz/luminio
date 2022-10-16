export const flammeCeleste = {
  intensity: 1,
  color: 'blue',
  name: 'Flamme Céleste',
  description: 'J’inflige à ma cible 3 dégâts + 1 par tour (actuellement {{3 + FIGHT_TURN}}).',
  upgrade: 'flammeCelesteMajeure',
  targetted: true,
  execute (foe) {
    $world.LOG('cards.flamme', { foe, color: 'blue' })
    foe.receiveDamages(3 + $world.FIGHT_TURN, 'blue')
  }
}

export const flammeCelesteMajeure = {
  intensity: 2,
  color: 'blue',
  name: 'Flamme Céleste Majeure',
  description: 'J’inflige à ma cible 3 dégâts + 2 par tour (actuellement {{3 + 2 * FIGHT_TURN}}).',
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
  description: 'J’inflige à ma cible 3 dégâts + 3 par tour (actuellement {{3 + 3 * FIGHT_TURN}}).',
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
