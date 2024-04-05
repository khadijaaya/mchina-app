import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const Register = () => {
  return (
<View style= {styles.contairer} >
      <Text style={styles.pagetitle}>Register</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
    contairer: {
         flex: 1,
         justifyContent: "center",
         backgroundColor: "#e1d5c9",
    },
    pagetitle:{
        fontSize:40,
        fontWeight: "bold",
        textAlign: "center",
        color: "red",
      
    },
});

export default Register;