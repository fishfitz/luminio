export const souvenirCuisant = {
  intensity: 1,
  color: 'black',
  name: 'Souvenir cuisant',
  description: 'Je ne peux pas retirer cette carte de mon deck. Je pioche une carte.',
  upgrade: false,
  targetted: false,
  irremovable: true,
  execute () {
    $world.LOG('cards.souvenirCuisant')
    this.draw(1)
  }
}

export const souvenirExacerbe = {
  intensity: 1,
  color: 'black',
  name: 'Souvenir cuisant',
  description: `
    Cette carte n'est pas défaussée à la fin de mon tour.
    Je perds si j'en ai trois exemplaires dans la main.
    Quand je la joue, change les éléments de l'aura de l'Organiste en Ténèbres ou ajoute 2 éléments Ténèbres à l'aura de l'Organiste.
  `,
  upgrade: false,
  targetted: false,
  sticky: true,
  execute () {
    $world.LOG('cards.souvenirExacerbe')
    const organist = $world.FIGHT_FOES[0]
    if (organist.aura.length) organist.aura = organist.aura.map(c => 'black')
    else {
      organist.addAura('black')
      organist.addAura('black')
    }
  }
}

export const peurDiffuse = {
  intensity: 1,
  color: 'black',
  name: 'Peur diffuse',
  description: 'Je retire cette carte de mon deck.',
  upgrade: false,
  targetted: false,
  destination: 'VOID',
  execute () {
    $world.LOG('cards.peurDiffuse')
  }
}

export const peur = {
  intensity: 1,
  color: 'black',
  name: 'Peur',
  description: 'Cette carte me coûte au moins 3 Candelas. Je la transforme en Peur diffuse.',
  upgrade: false,
  targetted: false,
  destination: 'VOID',
  cost (amount) {
    return Math.max(amount, 3)
  },
  execute () {
    $world.LOG('cards.peur')
    $world.ADD_CARD('peurDiffuse', $world.DISCARDED)
  }
}

export const peurIntense = {
  intensity: 1,
  color: 'black',
  name: 'Peur intense',
  description: 'Cette carte me coûte au moins 6 Candelas. Je la transforme en Peur.',
  upgrade: false,
  targetted: false,
  destination: 'VOID',
  cost (amount) {
    return Math.max(amount, 6)
  },
  execute () {
    $world.LOG('cards.peurIntense')
    $world.ADD_CARD('peur', $world.DISCARDED)
  }
}

export const terreur = {
  intensity: 1,
  color: 'black',
  name: 'Terreur',
  description: 'Cette carte n\'est pas défausséee à la fin de mon tour. Tant que je l\'ai en main, les cartes me coûtent 1 candelas de plus',
  upgrade: false,
  targetted: false,
  sticky: true,
  execute () {
    $world.LOG('cards.terreur')
    // Effect of this card is hard-coded in the engine
  }
}

// Cauchemar le Bombardier
export const ordreDeTuer = {
  intensity: 1,
  color: 'black',
  name: 'Ordre de tuer',
  description: 'Cette carte n`\'est pas défaussée à la fin de mon tour. Je pioche 1 carte supplémentaire. Quand je la joue, j\'exile cette carte et confère à la radio un bonus de dégâts.',
  upgrade: false,
  targetted: false,
  sticky: true,
  destination: 'VOID',
  temporary: true,
  execute () {
    $world.LOG('cards.ordreDeTuer')
    $world.FIGHT_FOES[0].power += 5
    this.draw(1)
  }
}

export const ordreHumiliant = {
  intensity: 1,
  color: 'black',
  name: 'Ordre humiliant',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Je pioche 1 carte supplémentaire. Quand je la joue, j\'exile cette carte et place au dessus de ma pioche toutes les cartes Stress qui s\'y trouvent.',
  upgrade: false,
  targetted: false,
  sticky: true,
  destination: 'VOID',
  temporary: true,
  execute () {
    $world.LOG('cards.ordreHumiliant')
    this.draw(1)
    $world.DECK.sort(c => c.name === 'Stress' ? 1 : -1)
  }
}

export const ordrePatriotique = {
  intensity: 1,
  color: 'black',
  name: 'Ordre patriotique',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Je pioche 1 carte supplémentaire. Quand je la joue, j\'exile cette carte et met 3 éléments Ténèbres dans l\'aura de la radio.',
  upgrade: false,
  targetted: false,
  sticky: true,
  destination: 'VOID',
  temporary: true,
  execute () {
    $world.LOG('cards.ordrePatriotique')
    this.draw(1)
    $world.FIGHT_FOES[0].addAura('black')
    $world.FIGHT_FOES[0].addAura('black')
    $world.FIGHT_FOES[0].addAura('black')
  }
}

export const stress = {
  intensity: 1,
  color: 'black',
  name: 'Stress',
  description: 'J\'exile cette carte et passe mon tour.',
  upgrade: false,
  targetted: false,
  destination: 'VOID',
  endTurn: true,
  temporary: true,
  execute () {
    $world.LOG('cards.stress')
  }
}

export const eau = {
  intensity: 1,
  color: 'black',
  name: 'Eau',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Je pioche une carte.',
  upgrade: false,
  targetted: false,
  sticky: true,
  temporary: true,
  discardProtected: true,
  execute () {
    $world.LOG('cards.eau')
    this.draw(1)
  }
}

export const ceintureDeSecurite = {
  intensity: 1,
  color: 'black',
  name: 'Ceinture de sécurité',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Tant que je l\'ai en mains, les cartes me coûtent 3 Candelas de plus. J\'exile cette carte quand je la joue.',
  upgrade: false,
  targetted: false,
  sticky: true,
  temporary: true,
  destination: 'VOID',
  discardProtected: true,
  execute () {
    $world.LOG('cards.ceintureDeSecurite')
    $world.CARD_COST.black -= 3
    $world.CARD_COST.white -= 3
    $world.CARD_COST.yellow -= 3
    $world.CARD_COST.blue -= 3
    $world.CARD_COST.purple -= 3
  }
}

export const siegePassager = {
  intensity: 1,
  color: 'black',
  name: 'Siège passager',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Transforme cette carte en Siège passager abimé quand je la joue.',
  upgrade: false,
  targetted: false,
  sticky: true,
  temporary: true,
  destination: 'VOID',
  discardProtected: true,
  execute () {
    $world.LOG('cards.siegePassager')
    $world.ADD_CARD('siegePassagerAbime', $world.HAND)
  }
}

export const siegePassagerAbime = {
  intensity: 1,
  color: 'black',
  name: 'Siège passager abimé',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Transforme cette carte en Siège passager quasi arraché quand je la joue.',
  upgrade: false,
  targetted: false,
  sticky: true,
  temporary: true,
  destination: 'VOID',
  discardProtected: true,
  execute () {
    $world.LOG('cards.siegePassagerAbime')
    $world.ADD_CARD('siegePassagerQuasiArrache', $world.HAND)
  }
}

export const siegePassagerQuasiArrache = {
  intensity: 1,
  color: 'black',
  name: 'Siège passager quasi arraché',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Divise par deux la vie du Cauchemar',
  upgrade: false,
  targetted: false,
  sticky: true,
  temporary: true,
  destination: 'VOID',
  discardProtected: true,
  execute () {
    $world.LOG('cards.siegePassagerQuasiArrache')
    $world.FIGHT_FOES[0].receiveDamages(Math.floor($world.FIGHT_FOES[0].length / 2))
  }
}

export const portiere = {
  intensity: 1,
  color: 'black',
  name: 'Portière',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Tant que j\'ai cette carte en main, je perd si je tue le Cauchemar. Je transforme cette carte en Portière abimée quand je la joue.',
  upgrade: false,
  targetted: false,
  sticky: true,
  temporary: true,
  destination: 'VOID',
  discardProtected: true,
  execute () {
    $world.LOG('cards.portiere')
    $world.ADD_CARD('portiereAbimee', $world.HAND)
  }
}

export const portiereAbimee = {
  intensity: 1,
  color: 'black',
  name: 'Portière abimée',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Tant que j\'ai cette carte en main, je perd si je tue le Cauchemar. Je transforme cette carte en Portière abimée quand je la joue.',
  upgrade: false,
  targetted: false,
  sticky: true,
  temporary: true,
  destination: 'VOID',
  discardProtected: true,
  execute () {
    $world.LOG('cards.portiereAbimee')
    $world.ADD_CARD('portiereQuasiArrachee', $world.HAND)
  }
}

export const portiereQuasiArrachee = {
  intensity: 1,
  color: 'black',
  name: 'Portière quasi arrachée',
  description: 'Cette carte n\'est pas défaussée à la fin de mon tour. Tant que j\'ai cette carte en main, je perd si je tue le Cauchemar.',
  upgrade: false,
  targetted: false,
  sticky: true,
  temporary: true,
  destination: 'VOID',
  discardProtected: true,
  execute () {
    $world.NIGHTMARES.LA_VOITURE.PORTIERE_OUVERTE = true
    $world.LOG('cards.portiereQuasiArrachee')
  }
}
