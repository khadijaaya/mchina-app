import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react'

const SelectLocalisation = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Start Point"
       // value={startPoint}
       // onChangeText={(text) => setStartPoint(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="End Point"
        //value={endPoint}
       // onChangeText={(text) => setEndPoint(text)}
      />
      <TouchableOpacity style={styles.button} 
       >
        <Text style={styles.buttonText}>Calculate Route</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectLocalisation
const styles = StyleSheet.create({
    container: {
      padding: 45,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderWidth: 1,
    },
    textInput: {
      paddingVertical: 8,
      paddingHorizontal: 8,
      marginBottom: 30,
      borderWidth: 1,
      borderColor: 'gray',
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
    },
  });
  
  //onPress={calculateRoute}