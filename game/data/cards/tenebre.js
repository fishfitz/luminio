export const souvenirCuisant = {
  intensity: 1,
  color: 'black',
  name: 'Souvenir cuisant',
  description: 'Je ne peux pas retirer cette carte de mon deck. Je pioche une carte.',
  upgrade: false,
  targetted: false,
  execute (foe) {
    $world.LOG('cards.souvenirCuisant')
    this.draw(1)
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
  execute (foe) {
    $world.LOG('cards.peurDiffuse')
  }
}
