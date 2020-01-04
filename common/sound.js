import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
var SoundPlayer = require('react-native-sound');
var playButton = require('../assets/Palmyrah/Image/play.png');
var pauseButton = require('./pause.png/pause.png');
var song = null;

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pause: false,
    };
  }

  onPressButtonPlay() {
    song = new SoundPlayer(
      require('../assets/Palmyrah/Audio/mp3.mp3'),
      SoundPlayer.MAIN_BUNDLE,
      error => {
        if (error)
          ToastAndroid.show(
            'Error when init SoundPlayer :(((',
            ToastAndroid.SHORT,
          );
        else {
          song.play(success => {
            if (!success)
              ToastAndroid.show(
                'Error when play SoundPlayer :(((',
                ToastAndroid.SHORT,
              );
          });
        }
      },
    );
  }

  onPressButtonPause() {
    if (song != null) {
      if (this.state.pause)
        // play resume
        song.play(success => {
          if (!success)
            ToastAndroid.show(
              'Error when play SoundPlayer :(((',
              ToastAndroid.SHORT,
            );
        });
      else song.pause();

      this.setState({pause: !this.state.pause});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={this.onPressButtonPlay.bind(this)}>
          <Text style={styles.buttonText}>
            <Image source={playButton} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPressButtonPause.bind(this)}>
          <Text style={styles.buttonText}>
            {this.state.pause ? (
              <Image source={playButton} />
            ) : (
              <Image source={pauseButton} />
            )}
          </Text>
        </TouchableOpacity>
        </View>
        {/* <View style={styles.rectangle}>

        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 90,
    // backgroundColor: 'red',

  },
});