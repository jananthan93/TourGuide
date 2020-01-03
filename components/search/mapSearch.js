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

let YOUR_API_KEY = 'AIzaSyDUqBfawG19eYuhCDntWQKosKy_Xxvlnzk';
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
      searchCoor:{
        lat:0,lng:0,name:''
      }
    };
    this.onChangeDestinationDebounced = _.debounce(
      this.onChangeDestination,
      1000,
    );
  }

  componentDidMount() {
    this.getCurrentLocation();
  }

getCurrentLocation(){
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

    this.getLocCoordinates();
  }

  async getLocCoordinates() {
    let collectMarker = [];
    const coordUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.latitude},${this.state.longitude}&radius=5000&type=restaurant&key=${YOUR_API_KEY}`;
    const result = await fetch(coordUrl);
    const jsonResult = await result.json();
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

  pressedPrediction(prediction) {
    Keyboard.dismiss();
    this.setState({
      locationPredictions: [],
      destination: prediction.description,
    });
    console.log(prediction.place_id);
    console.log(prediction.description);
    this.setState({searchPlace: prediction.description});
    Keyboard;
    Keyboard.dismiss();

    this.searchTextLocation();
  }

  async searchTextLocation() {
    let searchMarker = [];
    setTimeout(() => {
      console.log('searchPlace  '+this.state.searchPlace);
      fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.searchPlace}&key=AIzaSyAf3iVpPkVee180_v_HL4XoWV18O0471Pc`,
      )
        .then(res => res.json())
        .then(data => {
          console.log(data.results);
          console.log(data.results[0].geometry.location);
          this.setState({searchCoor:{lat:data.results[0].geometry.location.lat,lng:data.results[0].geometry.location.lng,name:this.state.searchPlace}})
          console.log(this.state.searchCoor.lat)
          console.log(this.state.searchCoor.lng)
          console.log(this.state.searchCoor.name)
        });
    }, 1000);
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
      <View style={styles.container} accessible={true}>
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
          {/* {this.state.markerPlaces} */}
          <Marker
            coordinate={{latitude: this.state.searchCoor.lat, longitude: this.state.searchCoor.lng}}
            title={`${this.state.searchCoor.name}`}
            pinColor="red"
          />
        </MapView>
        <TextInput
          placeholder="Enter Your Destination"
          inlineImageLeft="search_icon"
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
