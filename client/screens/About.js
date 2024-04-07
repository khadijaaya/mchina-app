import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.contairer}>
      <Text style={styles.pagetitle} > About </Text>

      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essenti</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    contairer: {

        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f8f8ff",
       
   },
    pagetitle:{
        marginTop: 70,
        margin: 15,
        fontSize:40,
        fontWeight: "300",
        textAlign: "center",
        color: "#000000", 
        marginBottom: 30, 
    },
  });

export default About;