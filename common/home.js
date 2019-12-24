import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/Login';
import CurrentLocationMap from '../components/LocationMap';
import Welcome from '../components/welcome';
import VayuResort from '../components/VayuResort';
import PalmyrahHouse from '../components/PalmyrahHouse';
import History from '../components/History';
import SplashScreen from '../components/splashscreen';
import VideoStream from '../components/videostream'
import ImageContainer from '../components/ImageContainer';
import LoginMap from '../components/LoginMap';
const MainNavigator = createStackNavigator({
  splash:{screen:SplashScreen},
  welcome:{screen:Welcome},
  login: {screen: Login},
  location: {screen: CurrentLocationMap},
  vayuresort:{screen: VayuResort},
  palmyrahhouse:{screen: PalmyrahHouse},
  history:{screen: History},
  vedio:{screen:VideoStream},
  image:{screen: ImageContainer},
  nearby:{screen: LoginMap},
});

const Home = createAppContainer(MainNavigator);
export default Home;