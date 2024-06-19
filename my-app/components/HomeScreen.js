import { NavigationContainer } from '@react-navigation/native';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeScreen({ route }) {
  const { name, email } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={styles.cardContainer}>
          <View style={{width: 350, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginLeft: 22, fontWeight: 'bold'}}>Featured Jobs</Text>
            <Text style={{marginRight: -30, color: 'gray'}}>See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Icon name='facebook' size={35} style={{margin: 10}}/>
            <Text style={{fontWeight: 'bold', color: 'white', marginTop: 12}}>Software Engineer</Text>
            <Text style={{marginTop: 30, marginLeft: -126, color: '#f9f9f9'}}>Facebook</Text>
           <View style={styles.innerCard}>
            <Text style={{color: '#f9f9f9'}}>$280,000</Text>
            <Text style={{color: '#f9f9f9'}}>Accra, Ghana</Text>
           </View> 
          </View>
          <View style={styles.card}>
            <Icon name='google' size={35} style={{margin: 10}}/>
            <Text style={{fontWeight: 'bold', color: 'white', marginTop: 12}}>Web Developer</Text>
            <Text style={{marginTop: 30, marginLeft: -100, color: '#f9f9f9'}}>Google</Text>
           <View style={styles.innerCard}>
            <Text style={{color: '#f9f9f9'}}>$150,000</Text>
            <Text style={{color: '#f9f9f9'}}>Tema, Ghana</Text>
           </View> 
          </View>
          <View style={styles.card}>
            <Icon name='apple' size={35} style={{margin: 10}}/>
            <Text style={{fontWeight: 'bold', color: 'white', marginTop: 12}}>Software Engineer</Text>
            <Text style={{marginTop: 30, marginLeft: -126, color: '#f9f9f9'}}>Apple</Text>
           <View style={styles.innerCard}>
            <Text style={{color: '#f9f9f9', marginLeft: 24}}>$180,000</Text>
            <Text style={{color: '#f9f9f9', marginRight: -7}}>Takoradi, Ghana</Text>
           </View> 
          </View>
          <View style={styles.card}>
            <Icon name='microsoft' size={35} style={{margin: 10}}/>
            <Text style={{fontWeight: 'bold', color: 'white', marginTop: 12}}>Data Analyst</Text>
            <Text style={{marginTop: 30, marginLeft: -85, color: '#f9f9f9'}}>Microsoft</Text>
           <View style={styles.innerCard}>
            <Text style={{color: '#f9f9f9'}}>$180,000</Text>
            <Text style={{color: '#f9f9f9'}}>Kumasi, Ghana</Text>
           </View> 
          </View>
          <View style={styles.card}>
            <Icon name='youtube' size={35} style={{margin: 10}}/>
            <Text style={{fontWeight: 'bold', color: 'white', marginTop: 12}}>Cyber Seurity</Text>
            <Text style={{marginTop: 30, marginLeft: -96, color: '#f9f9f9'}}>Youtube</Text>
           <View style={styles.innerCard}>
            <Text style={{color: '#f9f9f9', marginLeft: 16}}>$180,000</Text>
            <Text style={{color: '#f9f9f9'}}>Cape Coast, Ghana</Text>
           </View> 
          </View>
          <View style={styles.card}>
            <Icon name='netflix' size={35} style={{margin: 10}}/>
            <Text style={{fontWeight: 'bold', color: 'white', marginTop: 12}}>Data Science</Text>
            <Text style={{marginTop: 30, marginLeft: -90, color: '#f9f9f9'}}>Netflix</Text>
           <View style={styles.innerCard}>
            <Text style={{color: '#f9f9f9', marginLeft: 16}}>$180,000</Text>
            <Text style={{color: '#f9f9f9'}}>Bolgatanga, Ghana</Text>
           </View> 
          </View>
          </ScrollView>
        </View>
        <View style={styles.popularCardContainer}>
          <View style={{width: 350, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ fontWeight: 'bold'}}>Popular Jobs</Text>
            <Text style={{marginRight: -30, color: 'gray'}}>See all</Text>
          </View>
            <View style={styles.popularCard}>
             <View style ={styles.popularCardText}> 
              <Icon name='yahoo' size={40}/>
              <Text style={{marginRight: 200, fontWeight: 'bold'}}> Sr Executive</Text>
              <Text style={{ fontWeight: 'bold'}}>$126,000/yr</Text>
             </View> 
             <View style ={styles.popularCardText1}> 
              <Text style={{marginLeft: 40}}> Yahoo</Text>
              <Text>Kumasi, Ghana</Text>
             </View> 
            </View>
            <View style={styles.popularCard}>
             <View style ={styles.popularCardText}> 
              <Icon name='reddit' size={40}/>
              <Text style={{marginRight: 200, fontWeight: 'bold'}}> Sr Executive</Text>
              <Text style={{ fontWeight: 'bold'}}>$76,000/yr</Text>
             </View> 
             <View style ={styles.popularCardText1}> 
              <Text style={{marginLeft: 40}}> Yahoo</Text>
              <Text>Circle, Ghana</Text>
             </View> 
            </View>
            <View style={styles.popularCard}>
             <View style ={styles.popularCardText}> 
              <Icon name='discord' size={40}/>
              <Text style={{marginRight: 200, fontWeight: 'bold'}}> Sr Executive</Text>
              <Text style={{ fontWeight: 'bold'}}>$96,000/yr</Text>
             </View> 
             <View style ={styles.popularCardText1}> 
              <Text style={{marginLeft: 40}}> Yahoo</Text>
              <Text>Osu, Ghana</Text>
             </View> 
            </View>
            <View style={styles.popularCard}>
             <View style ={styles.popularCardText}> 
              <Icon name='pinterest' size={40}/>
              <Text style={{marginRight: 200, fontWeight: 'bold'}}> Sr Executive</Text>
              <Text style={{ fontWeight: 'bold'}}>$90,000/yr</Text>
             </View> 
             <View style ={styles.popularCardText1}> 
              <Text style={{marginLeft: 40}}> Yahoo</Text>
              <Text>Cantoments, Ghana</Text>
             </View> 
            </View>
            <View style={styles.popularCard}>
             <View style ={styles.popularCardText}> 
              <Icon name='whatsapp' size={40}/>
              <Text style={{marginRight: 200, fontWeight: 'bold'}}> Sr Executive</Text>
              <Text style={{ fontWeight: 'bold'}}>$85,000/yr</Text>
             </View> 
             <View style ={styles.popularCardText1}> 
              <Text style={{marginLeft: 40}}> Yahoo</Text>
              <Text>Tema, Ghana</Text>
             </View> 
            </View>
            <View style={styles.popularCard}>
             <View style ={styles.popularCardText}> 
              <Icon name='github' size={40}/>
              <Text style={{marginRight: 200, fontWeight: 'bold'}}> Sr Executive</Text>
              <Text style={{ fontWeight: 'bold'}}>$90,000/yr</Text>
             </View> 
             <View style ={styles.popularCardText1}> 
              <Text style={{marginLeft: 40}}> Yahoo</Text>
              <Text>East Legon, Ghana</Text>
             </View> 
            </View>
            <View style={styles.popularCard}>
             <View style ={styles.popularCardText}> 
              <Icon name='instagram' size={40}/>
              <Text style={{marginRight: 200, fontWeight: 'bold'}}> Sr Executive</Text>
              <Text style={{ fontWeight: 'bold'}}>$100,000/yr</Text>
             </View> 
             <View style ={styles.popularCardText1}> 
              <Text style={{marginLeft: 40}}> Yahoo</Text>
              <Text>Takoradi, Ghana</Text>
             </View> 
            </View>
            <View style={styles.popularCard}>
             <View style ={styles.popularCardText}> 
              <Icon name='spotify' size={40}/>
              <Text style={{marginRight: 200, fontWeight: 'bold'}}> Sr Executive</Text>
              <Text style={{ fontWeight: 'bold'}}>$88,000/yr</Text>
             </View> 
             <View style ={styles.popularCardText1}> 
              <Text style={{marginLeft: 40}}> Yahoo</Text>
              <Text>Accra, Ghana</Text>
             </View> 
            </View>
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
    marginLeft: 24,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 16,
    borderRadius: 8, 
    borderRadius: 8,
    width: 250,
    flexDirection: 'row',
  },
  cardContainer:{
    marginTop: 30,
  },
  card:{
    width: 250,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#4f4fff',
    marginTop: 30,
    marginLeft: 20,
    flexDirection: 'row',
  },
  innerCard:{
    marginTop: 110,
    marginLeft: -100,
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularCardContainer:{
    marginTop: 24,
    marginLeft: 16,
  },
  popularCard:{
    marginTop: 24,
    marginLeft: -5,
    width: 395,
    height: 80,
    backgroundColor: '#f5f5f5',
  },
  popularCardText:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 16
  },
  popularCardText1:{  
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -20,
  },
});