import React, { useEffect } from 'react'
import MonsterView from '../../components/monsters/monsterView/monsterView.component'
import  I18n from '../../translation/i18n'
import { getMonster } from '../../redux/actions/monster'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectMonster,
  clearMonster,
  isLoadingMonster,
  hasError,
} from '../../redux/slices/monsterSlice'
import {Text} from 'react-native'

const MonsterDataContainer: React.FC = () => {
  // Get the monster info
  const name = "Lynel"
  const dispatch = useDispatch()
  const monsterDetails = useSelector(selectMonster)

  // Use effect to get the info
  useEffect(() => {
    //Dispatch the action
    dispatch(getMonster(name))
    return () => {
      // Clear when finish
      dispatch(clearMonster())
    }
  }, [name, dispatch])

  // Check if data has been loaded
  const isLoading = useSelector(isLoadingMonster)
  const error = useSelector(hasError)
  if (isLoading) {
    return <Text>{I18n.t('LoadData.loading')}</Text>
  } else if (error) {
    return <Text>{I18n.t('LoadData.loadingError')}</Text>
  }

  return (
    <MonsterView
      name={monsterDetails.name}
      locations={monsterDetails.locations}
      description={monsterDetails.description}
      drops={monsterDetails.drops}
      src={monsterDetails.image}
    />
  )
}

export default MonsterDataContainer
