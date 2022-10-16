import randomInt from 'just-random-integer'

export const flammeBelarcane = {
  intensity: 1,
  color: 'purple',
  name: 'Flamme de Belarcane',
  description: 'J’inflige à ma cible entre 1 et 11 dégâts.',
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
  description: 'J’inflige à ma cible entre 4 et 14 dégâts.',
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
  description: 'J’inflige à ma cible entre 7 et 17 dégâts.',
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
