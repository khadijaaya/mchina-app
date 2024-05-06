import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const FindDrive = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/drive.png')}
      />
        <Text style={styles.Text}> Please hold! we are searching for nearby drive for you</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>cancel Ride</Text>
      </TouchableOpacity>
  </View>
  )
};

export default FindDrive
const styles = StyleSheet.create({
    container: {
      padding: 25,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderWidth: 1,
    },
    
    button: {
      backgroundColor: 'blue',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
    },
    
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize:15,
      textAlign:'center',
    },
  
    Text:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:17,
      padding:20,
    },
  
    img:{
      marginLeft:70,
      width:200,
      height:200,
   },
  });
  
  //onPress={ cancelRide}