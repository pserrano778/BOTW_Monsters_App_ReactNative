import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width/280;
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    marginTop: 20
  }
})

export default styles