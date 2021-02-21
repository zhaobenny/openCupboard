import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
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
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const login =  ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
      <View style={styles.container}>
          <Text>Hi does this work</Text>
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
          <TouchableOpacity
            style={{
              borderRadius: 10,
              height: 50,
              width: 300,
              backgroundColor:"#c6ebc9",
              alignItems:'center',
              justifyContent:'center',
            }}
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

const home =  ({ navigation }) => {
  return(
      <View style={styles.container}>
        <Text>HOME PAGE</Text>
      </View>
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
  TextInput: {
    width: "100%",
    maxWidth: 300,
    height: 50,
    padding: 10,
    marginLeft: 20,
  },
});

