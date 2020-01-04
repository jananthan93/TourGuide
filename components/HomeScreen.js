import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  Button,
  TouchableOpacity,
  nav,
} from 'react-native';
import React, {Component} from 'react';
import Block from '../common/block';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Block flex={1} style={{backgroundColor: '#fcf4d4'}}>
        <Block flex={1.3} >
          <ImageBackground 
            source={require('../assets/img1/lakecropped.jpg')}
            style={Styles.lakecropped}
            imageStyle={{borderBottomLeftRadius: 50,borderColor:'blue',
            borderBottomRightRadius: 50}}
          >
            <Block flex={2} >
          <Image
            source={require('../assets/img1/palmyrah.png')}
            style={Styles.logoimg1}/>
            </Block>
          <Block flex={1} center>
            <Text style={Styles.logoText}>PALMYRAH HOUSE</Text>
            <Text style={Styles.logoTextSub}>Tourist Guide</Text>
          </Block>
          </ImageBackground>
        </Block>
        <Block flex={2}>
          <Block flex={1}>
            <Block flex={0.5}/>
          <TouchableOpacity style={Styles.touchView}
            onPress={() => {
               this.props.navigation.navigate('login');
             }}
            >
              <Image
                source={require('../assets/img1/loginbtn1x.png')}
                style={Styles.btnView}
              />
            </TouchableOpacity>
          </Block>
          <Block flex={1}>
            <TouchableOpacity style={Styles.touchView}
            // onPress={() => {
            //    this.props.navigation.navigate('register');
            //  }}
            >
              <Image
                source={require('../assets/img1/registerbtn1x.png')}
                style={Styles.btnView}
              />
            </TouchableOpacity>
          </Block>
          <Block flex={1}>
          <TouchableOpacity style={Styles.touchView}
            onPress={() => {
               this.props.navigation.navigate('palmyrahhouse');
             }}
            >
              <Image
                source={require('../assets/img1/resortbtn1x.png')}
                style={Styles.btnView}
              />
            </TouchableOpacity>
          </Block>
          <Block flex={1}>
          <TouchableOpacity style={Styles.touchView}
            onPress={() => {
               this.props.navigation.navigate('vayuresort');
             }}
            >
              <Image
                source={require('../assets/img1/kitesurfingbtn1x.png')}
                style={Styles.btnView}
              />
            </TouchableOpacity>
          </Block>
        </Block>
        <Block flex={0.2} />
        <Block flex={0.25} center style={Styles.footerView}>
        <TouchableOpacity
            onPress={() => {
               this.props.navigation.navigate('location');
             }}
            >
            <Image
              title=""
              source={require('../assets/img1/mapbtn.png')}
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

  logoimg1: {
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
    bottom: 26,
    width: 80,
    height: 50,
  },
  footerView: {
    backgroundColor: '#b4816f',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
