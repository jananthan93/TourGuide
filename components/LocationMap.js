import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {View, StyleSheet, TouchableOpacity,PermissionsAndroid} from 'react-native';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default class CurrentLocationMap extends Component {
  state = {
    isCurrent: true,
    lastLat:9.096140, 
    lastLong: 79.737247,
    latitudeDelta:  0.3,
    longitudeDelta: 0.3, 
  };
  
  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      console.log('Android :' + granted);
      if (granted === 'granted') {
        //To Check, If Permission is granted
        this.callLocation();
      } else {
        alert('Permission Denied');
      }
    } catch (err) {
      alert('err', err);
      console.warn(err);
    }
  };
  callLocation() {
    //alert("callLocation Called");
    Geolocation.getCurrentPosition(
      // Will give you the current location
      position => {
        const currentLongitude = parseFloat(
          JSON.stringify(position.coords.longitude),
        );
        const currentLatitude = parseFloat(
          JSON.stringify(position.coords.latitude),
        );
        this.setState({
            lastLong: currentLongitude,
            lastLat: currentLatitude,
            latitudeDelta:  0.0922,
            longitudeDelta: 0.0421, 
        });
    },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 1000000, maximumAge: 1000},
      );
    
    //   this.watchID = Geolocation.watchPosition(position => {
    //   //Will give you the location on location change
    //   console.log(position);
    //   const currentLongitude = parseFloat(
    //     JSON.stringify(position.coords.longitude) * 1,
    //   );
    //   const currentLatitude = parseFloat(
    //     JSON.stringify(position.coords.latitude) * 1,
    //   );
    //   this.setState({
    //       lastLong: currentLongitude,
    //       lastLat: currentLatitude,
    //       latitudeDelta:  0.0922,
    //         longitudeDelta: 0.0421, 
    //      });
    // });
  }
  componentDidMount(){
    this.requestLocationPermission();
  }
  handleMap = (status) => {
      if(!status){
          this.requestLocationPermission();
          this.setState({
              isCurrent:!status
          })
      }else{
          this.setState({
            isCurrent: false,
            lastLat: 9.749997,
            lastLong: 80.083333,
            latitudeDelta:  0.5,
            longitudeDelta: 0.5, 
          })
      }
  };
 
  // onPressZoomIn() {
  //   let ltDelta= this.state.latitudeDelta / 2;
  //   let lgDelta = this.state.longitudeDelta / 2;
  //   this.setState({
  //     latitudeDelta:ltDelta,
  //     longitudeDelta:lgDelta
  //   })
    
  // }
  
  // onPressZoomOut() {
  //   let ltDelta= this.state.latitudeDelta * 2;
  //   let lgDelta = this.state.longitudeDelta * 2;
  //   this.setState({
  //     latitudeDelta:ltDelta,
  //     longitudeDelta:lgDelta
  //   })
  // }
  
  render() {
    console.log('lt : ' + this.state.latitudeDelta + ' lg : ' + this.state.longitudeDelta);
    return (
      <View style={styles.container}>
       <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        ref= {map => this._map = map}
        style={styles.map}
        showsUserLocation={this.state.isCurrent}
        zoomEnabled={true}
        zoomControlEnabled={true}
        region={{
          latitude: this.state.lastLat,
          longitude: this.state.lastLong,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta:this.state.longitudeDelta,
        }}>
        </MapView>
        {/* <View style={{marginTop: 400,width:40,height:30}}>
          <TouchableOpacity onPress={() => this.handleMap(this.state.isCurrent)}>
            <Icon name="locate" size={48} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.zoomIn}
            onPress={() => {
              this.onPressZoomIn();
            }}>
            <Icon name="add-circle-outline" size={48} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.zoomOut}
            onPress={() => {
              this.onPressZoomOut();
            }}>
            <Icon name="remove-circle-outline" size={48} color="#444" />
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}