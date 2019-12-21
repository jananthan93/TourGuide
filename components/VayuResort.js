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
import VayuResortImage from '../assets/VayuResort/Image/1.jpg';
import CommonDetail from './CommonDetail';

export default class VayuResort extends Component {
  render() {
    return (
      <CommonDetail Image={VayuResortImage} navigation={this.props.navigation}title={'Vayu Resort'}>
        It is a dream location for us Kitesurfers: Pristine Conditions,
        virtually the first kiters on the scene, 16 KM of flat water conditions
        and the most stable, consistent winds Sri Lanka has to offer ! Did we
        forget to say that the spot is just in front of the camp and you will be
        surrounded by nature sharing the elements of Earth, Wind, Water !
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
