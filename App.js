import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './common/home';
// import ImagePalmyrah from './components/Palmyrah/Image/imagePalmyrah';
// import ImageVayuresort from './components/VayuResort/Image/imageVayuresort';
// import SoundPalmyrah from './components/Palmyrah/audio';
// import CurrentLocationMap from './components/map';
import SplashScreen from "./components/splashscreen"
import Welcome from "./components/welcome"
import SearchMap from "./components/searchmap"
import ModalWindow from "./common/modalwindow"
import ImageContainer from './components/ImageContainer'
import PalmyrahImage from './components/Palmyrah/PalmyrahImage';
import VayuResortImage from './components/VayuResort/VayuresortImage';
export default class App extends Component {
  render() {
    return (
      <>
         {/* <MapIntegration/> */}
          {/* <CurrentLocationMap/> */}
          {/* <ImagePalmyrah/> */}
          {/* <ImageVayuresort/> */}
          {/* <SoundPalmyrah/> */}
          {/* <Login/> */}
          {/* <Welcome/> */}
          {/* <SplashScreen></SplashScreen> */}
          <Home/>
          {/* <SearchMap/> */}
          {/* <ModalWindow></ModalWindow> */}
          {/* <PalmyrahImage/> */}
          {/* <VayuResortImage/> */}
      </>
    )
  }
}
