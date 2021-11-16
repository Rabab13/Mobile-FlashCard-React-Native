import React, { Component } from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppNavigation from './components/Navigation'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'
import styles from './utils/styles'


class App extends Component {
	componentDidMount() {
	  setLocalNotification()
	}
  
	render() {
	  return (
		<Provider store={createStore(reducer)}>
		  <View style={styles.container}> 
			<AppNavigation/>
		  </View>
		</Provider>
	  );
	}
  }

  export default App;


