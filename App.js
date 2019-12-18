import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import MapIntegration from './components/mapintegration';
import Login from './components/Login';
// import CurrentLocationMap from './components/map/map';
// import ImagePalmyrah from './components/Palmyrah/Image/imagePalmyrah';
// import ImageVayuresort from './components/VayuResort/Image/imageVayuresort';
import SoundPalmyrah from './components/Palmyrah/audio';

//this is main
export default class App extends Component {
  render() {
    return (
      <><View></View>
        <View style={styles.cont}>
          {/* <MapIntegration/> */}
          {/* <CurrentLocationMap/> */}
          {/* <Login/> */}
          {/* <ImagePalmyrah/> */}
          {/* <ImageVayuresort/> */}
          <SoundPalmyrah/>
          
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

