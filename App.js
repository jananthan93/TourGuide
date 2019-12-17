import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import MapIntegration from './components/mapintegration';
import ViewMap from './components/map/map-view';

export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.cont}>
          {/* <MapIntegration/> */}
          <ViewMap/> 
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

