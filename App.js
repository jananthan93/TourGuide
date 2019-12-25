import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './common/home';
// import SoundModal from "./components/audio/soundModal"
// import MapSearch from './components/search/mapSearch';
export default class App extends Component {
  render() {
    return (
      <>
          {/* <SoundModal/> */}
          <Home/>
          {/* <MapSearch></MapSearch> */}
      </>
    )
  }
}
