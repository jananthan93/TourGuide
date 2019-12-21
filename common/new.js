import React, {Component, Children} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Modal,
  Button,
} from 'react-native';
import Block from './block';
import Footer from './footer';
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
export default class New extends Component {
  state = {
    isVisible: false, //state of modal default false
  };

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
      case 'vedio': {
        if (this.props.title === 'Palmyra House') {
          this.props.navigation.navigate(route, {
            vedioSrc: require('../assets/Palmyrah/Video/palmyrah.mp4'),
          });
        } else {
          this.props.navigation.navigate(route, {
            vedioSrc: require('../assets/VayuResort/video/vayu.mp4'),
          });
        }
      }
      case 'sound': {
        this.setState({isVisible: true});
      }
    }
  };
  render() {
    return (
      <Block flex={1} style={{backgroundColor: '#1E88A2'}}>
        <Block flex={1} style={{backgroundColor: 'green'}} >
        </Block>
        <Block flex={1} style={{backgroundColor: 'blue'}}>
         
        </Block>
        <Block flex={1} style={{backgroundColor: 'yellow'}} row>
        <Block flex={2} column style={{backgroundColor: 'red'}}>
        <Block flex={1} style={{backgroundColor: 'white'}}>
          
          </Block>
          <Block flex={1} style={{backgroundColor: 'red'}}>
          
          </Block>
          <Block flex={1} style={{backgroundColor: 'white'}}>
          
          </Block>
          <Block flex={1} style={{backgroundColor: 'red'}}>
          
          </Block>
          <Block flex={1} style={{backgroundColor: 'white'}}>
          
          </Block>
          </Block>
          <Block flex={3} style={{backgroundColor: 'gray'}}>
          
          </Block>
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
  modal: {
    backgroundColor: '#ADEFD1FF',
    height: 100,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 60,
    marginLeft: 20,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
