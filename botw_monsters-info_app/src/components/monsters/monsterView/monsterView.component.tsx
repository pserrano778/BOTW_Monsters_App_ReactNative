import React from 'react'
import  I18n from '../../../translation/i18n'
// Props interface
interface Props {
  name: string
  locations: string[]
  description: string
  drops: string[]
  src: string
}
import { View, Text, Image } from 'react-native'
// Cambiar con redux
const MonsterView: React.FC<Props> = (props) => {
  const name = props.name as string
  const locations = props.locations as []
  const description = props.description as string
  const drops = props.drops as []
  const src = props.src as string
 

  return (
    <View>
      
      <Text>{description}</Text>
      {locations && locations.length > 0 && (
        <Text>
          {I18n.t('MonsterDetailsPage.locations')}: {locations.join(', ')}
        </Text>
      )}
      {drops && drops.length > 0 && (
        <Text>
          {I18n.t('MonsterDetailsPage.drops')}: {drops.join(', ')}
        </Text>
      )}
    </View>
  )
}

export default MonsterView
