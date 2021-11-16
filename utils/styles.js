import { StyleSheet, Platform } from "react-native";
import { white, purple, pink,red, water } from "./colors";

const Styles = StyleSheet.create({
  // Genral App Style
  container: {
    flex: 1,
    margin: "auto",
    width: "100%",
    alignSelf: "center",
  },
   // AddCard Style
  AddCardcontainer: {
    flex: 1,
  },
  AddCardinputContainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? yellow : water,
    justifyContent: 'flex-start'
  },
  AddCardinput: {
    fontSize: 22,
    padding: 10,
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20
  },

  AddCardbutton: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    textAlign: "auto",
    marginTop: 10,
    fontSize: 20,

  },
  // AddDeck Style
  AddDeckcontainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? yellow :water ,
    justifyContent: 'flex-start',
    

  },
  AddDeckheader: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    marginTop: 20,
    color: white,
    marginBottom: 10,

  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    },
  input: {
    fontSize: 20,
    color:white,
    padding: 30,
    borderColor: 'yellow',
    borderWidth: 2,
    marginTop: 100,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20
  },
  AddDeckiosSubmitBtn: {
    backgroundColor: pink,
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20
  },
  AddDeckandroidSubmitBtn: {
    backgroundColor: pink,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 0
  },
  AddDecksubmitBtnText: {
    color: 'yellow',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center'
  },
 
  // Deck, Card Style
  card: {
    backgroundColor: pink,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    shadowRadius: 8,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  cardHeader: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: white,
    marginBottom: 15
  },
  cardSubHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: white,
    marginBottom: 10,
    textAlign: 'center'
  },
  Deckscontainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white : purple,
  },
  Decksheader: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15,
    color:white,
    marginLeft: 20,
    marginRight: 20
  },
  Deckcontainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white : water,
    justifyContent: 'space-around'
  },
  deckCard: {
    backgroundColor: pink,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    shadowRadius: 8,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  Deckheader: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 42,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center'
  },
  DecksubHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: white,
    marginBottom: 10,
    textAlign: 'center'
  },
  Deckbutton: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    marginLeft: 20,
    fontWeight: '700',
    marginRight: 20,
    marginBottom: 15
  },
  // Quiz Style
  Quizcontainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ?  pink:purple
  },
  QuizprogressContainer: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    height: 50,
   
  },
  Quizprogress: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 22,
    fontWeight: '600'
  },
  quizContainer: {
    flex: 7,
    justifyContent: 'space-around',
    margin: 20,
   
  },
  question: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15
  },
  QuizbuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  QuizanswerBtn: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    justifyContent: 'center',
    width: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15
  },
  QuizoptionBtn: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    marginLeft: '2.5%',
    marginRight: '2.5%',
    marginBottom: 15,
    marginTop: 20,
    width: '45%'
  },
  QRcontainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white :purple
  },
  QRheader: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    color: white,
    marginBottom: 15,
    marginTop: 30
  },
  QRresultsDetails: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: white
  },
  QRbutton: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  },
  Textbtn: {
    padding: 10,
    height: 50
  },
  btnText: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 22,
    fontWeight: '600',
    color: white
  }
});

export default Styles;
