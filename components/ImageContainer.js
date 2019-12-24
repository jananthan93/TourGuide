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
import Footer from '../common/footer';
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
            height: 180,
            width: 200,
            borderColor: 'dark-blue',
            borderWidth: 0.8,
            borderRadius: 10,
          }}></Image>
      </Block>
    );
  };
  
  componentWillMount() {
    title = this.props.navigation.getParam('titleImage', 'error');
  }
  static navigationOptions = {
    headerTitle: () => (
      <Text
        style={{
          textShadowColor: 'blue',
          fontSize: 30,
          textShadowOffset: {width: 4, height: 2},
          textShadowRadius: 5,
          fontWeight: 'bold',
          color: 'white',
        }}>
        {title}
      </Text>
    ),
    headerStyle: {backgroundColor: '#1E88A2'}
  };
  render() {
    const images = this.props.navigation.getParam('images', []);
    
      return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#1E88A2'}}>
        <Block flex={1} />
        <Block flex={2.5}>
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
            source={images[this.state.index].src}
          />
        </Block>
        <Block flex={2}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              containerCustomStyle={{position: 'absolute'}}
              data={images}
              renderItem={this.renderImage}
              sliderWidth={width}
              itemWidth={width}
              onSnapToItem={index => this.setState({index})}
            />
          </Block>
        <Block flex={1} style={{justifyContent: 'flex-end', paddingBottom: 32}}>
          <Block flex={1}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              containerCustomStyle={{position: 'absolute'}}
              data={images}
              renderItem={this.renderItem}
              sliderWidth={width}
              itemWidth={200}
              onSnapToItem={index => this.setState({index})}
            />
          </Block>
        </Block>
        <Block
          center
          style={{
            backgroundColor: '#1E88A2',
            paddingBottom: 5,
            paddingTop: 5,
            border: 1,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
          }}>
          <Footer />
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
