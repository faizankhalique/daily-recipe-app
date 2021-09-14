import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '@modules/Welcome/WelcomeScreen'
import RegisterScreen from '@modules/Register/RegisterScreen'
import LoginScreen from '@modules/Login/LoginScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      cardStyle: {
        backgroundColor: 'black',
      },
    }}>
    <Stack.Screen
      options={{
        headerShown: false,
        animationEnabled: false,
        cardStyle: {
          backgroundColor: 'black',
        },
      }}
      name="Welcome"
      component={WelcomeScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
        animationEnabled: false,
        cardStyle: {
          backgroundColor: 'black',
        },
      }}
      name="Register"
      component={RegisterScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
        animationEnabled: false,
        cardStyle: {
          backgroundColor: 'black',
        },
      }}
      name="Login"
      component={LoginScreen}
    />
  </Stack.Navigator>
)
export default AuthNavigator
