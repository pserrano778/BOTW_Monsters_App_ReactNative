import React from 'react'
import AddMonsterButton from '../../components/monsters/addMonsterButton/addMonstersButton.component'
import { Actions } from 'react-native-router-flux'

const AddMonsterButtonContainer: React.FC = () => {

  const handlePress = (): void => {
    Actions.addMonster();
  }

  return (<AddMonsterButton onPress={handlePress} />)
}

export default AddMonsterButtonContainer
