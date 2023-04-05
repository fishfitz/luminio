export const alexandre = {
  intensity: 3,
  color: 'white',
  name: 'Alexandre',
  description: 'Cette carte n\'est pas défaussée et elle retourne dans ma main quand je la joue. Elle coûte 2 fois plus de Candelas. J\'augmente de 1 la jauge de confiance du rêveur.',
  upgrade: false,
  targetted: false,
  base: false,
  discardProtected: true,
  temporary: true,
  cost: cost => cost * 2,
  execute () {
    const gauge = $world.NIGHTMARES.LA_FOULE.GAUGE

    let card
    if (gauge >= 9) card = 'alexandre4'
    else if (gauge >= 6) card = 'alexandre3'
    else if (gauge >= 3) card = 'alexandre2'
    else card = 'alexandre1'

    $world.NIGHTMARES.LA_FOULE.GAUGE++
    $world.FIGHT_FOES.forEach(foe => foe?.receiveDamages(10))

    $world.LOG(`cards.${card}`)
  }
}

export const bombeDeLumiere = {
  intensity: 3,
  color: 'white',
  name: 'Bombe de lumière',
  description: 'Je mets fin à mon tour. Au début de mon prochain tour, j\'inflige à tous mes ennemis la Protection qui me reste avant de la perdre.',
  upgrade: false,
  targetted: false,
  base: false,
  endTurn: true,
  destination: 'EXILE',
  execute () {
    $world.EFFECTS.BOMBE_DE_LUMIERE = true
    $world.LOG('cards.bombeDeLumiere')
  }
}

export const chapeauBougie = {
  intensity: 3,
  color: 'white',
  name: 'Chapeau-bougie à malice',
  description: 'Cette carte me coûte aucun candela. Je pioche 5 cartes et exile cette carte.',
  upgrade: false,
  targetted: false,
  base: false,
  destination: 'EXILE',
  cost: () => 0,
  execute () {
    $world.LOG('cards.chapeauBougie')
    this.draw(5)
  }
}

export const mancheAMalice = {
  intensity: 3,
  color: 'white',
  name: 'Manche à malice',
  description: 'Je pioche 3 cartes.',
  upgrade: false,
  targetted: false,
  base: false,
  execute () {
    $world.LOG('cards.mancheAMalice')
    this.draw(3)
  }
}

export const rayonArcEnCiel = {
  intensity: 3,
  color: 'white',
  name: 'Rayon arc-en-ciel',
  description: 'Pour jouer ce sort, je dois avoir en main un sort d\'Orfeu, un sort Céleste et un sort de Belarcane. Ce sort me coûte également 6 Candelas de plus. J\'inflige à ma cible 77 Dégâts.',
  upgrade: false,
  targetted: true,
  base: false,
  playable () {
    return $world.HAND.some(c => c.color === 'yellow') && $world.HAND.some(c => c.color === 'blue') && $world.HAND.some(c => c.color === 'purple')
  },
  execute (foe) {
    $world.LOG('cards.rayonArcEnCiel', { foe })
    foe.receiveDamages(77, 'white')
  }
}

export const resilienceDuHeros = {
  intensity: 3,
  color: 'white',
  name: 'Résilience du héros',
  description: 'Je récupère 1 de Volonté et j\'exile cette carte.',
  upgrade: false,
  targetted: false,
  base: false,
  destination: 'EXILE',
  execute () {
    $world.LOG('cards.resilienceDuHeros')
    if ($world.WILL < 10) $world.WILL += 1
  }
}

export const signeDeLaVictoire = {
  intensity: 3,
  color: 'white',
  name: 'Signe de la victoire',
  description: 'J\'inflige à ma cible 7 Dégâts par carte Signe dans ma main et je défausse toutes les cartes Signe de ma main.',
  upgrade: false,
  targetted: true,
  base: false,
  tag: 'signe',
  execute (foe) {
    const isSign = c => c.tag === 'signe'
    $world.LOG('cards.signeDeLaVictoire')
    const damages = 7 * $world.HAND.filter(isSign)
    foe.receiveDamages(damages, 'white')
    $world.DISCARDED.push(...$world.HAND.filter(isSign))
    $world.HAND = $world.HAND.filter(c => !isSign(c))
  }
}

export const soleilRadieux = {
  intensity: 3,
  color: 'white',
  name: 'Soleil radieux',
  description: 'Je transforme tous les éléments de Ténèbres dans l\'aura de mes ennemis en élément de Lumière et je termine mon tour.',
  upgrade: false,
  targetted: false,
  base: false,
  endTurn: true,
  execute () {
    $world.LOG('cards.soleilRadieux')
    $world.FIGHT_FOES.forEach(foe => {
      foe.aura = foe.aura.map(() => 'white')
    })
  }
}

export const sphereImmaculee = {
  intensity: 3,
  color: 'white',
  name: 'Sphère immaculée',
  description: 'Je double ma protection.',
  upgrade: false,
  targetted: false,
  base: false,
  execute () {
    $world.LOG('cards.sphereImmaculee')
    $world.PROTECTION *= 2
    $world.SHIELD = 'white'
  }
}
