import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './common/home';
import LoginMap from './components/LoginMap';
import HomeScreen from './components/HomeScreen'
// import SoundModal from "./components/audio/soundModal"
// import MapSearch from './components/search/mapSearch';
export default class App extends Component {
  render() {
    return (
      <>
          {/* <SoundModal/> */}
          {/* <Home/> */}
          <HomeScreen/>
          {/* <MapSearch></MapSearch> */}
        {/* <LoginMap/> */}
      </>
    )
  }
}
