import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Alert,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Header image goes here */}
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <Image
            source={require('../assets/img/login_bg.jpg')}
            style={{
              height: 250,
              width: 405,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          />
        </View>
        <View
          style={{
            flex: 1.6,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={require('../assets/img/sun-bath.png')}
            style={{
              height: 100,
              width: 100,
              justifyContent: 'flex-start',
              zIndex: 99999,
            }}
          />
          <Text style={styles.title}>Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder="John"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Text style={styles.title}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="**********"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Text
            style={{
              fontStyle: 'normal',
              fontSize: 15,
              textAlign: 'right',
              color: '#A13D2D',
              marginLeft: 100,
              marginTop: 8,
              textDecorationLine: 'underline',
            }}>
            forget password?
          </Text>
          <TouchableHighlight
            style={styles.button}
            underlayColor="transparent"
            onPress={() => {
              Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: -10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 35,
                fontFamily: 'Georgia',
                color: '#A13D2D',
                textShadowRadius: 2,
              }}>
              Don't have account?
            </Text>
            <TouchableHighlight
              style={styles.buttonSignup}
              underlayColor={'transparent'}
              onPress={() => {
                Alert.alert('Sign Up', 'Please Sign Up'), [{text: 'Okay'}];
              }}>
              <Text style={[styles.buttonTextSignup]}> Sign Up</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: '#FCF4D4',
  },
  button: {
    height: 35,
    width: 150,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#AB7362',
    backgroundColor: '#AB7362',
  },
  buttonText: {
    fontSize: 25,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    alignItems: 'flex-start',
    textShadowRadius: 5,
  },
  headerText1: {
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: '#A13D2D',
    textShadowRadius: 2,
  },
  title: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Georgia',
    color: '#AB7362',
    marginTop: 5,
    marginRight: 150,
    textShadowRadius: 2,
  },
  headerText2: {
    fontSize: 16,
    marginTop: 15,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    textShadowRadius: 5,
  },
  headerText3: {
    fontSize: 25,
    marginTop: 15,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    textShadowRadius: 5,
  },
  buttonSignup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonTextSignup: {
    fontSize: 12,
    marginTop: 5,
    color: 'black',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  textInput: {
    height: 35,
    borderColor: 'white',
    width: 250,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop:10
  },
});
