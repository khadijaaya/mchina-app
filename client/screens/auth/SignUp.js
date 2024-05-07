import { View, Text,StyleSheet, Image,TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/formes/InputBox';
import SubmitButton from '../../components/formes/SubmitButton';
// const image = require ("../../assets/City-drive.png") ;
import axios from 'axios';
import { Message } from 'react-native-gifted-chat';
const SignUp = ({navigation}) => {
  //states
  const[name, setName]= useState('')
  const[age, setAge]= useState('')
  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('')
  const[loading, setLoading]= useState(false)
  //fonction
  //btn fct
  const handeleSubmit = async () => {
    try {
      setLoading(true)
      if(!name || !age || !email || !password ){
        Alert.alert('Veuillez remplir tous les champs. ');
        setLoading(false);
        return;
    }
    setLoading(false);
    const { data } = await axios.post("http://192.168.11.125:8080/api/v1/auth/register" ,{name, age, password, email}
    );
    alert( data && data.message);
    console.log("inscription data ==>", {name, age, email, password});
    } catch (error) {
      alert(error.response.data.message);
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
    onPress={() => navigation.navigate("Login")}
     />
     <Text style= {styles.linkText} >Vous avez déjà un compte? 
     {" "} <Text style={styles.link} 
     onPress={() => navigation.navigate("Login")}>Se connecter </Text> {" "}
     </Text>

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