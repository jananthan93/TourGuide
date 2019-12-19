import React, {Component, Children} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Alert,
} from 'react-native';
import PalmyrahImage from '../assets/Palmyrah/Image/2.jpg';
import CommonDetail from './CommonDetail';

export default class PalmyrahHouse extends Component {
  render() {
    return (
      <CommonDetail Image={PalmyrahImage} title={'Palmyra House'}>
         Palmyrah House provides everything guests need to stay refreshed,
       whether it be swimming pools, traditional well baths or trips to the
      beach. Enjoy our delicious local cuisine, made from the freshest
     local cuisine of land and sea.
      </CommonDetail>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88A2',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
