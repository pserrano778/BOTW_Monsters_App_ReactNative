import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width/280;
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
  },
  image: {
    
    width: win.width-150,
    height: 280*ratio-150,
    borderRadius: 10,
  },
  name: {
      marginTop: 20,
      marginBottom:15,
      fontSize: 40,
      fontWeight: 'bold',
      alignSelf: 'center'
  },
  field: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    margin: 20,
    textAlign: 'justify'
  }
})

export default styles