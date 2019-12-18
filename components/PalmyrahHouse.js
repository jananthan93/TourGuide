import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';

export default class PalmyrahHouse extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text>About Palmyrah House</Text>
            </View>
        )
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#1E88A2',
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }
    });