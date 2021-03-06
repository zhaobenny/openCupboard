import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, FlatList, Image, Button} from 'react-native';
import 'react-native-gesture-handler';
import React, { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login"
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Login"
        component={login}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home"
      component={home} />
      <Stack.Screen name="Weekly"
      component={weekly} />
      <Stack.Screen name="childrenPage"
      component={childrenPage} />
    </Stack.Navigator>
    <Stack.Screen name="childrenPage"
    component={childrenPage}></Stack.Screen>
  </NavigationContainer>
  )
}

const login =  ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
      <View style={styles.container}>
           <Image
            source={require('./assets/title.png')}
            style={{
              resizeMode: "contain",
              maxWidth: "100%",
              maxHeight: "20%",
              width: "100%",
              height: "100%",
            }}
          />
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={
            {
              width: "100%",
              maxWidth: 300,
            }
          }>
            <TouchableOpacity
              onPress={() =>
              navigation.navigate('ForgotPassword')
              }
            >
              <Text style={{
              paddingBottom: 10,
              fontSize:11,
              color: "black",
            }}
            >Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style={styles.SignIn}
            onPress={() =>
            navigation.navigate('Home')
            }
          >
            <Text style={{
              fontSize:16,
              color: "black",
            }}
            >Sign In</Text>
          </TouchableOpacity>
          </View>
        </View>
  );
}


const ForgotPassword =  ({ navigation }) => {
  return(
      <View style={styles.container}>
        <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 36, marginBottom: 25, paddingLeft: 20}}>Password reset</Text>
          <Text style={{ paddingLeft: 20}}>Forgot Password?</Text>
          <Text style={{paddingLeft: 20}}>Please enter the email used to sign up and we'll send you'll a reset link</Text>
        </View>

        <View style={styles.input}>
          <TextInput
              style={styles.TextInput}
              placeholder="Type email here"
              placeholderTextColor="#003f5c"
          />
        </View>
        <View style={{marginTop: 20}}>
            <TouchableOpacity style={styles.SignIn}
              onPress={() =>
              navigation.navigate('Login')
              }
            >
              <Text style={{
                fontSize:16,
                color: "black",
              }}
              >Continue</Text>
            </TouchableOpacity>
          </View>
      </View>
  )
}

const Tab = createBottomTabNavigator();

// this is really for tab navigation
const home = ({}) => {
  return(
    
    <Tab.Navigator
    tabBarOptions={{
      style: {
        height: 65
      },
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'rgba(0, 0, 0, 0.25)',
      activeBackgroundColor: '#aa8976',
      inactiveBackgroundColor: '#aa8976',

    }}>
      <Tab.Screen name="Home" component={homeComponent} options={{
      tabBarLabel: '',
      tabBarIcon:({color, size})=>{
       return <Ionicons name='ios-home' size={size} color={color} />
       }

    }}/>
      <Tab.Screen name="Weekly" component={weekly} options={{
      tabBarLabel: '',
      tabBarIcon:({color, size})=>{
        return <Ionicons name='book-outline' size={size} color={color} />
        }
    }}/>
      <Tab.Screen name="Resources" component={resources} options={{
      tabBarLabel: '',
      tabBarIcon:({color, size})=>{
        return <Ionicons name='albums-outline' size={size} color={color} />
        }
    }}/>
      <Tab.Screen name="Account" component={account} options={{
      tabBarLabel: '',
      tabBarIcon:({color, size})=>{
        return <Ionicons name='person-circle-outline' size={size} color={color} />
        }
    }}/>
    </Tab.Navigator>
  )
}

const homeComponent = ({}) => {
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 28, marginBottom: 10}}>Fill in your order details</Text>
      <View style={styles.inputView}>
          <TextInput
              style={styles.TextInput}
              placeholder="Address"
              placeholderTextColor="#003f5c"
          />
      </View>
      <Text style={{fontSize: 28, marginBottom: 10}}>When:</Text>
    </View>
  )
}

const childrenPage = ({}) => {
  return(
    <View style={styles.container}>
      <View style={styles.myAccount}>
      <TouchableOpacity style={styles.container}><Text style={{fontSize: 24, fontWeight: 'bold', paddingBottom: 100, margin: 10}}>Select a program to find out more</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Baby Steps {'\n'}Age 0-2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Preschooler Packs {'\n'}Age 3-5</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Grade Schooler Packs {'\n'}Age 6-12</Text></TouchableOpacity>
      </View>
    </View>
    )
}

const resources = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View style={styles.myAccount}>
      <TouchableOpacity style={styles.settingItem}><Text onPress={() =>
            navigation.navigate('childrenPage')} 
            style={{fontSize: 24, fontWeight: 'bold'}}>Children's Programs</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Upcoming Events</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Greater Vancouver Food Bank Announcements</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Community Agency Partners</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24, fontWeight: 'bold'}}>Need More Support</Text></TouchableOpacity>      
      </View>
    </View>
  )
}

const account = ({}) => {
  return(
    <View style={styles.container}>
      <View style={styles.myAccount}>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Your Account</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Past Orders</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Notifcation</Text></TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}><Text style={{fontSize: 24}}>Settings</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const weekly =  ({ navigation }) => {
  // this is crap
  // i know
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Assorted Season Fruits',
      text: 'BC Tree Fruits',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '2021 Canley Cup',
      text: "Vancouver District Students' Council",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Canned Soup Recipe',
    },
    {
      id: '58694a0f-3da1-411f-bd96-145571e29d72',
      title: 'Fifth Item',
    },
    {
      id: '58694a0f-2da1-471f-bd96-145571e29d72',
      title: 'Sixth Item',
    },
    {
      id: '53694a0f-2da1-471f-bd96-145571e29d72',
      title: 'Ninth Item',
    },
  ];

  const Item = ({ title }) => (
    <View style={{
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,}}>
      <Text style={{fontSize: 32,}}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  
  return(
    <SafeAreaView style={styles.container}>
        <Text style={{
              fontWeight: 'bold',
              fontSize:32,
              paddingTop: 50,
              color: "black",
            }}>This week's food items</Text>
        <Text style={{
              alignSelf: 'center',
              paddingLeft: 20,
              paddingTop: 10,
              fontSize: 16,
              color: "black",
            }}>Click the picture to get a quick and easy recommended recipe</Text>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={{
        width: '100%',
        maxWidth: 500,
    }}
      />
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e2d0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: "100%",
    maxWidth: 300,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth: 0.5,
  },
  SignIn: {
    borderRadius: 10,
    height: 50,
    width: 300,
    backgroundColor:"#c6ebc9",
    alignItems:'center',
    justifyContent:'center',
  },

  TextInput: {
    width: "100%",
    maxWidth: 300,
    height: 50,
    padding: 10,
    marginLeft: 20,
  },

  myAccount: {
    width: 300,
    height: 300,
    justifyContent:'center',
    fontSize: 30,
  },
  settingItem: {
    paddingVertical: 15,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor:"#c6ebc9",
    margin: 10,
  },

  forgot_button:{
    color: '#6495ed',
  },

  forgotPage:{
    flex: 1,
    backgroundColor: '#f0e2d0',
    alignItems: 'center',
  },
});

