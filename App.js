import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// import MapIntegration from './components/mapintegration';
// import Login from './components/Login';
// import CurrentLocationMap from './components/map/map';
import ImagePalmyrah from './components/Palmyrah/Image/imagePalmyrah';
import ImageVayuResort from './components/Kitesurfing/Image';


export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.cont}>
          {/* <MapIntegration/> */}
          {/* <CurrentLocationMap/> */}
<<<<<<< HEAD
          {/* <Login/> */}
          <ImagePalmyrah/>
          <ImageVayuResort/>
=======
          <Login/>
          
>>>>>>> f275aae06997e97b28d56b5ca31a7395d088b77f
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

