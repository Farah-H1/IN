import { Button,  StyleSheet, Text,TextInput, View } from 'react-native';

export default function HomeScreen ({navigation}) {
return (
    <View  style = {styles.container}>
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
width:'100%',
height:50,
marginBottom:10,
borderWidth:1,
  },
  title:{
    fontSize: 24,
    fontweight:'bold',
    marginBottom:10,
    
  },
});