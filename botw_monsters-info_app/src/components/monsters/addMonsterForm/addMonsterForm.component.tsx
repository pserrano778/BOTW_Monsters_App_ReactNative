import React from 'react'
import { Button } from 'react-native'
import  I18n from '../../../translation/i18n'
import { TextInput } from 'react-native-gesture-handler'
import {View, Text} from 'react-native'
import style from './style'
// MonsterDetails
interface MonsterDetails {
  name: string
  image: string
  description: string
  locations: string
  drops: string
}

// Event interface
interface Event {
  target: { name: string; value: string }
}

// Props interface
interface Props {
  value: MonsterDetails
  onChange: (name: string, value: string) => void
  onSubmit: () => void
}

const addMonsterFormComponent: React.FC<Props> = (props) => {
  const { value, onChange, onSubmit } = props
  return (
    <View style={style.form}>
          <Text style={style.field}>{I18n.t('AddMonsterPage.name')}</Text>
          <TextInput 
            placeholder={I18n.t('AddMonsterPage.namePlaceholder')}
            onChangeText={(input) => {onChange('name', input)}}
            value={value.name}
          />
          <Text style={style.field}>{I18n.t('AddMonsterPage.image')}</Text>
          <TextInput style={style.textField}
            placeholder={I18n.t('AddMonsterPage.imagePlaceholder')}
            onChangeText={(input) => {onChange('image', input)}}
            value={value.image}
          />

          <Text style={style.field}>{I18n.t('AddMonsterPage.description')}</Text>

          <TextInput style={style.textField}
            placeholder={I18n.t('AddMonsterPage.descriptionPlaceholder')}
            onChangeText={(input) => {onChange('description', input)}}
            value={value.description}
          />
          <Text style={style.field}>{I18n.t('AddMonsterPage.locations')}</Text>

          <TextInput style={style.textField}
            placeholder={I18n.t('AddMonsterPage.locationsPlaceholder')}
            onChangeText={(input) => {onChange('locations', input)}}
            value={value.locations}
          />
          <Text style={style.field}>{I18n.t('AddMonsterPage.drops')}</Text>
          <TextInput style={style.textField}
            placeholder={I18n.t('AddMonsterPage.dropsPlaceholder')}
            onChangeText={(input) => onChange('drops', input)}
            value={value.drops}
          />
      <Button onPress={() => {onSubmit()}} title={I18n.t('Buttons.submit')} />
    </View>
  )
}

export default addMonsterFormComponent
