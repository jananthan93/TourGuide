import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import MapIntegration from './components/mapintegration';
import Login from './components/Login';
import CurrentLocationMap from './components/map/map';


export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.cont}>
          {/* <MapIntegration/> */}
          {/* <CurrentLocationMap/> */}
          <Login/>
          
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

