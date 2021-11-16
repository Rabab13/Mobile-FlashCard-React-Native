export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'


export function loadDeacks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDecks(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}


export function addCardToDeck(title, card) {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card
  }
}
