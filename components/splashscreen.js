import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  Easing,
} from 'react-native';
import Welcome from './welcome';

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
    this.animatedValue = new Animated.Value(0);
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
    this.props.navigation.navigate('welcome')

  };

  componentDidMount() {
    this.animate();
    var that = this;
    setTimeout(function() {
      that.Hide_Splash_Screen();
    }, 2000);
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start(() => this.animate());
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    // const rotateX = this.animatedValue.interpolate({
    //   inputRange: [0, 0.5, 1],
    //   outputRange: ['0deg', '180deg', '0deg'],
    // });
    const opacity = this.animatedValue.interpolate({  
      inputRange: [0, 0.5, 1],  
      outputRange: [0, 1, 0]  
  })  

    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        
        <View style={styles.SplashScreen_ChildView}>
        <Animated.View
            style={{
              // transform: [{rotateX}],
              opacity,alignItems:"center"
            }}>
          <Image
            source={require('../assets/logo.png')}
            style={{resizeMode: 'contain'}}
          />
          <Text style={styles.headerText}>Palmyrah Tourist Guide</Text>
          </Animated.View>

        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        {/* <Welcome /> */}
        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E88A2',
    flex: 1,
    
  },
  headerText: {
    fontSize: 25,
    // textAlign: 'center',
    color: 'white',
    textShadowColor: 'blue',
    textShadowOffset: {width: 4, height: 5},
    textShadowRadius: 5,
  },
});
