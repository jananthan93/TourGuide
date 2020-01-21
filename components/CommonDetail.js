import React, {Component, Children} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Modal,
  Button,
} from 'react-native';
import Block from '../common/block';
import { ScrollView } from 'react-native-gesture-handler';
const array = [
  {
    id: 2,
    content: 'IMAGES',
    imageSrc: require('../assets/detail/image.png'),
    route: 'image',
  },
  {
    id: 2,
    content: 'AUDIO',
    imageSrc: require('../assets/detail/sound.png'),
    route: 'sound',
  },
  {
    id: 3,
    content: 'VEDIOS',
    imageSrc: require('../assets/detail/video.png'),
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
const mannarFortImages = [
  {name: '', src: require('../assets/MannarFort/Image/1.jpg')},
  {name: '', src: require('../assets/MannarFort/Image/2.jpg')},
  {name: '', src: require('../assets/MannarFort/Image/3.jpg')},
  {name: '', src: require('../assets/MannarFort/Image/4.jpg')},
  {name: '', src: require('../assets/MannarFort/Image/5.jpg')},
]
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
        } 
        // else if (this.props.name === 'Mannar Fort'){
        //   this.props.navigation.navigate(route, {titleImage:'Mannar Fort',images: mannarFortImages});
        // }
        else {
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
        // this.setState({isVisible: true});
        if (this.props.name === 'Palmyra House') {
          this.props.navigation.navigate(route, {titleAudio:'Palmyrah House',
            audioSrc: require('../assets/audio/PalmyrahHouse-01.mp3'),
          });
        }
         else {
          this.props.navigation.navigate(route, {titleAudio:'Vayu Resort',
            audioSrc: require('../assets/audio/BirdWatching-01.mp3'),
          });
        // }
      }
    }
  };
}
  render() {
    return (
      <Block flex={1} style={{backgroundColor: '#ffffff'}}>
        <Block flex={3}>
          <Image
            source={this.props.Image}
            style={styles.lakecropped}>
          </Image>
        </Block>
        <Block flex={6} style={{marginRight:5}}>
          <ScrollView>

          <Text
            style={{
              color: 'black',
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
              marginTop:10,
              fontSize:15,
              textAlign: 'justify',
            }}>
            {this.props.children}
          </Text>
          </ScrollView>
        </Block>
        <Block flex={1} colum style={{justifyContent: 'flex-end',marginBottom:20,marginLeft:10}}>
          {/* <ImageBackground
            source={this.props.Image}
            style={{width: '100%', height: '100%'}}
            opacity={0.25}> */}
            {/* <Block flex={2}> */}
              <Block flex={false} row style={{marginLeft: 20}}>
                {array.map(obj => (
                  <Block flex={false} row>
                    <TouchableOpacity
                      style={{marginTop: 10,marginLeft:30}}
                      // underlayColor={'transparent'}
                      onPress={() => {
                        this.handleNavigationParams(obj.route);
                      }}>
                      <Text
                      style={{
                        fontSize: 18,
                        fontFamily: 'Georgia',
                        fontWeight: 'bold',
                        color: 'black',
                        textAlign: 'left',
                        marginTop: 12,
                        width: 85,
                        textShadowRadius: 5,
                      }}>
                      {obj.content}
                    </Text>
                    </TouchableOpacity>
                  </Block>
                ))}
              </Block>
            {/* </Block> */}
            {/* <Block flex={3}>
              <Modal
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
              </Modal>
            </Block> */}
          {/* </ImageBackground> */}
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
  }

});
