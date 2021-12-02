import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from "./style"
// Props interface
interface Props {
  name: string
  src: string
  handlePress: (name: string) => void
}

// Function that display the monster Preview
const MonstersPeview: React.FC<Props> = (props) => {
  const { name, src, handlePress} = props

  //Return the preview with a link to the monster data
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => {handlePress(name)}}>
        <Image style={style.image} source={{uri:src}}/>
        <Text style={style.name}>
        {name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MonstersPeview
