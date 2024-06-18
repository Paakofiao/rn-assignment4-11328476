import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './components/LoginScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
    intialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen"
      component={LoginScreen}
      options={{headerShown:false}}/>
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

