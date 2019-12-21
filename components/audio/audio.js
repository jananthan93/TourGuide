import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Sound from 'react-native-sound';
// import Icon from "react-native-vector-icons/Ionicons";
 
const audioList = [
  {
    title: 'Play MP3 ',
    isRequire: true,
    url: require('../../assets/Palmyrah/Audio/mp3.mp3'),
  }
];
 
var sound1, sound2, sound3, sound4, sound5, sound6;
 
function playSound(item, index) {
  if (index == 0) {
    sound1 = new Sound(item.url, (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound1.play(() => {
        sound1.release();
      });
    });
  } 
}
 
function stopSound(item, index) {
  if (index == 0 && sound1) {
    sound1.stop(() => {
      console.log('Stop');
    });
}
}
export default class SoundPalmyrah extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true); // true = mixWithOthers
    this.state = {
      tests: {},
    };
  }
  componentWillUnmount() {
    sound1.release();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>
            Click here
          </Text>
          <ScrollView style={styles.container}>
            {audioList.map((item, index) => {
              return (
                <View style={styles.feature} key={item.title}>
                  <Text style={{fontSize: 14 }}>{item.title}</Text>
                  <Text>{' '}{' '}{' '}{' '}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      return playSound(item, index);
                    }}>
                    <Text style={styles.buttonPlay}>
                      play
                    {/* <Icon name="ios-play-circle" size={40} /> */}
                    </Text>
                  </TouchableOpacity>
                  <Text>{' '}{' '}{' '}{' '}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      return stopSound(item, index);
                    }}>
                    <Text style={styles.buttonStop}>
                      pause
                    {/* <Icon name="ios-pause" size={40}/> */}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
  },
  buttonPlay: {
    fontSize: 10,
    color: '#00203FFF',
    overflow: 'hidden',
    
  },
  buttonStop: {
    fontSize: 10,
    color: '#00203FFF',
  },
  feature: {
    flexDirection: 'row',
    padding: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    // borderTopColor: 'rgb(180,180,180)',
    // borderBottomWidth: 1,
    // borderBottomColor: 'rgb(230,230,230)',
  },
})