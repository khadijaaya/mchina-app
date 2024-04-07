import React from 'react'
import { View, Text, StyleSheet, SafeAreaView,Image} from 'react-native'
function Splash() {
    const logo = require("../assets/logo1.png")
  return (
    <SafeAreaView style={styles.contairer} >
        <Image source={logo} style={styles.image} />
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
        

    }
});

export default Splash