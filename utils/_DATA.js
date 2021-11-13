import { AsyncStorage } from '@react-native-community/async-storage';
export const FLASHCARDS_STORAGE_KEY = 'MobileFlashCards:m!@?ga53dd!~:Z!9I?2';

export function formatDeckResults(results) {
	return results === null
		? setInitData()
		: JSON.parse(results);
}

function setInitData() {
    const initData = {
      ['React']:{
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

      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initData));

      return initData;
  }