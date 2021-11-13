import React from 'react';
import { View, Platform } from 'react-native';
import {  createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator ,createAppContainer } from 'react-navigation-stack';
import Decks from './components/Decks';
import DeckNew from './components/DeckNew';
import Deck from './components/Deck';
import AddCard from './components/AddCard';
import Question from './components/Question';
import QuestionGame from './components/QuestionGame';
import AppStatusBar from './components/AddCard';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './utils/colors';
import { styles } from './utils/styles';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/notification';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends React.Component {
	componentDidMount() {
	  setLocalNotification()
	}
  
	render() {
	  return (
		<Provider store={createStore(reducer)}>
		  <View style={styles.container}>
			<AppStatusBar backgroundColor={colors.ASPHALT} barStyle="light-content" />
			<AppNavigation/>
		  </View>
		</Provider>
	  );
	}
  }
  
  const Tabs = createBottomTabNavigator({
	Decks: {
		  screen: Decks,
		  navigationOptions: {
			  tabBarLabel: 'Deck list',
			  tabBarIcon: ({ tintColor }) => <Ionicons size={25} style={{width: 25}} color={tintColor} name="ios-albums"/>
		  }
	},
	DeckNew: {
		  screen: DeckNew,
		  navigationOptions: {
			  tabBarLabel: 'New deck',
			  tabBarIcon: ({ tintColor }) => <Ionicons size={25} style={{width: 25}} color={tintColor} name="ios-add-circle"/>
		  }
	}
  }, {
	tabBarOptions: {
		  activeTintColor: colors.YELLOW_GREEN,
		  inactiveTintColor: colors.WHITE,
		  labelStyle: {
			  fontSize: 14,
		  },
		  style: {
			  height: 56,
			  backgroundColor: Platform.OS === 'ios' ? colors.ASPHALT : colors.ASPHALT,
			  shadowColor: 'rgba(0, 0, 0, 0.24)',
			  paddingTop: Platform.OS === 'ios' ? 10 : 0 ,
			  shadowOffset: {
				  width: 0,
				  height: 3
			  },
			  shadowRadius: 6,
			  shadowOpacity: 1
		  }
	}
  });
  
  const AppNavigation = createStackNavigator({
	Home: {
		  screen: Tabs,
		  navigationOptions: {
			  header: null
		  }
	},
	Deck: {
		  screen: Deck,
		  navigationOptions: {
			  headerTintColor: colors.WHITE,
			  headerStyle: {
				  backgroundColor: colors.ASPHALT,
			  }
		  }
	},
	AddCard: {
		  screen: AddCard,
		  navigationOptions: {
			  headerTintColor: colors.WHITE,
			  headerStyle: {
				  backgroundColor: colors.ASPHALT,
			  }
		  }
	},
	Question: {
		  screen: Question,
		  navigationOptions: {
			  headerTintColor: colors.WHITE,
			  headerStyle: {
				  backgroundColor: colors.ASPHALT,
			  }
		  }
	},
	QuestionGame: {
		  screen: QuestionGame,
		  navigationOptions: {
			  headerTintColor: colors.WHITE,
			  headerStyle: {
				  backgroundColor: colors.ASPHALT,
			  }
		  }
	}
  });


