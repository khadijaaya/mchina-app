import { View, Text,Image,SafeAreaView,StyleSheet,TouchableOpacity, TextInput, Button,Alert} from 'react-native'
import {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Location1 from 'expo-location'
import SubmitButton from '../../components/formes/SubmitButton';

const Location = () => {
    const image1 = require("../../assets/location.png")
    const[loading, setLoading]= useState(false)
    //location

    const [address,setAddress]=useState();
    const [location,setLocation]=useState();
    const [local,setLocal]= useState();
    Location1.setGoogleApiKey("")
    const getPermissions = async() => {
      let {status} = await Location1.requestForegroundPermissionsAsync();
       if (status !== 'granted') {
        console.log("Please grent location permissions");
        return;
       } 
       let currentLocation = await Location1.getCurrentPositionAsync(local);
       setLocation(currentLocation);
       console.log("Location :");
       console.log(currentLocation);
     };
    //useEffect (() => {
        
      
     // getPermissions();
    // }, []);

     const geocode= async ()=>{
        const geoCodesLocation = await Location1.geocodeAsync(address);
        console.log("Gealocation code");
        console.log(geoCodesLocation);
       
     }

     const reserveGeocode = async () => {
        const reserveGeocodeAdress = await Location1.reverseGeocodeAsync({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
        })
        console.log("reserver un geocode");
        console.log(reserveGeocodeAdress);
     }
   
    return (
      <SafeAreaView style={styles.contairer} >
          <Image source={image1} style={styles.image} />
          <Text style={styles.pagetitle}>Ne vous inquiétez pas, vos 
          données sont positions</Text>
          <TouchableOpacity style={styles.sumbitBtn} >
         <Text style={styles.btnText} onPress={() => navigation.navigate("HomeTest")}
        >Location</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
      
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
        bottom:20,
    },
    contairer: {

        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f8f8ff", 
   },
    image:{
        bottom:10,
        height : 400,
        width : 420,
        left: 20,
       // alignContent:"center",
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

export default Location
