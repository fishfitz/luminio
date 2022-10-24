import { aura, du, de } from '../utils/french'

export const patteDeLapin = {
  name: 'Patte de lapin',
  description: `
      La difficulté des test d'exploration est réduite de 1, pour un minimum de 1. Par contre, je récupère 1 candela de moins en explorant.
      Les pattes de lapin portent chance, c'est bien connu, mais c'est toujours un accessoire qui me met mal à l'aise, pour une raison évidente.
    `,
  alter: {
    testIntensity (intensity) {
      return intensity - 1
    },
    exploreCandelaGain (gain) {
      return gain - 1
    }
  }
}

export const montreDuLapinBlanc = {
  name: 'Montre du lapin blanc',
  description: `
      Le décompte d'exploration augmente de 6.
      Avec cette montre, on n'est jamais en retard ! Ce n'est pas la mienne, mais celle d'un autre lapin blanc, toujours pressé.    
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

export const aiguilleDesReves = {
  name: 'Aiguilles des rêves',
  description: `
      Je récupère deux fois plus de candelas en harmonisant des auras. En revanche, je ne peux plus récupérer de candela par d'autres moyens.
      Cette aiguille exige beaucoup de précision pour espérer en tirer profit. Bien des songes se sont épuisés en vain en essayant.
    `,
  alter: {
    auraCandelasGain: {
      priority: -1,
      handler (gain) {
        return gain * 2
      }
    },
    exploreCandelasGain: {
      priority: -1,
      handler () {
        return 0
      }
    }
  }
}

export const eclairVivace = {
  name: 'Éclair vivace',
  description: `
      Un morceau d'éclair figé dans sa course.
      C'est un objet décoratif, mais l'avoir en poche rend vif comme l'éclair.
    `,
  alter: {
    startOfTurnDrawAmount: {
      priority: -1,
      handler (amount) {
        return $world.FIGHT_TURN === 1 ? 7 : amount
      }
    }
  }
}

export const ferAChevalRouille = {
  name: 'Fer à cheval rouillé',
  description: `
      La difficulté des test d'exploration est réduite de 1, pour un minimum de 1. Par contre, lors d'un combat, ma main de départ comportera toujours au moins une carte Ténèbres.
      Il semble que tout ce qui soit lié à la chance soit perverti dans ce château.
    `,
  alter: {
    testIntensity (intensity) {
      return intensity - 1
    }
    // TODO: always a black card if FIGHT_TURN === 1
  }
}

export const flaconRouge = {
  name: 'Flacon rouge',
  description: `
      Lorsque je tue un ennemi, je récupère 2 candelas. En revanche, je ne récupère plus de candela quand j'harmonise une aura.
      Ce flacon de verre teinté en rouge est vide. Quand je le tiens, j'ai l'impression de sentir ma colère à l'intérieur.
    `,
  on: {
    foeDeath () {
      $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + 2)
    }
  },
  alter: {
    auraCandelasGain: {
      priority: -2,
      handler () {
        return 0
      }
    }
  }
}

export const ideeSousVerre = {
  name: 'Idée sous verre',
  description: `
      Lorsque je transforme ou ajoute une carte, j'ai droit à une offre de 4 cartes au lieu de 3.
      C'est une idée lumineuse retenue dans un bocal de verre qui ressemble beaucoup à une ampoule électrique.
    `,
  add () {
    $world.DECK_EVOLUTION_AMOUNT += 1
  },
  remove () {
    $world.DECK_EVOLUTION_AMOUNT -= 1
  }
}

export const oreillerDouillet = {
  name: 'Oreiller douillet',
  description: `
      Si je me repose, je récupère 10 candelas et 1 de volonté supplémentaires.
      Même nous, les songes, nous devons dormir, seulement, nous ne rêvons pas. Seuls les humains ont le don de rêve.
    `,
  alter: {
    restCandelasGain (gain) {
      return gain + 10
    },
    restWillGain (gain) {
      return gain + 1
    }
  }
}

export const sphereNacree = {
  name: 'Sphère nacrée',
  description: `
    Au début de mon tour, au lieu de perdre toute ma Protection, j'en conserve la moitié.
    Je sens une énergie protectrice émaner de ce bel objet. Un souvenir du temps où l'Organiste était un songe de sagesse.
  `,
  alter: {
    startOfTurnProtectionLoss (protection) {
      return Math.ceil(protection / 2)
    }
  }
}

export const trefleNoir = {
  name: 'Trèfle noir',
  description: `
    La difficulté des Test d'exploration est réduite de 1, pour un minimum de 1. Par contre, mes ennemis ont une puissance accrue de 1.
    Ce trèfle à quatre feuilles porte-bonheur s'est imprégné de la sombre imergie des lieux.
  `,
  alter: {
    testIntensity (intensity) {
      return intensity - 1
    },
    foePower (power, foe) {
      return power + 1
    }
  }
}

// Cristaux
const cristalDe = (color) => ({
  name: `Cristal ${de(aura(color))}`,
  description: `
    Les sorts ${de(aura(color))} me coûtent 1 candela de moins mais les autres m'en coûtent 1 de plus.
    Un de mes cristaux magiques, j'en avais toute une collection avant de les perdre à cause de l'Organiste.    
  `,
  alter: {
    cardCost (cost, card) {
      return card.color === color || card.color === 'white' ? cost - 1 : cost + 1
    }
  }
})

export const cristalCeleste = cristalDe('blue')
export const cristalBelarcane = cristalDe('purple')
export const cristalOrfeu = cristalDe('yellow')

// Pages
const pageDu = (word, gender) => ({
  name: `Page ${du({ name: word, gender })}`,
  description: `
    Mes cartes ${word} me coûtent 2 candelas de moins.
    C'est une des pages déchirées de mon grimoire de magicien. L'Organiste a réduit ce pauvre livre en pièces !
  `,
  alter: {
    cardCost (cost, card) {
      return card.name.indexOf(word) === 0 ? cost - 2 : cost
    }
  }
})

export const pageDeLArmure = pageDu('Armure', 'fem')
export const pageDuBrasier = pageDu('Brasier')
export const pageDuGlyphe = pageDu('Glyphe')
export const pageDeLEclat = pageDu('Éclat')
export const pageDeLaMain = pageDu('Main', 'fem')
export const pageDuMot = pageDu('Mot')
export const pageDeLaRadiance = pageDu('Radiance', 'fem')
export const pageDuRayon = pageDu('Rayon')
export const pageDeLaRune = pageDu('Rune', 'fem')
export const pageDuSigne = pageDu('Signe')
export const pageDuSirop = pageDu('Sirop')
