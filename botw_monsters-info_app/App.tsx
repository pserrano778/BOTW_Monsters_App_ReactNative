import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LanguageOptionsContainer from './src/containers/languageOptions/languageOptions.container'
import Routing from './src/routing/routing'
import I18n, {changeLanguage} from './src/translation/i18n'
import { Provider } from 'react-redux'
import store from './src/redux/index'
export default function App() {

  // Use state to track current language
  const [lng, setLng] = useState('en')
  // Set use effect to change the language when it changes
  useEffect(() => {
    changeLanguage(lng)
  }, [lng])

  return (
    <Provider  store={store}>
      <View style={styles.container}>
          <LanguageOptionsContainer onChange={setLng} value={lng}/>
          <Routing/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
