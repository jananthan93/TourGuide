import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import CurrentLocationMap from './map/map';
import Welcome from './welcome';
import VayuResort from './VayuResort';
import PalmyrahHouse from './PalmyrahHouse';

const MainNavigator = createStackNavigator({
  welcome:{screen:Welcome},
  login: {screen: Login},
  location: {screen: CurrentLocationMap},
  vayuresort:{screen: VayuResort},
  palmyrahhouse:{screen: PalmyrahHouse},
});

const Home = createAppContainer(MainNavigator);
export default Home;