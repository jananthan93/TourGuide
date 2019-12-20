import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Block from '../common/block';

const {height, width} = Dimensions.get('window');

export default class ImageContainer extends Component {
  state = {
    index: 0,
  };
  renderItem = ({item}) => {
    return (
      <Block>
        <Image
          source={item.src}
          style={{
            height: 120,
            width: 200,
            borderColor: 'black',
            borderWidth: 0.8,
            borderRadius: 10,
          }}></Image>
      </Block>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#1E88A2'}}>
        <Block flex={1} />
        <Block flex={1}>
          <Image
            style={{
              flex: 1,
              height: null,
              width: width,
              resizeMode: 'cover',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#dddddd',
            }}
            source={this.props.images[this.state.index].src}
          />
        </Block>
        <Block flex={1} style={{justifyContent: 'flex-end'}}>
          <Block flex={0.5}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              containerCustomStyle={{position: 'absolute'}}
              data={this.props.images}
              renderItem={this.renderItem}
              sliderWidth={width}
              itemWidth={200}
              onSnapToItem={index => this.setState({index})}
            />
          </Block>
        </Block>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
