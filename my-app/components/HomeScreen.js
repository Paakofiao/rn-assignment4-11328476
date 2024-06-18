import { NavigationContainer } from '@react-navigation/native';
import { Text,View, SafeAreaView, StyleSheet } from 'react-native';


export default function HomeScreen(){
    
    const HomeScreen = ({ route }) => {
      const { name, email } = route.params;
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Email: {email}</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        marginVertical: 10,
      },
    });