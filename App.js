import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import React, { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
      <Stack.Screen name="weekly"
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
          <Text>INSERT PNG</Text>
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

const home = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text onPress={() =>
            navigation.navigate('weekly')
        }>WEEKLY</Text>
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
});

