import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LanguageOptionsContainer from './src/containers/languageOptions/languageOptions.container'
import I18n, {changeLanguage} from './src/translation/i18n'

export default function App() {

  // Use state to track current language
  const [lng, setLng] = useState('es')

  // Set use effect to change the language when it changes
  useEffect(() => {
    changeLanguage(lng)
    //i18next.changeLanguage(lng)
  }, [lng])

  return (
    <View style={styles.container}>
      <Text>{I18n.t('AddMonsterPage.name')}</Text>
        <LanguageOptionsContainer onChange={setLng} value={lng}/>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
