import React from 'react'
import MonsterPreview from '../monsterPreview/monsterPreview.component'
import  I18n from '../../../translation/i18n'
import { StyleSheet, Text, ScrollView } from 'react-native';
import style from './style'
// Monster interface
interface Monster {
  name: string
  image: string
}

// Props interface
interface Props {
  monsters: Monster[],
  handlePress: (name: string) => void,
  testID?: string
}

// Function that controls all monsters
const MonstersList: React.FC<Props> = (props) => {
  const { monsters, handlePress, testID} = props

  if (!monsters || monsters.length === 0) {
    return <Text>{I18n.t('SearchBar.noMatches')}</Text>
  }
  return (
    <ScrollView style={style.container} testID={testID}>

        {monsters.map((monster) => (
          <MonsterPreview
            key={monster.name}
            name={monster.name}
            src={monster.image}
            handlePress={handlePress}
          />
        ))}
    </ScrollView>
  )
}

export default MonstersList
