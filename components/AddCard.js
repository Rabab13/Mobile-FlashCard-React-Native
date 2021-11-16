// Reference https://reactnavigation.org/docs/navigation-prop/
import React, { Component } from 'react'
import { View, TextInput, KeyboardAvoidingView,
 Platform, TouchableOpacity, Alert} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCardToDeck } from '../actions'
import TextButton from './TextButton'
import { pink } from '../utils/colors'
import styles from '../utils/styles'


// Create btn function in order to create new card.
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn }
      onPress={ onPress }>
    </TouchableOpacity>
  )
}

class AddCard extends Component {
   state = {
    question: '',
    answer: ''
  }

  handleQuestionCard = (question) => {
    this.setState(() => ({ question }))
  }

  handleAnswerCard= (answer) => {
    this.setState(() => ({ answer }))
  }

  handleAddCard = () => {
    const { dispatch, title } = this.props
    const { question, answer } = this.state
// Alert if user hit add card btn without adding question or answer
// Adding same alert to test it on web.
    if (question.length === 0 && answer.length === 0) {
      Alert.alert(
        "Please Enter a question & answer",
        [
          { text: 'OK' }
        ]
      )
      alert(
        "Please Enter a question & answer",
        [
          { text: 'OK' }
        ]
      )
    } else {
      const card = {
        question,
        answer
      }

      // Add card to deck 
      dispatch(addCardToDeck(title, card))
      this.setState(() => ({
        question: '',
        answer: ''
      }))
      // goBack - close active screen and move back in the stack
      this.goBack()
    }
  }
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { question, answer } = this.state
// render The New Question view includes a form with
//  fields for a question and answer, and a submit button.
      return(
        <View style={ styles.AddCardcontainer }>
          <KeyboardAvoidingView style={ styles.AddCardinputContainer } behavior='padding' enabled>
            <View>
              <TextInput
                style={ styles.AddCardinput }
                placeholder={ 'Question' }
                value={ question }
                onChangeText={ this.handleQuestionCard }
                multiline={ true }
                numberOfLines={ 3 }
                maxLength={ 100 }
              />
              <TextInput
                style={ styles.AddCardinput }
                placeholder={ 'Answer' }
                value={ answer }
                onChangeText={ this.handleAnswerCard}
                multiline={ true }
                numberOfLines={ 3 }
                maxLength={ 100 }
              />
            </View>
            <TextButton
              style={ [styles.AddCardbutton, { marginTop: 100,  backgroundColor: pink}] }
              onPress={ this.handleAddCard }>
              Add Card
            </TextButton>
          </KeyboardAvoidingView>
        </View>
    )
  }
}

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params

  return {
    title
  }
}

export default connect(mapStateToProps)(AddCard)
