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

export default class History extends Component {
  render() {
    return (
      <CommonDetail Image={PalmyrahImage} title={'Vayu'}>
        
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
