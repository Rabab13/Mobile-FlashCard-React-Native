import React, { Component } from 'react'
import { View, Text, Alert} from 'react-native'
import { connect } from 'react-redux'
import { pink } from '../utils/colors'
import TextButton from './TextButton'
import styles from '../utils/styles'


class Deck extends Component {
   
   handleQuizGame = () => {
    const { navigation, title, cardsCount } = this.props
   // Adding same alert to test it on web.
    if (cardsCount === 0) {
      Alert.alert("Please Add cards to this deck",
        [
          { text: 'OK' }
        ]
      )
      alert("Please Add cards to this deck",
      [
        { text: 'OK' }
      ]
    )
    } else {
      navigation.navigate('Quiz', { title })
    }
  }

  handleAddCards = () => {
    const { title, navigation } = this.props
    navigation.navigate('AddCard', { title })
  
  }

  render() {
    const { title, cardsCount } = this.props
 
// render deck view Option to start a quiz for that deck
// Option to add a new question to the deck
    return (
      <View style={ styles.Deckcontainer}>
        <View style= {styles.deckCard }>
          <Text style={ styles.Deckheader }>
            { title }
          </Text>
          <Text style={ styles.DecksubHeader }>
            { cardsCount === 1
              ? cardsCount + ' card'
              : cardsCount + ' cards'
            }
          </Text>
        </View>
        <View>
        {/* Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the
         correct views for those activities. */}
          <TextButton
            style={ [styles.Deckbutton, { backgroundColor: pink }] }
            onPress={ this.handleQuizGame }>
              Start Quiz
          </TextButton>
          <TextButton
            style={ [styles.Deckbutton, { backgroundColor: pink }] }
            onPress={ this.handleAddCards }>
              Add Card
          </TextButton>
          </View>
      </View>
    )
  }
}

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params
  const cardsCount = decks[title].questions.length
  const deck = decks[title];
  return {
    deck,
    title,
    cardsCount
  }
}

export default connect(mapStateToProps)(Deck)
