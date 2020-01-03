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
    radius: 1000,
    placeType: 'Restorants',
    photoPlaceGallery: [],
    key:0,
    isSetting:false,
  };
  handleNavigation=(name)=>{
    if(name==='The Palmyrah House')
    {this.props.navigation.navigate('palmyrahhouse')}
  }
  changeMarkerIcon=(k)=>{
    
    this.setState({
      key:k
    })
    
  }
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

    fetch(url)
      .then(data => data.json())
      .then(res => {
        console.log(res);
       
        setTimeout(()=>{
          this.setState({
            places:res.results
        })
        },2000)
       

        res.results.map((element, i) => {
           
          if(element.photos){
            this.getPhotoPlace(element.photos,i,element.name); 
          }
        });
        
        setTimeout(()=>{
          this.setState({
            photoPlaceGallery:photosArray
            });
        },2000) 
      });
  };
  getPhotoPlace = (photos,i,name)=>{
    ////https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY
     fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${photos[0].photo_reference}&key=${API_Key}`)
    .then(res=>{
      if(res.status==200){
        photosArray.push({url:res.url,key:i,name:name})
      }
    })
  }
  componentDidMount() {
    this.getPlaces();
  }
  render() {
    // console.log(this.state.key);
    console.log(this.state.photoPlaceGallery)
    // console.log(this.state.placeType + ' range ' + this.state.radius);
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
            {
            this.state.places.map((element, i) => (
                    <Marker
                      key={i}
                      coordinate={{
                        latitude: element.geometry.location.lat,
                        longitude: element.geometry.location.lng,
                      }}
                      onPress={()=>this.handleNavigation(element.name)}
                      >
                      <Callout>
                        <Text>{element.name}</Text>
                      </Callout>
                      {/* <View>
                      <Image
                        style={
                          i === this.state.key
                            ? styles.img_placesMarkerActive
                            : styles.img_placesMarker
                        }
                        source={require('../../assets/located.png')}
                      />
                    </View> */}
                    </Marker>
            ))
            }
            <Circle
              center={{
                latitude: this.props.lat,
                longitude: this.props.lng,
              }}
              radius={this.state.radius}
              strokeColor={'blue'}
             />
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
        {
          !this.state.isSetting ? (
            <TouchableOpacity onPress={()=>this.setState({isSetting:true})} style={{padding:2,marginTop:-80}}>
              {/* <Text style={{color:'red',zIndex:1}}>setting</Text> */}
              <Image source={require('../../assets/nearby.png')} style={{width:80,height:80,borderColor:'black',borderWidth:1,borderRadius:10,shadowColor:'gray',shadowRadius:5}}/>
              </TouchableOpacity>
          ):(

        <Block card color="gray" flex={2}>
          <NearBy
            radius={this.state.radius}
            gallery={this.state.photoPlaceGallery}
            changeRange={r => this.changeRange(r)}
            changeType={t => this.changeType(t)}
            changeMarkerIcon={k=>this.changeMarkerIcon(k)}
          />
        </Block>
          )
        }
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
  img_placesMarker: {
    flex: 1,
    width: 35,
    marginRight: 10,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  img_placesMarkerActive: {
    flex: 1,
    width: 35,
    marginRight: 10,
    marginLeft: 10,
    tintColor: 'red',
    resizeMode: 'contain',
  },
});
