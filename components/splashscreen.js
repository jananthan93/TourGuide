import React, {useState, useEffect} from 'react';
import {Animated, Text, View, Image,StyleSheet} from 'react-native';

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={styles.container}>
      <FadeInView>
          <View style={{alignItems: 'center'}}>
          <Image
          source={require('../assets/logo.png')}
          style={{alignItems: 'center'}}
        />
          </View>
        <View>
            
        <Text style={styles.headerText}>Palmyrah Tourist Guide</Text>
        </View>
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E88A2',
        // width: '100%',
        // height: '100%',
        alignItems: 'center',
        justifyContent:"center"
      },
    headerText: {
      fontSize: 25,
      textAlign: 'center',
      color: 'white',
      textShadowColor: 'blue',
      textShadowOffset: {width: 4, height: 5},
      textShadowRadius: 5,
    },
});
