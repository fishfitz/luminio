import shuffle from 'just-shuffle'
import clone from 'just-clone'
import { nanoid } from 'nanoid'
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
  ].map(card => ({ ...card, id: nanoid() }))

  return shuffle(deck)
}

export const shuffleDeck = () => {
  $world.DECK = shuffle($world.DECK)
}

export const addCard = (card) => {
  if (typeof card === 'string') card = cards[card]

  $world.DECK.push({
    ...clone(card),
    id: nanoid()
  })
}

export const removeCard = (card) => {
  $world.DECK = $world.DECK.filter(({ id }) => id !== card.id)
  shuffleDeck()
}
