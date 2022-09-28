export default {
  cristal_celeste: {
    name: 'Cristal céleste',
    description: `
      Les sorts de Céleste me coûtent 1 candela de moins mais les autres m'en coûtent 1 de plus.
      Cet objet m’a été dérobé par l’Organiste lors de sa trahison. J’ai l’impression qu’il l’a quelque peu perverti.
    `,
    add () {
      $world.CARD_COST.blue -= 1
      $world.CARD_COST.white -= 1
      $world.CARD_COST.purple += 1
      $world.CARD_COST.yellow += 1
      $world.CARD_COST.black += 1
    },
    remove () {
      $world.CARD_COST.blue += 1
      $world.CARD_COST.white += 1
      $world.CARD_COST.purple -= 1
      $world.CARD_COST.yellow -= 1
      $world.CARD_COST.black -= 1
    }
  },
  cristal_belarcane: {
    name: 'Cristal de Belarcane',
    description: `
      Les sorts de Belarcane me coûtent 1 candela de moins mais les autres m'en coûtent 1 de plus.
      Cet objet m’a été dérobé par l’Organiste lors de sa trahison. J’ai l’impression qu’il l’a quelque peu perverti.
    `,
    add () {
      $world.CARD_COST.blue += 1
      $world.CARD_COST.white -= 1
      $world.CARD_COST.purple -= 1
      $world.CARD_COST.yellow += 1
      $world.CARD_COST.black += 1
    },
    remove () {
      $world.CARD_COST.blue -= 1
      $world.CARD_COST.white += 1
      $world.CARD_COST.purple += 1
      $world.CARD_COST.yellow -= 1
      $world.CARD_COST.black -= 1
    }
  },
  cristal_orfeu: {
    name: 'Cristal d\'Orfeu',
    description: `
      Les sorts d'Orfeu me coûtent 1 candela de moins mais les autres m'en coûtent 1 de plus.
      Cet objet m’a été dérobé par l’Organiste lors de sa trahison. J’ai l’impression qu’il l’a quelque peu perverti.
    `,
    add () {
      $world.CARD_COST.blue += 1
      $world.CARD_COST.white -= 1
      $world.CARD_COST.purple += 1
      $world.CARD_COST.yellow -= 1
      $world.CARD_COST.black += 1
    },
    remove () {
      $world.CARD_COST.blue -= 1
      $world.CARD_COST.white += 1
      $world.CARD_COST.purple -= 1
      $world.CARD_COST.yellow += 1
      $world.CARD_COST.black -= 1
    }
  },
  patte_de_lapin: {
    name: 'Patte de lapin',
    description: `
      La difficulté des Test d’exploration est réduite de 1, pour un minimum de 1. Par contre, je récupère 1 candela de moins en explorant.
      Les pattes de lapin portent chance, c’est bien connu, mais c’est toujours un accessoire qui me met mal à l’aise, pour une raison évidente.
    `,
    add () {
      $world.CHALLENGE_BONUS += 1
      $world.TIME_GAIN -= 1
    },
    remove () {
      $world.CHALLENGE_BONUS -= 1
      $world.TIME_CANDELA_GAIN += 1
    }
  },
  montre_du_lapin_blanc: {
    name: 'Montre du lapin blanc',
    description: `
      Le décompte d’exploration augmente de 6.
      Avec cette montre, on n’est jamais en retard ! Ce n’est pas la mienne, mais celle d’un autre lapin blanc, toujours pressé.    
    `,
    add () {
      $world.MAX_TIME += 6
      $world.LEVELS[$world.CURRENT_LEVEL].time += 6
    },
    remove () {
      $world.MAX_TIME -= 6
      $world.LEVELS[$world.CURRENT_LEVEL].time -= 6
    }
  }
}
