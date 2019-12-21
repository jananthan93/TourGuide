import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

export default class VideoStream extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          style={styles.backgroundVideo}
          fullscreenOrientation="all"
          onBuffer={this.onBuffer} // Callback function
          onError={this.videoError}
          source={require('../../assets/video/1.mp4')}
          resizeMode="contain"
          rate={1}
          volume={1}
          muted={false}
          ignoreSilentSwitch={null}
          fullscreen={true}
          
          // onLoad={(data) => { Alert.alert(' onLoad!') }}
          //onBuffer={() => { Alert.alert(onBuffer!') }}
          // onProgress={() => { Alert.alert('onProgress!') }}
          // onEnd={() => { Alert.alert('onEnd!') }}
          repeat={false}
          controls={true}
      
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderWidth:2,
    backgroundColor:"#1E88A2"
  },
});
