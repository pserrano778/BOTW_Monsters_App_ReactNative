import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';
const win = Dimensions.get('window');
const ratio = win.width/280;
const styles = StyleSheet.create({
  container: {
      marginTop: 20,
      flex:1,
      backgroundColor: '#fff'
  },
 
})

export default styles