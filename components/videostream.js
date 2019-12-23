import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
import Block from '../common/block';
import Footer from '../common/footer';

export default class VideoStream extends Component {
  componentWillMount() {
    title = this.props.navigation.getParam('titleVideo', 'error');
  }
  static navigationOptions = {
    headerTitle: () => (
      <Text
        style={{
          textShadowColor: 'blue',
          fontSize: 30,
          textShadowOffset: {width: 4, height: 2},
          textShadowRadius: 5,
          fontWeight: 'bold',
          color: 'white',
        }}>
        {title}
      </Text>
    ),
    headerStyle: {backgroundColor: '#1E88A2'},
    // header: null,
  };

  render() {
    const source = this.props.navigation.getParam('vedioSrc', '');
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
          // onLoad={(data) => { Alert.alert(' onLoad!') }}
          //onBuffer={() => { Alert.alert(onBuffer!') }}
          // onProgress={() => { Alert.alert('onProgress!') }}
          // onEnd={() => { Alert.alert('onEnd!') }}
          repeat={false}
          controls={true}
        />
        </Block>
        <Block 
          flex={1}
          center
          style={{ justifyContent:"flex-end",
            backgroundColor: '#1E88A2',
            // paddingBottom: 0,
            // paddingTop: 5,
            border: 1,
            // shadowColor: '#000',
            // shadowOffset: {width: 0, height: 2},
            // shadowOpacity: 0.8,
            // shadowRadius: 2,
          }}>
          <Footer />
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
    backgroundColor: '#1E88A2',
  },
  fooetrstyle:{
    position: 'absolute',
    bottom: 0,
    borderWidth: 2,
    backgroundColor: '#1E88A2',
  }
});
