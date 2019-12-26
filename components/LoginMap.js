import MapView, {PROVIDER_GOOGLE, Marker, Circle, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';

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
import Icon from 'react-native-ionicons';
import Block from '../common/block';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#1E88A2',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
const {height, width} = Dimensions.get('window');
const searchOptions = ['Historic', 'Restorants', 'Atm', 'Temples', 'Hotels'];
const API_Key ='AIzaSyDUqBfawG19eYuhCDntWQKosKy_Xxvlnzk';
let photoUrl;
export default class LoginMap extends Component {
  static navigationOptions = {
    // header: null,
    headerStyle: {backgroundColor: '#1E88A2'},
  };
  state = {
    range: 500,
    isCurrent: true,
    searchInput: searchOptions[0],
    lat: 0,
    lng: 0,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
    places: null,
    placePhotos:[],
    placePhotoGalery:[
      // {url:"https://lh3.googleusercontent.com/p/AF1QipNWCPOHPFqf-UyUlFuvOcdTZRh2AfaW0JLSlb6n=s1600-w600"},
      // {url:"https://lh3.googleusercontent.com/p/AF1QipNWCPOHPFqf-UyUlFuvOcdTZRh2AfaW0JLSlb6n=s1600-w600"}
  ]
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
    // alert("callLocation Called");
    Geolocation.getCurrentPosition(
      // Will give you the current location
      position => {
        this.setState({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 1000000, maximumAge: 1000},
    );

    this.watchID = Geolocation.watchPosition(position => {
      console.log(position);
      this.setState({
        lng: position.coords.longitude,
        lat: position.coords.latitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    });
    this.getPlaces();
  }

  onPressZoomIn() {
    let ltDelta = this.state.latitudeDelta / 2;
    let lgDelta = this.state.longitudeDelta / 2;
    this.setState({
      latitudeDelta: ltDelta,
      longitudeDelta: lgDelta,
    });
  }

  onPressZoomOut() {
    let ltDelta = this.state.latitudeDelta * 2;
    let lgDelta = this.state.longitudeDelta * 2;
    this.setState({
      latitudeDelta: ltDelta,
      longitudeDelta: lgDelta,
    });
  }
  renderSearch = ({item}) => {
    return (
      <Block
        center
        style={{height: 30, borderRadious: 10, backgroundColor: '#2a0b7d'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#bfaded'}}>
          {item}
        </Text>
      </Block>
    );
  };
  sliderChange = range => {
    this.setState(() => {
      return {
        range: parseFloat(range),
        isRange: false,
      };
    });
    this.getPlaces();
  };
  renderItem = ({item}) => {
    return (
      <Block>
        <Image
          source={{uri:item.url}}
          style={{
            height: 130,
            width: 200,
            borderColor: 'dark-blue',
            borderWidth: 0.8,
            borderRadius: 10,
          }}></Image>
      </Block>
    );
  };
  getUrlWithParameter = (lat, lng, radius, type, API) => {
    // //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=API_Key
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const location = `location=${lat},${lng}&radius=${radius}`;
    const dataType = `&type=${type}`;
    const key = `&key=${API}`;
    return `${url}${location}${dataType}${key}`;
  };
  
   async getPhotoPlace(photos,placeName){
      const images=this.state.placePhotoGalery;
    //https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY
   await fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${photos[0].photo_reference}&key=${API_Key}`)
    .then(res=>{
      images.push({name:placeName,url:res.url});
    })
      this.setState({
        placePhotoGalery:images
      })
      console.log(images);
  }
  
 async getPlaces(){
    const url = this.getUrlWithParameter(
      this.state.lat,
      this.state.lng,
      this.state.range,
      this.state.searchInput,
      API_Key,
    );
    fetch(url)
      .then(data => data.json())
      .then(res => {
        // console.log(res);
        const photos = [];
        const arrayMarkers = [];
        res.results.map((element,i)=>{
          arrayMarkers.push(
            <Marker 
            key={i}
            coordinate={{
              latitude:element.geometry.location.lat,
              longitude:element.geometry.location.lng
            }}
            >
        <Callout><Text>{element.name}</Text></Callout>
            </Marker>
          )
          if(element.photos){
            photos.push(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${element.photos[0].photo_reference}&key=${API_Key}`)
            // this.getPhotoPlace(element.photos,element.name)
          }
        })
        this.setState({places:arrayMarkers});
        this.setState({
          placePhotoGalery:photos
        })
      });
  };

  componentDidMount() {
    this.requestLocationPermission();
    // this.getPlaces();
    
  }
  
  render() {
    console.log(this.state.placePhotoGalery);
    return (
      <Block flex={1} style={styles.container}>
        <Block flex={2.5} style={{zIndex: -1, marginTop: -100}}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            ref={map => (this._map = map)}
            style={styles.map}
            showsUserLocation={this.state.isCurrent}
            zoomEnabled={true}
            zoomControlEnabled={true}
            region={{
              latitude: this.state.lat,
              longitude: this.state.lng,
              latitudeDelta: this.state.latitudeDelta,
              longitudeDelta: this.state.longitudeDelta,
            }}>
              {this.state.places}
            <Circle
              center={{
                latitude: this.state.lat,
                longitude: this.state.lng,
              }}
              radius={this.state.range}
              strokeColor={'blue'}
              style={{backgroundColor: '#5086de'}}></Circle>
          </MapView>
          <Block flex={false} style={{marginTop: 300, width: 40, height: 30}}>
            <TouchableOpacity onPress={() => {
              this.getPlaces();
            }}>
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
          </Block>
        </Block>
        <Block flex={1}>
          <Block flex={0.5} style={{marginTop: -30}}>
            {!this.state.isRange ? (
              <Block
                flex={false}
                center
                style={{
                  height: 25,
                  width: 150,
                  borderRadious: 15,
                  backgroundColor: '#2a0b7d',
                }}>
                <Text
                  style={
                    (styles.text,
                    {
                      fontWeight: 'bold',
                      paddingTop: 2,
                      color: '#bfaded',
                      textAlign: 'left',
                    })
                  }
                  onPress={() => this.setState({isRange: true})}>
                  Range : {String(this.state.range)} m
                </Text>
              </Block>
            ) : (
              <Block
                style={{
                  height: 25,
                  borderRadious: 15,
                  backgroundColor: '#2a0b7d',
                }}>
                <Slider
                  step={500}
                  style={{color: 'black', marginTop: 3}}
                  thumbTintColor={'#bfaded'}
                  minimumTrackTintColor={'#bfaded'}
                  maximumValue={3000}
                  onValueChange={this.sliderChange}
                  value={this.state.range}
                />
              </Block>
            )}
          </Block>

          <Block flex={0.5}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              containerCustomStyle={{position: 'absolute', padding: 5}}
              data={searchOptions}
              renderItem={this.renderSearch}
              sliderWidth={width}
              itemWidth={150}
              onSnapToItem={index =>
                this.setState({searchInput: searchOptions[index]})
              }
            />
          </Block>

          <Block flex={3} style={{marginTop: 15, marginBottom: 5}}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              containerCustomStyle={{position: 'absolute'}}
              data={this.state.placePhotoGalery}
              renderItem={this.renderItem}
              sliderWidth={width}
              itemWidth={200}
              onSnapToItem={index => this.setState({index})}
            />
          </Block>
        </Block>
      </Block>
    );
  }
}
