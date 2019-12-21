import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './common/home';
import SoundModal from "./components/audio/soundModal"

export default class App extends Component {
  render() {
    return (
      <>
          {/* <SoundModal/> */}
          <Home/>
      </>
    )
  }
}
