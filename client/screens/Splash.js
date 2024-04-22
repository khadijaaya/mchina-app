import React from 'react'
import { View, Text, StyleSheet, SafeAreaView,Image} from 'react-native'
 const Splash = ({navigation}) => {
    const logo = require("../assets/logo2.png")
  return (
    <SafeAreaView style={styles.contairer}  >
        <Image source={logo} style={styles.image}   /> 
        <Text style={styles.pagetitle} onPress={() => navigation.navigate("Login")}> MCHINA </Text>    
    </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({
    contairer: {

        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f8f8ff", 
   },
    image:{
        height : 300,
        width : 320,
        left: 50,
       // alignContent:"center",
    },
    pagetitle:{
      bottom : 60,
      fontSize:40,
      fontWeight: "bold",
      textAlign: "center",
      color:"#000000", 
      //marginBottom: 30, 
  },
});

export default Splash