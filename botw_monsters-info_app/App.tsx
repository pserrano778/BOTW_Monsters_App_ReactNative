import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LanguageOptionsContainer from './src/containers/languageOptions/languageOptions.container'
import Routing from './src/routing/routing'
import I18n, {changeLanguage} from './src/translation/i18n'
import { Provider } from 'react-redux'
import store from './src/redux/index'
export default function App() {
  // Set use effect to change the language when it changes
  useEffect(() => {
    changeLanguage(I18n.currentLocale())
  }, [])

  return (
    <Provider  store={store}>
      <View style={styles.container}>
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
