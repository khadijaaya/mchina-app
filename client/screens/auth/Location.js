import { View, Text,Image,SafeAreaView,StyleSheet, TextInput} from 'react-native'
import React from 'react'


const Location = () => {
    const image1 = require("../../assets/location.png")
    return (
      <SafeAreaView style={styles.contairer} >
          <Image source={image1} style={styles.image} />
          <Text style={styles.pagetitle}>Ne vous inquiétez pas, vos données sont positions</Text>
          <TextInput >Autoriser la localisation</TextInput>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    pagetitle:{
        fontSize:16,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000", 
        marginBottom: 30, 
        bottom:120,
    },
    contairer: {
        
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f8f8ff", 
   },
    image:{
        bottom:100,
        height : 400,
        width : 420,
        left: 20,
       // alignContent:"center",
    },
    Inputbtn:{
        backgroundColor:"#000000"
      
    }
});

export default Location