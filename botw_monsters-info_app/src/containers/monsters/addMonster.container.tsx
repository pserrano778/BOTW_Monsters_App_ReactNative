import React, { useState } from 'react'
import AddMonsterForm from '../../components/monsters/addMonsterForm/addMonsterForm.component'
import { addMonster } from '../../redux/actions/monsters'
import { useDispatch } from 'react-redux'
import { Actions } from 'react-native-router-flux'

// MonsterDetails
interface MonsterDetails {
  name: string
  image: string
  description: string
  locations: string
  drops: string
}

const AddMonsterContainer: React.FC = () => {
  const [monsterDetails, setMonsterDetails] = useState<MonsterDetails>({
    name: '',
    image: '',
    description: '',
    locations: '',
    drops: '',
  })

  const dispatch = useDispatch()

  // When there is a change
  const handleChange = (name: string, value: string): void => {
    setMonsterDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // When data is submited
  const handleSubmit = (): void => {
    // Create monster Object to post it
    const newMonster = {
      locations: monsterDetails.locations,
      description: monsterDetails.description,
      drops: monsterDetails.drops,
      name: monsterDetails.name,
      image: monsterDetails.image,
    }

    // Dispatch addMonster action
    dispatch(addMonster(newMonster))

    // Navigate to previous page
    Actions.main()
  }

  return (
    <AddMonsterForm
      value={monsterDetails}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}

export default AddMonsterContainer
