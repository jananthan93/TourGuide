import React, {Component} from 'react';
import {Text, View, StyleSheet, Modal} from 'react-native';
import Video from 'react-native-video';
import Block from '../common/block';

export default class AudioStream extends Component {
  state = {
    isVisible: false,
  };
  componentWillMount() {
    title = this.props.navigation.getParam('titleAudio', 'error');
  }
  static navigationOptions = {
    headerTitle: () => (
      <Text
        style={{
          fontSize: 30,
          textShadowOffset: {width: 4, height: 2},
          fontWeight: 'bold',
          color: '#fcf4d4',
        }}>
        {title}
      </Text>
    ),
    headerStyle: {backgroundColor: '#b4816f'},
  };

  render() {
    const source = this.props.navigation.getParam('audioSrc', '');
    return (
      <Block flex={1}>
        <Block flex={2}>
          <Video
            style={styles.backgroundVideo}
            fullscreenOrientation="all"
            onBuffer={this.onBuffer} // Callback function
            onError={this.videoError}
            source={source}
            resizeMode="contain"
            rate={1}
            volume={1}
            muted={false}
            ignoreSilentSwitch={null}
            fullscreen={true}
            
            repeat={false}
            controls={true}
          />
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // borderWidth: 2,
    backgroundColor: '#fcf4d4',
  },
  fooetrstyle: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 2,
    backgroundColor: '#fcf4d4',
  },
});
