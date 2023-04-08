import shuffle from 'just-shuffle'
import clone from 'just-clone'
import { nanoid } from 'nanoid'
import randomPick from 'just-random'
import cards from '../data/cards'

export const createBaseDeck = () => {
  const colors = shuffle(['Orfeu', 'Belarcane', 'Celeste'])
  const shield = cards[`bouclier${colors.pop()}`]
  const attack1 = cards[`flamme${colors.pop()}`]
  const attack2 = cards[`flamme${colors.pop()}`]

  const deck = [
    clone(shield),
    clone(shield),
    clone(shield),

    clone(attack1),
    clone(attack1),
    clone(attack1),

    clone(attack2),
    clone(attack2),
    clone(attack2),

    clone(cards.souvenirCuisant)
  ].map(card => ({ ...card, id: nanoid() }))

  return shuffle(deck)
}

export const shuffleDeck = () => {
  $world.DECK = shuffle($world.DECK)
}

export const addCard = (card, destination) => {
  if (typeof card === 'string') card = cards[card]

  if (!destination) destination = $world.DECK

  destination.push({
    ...clone(card),
    id: nanoid()
  })
}

const whiteCards = ['bombeDeLumiere', 'chapeauBougie', 'mancheAMalice', 'rayonArcEnCiel', 'resilienceDuHeros', 'soleilRadieux', 'sphereImmaculee']

export const addWhiteCard = () => {
  addCard(randomPick(whiteCards))
}

export const removeCard = (card) => {
  $world.DECK = $world.DECK.filter(({ id }) => id !== card.id)
  shuffleDeck()
}

export const evolveDeck = (type = 'replace') => {
  $world.VIEW('play')
  $world.DECK_EVOLUTION = { type, cards: [], selectedCard: null }
  for (let i = 0; i < $world.DECK_EVOLUTION_AMOUNT; i++) {
    const eligibleCards = Object.values(cards)
      .filter(({ name, intensity, color, base }) =>
        color !== 'white' &&
        color !== 'black' &&
        !base &&
        intensity === 1 &&
        !$world.DECK_EVOLUTION.cards.some(c => c.name === name))
    if (eligibleCards.length) $world.DECK_EVOLUTION.cards.push(randomPick(eligibleCards))
  }

  for (let i = 0; i < 3; i++) {
    const eligibleCards = $world.DECK
      .filter(({ id }) => !$world.DECK_EVOLUTION.cards.some(c => c.id === id))
    if (eligibleCards.length) $world.DECK_EVOLUTION.cards.push(randomPick(eligibleCards))
  }
}
