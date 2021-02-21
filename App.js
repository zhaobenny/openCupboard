import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,  Button} from 'react-native';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
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
              secureTextEntry={true}w
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.Button}>
            <Button title="Sign In"
            onPress={() =>
              navigation.navigate('Home')
            }
            />
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
  Button: {
    width: 50,
  }

});

