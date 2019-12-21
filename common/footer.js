import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export default class Footer extends Component {
    render() {
        return (
                <Text style={styles.footer}>@2019 info@palmyrah.com</Text>
           
        )
    }
}
const styles = StyleSheet.create({
    footer: {
        fontSize: 12,
        color: 'white',
        paddingBottom: 10,
        alignItems:"center"
      },
  });
  