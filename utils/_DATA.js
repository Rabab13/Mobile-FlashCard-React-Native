import AsyncStorage  from '@react-native-async-storage/async-storage'

export const QUIZ_STORAGE_KEY = 'MobileFlashcards:QuizGame'

export function setData() {
  const Decks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  AsyncStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(Decks))

  return Decks
}

