import React from 'react'
import { View, Button } from 'react-native'
import  I18n from '../../../translation/i18n'
import style from './style'
// Props interface
interface Props {
  onPress: () => void
}

const AddMonsterButton: React.FC<Props> = (props) => {
  const { onPress } = props

  return <View style={style.button}><Button onPress={onPress} title={I18n.t('MonsterListPage.addMonster')} /></View>
}

export default AddMonsterButton
