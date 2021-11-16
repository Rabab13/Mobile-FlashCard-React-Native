import AsyncStorage  from '@react-native-async-storage/async-storage'
import { QUIZ_STORAGE_KEY, setData } from './_DATA'


export function getDecks() {
  return AsyncStorage.getItem(QUIZ_STORAGE_KEY)
    .then(setData)
}

export function addDeck({ deckID, entry }) {
  return AsyncStorage.mergeItem(QUIZ_STORAGE_KEY, JSON.stringify({
    [deckID]: entry
  }))
}


