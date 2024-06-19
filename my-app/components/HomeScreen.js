import { NavigationContainer } from '@react-navigation/native';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeScreen({ route }) {
  const { name, email } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <View>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileEmail}>{email}</Text>
          </View>
          <Icon name='account-circle' size={50} style={styles.profileIcon} />
        </View>
      </View>
      <View style={styles.search}>
        <Icon name="magnify" size={24}/>
        <TextInput
        placeholder='Search a job or position'
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileIcon: {
    marginRight: 16,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  profileEmail: {
    color: 'gray',
    fontSize: 14,
  },
  search:{
    backgroundColor: '#f2f2f2',
    width: 250,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 16,
    borderRadius: 8 
  }
});