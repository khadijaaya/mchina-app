/*import { StyleSheet, View ,Text} from 'react-native'
import React from 'react'
import Map3 from './Map3'
import SelectLocalisation from './SelectLocalisation'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FindDrive from './FindDrive';
import {NavigationContainer} from '@react-navigation/native';

const HomeTest = () => {
    const Stack = createNativeStackNavigator();
  return (
    <View>
     <View >
       <Map3/> 
     </View>
    <View>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SelectLocalisation'>
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
    </NavigationContainer>
    </View>
      
    </View>
  )
}

export default HomeTest;

const styles = StyleSheet.create({})

    //<View >
       //<Map3/> 
    //</View/>
    */

    import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map3 from './Map3';
import SelectLocalisation from './SelectLocalisation';
import FindDrive from './FindDrive';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeTest = ({Navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map3 />
      </View>
      <View style={styles.navigationContainer}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SelectLocalisation'>
            <Stack.Screen
              name="SelectLocalisation"
              component={SelectLocalisation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindDrive"
              component={FindDrive}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

export default HomeTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1, // Adjust this as needed to control the size of the map component
  },
  navigationContainer: {
    flex: 1, // Adjust this as needed to control the size of the navigation component
  },
});