import React from 'react'
import { View, Text, Image } from 'react-native'
import style from "./style"
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
    <View style={style.container}>
      <Image style={style.image} source={{uri:src}}/>
      <Text style={style.name}>
      {name}</Text>
    </View>
  )
}

export default MonstersPeview
