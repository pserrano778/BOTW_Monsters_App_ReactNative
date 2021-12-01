import React, { useEffect, useState } from 'react'
import LanguageOptionsComponent from '../../components/LanguageOptions/languageOptions.component'
import I18n from '../../translation/i18n'
import { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { View, Text, Button } from 'react-native';

// Props interface
interface Props {
  value: string
  onChange: (language: string) => void
}


const LanguageOptionsContainer: React.FC<Props> = (props) => {
  
  const { value, onChange } = props

  // handle change
  const handleChange = (language: string) => {
    onChange(language)
  }
  return <View><LanguageOptionsComponent value={value} handleChange={handleChange} /></View>
}

export default LanguageOptionsContainer
