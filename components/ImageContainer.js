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
            height: 150,
            width: 200,
            borderColor: '#b4816f',
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
        fontSize: 30,
        textShadowOffset: {width: 4, height: 2},
        // fontWeight: 'bold',
        color: '#a16355',
      }}>
        {title}
      </Text>
    ),
    headerStyle:{backgroundColor:"#ffff"}  
  };
  render() {
    const images = this.props.navigation.getParam('images', []);
    
      return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
        <Block flex={0.8} />
        <Block flex={2} style={{marginBottom:50}}>
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

          <Block flex={1} style={{margintop:50}}>
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
       <Block flex={0.2}/>
       
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
