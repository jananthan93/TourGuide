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
import Block from '../common/block';
import Footer from '../common/footer';
const array = [
  {
    id: 1,
    content: 'HISTORY',
    imageSrc: require('../assets/about/history.png'),
    route: 'history',
  },
  {
    id: 2,
    content: 'IMAGES',
    imageSrc: require('../assets/about/image.png'),
    route: 'image',
  },
  {
    id: 2,
    content: 'AUDIO',
    imageSrc: require('../assets/about/sound.png'),
    route: 'sound',
  },
  {
    id: 3,
    content: 'VEDIOS',
    imageSrc: require('../assets/about/vedio.png'),
    route: 'vedio',
  },
];
const PalmyrahImages = [
  {name: '', src: require('../assets/Palmyrah/Image/1.jpg')},
  {name: '', src: require('../assets/Palmyrah/Image/2.jpg')},
  {name: '', src: require('../assets/Palmyrah/Image/3.jpg')},
  {name: '', src: require('../assets/Palmyrah/Image/4.jpg')},
  {name: '', src: require('../assets/Palmyrah/Image/5.jpg')},
];
const vayuResortImages = [
  {name: '', src: require('../assets/VayuResort/Image/1.jpg')},
  {name: '', src: require('../assets/VayuResort/Image/2.jpg')},
  {name: '', src: require('../assets/VayuResort/Image/3.jpg')},
  {name: '', src: require('../assets/VayuResort/Image/4.jpg')},
  {name: '', src: require('../assets/VayuResort/Image/5.jpg')},
];
export default class CommonDetail extends Component {
  handleNavigationParams = route => {
    switch (route) {
      case 'history': {
        this.props.navigation.navigate(route, {about: this.props.title});
      }
      case 'image': {
        if (this.props.title === 'Palmyra House') {
          this.props.navigation.navigate(route, {images: PalmyrahImages});
        } else {
          this.props.navigation.navigate(route, {images: vayuResortImages});
        }
      }
      case 'vedio':{
        if (this.props.title === 'Palmyra House') {
          this.props.navigation.navigate(route, {vedioSrc:require('../assets/Palmyrah/Video/palmyrah.mp4') });
        } else {
          this.props.navigation.navigate(route, {vedioSrc:require('../assets/VayuResort/video/vayu.mp4') });
        }
      }
    }
  };
  render() {
    return (
      <Block flex={1} style={{backgroundColor: '#1E88A2'}}>
        <Block flex={1}>
          <ImageBackground
            source={this.props.Image}
            style={{width: '100%', height: '100%'}}>
            <Text
              style={{
                fontSize: 36,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginTop: 20,
                textShadowColor: 'blue',
                textShadowOffset: {width: 5, height: 4},
                textShadowRadius: 5,
              }}>
              {this.props.title}
            </Text>
          </ImageBackground>
        </Block>
        <Block flex={1}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'left',
              margin: 20,
              textShadowColor: 'black',
              textShadowRadius: 5,
            }}>
            {this.props.children}
          </Text>
        </Block>
        <Block flex={1}>
          <ImageBackground
            source={this.props.Image}
            style={{width: '100%', height: '100%'}}
            opacity={0.25}>
            <Block flex={false} column style={{marginLeft: 20}}>
              {array.map(obj => (
                <Block flex={false} row>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'left',
                      marginTop: 10,
                      width: 85,
                      textShadowColor: 'blue',
                      textShadowOffset: {width: 5, height: 4},
                      textShadowRadius: 5,
                    }}>
                    {obj.content}
                  </Text>
                  <TouchableHighlight
                    style={{marginTop: 10}}
                    // underlayColor={'transparent'}
                    onPress={() => {
                      this.handleNavigationParams(obj.route);
                    }}>
                    <Image
                      source={obj.imageSrc}
                      style={{width: 30, height: 30}}
                    />
                  </TouchableHighlight>
                </Block>
              ))}
            </Block>
          </ImageBackground>
        </Block>
        <Block center>
          <Footer />
        </Block>
      </Block>
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
