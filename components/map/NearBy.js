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
    isRange:true,
    range:0,
  };
  renderSearch = ({item}) => {
    return (
      <Block
        center
        style={{height: 40,width:150, borderRadius:15 ,backgroundColor: '#fcf4d4',
        borderColor:'#b4816f',borderWidth:1}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#ad1032'}}>
          {item}
        </Text>
      </Block>
    );
  };
  sliderChange = range => {
    this.setState(() => {
      return {
        range: parseFloat(range),
        // isRange: false,
      };
    });
    this.props.changeRange(range)
  };
  renderItem = ({item}) => {
    return (
      <View>
      <View style={{backgroundColor:'#ffff',borderRadius: 15,height:130,width:250}}>
        <TouchableOpacity  style={{
                height: 100,
                width: 100,
                borderRadius: 10,
                marginLeft:10,
                marginTop: -10,
                marginLeft: 10,
              }}
              onPress={()=>{
                this.props.handleNavigation(item.name)
              }}>
            <Image
              source={{uri:item.url}}
              style={{
                height: 100,
                width: 100,
                borderRadius: 10,
                marginLeft:10,
                marginTop: -10,
                marginLeft: 10,
              }}> 
            </Image>
        </TouchableOpacity>
        <Text style={{marginLeft:10,marginTop:10,fontSize:17}}>{item.name}</Text>
      </View>
      </View>
    );
  };
  changeMarkerIcon=(i)=>{
    this.props.changeMarkerIcon(this.props.gallery[i].key)
  }
componentDidMount(){
    this.setState({
        range:this.props.radius
    })
}
  render() {
    // console.log(this.props.gallery);
    return (
        <Block flex={1}>
          <Block flex={1.5} >
          {/* <Block flex={0.3}>
                <Text
                  style={
                    (styles.text,
                    {
                      fontWeight: 'bold',
                      padding: 2,
                      color: '#ad1032',
                      textAlign: 'left',
                    })
                  }
                  // onPress={() => this.setState({isRange: true})}
                  >
                  Range : {String(this.state.range)} m
                </Text>
              </Block> */}
            
              <Block 
                style={{
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: '#ffff',
                  
                }}
                
                >
                    <Text
                  style={
                    (styles.text,
                    {
                      fontWeight: 'bold',
                      padding: 2,
                      color: '#ad1032',
                      textAlign: 'left',
                      left: 15
                    })
                  }
                  // onPress={() => this.setState({isRange: true})}
                  >
                  Range : {String(this.state.range)} m
                </Text>
                <Slider
                  step={100}
                  style={{backgroundColor: '#ffff',top: -20 ,left:50, borderRadius: 12, width: 260, alignSelf: "center"}}
                  thumbTintColor={'#a16355'}
                  minimumTrackTintColor={'#a16355'}
                  maximumValue={20000}
                  
                  onValueChange={this.sliderChange}
                  value={this.state.range}
                />
              </Block>
          
          </Block>

          {/* <Block flex={2}  style={{ marginTop: 50}}> */}
          <Block flex={1.5}  style={{ marginTop: 40}}>
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
              itemWidth={150}
              onSnapToItem={index =>
               this.props.changeType(searchOptions[index])
              }
            />
          </Block>

          <Block flex={4} >
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              // containerCustomStyle={{}}
              data={this.props.gallery}
              renderItem={this.renderItem}
              sliderWidth={width}
              itemWidth={250}
              onSnapToItem={index =>this.changeMarkerIcon(index) }
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