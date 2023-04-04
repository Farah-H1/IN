import { StatusBar } from 'expo-status-bar';
import { Button,  StyleSheet, Text,TextInput, View } from 'react-native';
 //import testimg  from '../assets/boxed.jpg';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={testimg} style = {styles.backgroundimage}>

      <Text style = {styles.title} >Sign In</Text>
      </ImageBackground> */}
     
  <TextInput
  style ={styles.input}
  placeholder='Email'
  />
   <TextInput
   style ={styles.input}
  placeholder='Password'
  />
  <Button title = 'Sign In' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 24,
    fontweight:'bold',
    marginBottom:10,
    
  },
  input:{
     width:'100%',
     height:50,
  },
//   backgroundimage:{
// width:200,
// height:200,
// alignItems: 'center',
// justifyContent: 'center',

//   }
});


