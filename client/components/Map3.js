import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
//import MapViewDirections from 'react-native-map-view-directions';



const Map3 = () => {
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
     // <View >
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
        
        );
}

export default Map3

