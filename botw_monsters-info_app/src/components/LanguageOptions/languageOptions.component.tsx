import React from 'react'
import { View, Text, Button } from 'react-native';
import style from './style'

// Props interface
interface Props {
  value: string
  handleChange: (language: string) => void
}

// Event interface
interface Event {
  target: { value: string }
}

// Function that display the searchBar
const LanguageOptionsComponent: React.FC<Props> = (props) => {
  const { value, handleChange } = props

  return (
    <View style={style.buttons}>
        <Text>
          {value}
        </Text>
          <Button onPress={() => handleChange('en')} title="EN" />
          <Button onPress={() => handleChange('es')} title="ES" />
    </View>
  )
}

export default LanguageOptionsComponent
