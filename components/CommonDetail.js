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
import Block from '../common/block';
import Footer from '../common/footer';
import SoundPalmyrah from './audio/audio';
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
  state = {
    isVisible: false, //state of modal default false
  };

  handleNavigationParams = route => {
    switch (route) {
      case 'history': {
        if (this.props.name === 'Palmyra House') {
          this.props.navigation.navigate(route, {history:this.props.palmyrahhistory,titleHistory:'Palmyrah House'});
        } else {
          this.props.navigation.navigate(route, {history:this.props.vayuhistory,titleHistory:'Vayu Resort'});
      }
      }
      case 'image': {
        if (this.props.name === 'Palmyra House') {
          this.props.navigation.navigate(route, {titleImage:'Palmyrah House',images: PalmyrahImages});
        } else {
          this.props.navigation.navigate(route, {titleImage:'Vayu Resort',images: vayuResortImages});
        }
      }
      case 'vedio': {
        if (this.props.name === 'Palmyra House') {
          this.props.navigation.navigate(route, {titleVideo:'Palmyrah House',
            vedioSrc: require('../assets/Palmyrah/Video/palmyrah.mp4'),
          });
        } else {
          this.props.navigation.navigate(route, {titleVideo:'Vayu Resort',
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
      <Block flex={1} style={{backgroundColor: '#fcf4d4'}}>
        <Block flex={1}>
          <Image
            source={this.props.Image}
            style={styles.lakecropped}>
          </Image>
        </Block>
        <Block flex={1}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Georgia',
              fontWeight: 'bold',
              color: '#b4816f',
              textAlign: 'left',
              margin: 20,
              textShadowRadius: 2,
            }}>
            {this.props.children}
          </Text>
        </Block>
        <Block flex={1} row>
          <ImageBackground
            source={this.props.Image}
            style={{width: '100%', height: '100%'}}
            opacity={0.25}>
            <Block flex={2}>
              <Block flex={false} column style={{marginLeft: 20}}>
                {array.map(obj => (
                  <Block flex={false} row>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: 'Georgia',
                        fontWeight: 'bold',
                        color: '#b4816f',
                        textAlign: 'left',
                        marginTop: 10,
                        width: 85,
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
            </Block>
            <Block flex={3}>
              {/* <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.isVisible}
                onRequestClose={() => {
                  console.log('Modal has been closed.');
                }}>
                <Block flex={false} style={styles.modal}>
                  <SoundPalmyrah />
                  <Button
                    title="X"
                    onPress={() => {
                      this.setState({isVisible: !this.state.isVisible});
                    }}
                  />
                </Block>
              </Modal> */}
            </Block>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  
  lakecropped: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    opacity: 0.89,
    backgroundColor: '#b4816f',
  },

});
