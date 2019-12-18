import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import MapIntegration from './components/mapintegration';
import Login from './components/Login';
import CurrentLocationMap from './components/map/map';
import SplashScreen from './components/splashscreen'
import Welcome from "./components/welcome"
export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.cont}>
          {/* <MapIntegration/> */}
          {/* <SplashScreen></SplashScreen> */}
          <Welcome></Welcome>
          {/* <Login/>
          <CurrentLocationMap/> */}
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

