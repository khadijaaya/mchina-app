import { StyleSheet, View } from 'react-native'
import React from 'react'
import Map2 from './map2'
import SelectLocalisation from './SelectLocalisation'
import {createNativeStackNavigator} from '@react-navigation/stack'
import FindDrive from './FindDrive';
import {NavigationContainer} from '@react-navigation/native';

const HomeTest = () => {
    const Stack = createNativeStackNavigator();
  return (
    <View>
    <View >
       <Map2/> 
    </View>
    <View>
    
    <Stack.Navigator  >
        <Stack.Screen
         name= "SelectLocation" 
        component={SelectLocalisation} 
        options={{headerShown: false}}
        />
        <Stack.Screen
         name= "Find Drive" 
        component={FindDrive} 
        options={{headerShown: false}}
        />
        
      </Stack.Navigator>  
    
    </View>
      
    </View>
  )
}

export default HomeTest;

const styles = StyleSheet.create({})