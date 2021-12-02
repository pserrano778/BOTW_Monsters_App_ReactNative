import React from 'react'
import { Text } from 'react-native'

// Props interface
interface Props {
  name: string
  src: string
}

// Function that display the monster Preview
const MonstersPeview: React.FC<Props> = (props) => {
  const { name, src } = props
  
  //Return the preview with a link to the monster data
  return (
    <Text>{name}</Text>
  )
}

export default MonstersPeview
