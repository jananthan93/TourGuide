import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView,Text} from 'react-native';
// import {Text} from '../../components/CustomText';
import kite from '../../assets/MannarFort/Image/6.jpg';
import star from '../../assets/Palmyrah/Image/7.png';
import Carousel from 'react-native-snap-carousel';
// import Navigation from '../../components/navigation';
// import {colors} from '../../styles';
const {width} = Dimensions.get('window');
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      types: [
        {
          id: 1,
          photo: require('../../assets/MannarFort/Image/1.jpg'),
        },
        {
          id: 2,
          photo: require('../../assets/MannarFort/Image/2.jpg'),
        },
        {
          id: 3,
          photo: require('../../assets/MannarFort/Image/3.jpg'),
        },
        {
          id: 4,
          photo: require('../../assets/MannarFort/Image/4.jpg'),
        },
        {
          id: 5,
          photo: require('../../assets/MannarFort/Image/5.jpg'),
        },
        {
          id: 6,
          photo: require('../../assets/MannarFort/Image/6.jpg'),
        },
        {
          id: 7,
          photo: require('../../assets/MannarFort/Image/1.jpg'),
        },
        {
          id: 8,
          photo: require('../../assets/MannarFort/Image/7.jpg'),
        },
      ],
    };
  }
  assignRef = ref => {
    this.sliderRef = ref;
  };

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image
          style={{width: 150, height: 100, borderRadius: 10}}
          source={item.photo}
          resizeMode="cover"
        />
      </View>
    );
  };

  render = () => {
    return (
      <React.Fragment>
        <Image style={styles.imageView} source={kite} />
        <View style={styles.cardView}>
          <Text style={{color: 'black', marginLeft: 20,fontSize:20}}>
            Mannar Fort
          </Text>
          <Image
            source={star}
            style={{height: 24, width: 120, marginLeft: 18,marginTop:12}}
          />
          <Text
            style={{
              color: 'black',
              marginLeft: 20,
              position: 'absolute',
              top: 52,
              marginLeft: 145,
            }}>
            (34000)
          </Text>
        </View>
        <View style={{padding: 10, flex: 1}}>
          <ScrollView style={{flex: 1}}>
            <Text
              style={{
                color: 'black',
                marginLeft: 20,
                marginTop: 20,
                fontSize:15
              }}
              size={18}>
               It is a dream location for us Kitesurfers: Pristine Conditions,
               virtually the first kiters on the scene, 16 KM of flat water conditions
               and the most stable, consistent winds Sri Lanka has to offer ! Did we
               forget to say that the spot is just in front of the camp and you will be
               surrounded by nature sharing the elements of Earth, Wind, Water !
            </Text>
            <Text
              style={{
                color: 'black',
                marginLeft: 20,
                marginBottom: 10,
                marginTop:10,
                fontSize:22
              }}
              size={22}>
              Photos
            </Text>
            <View style={styles.child2}>
              <Carousel
                ref={this.assignRef}
                data={this.state.types}
                renderItem={this._renderItem}
                sliderWidth={width}
                itemWidth={150}
                activeSlideAlignment="start"
                loop={true}
              />
            </View>
            <Text
              style={{
                color: 'black',
                marginLeft: 20,
                marginBottom: 10,
                marginTop:10,
                fontSize:22
              }}
              size={22}>
              Video
            </Text>
            <View style={styles.child2}>
              <Carousel
                ref={this.assignRef}
                data={this.state.types}
                renderItem={this._renderItem}
                sliderWidth={width}
                itemWidth={150}
                activeSlideAlignment="start"
                loop={true}
              />
            </View>
            <Text
              style={{
                color: 'black',
                marginLeft: 20,
                marginBottom: 10,
                marginTop:10,
                fontSize:22
              }}
              size={22}>
              Audio
            </Text>
            <View style={styles.child2}>
              <Carousel
                ref={this.assignRef}
                data={this.state.types}
                renderItem={this._renderItem}
                sliderWidth={width}
                itemWidth={150}
                activeSlideAlignment="start"
                loop={true}
              />
            </View>
          </ScrollView>
        </View>
      </React.Fragment>
    );
  };
}

const styles = StyleSheet.create({
  imageView: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
  },
  cardView: {
    marginTop: -50,
    marginLeft: 30,
    width: 200,
    height: 85,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  overLap: {
    flex: 1,
    flexDirection: 'column',
  },
  imageViewSlider: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },
  parent: {
    flex: 1,
  },
  child1: {
    flex: 5.5,
  },
  child2: {
    marginLeft: 20,
  },
});
