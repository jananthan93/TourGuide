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
import Block from '../../common/block';
// import Icon from "react-native-vector-icons/Ionicons";
 
const audioList = [
  {
    title: 'Play MP3 ',
    isRequire: true,
    url: require('../../assets/Palmyrah/Audio/mp3.mp3'),
  }
];
 
let sound1;
 
export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true); // true = mixWithOthers
    this.state = {
      tests: {},
    };
  }
  
    playSound=(item, index)=> {
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
      
    stopSound=(item, index)=> {
      if (index == 0 && sound1) {
        sound1.stop(() => {
          console.log('Stop');
        });
    }
    }
    componentWillUnmount() {
      sound1.release();
    }
  render() {
    return (
      <SafeAreaView>
        <Block >
          <Text style={styles.headerTitle}>
            History of Palmyrah
          </Text>
          <ScrollView>
            {audioList.map((item, index) => {
              return (
                <Block style={styles.feature} key={item.title}>
                  <Text style={{fontSize: 14 }}>{item.title}</Text>
                  <Text>{' '}{' '}{' '}{' '}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      return this.playSound(item, index);
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
                </Block>
              );
            })}
          </ScrollView>
        </Block>
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