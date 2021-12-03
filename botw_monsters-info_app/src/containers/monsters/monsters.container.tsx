import React, { useEffect } from 'react'
import SearchBarContainer from '../searchBar/searchBar.container'
import AddMonsterButtonContainer from './addMonsterButton.container'
import MonstersList from '../../components/monsters/monstersList/monstersList.component'
import { getAllMonsters } from '../../redux/actions/monsters'
import {
  selectAllMonstersFiltered,
  isLoadingAllMonsters,
  hasError,
} from '../../redux/slices/monstersSlice'
import { useDispatch, useSelector } from 'react-redux'
import  I18n from '../../translation/i18n'
import { View,Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import stupe from './monstersContainerStyle'
import style from './monstersContainerStyle'
// Function that controls all monsters
const MonstersContainer: React.FC = () => {
  const dispatch = useDispatch()
  const allMonstersFiltered = useSelector(selectAllMonstersFiltered)
  // Use effect to get allMonster the first time
  useEffect(() => {
    dispatch(getAllMonsters())
  }, [dispatch])

  const handlePress = (name: string) => {
    Actions.monster({monsterName: name})
  }

  // Check if data has been loaded
  const isLoading = useSelector(isLoadingAllMonsters)
  const error = useSelector(hasError)
  if (isLoading && allMonstersFiltered.length === 0) {
    return <Text>{I18n.t('LoadData.loading')}</Text>
  } else if (error) {
    return <Text>{I18n.t('LoadData.loadingError')}</Text>
  }

  return (
    <View style={style.container}>
      <SearchBarContainer />
      <MonstersList handlePress={handlePress}
        monsters={allMonstersFiltered
          .map((monster) => {
            return { name: monster.name, image: monster.image }
            // Apply Filter and Sort the array
          })
          .sort((a, b) => {
            // Compare using lowerCase
            const aName = a.name.toLowerCase()
            const bName = b.name.toLowerCase()
            // a < b
            if (aName < bName) return -1
            // a > b
            else if (aName > bName) return 1
            // Equal
            else return 0
          })}
      />
      <AddMonsterButtonContainer />
    </View>
  )
}

export default MonstersContainer
