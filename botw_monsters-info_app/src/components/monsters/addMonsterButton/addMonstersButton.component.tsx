import React from 'react'
import {Button} from 'react-native'
import  I18n from '../../../translation/i18n'
// Props interface
interface Props {
  onPress: () => void
}

const AddMonsterButton: React.FC<Props> = (props) => {
  const { onPress } = props

  return <Button onPress={onPress} title={I18n.t('MonsterListPage.addMonster')} />
}

export default AddMonsterButton
