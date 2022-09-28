import randomInt from 'just-random-integer'

export default {
  // Orfeu
  flamme_orfeu: {
    intensity: 1,
    color: 'yellow',
    name: 'Flamme d\'Orfeu',
    description: 'Ce sort me coûte 1 candela de plus. J’inflige à ma cible 8 dégâts.',
    upgrade: 'flamme_orfeu_majeure',
    targetted: true,
    execute (foe) {
      $world.LOG('cards.flamme', { foe, color: 'yellow' })
      foe.receiveDamages(8, 'yellow')
      $world.CANDELA -= 1
    }
  },
  flamme_orfeu_majeure: {
    intensity: 2,
    color: 'yellow',
    name: 'Flamme d\'Orfeu Majeure',
    description: 'Ce sort me coûte 1 candela de plus. J’inflige à ma cible 12 dégâts.',
    upgrade: 'flamme_orfeu_supreme',
    targetted: true,
    execute (foe) {
      $world.LOG('cards.flamme', { foe, color: 'yellow' })
      foe.receiveDamages(12, 'yellow')
      $world.CANDELA -= 1
    }
  },
  flamme_orfeu_supreme: {
    intensity: 3,
    color: 'yellow',
    name: 'Flamme d\'Orfeu Suprême',
    description: 'Ce sort me coûte 1 candela de plus. J’inflige à ma cible 16 dégâts.',
    upgrade: false,
    targetted: true,
    execute (foe) {
      $world.LOG('cards.flamme', { foe, color: 'yellow' })
      foe.receiveDamages(16, 'yellow')
      $world.CANDELA -= 1
    }
  },

  bouclier_orfeu: {
    intensity: 1,
    color: 'yellow',
    name: 'Bouclier d\'Orfeu',
    description: 'Ce sort me coûte 1 candela de plus. Je gagne 8 de protection.',
    upgrade: 'bouclier_orfeu_majeur',
    targetted: false,
    execute (foe) {
      $world.LOG('cards.bouclier', { color: 'yellow' })
      $world.SET_PROTECTION(8, 'yellow')
    }
  },
  bouclier_orfeu_majeure: {
    intensity: 2,
    color: 'yellow',
    name: 'Bouclier d\'Orfeu Majeure',
    description: 'Ce sort me coûte 1 candela de plus. Je gagne 12 de protection.',
    upgrade: 'bouclier_orfeu_supreme',
    targetted: false,
    execute (foe) {
      $world.LOG('cards.bouclier', { color: 'yellow' })
      $world.SET_PROTECTION(12, 'yellow')
    }
  },
  bouclier_orfeu_supreme: {
    intensity: 3,
    color: 'yellow',
    name: 'Bouclier d\'Orfeu Suprême',
    description: 'Ce sort me coûte 1 candela de plus. Je gagne 16 de protection.',
    upgrade: false,
    targetted: false,
    execute (foe) {
      $world.LOG('cards.bouclier', { color: 'yellow' })
      $world.SET_PROTECTION(16, 'yellow')
    }
  },

  // Céleste
  flamme_celeste: {
    intensity: 1,
    color: 'blue',
    name: 'Flamme Céleste',
    description: 'J’inflige à ma cible 3 dégâts + 1 par tour (actuellement {{3 + FIGHT_TURN}}).',
    upgrade: 'flamme_celeste_majeure',
    targetted: true,
    execute (foe) {
      $world.LOG('cards.flamme', { foe, color: 'blue' })
      foe.receiveDamages(3 + $world.FIGHT_TURN, 'blue')
    }
  },
  flamme_celeste_majeure: {
    intensity: 2,
    color: 'blue',
    name: 'Flamme Céleste Majeure',
    description: 'J’inflige à ma cible 3 dégâts + 2 par tour (actuellement {{3 + 2 * FIGHT_TURN}}).',
    upgrade: 'flamme_celeste_supreme',
    targetted: true,
    execute (foe) {
      $world.LOG('cards.flamme', { foe, color: 'blue' })
      foe.receiveDamages(3 + 2 * $world.FIGHT_TURN, 'blue')
    }
  },
  flamme_celest_supreme: {
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
  },

  bouclier_celeste: {
    intensity: 1,
    color: 'blue',
    name: 'Bouclier Céleste',
    description: 'Je gagne 3 de protection + 1 par tour (actuellement {{3 + FIGHT_TURN}}).',
    upgrade: 'bouclier_celeste_majeur',
    targetted: false,
    execute (foe) {
      $world.LOG('cards.bouclier', { color: 'blue' })
      $world.SET_PROTECTION(3 + $world.FIGHT_TURN, 'blue')
    }
  },
  bouclier_celeste_majeur: {
    intensity: 2,
    color: 'blue',
    name: 'Bouclier Céleste Majeure',
    description: 'Je gagne 3 de protection + 2 par tour (actuellement {{3 + 2 * FIGHT_TURN}}).',
    upgrade: 'bouclier_celeste_supreme',
    targetted: false,
    execute (foe) {
      $world.LOG('cards.bouclier', { color: 'blue' })
      $world.SET_PROTECTION(3 + 2 * $world.FIGHT_TURN, 'blue')
    }
  },
  bouclier_celeste_supreme: {
    intensity: 3,
    color: 'blue',
    name: 'Bouclier Céleste Suprême',
    description: 'Je gagne 3 de protection + 3 par tour (actuellement {{3 + 3 * FIGHT_TURN}}).',
    upgrade: false,
    targetted: false,
    execute (foe) {
      $world.LOG('cards.bouclier', { color: 'blue' })
      $world.SET_PROTECTION(3 + 3 * $world.FIGHT_TURN, 'blue')
    }
  },

  // Belarcane
  flamme_belarcane: {
    intensity: 1,
    color: 'purple',
    name: 'Flamme de Belarcane',
    description: 'J’inflige à ma cible entre 3 et 10 dégâts.',
    upgrade: 'flamme_belarcane_majeure',
    targetted: true,
    execute (foe) {
      $world.LOG('cards.flamme', { foe, color: 'purple' })
      foe.receiveDamages(randomInt(3, 10), 'purple')
    }
  },
  flamme_belarcane_majeure: {
    intensity: 2,
    color: 'purple',
    name: 'Flamme de Belarcane Majeure',
    description: 'J’inflige à ma cible entre 5 et 15 dégâts.',
    upgrade: 'flamme_belarcane_supreme',
    targetted: true,
    execute (foe) {
      $world.LOG('cards.flamme', { foe, color: 'purple' })
      foe.receiveDamages(randomInt(5, 15), 'purple')
    }
  },
  flamme_belarcane_supreme: {
    intensity: 3,
    color: 'purple',
    name: 'Flamme de Belarcane Suprême',
    description: 'J’inflige à ma cible entre 7 et 20 dégâts.',
    upgrade: false,
    targetted: true,
    execute (foe) {
      $world.LOG('cards.flamme', { foe, color: 'purple' })
      foe.receiveDamages(randomInt(7, 20), 'purple')
    }
  },

  bouclier_belarcane: {
    intensity: 1,
    color: 'purple',
    name: 'Bouclier de Belarcane',
    description: 'Je gagne entre 3 et 10 de protection.',
    upgrade: 'bouclier_belarcane_majeur',
    targetted: false,
    execute (foe) {
      $world.LOG('cards.bouclier', { color: 'purple' })
      $world.SET_PROTECTION(randomInt(3, 10), 'purple')
    }
  },
  bouclier_belarcane_majeur: {
    intensity: 2,
    color: 'purple',
    name: 'Bouclier de Belarcane Majeure',
    description: 'Je gagne entre 5 et 15 de protection.',
    upgrade: 'bouclier_belarcane_supreme',
    targetted: false,
    execute (foe) {
      $world.LOG('cards.bouclier', { color: 'purple' })
      $world.SET_PROTECTION(randomInt(5, 15), 'purple')
    }
  },
  bouclier_belarcane_supreme: {
    intensity: 3,
    color: 'purple',
    name: 'Bouclier de Belarcane Suprême',
    description: 'Je gagne entre 7 et 20 de protection.',
    upgrade: false,
    targetted: false,
    execute (foe) {
      $world.LOG('cards.bouclier', { color: 'purple' })
      $world.SET_PROTECTION(randomInt(7, 20), 'purple')
    }
  }
}
