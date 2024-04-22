
/*import React, { useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Dimensions, StyleSheet, View } from 'react-native';
import {GOOGLE_MAP_KEY} from ''
 const Locationfct=() => {
  const [state, setState]= useState({
    casablancaCords :{
      latitude:33.589886,
      longitude:-7.603869,
      latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    },
    rabatCords :{
      latitude:34.020882,
      longitude:-6.841650,
      latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    }

  })

  const {casablancaCords,rabatCords} = state
  
  
    
  return (
    <View style={styles.container}>
    <MapView initialRegion={casablancaCords}>
  <MapViewDirections
    origin={casablancaCords}
    destination={rabatCords}
    apikey={GOOGLE_MAP_KEY}
  />
</MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});
export default Locationfct */
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
//import MapViewDirections from 'react-native-map-view-directions';



const MapScreen = () => {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  const calculateRoute = () => {

    
      var NstartPoint = {startPoint} ;
      var NendPoint = {endPoint};

      var graphHopperApiKey = '52c7806e-f342-4f8e-9c95-f7388413c43b';
      var apiUrl = 'https://graphhopper.com/api/1/route?'; //build url
      apiUrl += 'point=' + startPoint;
      apiUrl += '&point=' + endPoint;
      apiUrl += '&vehicle=car';
      apiUrl += '&key=' + graphHopperApiKey;

      
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
    
        
          var distance = (data.paths[0].distance / 1000).toFixed(2);
          var duration = (data.paths[0].time / 1000/60).toFixed(2);
          

          Alert.alert(`Success`, `Distance: ${distance} km, Duration: ${duration} minutes`);
      })
      . catch(error => {
        console.error('There was an error in the order:', error);
        Alert.alert('Error', 'There was an error calculating the route.');
      });
    
  
};
  

  return (
    <View style={{ flex: 1 , }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 33.57613,
          longitude: -7.63666,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        onPress={(e) => {
          
          if (!startPoint) {
            setStartPoint(`${e.nativeEvent.coordinate.latitude},${e.nativeEvent.coordinate.longitude}`);
          } else if (!endPoint) {
            setEndPoint(`${e.nativeEvent.coordinate.latitude},${e.nativeEvent.coordinate.longitude}`);
          }
        }}
      >
       
        {startPoint && <Marker coordinate={{ latitude: parseFloat(startPoint.split(',')[0]), longitude: parseFloat(startPoint.split(',')[1]) }} />}
        {endPoint && <Marker coordinate={{ latitude: parseFloat(endPoint.split(',')[0]), longitude: parseFloat(endPoint.split(',')[1]) }} />}
       
        {routeCoordinates.length > 0 && <Polyline coordinates={routeCoordinates} strokeWidth={2} />}
      </MapView>
      <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Start Point"
        value={startPoint}
        onChangeText={(text) => setStartPoint(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="End Point"
        value={endPoint}
        onChangeText={(text) => setEndPoint(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateRoute}>
        <Text style={styles.buttonText}>Calculate Route</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};




export default MapScreen;
const styles = StyleSheet.create({
  container: {
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
});
