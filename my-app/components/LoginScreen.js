import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen({navigation}) {
    
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');

        const handleLogin = () => {
            navigation.navigate('Home', {name, email});
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
      <Button title='Sign Up'
      onPress={handleLogin}/>
    </View>  
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
});
