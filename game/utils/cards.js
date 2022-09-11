import shuffle from 'just-shuffle'
import clone from 'just-clone'
import cards from '../data/cards'

export const createBaseDeck = () => {
  const colors = shuffle(['orfeu', 'belarcane', 'celeste'])
  const shield = cards[`bouclier_${colors.pop()}`]
  const attack1 = cards[`flamme_${colors.pop()}`]
  const attack2 = cards[`flamme_${colors.pop()}`]

  const deck = [
    clone(shield),
    clone(shield),
    clone(shield),

    clone(attack1),
    clone(attack1),
    clone(attack1),

    clone(attack2),
    clone(attack2),
    clone(attack2)
  ]

  return deck
}
