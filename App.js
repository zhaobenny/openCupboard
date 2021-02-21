import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, FlatList, Image} from 'react-native';
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
      <Stack.Screen name="Home"
      component={home} />
      <Stack.Screen name="Weekly"
      component={weekly} />
    </Stack.Navigator>
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
      <Text>EAT AAAA</Text>
    </View>
  )
}

const resources = ({}) => {
  return(
    <View style={styles.container}>
      <Text>imagine resources</Text>
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
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
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
    borderRadius: 30,
    width: 300,
    height: 300,
    backgroundColor:"#c6ebc9",
    alignItems:'flex-start',
    justifyContent:'center',
    fontSize: 30,
  },
  settingItem: {
    paddingVertical: 15,
    paddingLeft: 10,
  }
});

