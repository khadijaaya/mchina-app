import { Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Location from "./screens/auth/Location";
import Login from "./screens/auth/Login";
import About from "./screens/About";
import SignUp from "./screens/auth/SignUp";
import Splash from "./screens/Splash";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name= "SignUp" 
        component={SignUp} 
        options={{headerShown: false}}
        />
        <Stack.Screen name= "Login" 
        component={Login} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 


