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
const searchOptions = ['Historic', 'Attractions','Restaurants', 'Religious', 'Hotels'];

export default class NearBy2 extends Component {
  
  state = {
    isRange:true,
    range:0,
  };
  renderSearch = ({item}) => {
    return (
      <Block
        center
        style={styles.filterStyle}>
        <Text style={styles.filterStyleText}>
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
      <View style={{backgroundColor:'#a16355',borderRadius: 15,height:130,width:250, top: 12 }}>
     
        <TouchableOpacity style={{
                height: 100,
                width: 100,
                borderRadius: 10,
                marginLeft:10,
                marginTop: -10,
                
                shadowOffset:{
                  height: 10,
                  width:30
                },
                elevation: 200
              }}
              onPress={()=>{
                this.props.handleNavigation(item.name)
              }}>
            <Image
              source={{uri:item.url}}
              style={{
                height: 100,
                width: 100,
                borderRadius: 25,
                marginLeft:10,
                marginTop: -10,
                marginLeft: 10,
                shadowColor: 'black',
                shadowRadius: 10,
                shadowOffset: {
                  height: 20,
                  width: 20
                },
              
              }}> 
            </Image>
        </TouchableOpacity>
        <Text style={{marginLeft:10,marginTop:10,fontSize:16, color: "#ffff"}}>{item.name}</Text>
      
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
        <Block flex={1} style={styles.flexContainer}>
     
         
            
              <Block flex={0.5}
                style={{
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: '#ffff',
                  top: 16
                }}
                
                >
                    <Text
                  style={
                  styles.rangeText
                  }
                  // onPress={() => this.setState({isRange: true})}
                  >
                  Range : {String(this.state.range)} m
                </Text>
                <Slider
                  step={100}
                  style={{backgroundColor: '#ffff',top: -20 ,left:60, borderRadius: 12, width: 240, alignSelf: "center"}}
                  thumbTintColor={'#a16355'}
                  minimumTrackTintColor={'#a16355'}
                  maximumValue={20000}
                  
                  onValueChange={this.sliderChange}
                  value={this.state.range}
                />
              </Block>
          
      

    
          <Block flex={1}  style={{ marginTop: 10}}>
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

          <Block flex={3}  style={{top: 10}}>
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
    //filter slider style
    filterStyle:{
      height: 45,
      width:140, 
      borderRadius: 20,
      padding:5,
      backgroundColor: '#ffff',
      borderColor:'#b4816f',
    },
    filterStyleText: {
      fontSize: 22,
      fontWeight: '700', 
      color: '#a16355',
      textShadowColor: "black",
      shadowOffset: {
        height : 6,
        width: 15
      }
    },
    rangeText: {
      fontSize: 14,
      fontWeight: 'bold',
      padding: 2,
      color: '#a16355',
      textAlign: 'left',
      left: 15,
      fontFamily: 'Georgia',
      shadowOpacity: 0.9,
      shadowRadius: 4,
      shadowOffset: {
        height: 3,
        width: 6
      }
    },
    flexContainer: {
        display: "flex", flexDirection: "column", justifyContent: "space-evenly"
    }
  });