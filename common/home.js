import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/Login';
import CurrentLocationMap from '../components/map';
import Welcome from '../components/welcome';
import VayuResort from '../components/VayuResort';
import PalmyrahHouse from '../components/PalmyrahHouse';
import History from '../components/History';

const MainNavigator = createStackNavigator({
  welcome:{screen:Welcome},
  login: {screen: Login},
  location: {screen: CurrentLocationMap},
  vayuresort:{screen: VayuResort},
  palmyrahhouse:{screen: PalmyrahHouse},
  history:{screen: History},
  // vedio:{screen: VedioComponent},
  // image:{screen: ImageContainer},
});

const Home = createAppContainer(MainNavigator);
export default Home;