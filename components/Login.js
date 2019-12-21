import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import logo from '../assets/palmyrah.png';
import Block from '../common/block';
import Footer from '../common/footer';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Login extends Component {
  
  state = {
    usernameInputTxt: '',
    passwordInputTxt: '',
  };

  checkLogin = () => {
    const {usernameInputTxt, passwordInputTxt} = this.state;
    if (usernameInputTxt == '' && passwordInputTxt == '') {
      this.props.navigation.navigate('location');
    } else {
      Alert.alert('Error', 'Username/Password mismatch', [
        {
          text: 'Okay',
        },
      ]);
    }
  };

  submit = () => {
    if (this.state.usernameInputTxt === '') {
      Alert.alert('Failed', 'Username is required'), [{text: 'Okay'}];
      return;
    }
    if (this.state.passwordInputTxt === '') {
      Alert.alert('Failed', 'Password is required'), [{text: 'Okay'}];
      return;
    }
  };
  render() {
    return (
      <Block flex={1} style={styles.container} center>
        <Block flex={1} row >
          <Image
            source={require('../assets/VayuResort/3.png')}
            style={{width: 400, height: 300, marginRight: 250, zIndex: -1}}
          />
        </Block>
        <Block flex={3} card center color="gray" >
          <Block flex={0.7} center style={{marginTop: 20,height:100}}>
            <Image source={logo} style={{marginLeft: 7}} />
          </Block>
          <Block flex={2} center>
            <TextInput
              style={styles.textInputStyle}
              placeholder="User Name"
              returnKeyType={'next'}
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={() => {
                this.refs.passwordTextInputRef.focus();
              }}
              onChangeText={username =>
                this.setState({usernameInputTxt: username})
              }
              value={this.state.usernameInputTxt}
            />
            <Block style={styles.textInputBottomLine} />
            <TextInput
              ref="passwordTextInputRef"
              style={[styles.textInputStyle]}
              placeholder="Password"
              returnKeyType="go"
              autoCapitalize="none"
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={passwordInputTxt =>
                this.setState({passwordInputTxt})
              }
              value={this.state.passwordInputTxt}
              onSubmitEditing={event => {
                this.submit();
              }}
            />
            <Block style={styles.textInputBottomLine} />

            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => this.checkLogin()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttonSignup}
              underlayColor={'transparent'}
              onPress={() => {
                Alert.alert('Info', 'Forgot password clicked'),
                  [{text: 'Okay'}];
              }}>
              <Text style={[styles.buttonTextSignup, {color: 'primary'}]}>
                Forgot Password?
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttonSignup}
              underlayColor={'transparent'}
              onPress={() => {
                Alert.alert('Info', "Don't have account clicked"),
                  [{text: 'Okay'}];
              }}>
              <Text style={[styles.buttonTextSignup, {color: 'primary'}]}>
                Don't have account? Click here
              </Text>
            </TouchableHighlight>
          </Block>
        </Block>
        <Block flex={1} row space='between'>
          <Image  source={require("../assets/VayuResort/2.png")} style={{width:130,height:100,marginTop:20}}/>
          <Image  source={require("../assets/VayuResort/2.png")} style={{width:130,height:100,marginTop:20}}/> 
          <Image  source={require("../assets/VayuResort/2.png")} style={{width:130,height:100,marginTop:20}}/> 
        </Block>
        {/* <Text style={styles.footer}>@2019 info@palmyrah.com</Text> */}
        <Footer/>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: '#1e88a2',
  },
  // footer: {
  //   fontSize: 12,
  //   color: 'white',
  //   paddingBottom: 5,
  // },
  textInputStyle: {
    height: 40,
    fontSize: 15,
    color: 'black',
  },
  textInputBottomLine: {
    height: 1,
    marginLeft:30,
    marginRight:30,
    width: 150,
    backgroundColor: 'black',
  },
  button: {
    height: 40,
    width: 100,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#057DC1',
  },
  buttonText: {
    fontSize: 17,
    color: '#057DC1',
    fontWeight: 'bold',
  },
  buttonSignup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonTextSignup: {
    fontSize: 14,
    marginTop: 5,
  },
  viewTextRights: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textRights: {
    fontSize: 12,
    color: 'black',
  },
});
