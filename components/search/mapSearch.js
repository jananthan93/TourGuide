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

let YOUR_API_KEY = 'AIzaSyAf3iVpPkVee180_v_HL4XoWV18O0471Pc';
export default class MapSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      latitude: 0,
      longitude: 0,
      // destination: '',
      locationPredictions: [],
      locationCoordinate: [],
      markerPlaces: null,
      searchPlace: null,
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
    const apiURL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${YOUR_API_KEY}&input=${destination}&location=${this.state.latitude},${this.state.longitude}&radius=2000`;

    const result = await fetch(apiURL);
    const jsonResult = await result.json();
    this.setState({locationPredictions: jsonResult.predictions});

    // jsonResult.predictions.map(out=>{
    //   console.log(out.id);
    //   return out.id;
    // })
    // console.log(this.state.locationPredictions);
    this.getLocCoordinates();
this.searchTextLocation()
    // return jsonResult;
  }

  async getLocCoordinates() {
    let collectMarker = [];
    const coordUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.latitude},${this.state.longitude}&radius=5000&type=restaurant&key=${YOUR_API_KEY}`;
    const result = await fetch(coordUrl);
    const jsonResult = await result.json();
    // jsonResult.results.map(out=>{
    //   console.log(out.place_id,out.name,out.geometry.location);
    //   return out.id;
    // })
    jsonResult.results.map((out, i) => {
      collectMarker.push(
        <Marker
          key={i}
          coordinate={{
            latitude: out.geometry.location.lat,
            longitude: out.geometry.location.lng,
          }}
          title={`${out.name}`}
          icon={`${out.icon}`}></Marker>,
      );
    });
    this.setState({markerPlaces: collectMarker});
  }

  async searchTextLocation() {
    // console.log(this.state.searchPlace);

    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/output?${this.state.searchPlace}&key=${YOUR_API_KEY}`;
    const result = await fetch(searchUrl);
    const jsonResult = await result.json();
    console.log(jsonResult);
  }

  pressedPrediction(prediction) {
    Keyboard.dismiss();
    this.setState({
      locationPredictions: [],
      destination: prediction.description,
    });
    console.log(prediction.place_id);
    console.log(prediction.description);
    this.setState({searchPlace:prediction.description})
    Keyboard;
    Keyboard.dismiss();
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
          {this.state.markerPlaces}
          {/* <Marker
            coordinate={{latitude: 9.6863, longitude: 80.022}}
            title={'title'}
            description={'description'}
          /> */}
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
