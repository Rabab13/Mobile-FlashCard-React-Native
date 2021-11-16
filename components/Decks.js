import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import DeckCard from './DeckCard'
import styles from '../utils/styles'

class Decks extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    // Add Decks data to store
    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }


  render() {
    const { decks } = this.props
    console.log(decks)

    return (
      <View style={ styles.Deckscontainer }>
        <ScrollView>
          <Text style={ styles.Decksheader }>Decks</Text>
          { Object.keys(decks).map((deckName) => (
            <DeckCard
              key={ deckName }
              title={ decks[deckName].title }
              navigation={ this.props.navigation }
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}



function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)
