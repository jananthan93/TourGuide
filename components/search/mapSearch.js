import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import _ from 'lodash';

export default class MapSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      latitude: 0,
      longitude: 0,
      // destination: '',
      locationPredictions: [],
      locationCoordinate:[]
    };
    this.onChangeDestinationDebounced = _.debounce(
      this.onChangeDestination,
      1000,
    );
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: true, maximumAge: 2000, timeout: 20000},
    );
  }
  async onChangeDestination(destination) {
    this.setState({destination});
    const apiURL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAf3iVpPkVee180_v_HL4XoWV18O0471Pc&input=${destination}&location=${this.state.latitude},${this.state.longitude}&radius=2000`;

    const result = await fetch(apiURL);
    const jsonResult = await result.json();
    this.setState({locationPredictions: jsonResult.predictions});
    // console.log(jsonResult);
  }

  async getLocCoordinates(destination,placeid){
      const coordUrl=`https://maps.googleapis.com/maps/api/place/details/json?input=${destination}&place_id=${placeid}&key=AIzaSyAf3iVpPkVee180_v_HL4XoWV18O0471Pc`;
      const result=await fetch(coordUrl);
      const jsonResult= result.json();
    //   this.setState({locationCoordinate:jsonResult.prediction})
    console.log(jsonResult);

  }

  pressedPrediction(prediction) {
    // console.log(prediction);
    Keyboard.dismiss();
    this.setState({
      locationPredictions: [],
      destination: prediction.description,
    });
    // console.log(prediction.place_id);
    // console.log(prediction.description);
    this.getLocCoordinates(prediction.destination,prediction.place_id);
    Keyboard;
  }

  render() {
    const locationPredictions = this.state.locationPredictions.map(
      prediction => (
        <TouchableHighlight
          key={prediction.id}
          onPress={() => this.pressedPrediction(prediction)}>
          <Text style={styles.locationSuggestions}>
            {prediction.description}
          </Text>
        </TouchableHighlight>
      ),
    );
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.515,
            longitudeDelta: 0.5121,
          }}
          zoomEnabled={true}
          zoomControlEnabled={true}
          showsUserLocation={true}>
          <Marker
            coordinate={{latitude: 9.6863, longitude: 80.022}}
            title={'title'}
            description={'description'}
          />
        </MapView>
        <TextInput
          placeholder="Enter Your Destination"
          style={styles.destinationInput}
          value={this.state.destination}
          onChangeText={destination => {
            this.setState({destination});
            this.onChangeDestinationDebounced(destination);
          }}
          value={this.state.destination}></TextInput>
        {locationPredictions}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // height: '100%'
  },
  destinationInput: {
    height: 40,
    borderWidth: 1,
    padding: 5,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  locationSuggestions: {
    backgroundColor: 'white',
    padding: 5,
    fontSize: 15,
    borderWidth: 0.5,
    marginLeft: 5,
    marginRight: 5,
  },
});
