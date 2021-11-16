// Reference https://reactnavigation.org/docs/4.x/stack-navigator/
// https://reactnavigation.org/docs/4.x/bottom-tab-navigator/
import React from 'react';
import {  createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import Decks from './Decks';
import AddDeck from './AddDeck';
import Deck from './Deck';
import AddCard from './AddCard';
import Quiz from './Quiz';
import QuizScore from './QuizScore';
import {pink, white, yellow, water} from '../utils/colors';


const Tabs = createBottomTabNavigator({
	Decks: {
		  screen: Decks,
		  navigationOptions: {
			  tabBarLabel: 'Deck list',
			  tabBarIcon: ({ tintColor }) => <Ionicons size={25}
			   style={{width: 25}} color={tintColor} name="ios-albums"/>
		  }
	},
	AddDeck: {
		  screen: AddDeck,
		  navigationOptions: {
			  tabBarLabel: 'New deck',
			  tabBarIcon: ({ tintColor }) => <Ionicons size={25} 
			  style={{width: 25}} color={tintColor} name="ios-add-circle"/>
		  }
	}
  }, {
	tabBarOptions: {
		  activeTintColor: yellow,
		  inactiveTintColor: water,
		  labelStyle: {
			  fontSize: 15,
		  },
		  style: {
			  height: 55,
			  backgroundColor: Platform.OS === 'ios' ? white : pink,
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
			  headerTintColor: white,
			  headerStyle: {
				  backgroundColor: pink,
			  }
		  }
	},
	AddCard: {
		  screen: AddCard,
		  navigationOptions: {
			  headerTintColor: white,
			  headerStyle: {
				  backgroundColor: pink,
			  }
		  }
	},
	Quiz: {
		  screen: Quiz,
		  navigationOptions: {
			  headerTintColor: white,
			  headerStyle: {
				  backgroundColor: pink,
			  }
		  }
	},
	QuizScore: {
		  screen: QuizScore,
		  navigationOptions: {
			  headerTintColor: white,
			  headerStyle: {
				  backgroundColor: pink,
			  }
		  }
	}
  });

 const container = createAppContainer(AppNavigation);

 export default container