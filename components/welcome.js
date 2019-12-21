import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Footer from '../common/footer';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, paddingTop: 50, alignItems: 'center'}}>
          <Image
            source={require('../assets/logo.png')}
            style={{height: 90, width: 160}}></Image>
          <Text style={styles.headerText}>WELCOME TO</Text>
          <Text style={styles.headerText}>PALMYRAH TOURIST GUIDE</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', marginTop: 10}}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {
              this.props.navigation.navigate('palmyrahhouse');
            }}>
            <Image
              source={require('../assets/resort.png')}
              style={{height: 60, width: 150}}
            />
            {/* <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 30,
                color: 'white',
                textShadowColor: 'red',
                textShadowOffset: {width: 5, height: 4},
                textShadowRadius: 5,
                borderStyle: 'solid',
              }}>
              Resort
            </Text> */}
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {
              this.props.navigation.navigate('vayuresort');
            }}>
            <Image
              source={require('../assets/kitesurfing.png')}
              style={{height: 55, width: 150}}
            />
            {/* <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 30,
                color: 'white',
                textShadowColor: 'red',
                textShadowOffset: {width: 5, height: 4},
                textShadowRadius: 5,
                borderStyle: 'solid',
              }}>
              Kitesurfing
            </Text> */}
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => {
            this.props.navigation.navigate('login');
          }}>
          {/* <Text style={styles.linktext1}>LOGIN</Text> */}
          <Image
            source={require('../assets/login.png')}
            style={{height: 60, width: 150}}
          />
        </TouchableHighlight>
        <View style={{flex: 1, height: 50, width: 50}}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {
              this.props.navigation.navigate('location');
            }}>
            <Image
              source={require('../assets/map.png')}
              style={{height: 50, width: 50, marginTop: 20}}></Image>
          </TouchableHighlight>
        </View>
        {/* <Text style={styles.footer}>@2019 info@palmyrah.com</Text> */}
        <Footer />
      </View>
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
  headerText: {
    fontSize: 20,
    marginTop: 15,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'blue',
    textShadowOffset: {width: 5, height: 4},
    textShadowRadius: 5,
  },

  linktext1: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'blue',
    textShadowOffset: {width: 5, height: 4},
    textShadowRadius: 5,
  },
  img1: {
    alignItems: 'center',
    // padding: 60,
    marginTop: 35,
    flex: 1,
    height: 100,
  },
  img2: {
    flex: 1,
    alignItems: 'center',
    // paddingBottom:100
  },
  footer: {
    fontSize: 12,
    color: 'white',
    paddingBottom: 10,
  },
  button: {
    height: 30,
    width: 100,
    backgroundColor: 'rgb(0, 100, 200)',
    marginTop: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
});
