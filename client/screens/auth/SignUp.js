import { View, Text,StyleSheet, Image,TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/formes/InputBox';
import SubmitButton from '../../components/formes/SubmitButton';
// const image = require ("../../assets/City-drive.png") ;

const SignUp = () => {
  //states
  const[name, setName]= useState('')
  const[age, setAge]= useState('')
  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('')
  const[loading, setLoading]= useState(false)
  //fonction
  //btn fct
  const handeleSubmit = () => {
    try {
      setLoading(true)
      if(!name || !age || !email || !password ){
        Alert.alert('Veuillez remplir tous les champs. ');
        setLoading(false);
        return;
    }
      console.log('inscription data ==>', {name, age, email, password});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(erreur);
      
    }
  }
  return (
    
    <View style= {styles.contairer} >
      <Text style={styles.pagetitle}>INSCRIPTION</Text>
      <View style= {{marginHorizontal: 40 , }}>
       <InputBox  placeholder={'Name'} 
        value={name}
        setValue= {setName}
       />
       <InputBox placeholder={'Age'}
       value={age}
        setValue= {setAge} />
       <InputBox placeholder={'Email'}
        keyboardType= "email-address"
        autoComplete="email"
        value={email}
        setValue= {setEmail} />
       <InputBox placeholder={'Mot de passe'} 
       secureTextEntry={true}
       autoComplete="password" 
       value={password}
        setValue= {setPassword}
       />
      </View>
    <Text>{/*JSON.stringify({name, email, password, age}, null, 5)*/} </Text>
    <SubmitButton btntitle="Créer un compte" 
    loading={loading}
    handeleSubmit={handeleSubmit}
     />
     <Text style= {styles.linkText} >Vous avez déjà un compte? <Text style={styles.link} >Se connecter </Text> </Text>

    </View>
  );
};
 
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
    linkText: {
      textAlign:"center",
    },
    link: {
      color: "#3422f2",
    },
    
});

export default SignUp;