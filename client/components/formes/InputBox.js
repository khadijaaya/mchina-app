import { View, Text, TextInput, StyleSheet  } from 'react-native'
import React from 'react'

const InputBox = ({
    placeholder,
    autoComplete,
    keyboardType,
    secureTextEntry = false,
    value,
    setValue
}) => {
  return (
    <View>
      <TextInput style={styles.inputBox} 
      placeholder={placeholder}
      autoCorrect={false}
      autoComplete={autoComplete}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      //changer les valeurs 
      value={value}
      onChangeText={(Text) => setValue(Text)}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    
    inputBox :{
      height: 50,
      marginBottom: 20,
      backgroundColor: "#ffffff",
      borderRadius: 20 ,
      marginTop: 10,
      paddingLeft: 15,
      color: "#a5a5a5",
    },

});

export default InputBox