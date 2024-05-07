import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React ,{useState} from 'react';
import InputBox from './formes/InputBox';
import SubmitButton from './formes/SubmitButton';

const SelectLocalisation = ({navigation}) => {
  const [StartPoint, setStartPoint]= useState('');
  const [EndPoint, setEndPoint]= useState('');
  const[loading, setLoading]= useState(false);
  const handeleSubmit = () => {
    try {
      setLoading(true)
      if( !StartPoint || !EndPoint ){
        Alert.alert('Veuillez remplir tous les champs. ');
        setLoading(false);
        return;
    }
      setLoading(false);
      
      console.log('login data ==>', { StartPoint, EndPoint});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(erreur);
    }
  }

  return (
    <View style={styles.container}>
      
      <InputBox placeholder={'Start Point'}
          keyboardType= "Start-Point"
          autoComplete="Start-Point"
          value={StartPoint}
          // onChangeText={(text) => setStartPoint(text)}
          setValue= {setStartPoint} />
          <InputBox placeholder={'End Point'}
          keyboardType= "End-Point"
          autoComplete="End-Point"
          value={EndPoint}
          // onChangeText={(text) => setEndPoint(text)}
          setValue= {setEndPoint} />
      <TouchableOpacity style={styles.sumbitBtn} >
        <Text style={styles.btnText} onPress={() => navigation.navigate("FindDrive")}
        >calcule route</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectLocalisation
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
  
  });
  
  //onPress={calculateRoute}