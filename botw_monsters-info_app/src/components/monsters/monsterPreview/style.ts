import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width/280;
const styles = StyleSheet.create({
  container: {
      flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  },
  image: {
    
    width: win.width-200,
    height: 280*ratio-200,
    borderRadius: 10,
  },
  name: {
      marginTop: 15,
      marginBottom: 35,
      fontSize: 20
  }
})

export default styles