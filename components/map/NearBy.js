import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Slider,
  TouchableOpacity,
  PermissionsAndroid,
  Dimensions,
  Text,
} from 'react-native';
import Block from '../../common/block';

const {height, width} = Dimensions.get('window');
const searchOptions = ['Historic', 'Restorants', 'Atm', 'Temples', 'Hotels'];

export default class NearBy extends Component {
  
  state = {
    isRange:false,
    range:0,
  };
  renderSearch = ({item}) => {
    return (
      <Block
        center
        style={{height: 30,width:100, borderRadius:15 ,backgroundColor: '#fcf4d4',
        borderColor:'#b4816f',borderWidth:1}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ad1032'}}>
          {item}
        </Text>
      </Block>
    );
  };
  sliderChange = range => {
    this.setState(() => {
      return {
        range: parseFloat(range),
        isRange: false,
      };
    });
    this.props.changeRange(range)
  };
  renderItem = ({item}) => {
    return (
      <Block>
        <Image
          source={{uri:item.url}}
          style={{
            height: 130,
            width: 200,
            borderColor: 'dark-blue',
            borderWidth: 0.8,
            borderRadius: 10,
          }}></Image>
      </Block>
    );
  };
  changeMarkerIcon=(i)=>{
    // console.log(i)
    this.props.changeMarkerIcon(this.props.gallery[i].key)
  }
componentDidMount(){
    this.setState({
        range:this.props.radius
    })
}
  render() {
    return (
        <Block flex={1}>
          <Block flex={0.5} >
            {!this.state.isRange ? (
              <Block
                flex={false}
                center
                style={{
                  height: 25,
                  width: 150,
                  borderRadius: 15,
                  backgroundColor: '#fcf4d4',
                  borderColor:'#b4816f',
                  borderWidth:1
                }}>
                <Text
                  style={
                    (styles.text,
                    {
                      fontWeight: 'bold',
                      paddingTop: 2,
                      color: '#ad1032',
                      textAlign: 'left',
                    })
                  }
                  onPress={() => this.setState({isRange: true})}>
                  Range : {String(this.state.range)} m
                </Text>
              </Block>
            ) : (
              <Block
                style={{
                  height: 25,
                  borderRadius: 15,
                  borderWidth:1,
                  backgroundColor: '#fcf4d4',
                }}>
                <Slider
                  step={500}
                  style={{color: 'black', marginTop: 3}}
                  thumbTintColor={'#b4816f'}
                  minimumTrackTintColor={'#b4816f'}
                  maximumValue={3000}
                  onValueChange={this.sliderChange}
                  value={this.state.range}
                />
              </Block>
            )}
          </Block>

          <Block flex={0.5}  style={{ marginBottom: 5}}>
            <Carousel
            loop={true}
              ref={c => {
                this._carousel = c;
              }}
              containerCustomStyle={{position: 'absolute', padding: 5}}
              firstItem={1}
              data={searchOptions}
              renderItem={this.renderSearch}
              sliderWidth={width}
              itemWidth={100}
              onSnapToItem={index =>
               this.props.changeType(searchOptions[index])
              }
            />
          </Block>

          <Block flex={2} style={{marginTop: 15, marginBottom: 5}}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              // containerCustomStyle={{}}
              data={this.props.gallery}
              renderItem={this.renderItem}
              sliderWidth={width}
              itemWidth={200}

              // onSnapToItem={index =>this.changeMarkerIcon(index) }
            />
          </Block>
          </Block>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#1E88A2',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });