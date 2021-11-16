import React from 'react'
import { View, Text } from 'react-native'
import TextButton from './TextButton'
import { white, water} from '../utils/colors'
import styles from '../utils/styles'


export default function QuizScore({
  correctAnsCount,
  incorrectAnsCount,
  restartQuiz,
  backToDeck 
}) 
{
  const QutCount = correctAnsCount + incorrectAnsCount
  const percentage = (correctAnsCount / QutCount) * 100
// Render When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
// When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
// Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.
  return(
    <View style={ [styles.QRcontainer, { justifyContent: 'space-around'}] }>
      <Text style={ styles.QRheader }>Quiz Results</Text>
      <View style={{ justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 28, color:white, fontWeight: '700',
         textAlign: 'center', marginBottom: 20 }}>
          Your Score: { percentage.toFixed(0) }%
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={ styles.QRresultsDetails }>
              Correct:
          </Text>
          <Text style={ styles.QRresultsDetails }>
              { correctAnsCount } out of { QutCount }
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={ styles.QRresultsDetails }>
          Wrong:
          </Text>
          <Text style={ styles.QRresultsDetails }>
            { incorrectAnsCount } out of { QutCount }
          </Text>
        </View>
      </View>
      <View >
          <TextButton
            style={ [styles.QRbutton, { backgroundColor: water }]}
            onPress={ restartQuiz }>
              Restart Quiz
          </TextButton>
          <TextButton
            style={ [styles.QRbutton, { backgroundColor: water }]}
            onPress={ backToDeck }>
              Back to Deck
          </TextButton>
      </View>
    </View>
  )
}

