import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Circle,
  Callout
} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react';
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
import Block from '../../common/block';
import NearBy from './NearBy';
import {getUrlWithParameter, getPhotoPlace,API_Key} from './functions';
const {height, width} = Dimensions.get('window');
let photosArray=[];
export default class ViewMap extends Component {
  state = {
    places: [],
    radius: 500,
    placeType: 'Restorants',
    photoPlaceGallery: [],
  };
  changeType = t => {
    this.setState({
      placeType: t,
    });
    this.getPlaces();
  };
  changeRange = r => {
    this.setState({
      radius: parseFloat(r),
    });
    this.getPlaces();
  };
  getPlaces = () => {
    const url = getUrlWithParameter(
      this.props.lat,
      this.props.lng,
      this.state.radius,
      this.state.placeType,
    );
    let arrayMarkers = [];
    fetch(url)
      .then(data => data.json())
      .then(res => {
        console.log(res);
        this.setState({
            photoPlaceGallery:[]
        })
        arrayMarkers = [];
         photosArray=[];
        res.results.map((element, i) => {
          arrayMarkers.push(
            <Marker
              key={i}
              coordinate={{
                latitude: element.geometry.location.lat,
                longitude: element.geometry.location.lng,
              }}>
              <Callout>
                <Text>{element.name}</Text>
              </Callout>
            </Marker>,
          );
          if(element.photos){
            this.getPhotoPlace(element.photos); 
          }
        });

        setTimeout(()=>{ this.setState({
          places: arrayMarkers,
        });
      },2000)
       setTimeout(()=>{
        this.setState({
          photoPlaceGallery:photosArray
      });
       },2000) 
      });
  };
  getPhotoPlace = (photos,placeName)=>{
    ////https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY
     fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${photos[0].photo_reference}&key=${API_Key}`)
    .then(res=>{
      if(res.status==200){
        photosArray.push({url:res.url})
      }
    })
  }
  componentDidMount() {
    this.getPlaces();
  }
  render() {
    console.log(this.state.photoPlaceGallery)
    console.log(this.state.placeType + ' range ' + this.state.radius);
    return (
      <>
        <Block flex={2.5} style={{zIndex: -1}}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            ref={map => (this._map = map)}
            style={styles.map}
            showsUserLocation={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            region={{
              latitude: this.props.lat,
              longitude: this.props.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {this.state.places}
            <Circle
              center={{
                latitude: this.props.lat,
                longitude: this.props.lng,
              }}
              radius={this.state.radius}
              strokeColor={'blue'}
              style={{backgroundColor: '#5086de'}}></Circle>
          </MapView>
        </Block>
        {/* <Block
          flex={false}
          style={{
            width: 30,
            height: 50,
            backgroundColor: 'red',
            marginTop: -50,
          }}
        /> */}
        <Block card color="gray2" flex={1}>
          <NearBy
            radius={this.state.radius}
            gallery={this.state.photoPlaceGallery}
            changeRange={r => this.changeRange(r)}
            changeType={t => this.changeType(t)}

          />
        </Block>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#1E88A2',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
