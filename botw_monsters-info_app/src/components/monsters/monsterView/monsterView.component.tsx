import React from 'react'
import  I18n from '../../../translation/i18n'
import style from './style'
// Props interface
interface Props {
  name: string
  locations: string[]
  description: string
  drops: string[]
  src: string
}
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
// Cambiar con redux
const MonsterView: React.FC<Props> = (props) => {
  const name = props.name as string
  const locations = props.locations as []
  const description = props.description as string
  const drops = props.drops as []
  const src = props.src as string
 

  return (
    <ScrollView >
      <View style={style.container}>
      <Text style={style.name}>{name}</Text>
 
      <Image style={style.image} source={{uri:src}}/>
      
      <Text style={style.text}>{description}</Text>
      {locations && locations.length > 0 && (
        <Text style={style.text}>
          <Text style={style.field}>{I18n.t('MonsterDetailsPage.locations')}: </Text>{locations.join(', ')}
        </Text>
      )}
      {drops && drops.length > 0 && (
     
      <Text style={style.text}>
        <Text style={style.field}>{I18n.t('MonsterDetailsPage.drops')}: </Text> {drops.join(', ')}
      </Text>
        
      )}
      </View>
    </ScrollView>
  )
}

export default MonsterView
