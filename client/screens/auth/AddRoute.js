import { View, Text,StyleSheet, Image,TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/formes/InputBox';
import SubmitButton from '../../components/formes/SubmitButton';


const AddRoute = () => {
    const[heure, setHeure]= useState('')
    const[date, setDate]= useState('')
    const[nbPlace, setNbPlace]= useState('')
    const[loading, setLoading]= useState(false)
    //fonction
    //btn fct
    const handeleSubmit = () => {
      try {
        setLoading(true)
        if( !date || !nbPlace || !heure ){
          Alert.alert('Veuillez remplir tous les champs. ');
          setLoading(false);
          return;
      }
        setLoading(false);
        
        console.log('login data ==>', { date, heure, nbPlace});
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(erreur);
      }
    }
  return (
    <View style= {styles.contairer} >
        <Text style={styles.pagetitle}> ADD ROUTE </Text>
        <View style= {{marginHorizontal: 40 , }}>
         
         <InputBox placeholder={'Enter Date'}
          keyboardType= "Enter-Date"
          autoComplete="date"
          value={date}
          setValue= {setDate} />
         <InputBox placeholder={'Enter Heure'} 
         //secureTextEntry={true}
         keyboardType= "Enter-Heure"
         autoComplete="password" 
         value={heure}
          setValue= {setHeure}
         />
         <InputBox placeholder={'Enter Nomber Place'} 
         //secureTextEntry={true}
         keyboardType= "Enter Nomber Place"
         autoComplete="nbPlace" 
         value={nbPlace}
          setValue= {setNbPlace}
         />
        </View>
      <Text>{/*JSON.stringify({name, email, password, age}, null, 5)*/} </Text>
      <SubmitButton btntitle="Add" 
      loading={loading}
      handeleSubmit={handeleSubmit}
      //onPress={() => navigation.navigate("Map")}
       />
      </View>
  )
}

export default AddRoute

const styles = StyleSheet.create({
    contairer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f8f8ff",
   },
   pagetitle:{
       fontSize:40,
       fontWeight: "bold",
       textAlign: "center",
       color: "#000000", 
       marginBottom: 30, 
   },

})