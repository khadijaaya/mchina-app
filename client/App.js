import { Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import Location from "./screens/auth/Location";
import Login from "./screens/auth/Login";
import About from "./screens/About";
import SignUp from "./screens/auth/SignUp";
import Splash from "./screens/Splash";
import Locationfct from './screens/auth/Locationfct';
import Rating from './screens/auth/Rating';
import HomeTest from './components/HomeTest';
import SelectLocalisation from './components/SelectLocalisation';
import Map2 from './components/map2';
import FindDrive from './components/FindDrive';
//import Map from './screens/auth/Map';

export default function App() {
   const Stack = createNativeStackNavigator();
   return  <HomeTest/> /*(
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
        
        <Stack.Screen name= "Locationfct" 
        component={Login} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  </NavigationContainer>
   ); */

  }
  




