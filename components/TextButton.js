import React from 'react'
import { Text, TouchableOpacity} from 'react-native'
import styles from '../utils/styles'


export default function TextButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={ onPress } style={ [styles.Textbtn, style] }>
      <Text style={ styles.btnText }>{ children }</Text>
    </TouchableOpacity>
  )
}
