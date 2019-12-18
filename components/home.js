import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import CurrentLocationMap from './map/map';

const MainNavigator = createStackNavigator({
  login: {screen: Login},
  location: {screen: CurrentLocationMap},
});

const Home = createAppContainer(MainNavigator);
export default Home;