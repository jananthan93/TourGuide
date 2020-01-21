import React, {Component} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Slider,
  TouchableOpacity,
  PermissionsAndroid,
  Dimensions,
  Text,
} from 'react-native';
import Block from '../common/block';
import ViewMap from './map/ViewMap';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
const {height, width} = Dimensions.get('window');

export default class LoginMap extends Component {
  static navigationOptions = {
    header: null,
    headerStyle: {backgroundColor: '#fcf4d4'},
  };
  state = {
    lat: 0,
    lng: 0,
    latitudeDelta: 0.3,
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
  handleCurrentPosition = position => {
    this.setState({
      lng: position.coords.longitude,
      lat: position.coords.latitude,
    });
  };
  callLocation() {
    // alert("callLocation Called");
    Geolocation.getCurrentPosition(
      // Will give you the current location
      position => {
        this.handleCurrentPosition(position);
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 1000000, maximumAge: 1000},
    );

    // this.watchID = Geolocation.watchPosition(position => {
    //   console.log(position);
    //   this.setState({
    //     lng: position.coords.longitude,
    //     lat: position.coords.latitude
    //   });
    // });
  }
  componentWillMount() {
    this.requestLocationPermission();
    // this.setState({
    //   lng: 79.8481,
    //   lat: 9.0639
    // });
  }

  render() {
    return (
      <Block flex={1} style={styles.container}>
        <ViewMap
          lat={this.state.lat}
          lng={this.state.lng}
          navigation={this.props.navigation}
        />
      </Block>
    );
  }
}
