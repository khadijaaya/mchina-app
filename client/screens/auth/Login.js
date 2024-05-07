import { View, Text,StyleSheet, Image,TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/formes/InputBox';
import SubmitButton from '../../components/formes/SubmitButton';

const Login = ({navigation}) => {
    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')
    const[loading, setLoading]= useState(false)
    //fonction
    //btn fct
    const handeleSubmit = async() => {
      try {
        setLoading(true)
        if( !email || !password ){
          Alert.alert('Veuillez remplir tous les champs. ');
          setLoading(false);
          return;
      }
      
    const {data} = await axios.post("http://192.168.11.125:8080/api/v1/auth/login" ,{password,email})
    console.log("inscription data ==>", { email, password}

    );
    alert(data && data.message);
        setLoading(false);
        
        console.log('login data ==>', { email, password});
        setLoading(false);
      } catch (error) {
        alert(error.response.data.message);
        setLoading(false);
        console.log(erreur);
      }
    }
    return (
      
      <View style= {styles.contairer} >
        <Text style={styles.pagetitle}>CONNECTION </Text>
        <View style= {{marginHorizontal: 40 , }}>
         
         <InputBox placeholder={'Adrasse Email'}
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
      <SubmitButton btntitle="Connecter" 
      loading={loading}
      handeleSubmit={handeleSubmit}
      onPress={() => navigation.navigate("Map")}
       />
       <Text style= {styles.linkText} >Vous n'avez pas de compte ? 
       {" "} <Text style={styles.link} 
       onPress={() => navigation.navigate("SignUp")}
       >S'inscrire  </Text> {" "}
        </Text>
  
      </View>
    );
}

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

export default Login