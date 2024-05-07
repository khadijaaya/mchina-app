import { Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import Location from "./screens/auth/Location";
import Login from "./screens/auth/Login";
import About from "./screens/About";
import SignUp from "./screens/auth/SignUp";
import Splash from "./screens/Splash";
//import Rating from './screens/auth/Rating';
import HomeTest from './components/HomeTest';
import SelectLocalisation from './components/SelectLocalisation';
import FindDrive from './components/FindDrive';
import Map3 from './components/Map3';
import Location from './screens/auth/Location';
import RoleUser from './screens/RoleUser';
import AddRoute from './screens/auth/AddRoute';

export default function App() {
   const Stack = createNativeStackNavigator();
   return  (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' >
        <Stack.Screen name= "Splash" 
        component={Splash} 
        options={{headerShown: false}}
        />
        <Stack.Screen name= "Login" 
        component={Login} 
          options={{headerShown: false}}
        />
        <Stack.Screen name= "SignUp" 
        component={SignUp} 
          options={{headerShown: false}}
        />
        
        <Stack.Screen name= "Location" 
        component={Login} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  </NavigationContainer>
   ); 

  }
  




