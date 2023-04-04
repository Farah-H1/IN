import { Button,  StyleSheet, Text,  View } from 'react-native';
//import testimg from '../assets/sat.jpg';
export default function HomeScreen ({navigation}) {
return (
    <View  style = {styles.container}>

      {/* <ImageBackground source={testimg} style = {styles.backgroundimage}>

     
     </ImageBackground>  */}

<Text style = {styles.title}> Home</Text>
    <View style = {styles.buttonCotainer}>
        <Button
        title = 'Sign in'
        onPress = {() => navigation.navigate('SignIn')} />
      <Button
      title = 'Sign up'
        onPress = {() => navigation.navigate('SignUp')} />
    
    </View>
   
    </View>
    
);}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCotainer:{
width:'50%',
height:70,
marginBottom:1,
borderWidth:1,
  },
  title:{
    fontSize: 28,
    fontweight:'bold',
    marginBottom:2,
    
  },
//     backgroundimage:{
// width:50,
// height:50,
// alignItems: 'center',
// justifyContent: 'center',

//   },
});