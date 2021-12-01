import React, { useEffect } from 'react'
import MonsterView from '../../components/monsters/monsterView/monsterView.component'
import { useParams } from 'react-router-dom'
import { getMonster } from '../../redux/actions/monster'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectMonster,
  clearMonster,
  isLoadingMonster,
  hasError,
} from '../../redux/slices/monsterSlice'
import { useTranslation } from 'react-i18next'

const MonsterDataContainer = (): JSX.Element => {
  // Get the monster info
  const name = useParams().name as string
  const dispatch = useDispatch()
  const monsterDetails = useSelector(selectMonster)
  const { t } = useTranslation('common')
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
    return <p>{t('LoadData.loading')}</p>
  } else if (error) {
    return <p>{t('LoadData.loadingError')}</p>
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
