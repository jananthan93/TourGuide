import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  nav,
} from 'react-native';
import React, {Component} from 'react';
import Block from '../common/block';

export default class HomeScreen extends Component {
  render() {
    return (
      <Block flex={1} style={{backgroundColor: '#fcf4d4'}}>
        <Block flex={2.3}>
          <Image
            source={require('../assets/img/lakecropped.jpg')}
            style={Styles.lakecropped}
          />
          <Image
            source={require('../assets/img/palmyrah.png')}
            style={Styles.logoImg}></Image>
          <Block style={Styles.logoView}>
            <Text style={Styles.logoText}>PALMYRAH HOUSE</Text>
            <Text style={Styles.logoTextSub}>Tourist Guide</Text>
          </Block>
        </Block>
        <Block flex={2}>
          <Block flex={1}>
            <TouchableOpacity style={Styles.touchView}>
              <Image
                source={require('../assets/img/loginbtn1x.png')}
                style={Styles.btnView}
              />
            </TouchableOpacity>
          </Block>
          <Block flex={1}>
            <TouchableOpacity style={Styles.touchView}>
              <Image
                source={require('../assets/img/registerbtn1x.png')}
                style={Styles.btnView}
              />
            </TouchableOpacity>
          </Block>
          <Block flex={1}>
            <TouchableOpacity style={Styles.touchView}>
              <Image
                source={require('../assets/img/resortbtn1x.png')}
                style={Styles.btnView}
              />
            </TouchableOpacity>
          </Block>
          <Block flex={1}>
            <TouchableOpacity style={Styles.touchView}>
              <Image
                source={require('../assets/img/kitesurfingbtn1x.png')}
                style={Styles.btnView}
              />
            </TouchableOpacity>
          </Block>
        </Block>
        <Block flex={0.2} />
        <Block flex={0.25} center style={Styles.footerView}>
          <TouchableOpacity style={{backgroundColor:'red'}}>
            <Image
              title=""
              source={require('../assets/img/mapbtn.png')}
              style={Styles.footerMapBtn}
            />
          </TouchableOpacity>
        </Block>
      </Block>
    );
  }
}
const Styles = StyleSheet.create({
  kiteSurfingBtnView: {
    width: '50%',
    left: 100,
  },
  lakecropped: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    opacity: 0.89,
    backgroundColor: '#fcf4d4',
    backgroundColor: 'yellow',
    backgroundColor: '#b4816f',
  },

  logoImg: {
    position: 'absolute',
    top: 3,
    left: 2,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '100',
    letterSpacing: 2.5,
    textShadowRadius: 1000,
    textShadowColor: '#484e35',
    textShadowOffset: {
      width: 10,
      height: 20,
    },
    fontFamily: 'Georgia',
  },
  logoTextSub: {
    color: 'white',
    top: -2,
    left: 50,
    fontWeight: '200',
    letterSpacing: 2.5,
    fontSize: 18,
    textShadowRadius: 10,
    textShadowColor: '#484e35',
    textShadowOffset: {
      width: 20,
      height: 40,
    },
    fontFamily: 'Georgia',
  },
  logoView: {
    position: 'absolute',
    height: '100%',
    top: 230,
    left: 70,
  },
  touchView: {
    width: '50%',
    left: 100,
    top: 10,
  },
  btnView: {
    width: '100%',
    height: '80%',
  },
  
  footerMapBtn: {
    bottom: 28,
    width: 80,
    height: 50,
  },
  footerView: {
    backgroundColor: '#b4816f',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
