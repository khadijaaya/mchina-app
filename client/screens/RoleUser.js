import { StyleSheet, Text, View ,TouchableOpacity,Image, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const RoleUser = () => {
  const image1= require("../assets/userdrive.png")
  return (
    <SafeAreaView style={styles.contairer} >
          <Text style={styles.pagetitle}>Etes-vous un passager ou un conducteur ?</Text>
          
          <Image source={image1} style={styles.image} />
          <TouchableOpacity style={styles.sumbitBtn} >
        <Text style={styles.btnText} onPress={() => navigation.navigate("Location")}
        >passager</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.sumbitBtn} >
        <Text style={styles.btnText} onPress={() => navigation.navigate("Location")}
        >conducteur</Text>
       </TouchableOpacity>
      <StatusBar style="auto" />
      
      </SafeAreaView>
  )
}

export default RoleUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f8f8ff",
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
    sumbitBtn: {
      top: 100,
      height: 50,
      marginHorizontal: 30,
      justifyContent: "center",
      marginBottom: 20,
      backgroundColor: "#3422F2",
      borderRadius: 20 ,
      marginTop: 10,
      paddingLeft: 15,
    },
    btnText:{
        color:"#ffffff",
        textAlign:"center",
        fontSize: 20,
        fontWeight:"400"
    },
    image:{
        top: 100,
        height : 400,
        width : 420,
        left: 20,
       // alignContent:"center",
    },
    pagetitle:{
        fontSize:16,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000", 
        marginBottom: 30, 
        bottom:20,
    },
})