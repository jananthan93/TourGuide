import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default class SearchMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedAdresses: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          onChangeText={this.searchedAdresses}
          placeholder="Type your adress here"
        />
        <TextInput inlineImageLeft="search_icon" />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textinput: {
    marginTop: 30,
    backgroundColor: '#DDDDDD',
    height: 40,
    width: 200,
  },
});
