import React from 'react'
import AddMonsterButton from '../../components/monsters/addMonsterButton/addMonstersButton.component'
import { useNavigate } from 'react-router-dom'

const AddMonsterButtonContainer = (): JSX.Element => {
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate('/addMonster')
  }

  return <AddMonsterButton onClick={handleClick} />
}

export default AddMonsterButtonContainer
