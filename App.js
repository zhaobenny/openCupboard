import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,  Button} from 'react-native';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
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
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}w
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity>
            <Text onPress={() =>
            navigation.navigate('ForgotPassword')
            }
            style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          <View >
            <Button title="Outline button"
            type="outline"
            onPress={() =>
              navigation.navigate('Home')
            }
            />
          </View>
        </View>
  );
}

const Home =  ({ navigation }) => {
  return(
      <View style={styles.container}>
        <Text>HOME PAGE</Text>
      </View>
  )
}

const ForgotPassword =  ({ navigation }) => {
  return(
      <View style={styles.container}>
        <h1>Forgot Password?</h1>
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
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  Button: {
    width: 50,
  },
  forgot_button:{
    color: '#6495ed',
  }

});

