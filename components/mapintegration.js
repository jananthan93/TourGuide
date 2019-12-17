import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

export default class MapIntegration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude:  0,
    };
  }


  render() {

    return (
      <>
        <MapView
          // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    borderWidth: 5,
    height: '100%',
    width: 400,
  },
});
