import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({handeleSubmit,btntitle, loading}) => {
  return (
    <TouchableOpacity style={styles.sumbitBtn} onPress={handeleSubmit} >
<Text style={styles.btnText} >
    {loading ? "S'il vous plaît, attendez..." : btntitle}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    
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
    }

});


export default SubmitButton