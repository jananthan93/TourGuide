import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

import React, {Component} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Block from '../common/block';

export default class LoginScreen extends Component {
  static navigationOptions = {
    // header: null,
  headerStyle:{backgroundColor:"#fcf4d4"}  

  };
  render() {
    return (
      <>
      <Block flex={1} style={{backgroundColor:'#fcf4d4'}}>
      <Block flex={1}>
      <Image
            source={require('../assets/img/login_bg.jpg')}
            style={Styles.lakecropped}
          />
      </Block>
      <Block>
        <ScrollView>
        <Block flex={1}>
        <Image
              source={require('../assets/img/sun-bath.png')}
              style={Styles.loginImg}
            />
        </Block>
        <Block center flex={1}>
        <Text style={Styles.labelText}>Username</Text>
           <TextInput
              style={Styles.textInput}
              placeholder=" Any User Name"
              placeholderTextColor="#877570"
            />
            <Text style={Styles.labelText}>Password</Text>
          <TextInput
              style={Styles.textInput}
              placeholder=" ***********"
              placeholderTextColor="#877570"
            />
            <TouchableOpacity style={Styles.forgotPasswordTouch}>
            <Text style={Styles.newLinkText}>forgot password ?</Text>
            </TouchableOpacity>
            </Block>
            <Block center flex={0.5}>
            <TouchableOpacity 
              style={Styles.loginButton} 
              onPress={() => {
                this.props.navigation.navigate('nearby');
              }}
              >
                <Text style={Styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            <Text style={{marginLeft:-100,paddingTop:5}}>Don't Have an account?</Text>
          <TouchableOpacity >
          <Text style={Styles.newLinkText}>Sign Up</Text>
       </TouchableOpacity>
            </Block>
            </ScrollView>
      </Block>
      </Block>
      </>
    );
  }
}
const Styles = StyleSheet.create({
  lakecropped: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    opacity: 0.89,
    backgroundColor: '#b4816f',
  },

  loginImg: {
    alignSelf: 'center',
    top: 15,
  },

  textInput: {
    height: 40,
    width: 174,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowRadius: 1.1,
    shadowOffset: {
      height: 10.5,
      width: 0.5,
    },
    elevation: 3,
    shadowOpacity: 0.3,
    borderRadius: 8,
    backgroundColor: '#ffff',
    textShadowColor: 'black',
    textAlignVertical: 'center',
    textShadowRadius: 4,
    textShadowOffset: {
      height: 5,
      width: 2.5,
    },
    textShadowRadius: 4,
    includeFontPadding: true,
    fontFamily: 'Georgia',
    fontWeight: '100',
    letterSpacing: 1,
    zIndex: 500,
  },

  labelText: {
    marginLeft:-100,
    padding:15,
    color: '#ab7362',
    fontFamily: 'Georgia',
    fontSize: 16,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    textShadowRadius: 2,
  },
  

  newLinkText: {
    marginLeft:80,
    padding:10,
    color: '#ab7362',
    fontFamily: 'Georgia',
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    textShadowRadius: 2,
    textDecorationLine: 'underline',
  },

  loginButton: {
    width: 120,
    height: 40,
    backgroundColor: '#b4816f',
    borderRadius: 20,
    elevation: 4,
  },
  loginButtonText: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    top:5,
    color: 'white',
    fontFamily: 'Georgia',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 4,
  }
});
