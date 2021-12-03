import React from 'react'
import { SearchBar } from 'react-native-elements'
import I18n from '../../translation/i18n'
import style from './style'
import {View} from 'react-native'
interface Props {
  value: string
  onChange: (value: string) => void
}

interface Event {
  target: { value: string }
}

// Function that display the searchBar
const SearchBarComponent: React.FC<Props> = (props) => {
  const { value, onChange } = props

  // Return a searchBar
  return (
    <View style={style.searchBar}>
      <SearchBar
        placeholder={I18n.t('SearchBar.placeholder')}
        onChangeText={text => onChange(text)}
        value={value}
      />
    </View>
  )
}

export default SearchBarComponent
