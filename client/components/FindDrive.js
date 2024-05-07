import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const FindDrive = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/drive.png')}
      />
        <Text style={styles.Text} > Please hold! we are searching for nearby drive for you</Text>
      <TouchableOpacity style={styles.sumbitBtn} >
        <Text style={styles.btnText} onPress={() => navigation.navigate("SelectLocalisation")}
        >cancel Ride</Text>
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
    
    sumbitBtn: {
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