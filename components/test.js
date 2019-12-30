import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  Alert,
  TouchableHighlight,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Lake image goes here */}
        <View style={{flex: 3, alignItems: 'center'}}>
          <ImageBackground
            source={require('../assets/img/login_bg.jpg')}
            style={{
              height: 250,
              width: 405,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            imageStyle={{
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <Text style={styles.headerText3}>PALMYRAH HOUSE</Text>
            <Text style={styles.headerText2}>Tourist Guide</Text>
            <Text>{''}</Text>
          </ImageBackground>
        </View>

        {/* Button with Icon goes here */}
        <View
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'space-between',
            top: -50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableHighlight>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('../assets/img/user.png')}
                  style={{height: 40, width: 40, paddingTop: 30}}></Image>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableHighlight>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('../assets/img/register.png')}
                  style={{height: 40, width: 40, paddingTop: 30}}></Image>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableHighlight>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('../assets/img/beach-umbrella-and-hammock.png')}
                  style={{height: 40, width: 40, paddingTop: 30}}></Image>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Resort</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableHighlight>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('../assets/img/kite.png')}
                  style={{height: 40, width: 40, paddingTop: 30}}></Image>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Kite Surfing</Text>
            </TouchableHighlight>
          </View>
        </View>

        {/* Footer part goes here */}
        <View
          style={{
            // flex:1,
            height: 65,
            backgroundColor: '#AB7362',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            alignItems: 'center',
          }}>
            <TouchableHighlight
            style={styles.mapbutton}
            underlayColor="transparent"
            onPress={() => {
              Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
            }}>
            <View style={{alignItems:'center'}}>
          <Image
            source={require('../assets/img/place.png')}
            style={{
              height: 50,
              width: 70,
              position: 'absolute',
              top: -40,
            }}/>
            </View>
            </TouchableHighlight>
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
    height: 30,
    width: 200,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#AB7362',
    backgroundColor: '#AB7362',
    zIndex: -1,
  },
  mapbutton: {
    height: 30,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    alignItems: 'flex-start',
    textShadowRadius: 5,
  },
  headerText2: {
    fontSize: 20,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    textShadowRadius: 5,
    paddingTop: 10,
  },
  headerText3: {
    fontSize: 25,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    textShadowRadius: 5,
    
  },
  CircleShapeView: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -40,
    top: -20,
    // zIndex:-1
  },
});
