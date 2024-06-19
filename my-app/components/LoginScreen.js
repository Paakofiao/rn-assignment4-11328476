import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen({navigation}) {
    
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');

        const handleLogin = () => {
            navigation.navigate('Home', {name, email});
            setName('');
            setEmail('');
        };
    
  return (
    <View style={styles.container}>

       <View style={styles.inputContainer}>
            <Text style={styles.name}>Paa</Text>
            <Text style={styles.bold}>Welcome Back <Icon name="hand-wave" size={24} color="#fd2" /></Text>
            <Text style={styles.text}>Lets Log in and apply for jobs!</Text>
       </View>

    <View style={styles.loginContainer}>
        <TextInput 
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="black"
      />

        <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#000"/>
      <Button title='Sign In'
      onPress={handleLogin}/>
    </View>  
    <View style={styles.lineContainer}>
      <View style={styles.line} />
      <View style={styles.middleContainer}>
        <Text style={styles.middleText}>Or continue with</Text>
      </View>
      <View style={styles.line} />
    </View>
    <View style={styles.logo}>
      <Icon name='google' size={27}/>
      <Icon name='facebook' size={27}/>
      <Icon name='apple' size={27}/>
    </View>
    <Text style={{marginTop: 24}}>Don't have an account? <Text style={{color:'blue'}}>Register</Text></Text>
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
  inputContainer:{
    marginBottom: 30,
    width: 300,
  },
  loginContainer:{
    marginBottom: 50
  },
  input:{
    height: 40,
    borderColor: '#cbc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 30,
    paddingHorizontal: 8,
    width: 300
  },
  name:{
    marginBottom: 10,
    color: '#34f',
    fontSize: 24,
  },
  bold:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text:{
    fontSize: 10,
    marginBottom: 20
  },
  lineContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,

  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginHorizontal: 16,
    width: 100,
    backgroundColor: 'gray'
  },
  middleContainer: {
    paddingHorizontal: 3,
    marginVertical: 12,
  },
  middleText:{
    color: 'gray'
  },
  logo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 16,
  },
});
