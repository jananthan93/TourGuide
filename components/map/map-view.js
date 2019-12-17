import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CurrentPoint from './current-point';
import Icon from 'react-native-ionicons';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default class ViewMap extends Component {
  state = {
    isCurrent: false,
    lastLat: 9.749997,
    lastLong: 80.083333,
    latitudeDelta:  0.5,
    longitudeDelta: 0.5, 
  };
  
  handleRender = (status) => {
    this.setState({
      isCurrent: !status,
    });
  };
  renderLocation = () => {
    console.log('lt : ' + this.state.latitudeDelta + ' lg : ' + this.state.longitudeDelta);

    return (
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        ref= {map => this._map = map}
        style={styles.map}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        region={{
          latitude: this.state.lastLat,
          longitude: this.state.lastLong,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta:this.state.longitudeDelta,
        }}>
        </MapView>
    );
  };
  onPressZoomIn() {
    let ltDelta= this.state.latitudeDelta / 2;
    let lgDelta = this.state.longitudeDelta / 2;
    this.setState({
      latitudeDelta:ltDelta,
      longitudeDelta:lgDelta
    })
    
  }
  
  onPressZoomOut() {
    let ltDelta= this.state.latitudeDelta * 2;
    let lgDelta = this.state.longitudeDelta * 2;
    this.setState({
      latitudeDelta:ltDelta,
      longitudeDelta:lgDelta
    })
  }
  
  render() {
    console.log('lt : ' + this.state.latitudeDelta + ' lg : ' + this.state.longitudeDelta);
    return (
      <View style={styles.container}>
        {!this.state.isCurrent ? (
          <>{this.renderLocation()}</>
        ) : (
          <CurrentPoint />
        )}
        <View style={{marginTop: 400}}>
          <TouchableOpacity onPress={() => this.handleRender(this.state.isCurrent)}>
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
        </View>
      </View>
    );
  }
}