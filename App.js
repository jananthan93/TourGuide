import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './common/home';
import SoundPalmyrah from "./components/audio/soundModal"

export default class App extends Component {
  render() {
    return (
      <>
          {/* <SoundPalmyrah/> */}
          <Home/>
      </>
    )
  }
}
