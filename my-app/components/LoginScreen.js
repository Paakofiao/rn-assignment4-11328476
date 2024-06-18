import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen({navigation}) {
    
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');

        const handleLogin = () => {
            navigation.navigate()
        };
    
  return (
    <View style={styles.container}>
       
       <Text style={styles.name}>Paa</Text>
       <Text style={styles.bold}>Welcome Back</Text>
       <Text style={styles.text}>Lets Log in and apply for jobs!</Text>
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
        placeholderTextColor="#000"
        secureTextEntry={true}
/>
      <Button title='Sign Up'
      onPress={handleLogin}/>
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
  input:{
    height: 40,
    borderColor: '#cbc',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 8,
    width: 300
  },
  name:{
    marginBottom: 16,
    color: '#34f',
    fontSize: 24
  },
  bold:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16
  }
});
