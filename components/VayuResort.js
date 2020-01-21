import React, {Component, Children} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';
import VayuResortImage from '../assets/VayuResort/Image/1.jpg';
import CommonDetail from './CommonDetail';

export default class VayuResort extends Component {
  static navigationOptions = {
    // header: null,
    headerTitle: ()=><Text
    style={{
      fontSize: 26,
      textShadowOffset: {width: 4, height: 2},
      // fontWeight: 'bold',
      color: '#a16355',
    }}>
    Vayu Resort
  </Text>,
headerStyle:{backgroundColor:"#ffff"}  

  };
  render() {
    // let hed=(
    //     <Text style={{
    //       textShadowColor: 'blue',fontSize:30,
    //       textShadowOffset: {width: 5, height: 4},
    //       textShadowRadius: 5,
    //       fontWeight: 'bold',
    //       color: 'white',}}>Kitesurfing Mannar</Text>

    // )
    let parag = (
      <View>
        {/* <Image source={require('../assets/VayuResort/Image/2.jpg')} style={{}}></Image> */}
        <ScrollView>
          <Text
            style={{
              color: 'black',
              textAlign: 'justify',fontFamily: 'Times New Roman',
              margin: 15,
              fontSize: 15,
              textShadowColor: 'white',
              textShadowRadius: 5,
            }}>
            {'\t'}
            Dil, Leo and the team welcome you to the Vayu Resort and Vayu
            Kiteschool.{'\n'}
            {'\n'}
            {'\t'} It is a dream location for us Kitesurfers: Pristine
            Conditions, virtually the first kiters on the scene, 16 KM of flat
            water conditions and the most stable, consistent winds Sri Lanka has
            to offer ! Did we forget to say that the spot is just in front of
            the camp and you will be surrounded by nature sharing the elements
            of Earth, Wind, Water !{'\n'}
            {'\n'}
            {'\t'} For those we know : the spot offers exactly the same
            condition as Vella island or Magic spot in Kalpitiya !{'\n'}
            {'\n'}
            {'\t'} Our location is at the beginning of the Adam’s Bridge on the
            Mannar peninsula. You will not get a better location than this for
            kitesurfing. We offer the strongest and most consistent wind in the
            whole of Sri Lanka. The sandy beaches and lagoons provide excellent
            riding conditions for advanced, intermediate and novice Kitesurfers.
            {'\n'}
            {'\n'}
            {'\t'}
            We have a perfect flat water spot, wave spot and lagoons just in
            front of the camp ! The average wind speed is about 20 knots. We
            have a professional kiteschool with safety boat and staff to ensure
            you a hassle free and safe experience.’{'\n'}
            {'\n'}
            {'\t'} The Kitecamp consists of 12 bungalows, 8 deluxe tents, a
            dining area, a bar and many areas to chill and relax. All meals are
            included in the price as well as tea and coffee around the clock.
            {'\n'}
            {'\n'}
            {'\t'} The sunsets as well as the starry nights are stunning. The
            Vayu camp also offers Yoga, Massage, SUP, Kayaks and nature-based
            excursions. All bungalows have a 2 – 4 bed option, open-air stars
            showers and a verandah for you to relax.{'\n'}
            {'\n'}
            {'\t'} As with our setup in Kalpitiya, the vibes will remain the
            same. We continue to be a rustic location with lots of care and
            attention to detail. We offer Western and Local food. The local food
            reflects the different culture and cuisine that’s found in the North
            of Sri Lanka.{'\n'}
            {'\n'}
            {'\t'} The camp is about 300 KM from the airport in Colombo. On
            route you could stop to see Elephants and Ancient Cities as well. A
            shared taxi option is also available to save cost.{'\n'}
            {'\n'}
            {'\t'} The protected sandbanks of Mannar are well-known for strong
            winds and as a sanctuary for numerous migratory birds. You are in an
            Ornitholgists Dream Escape with countless species that can be
            spotted from your verandah!{'\n'}
            {'\n'}
          </Text>
        </ScrollView>
      </View>
    );
    return (
      <CommonDetail
        vayuhistory={parag}
        // vayuhead={hed}
        Image={VayuResortImage}
        navigation={this.props.navigation}
        name={'Vayu Resort'}>
        {'\t'}
            Dil, Leo and the team welcome you to the Vayu Resort and Vayu
            Kiteschool.{'\n'}
            {'\n'}
            {'\t'} It is a dream location for us Kitesurfers: Pristine
            Conditions, virtually the first kiters on the scene, 16 KM of flat
            water conditions and the most stable, consistent winds Sri Lanka has
            to offer ! Did we forget to say that the spot is just in front of
            the camp and you will be surrounded by nature sharing the elements
            of Earth, Wind, Water !{'\n'}
            {'\n'}
            {'\t'} For those we know : the spot offers exactly the same
            condition as Vella island or Magic spot in Kalpitiya !{'\n'}
            {'\n'}
            {'\t'} Our location is at the beginning of the Adam’s Bridge on the
            Mannar peninsula. You will not get a better location than this for
            kitesurfing. We offer the strongest and most consistent wind in the
            whole of Sri Lanka. The sandy beaches and lagoons provide excellent
            riding conditions for advanced, intermediate and novice Kitesurfers.
            {'\n'}
            {'\n'}
            {'\t'}
            We have a perfect flat water spot, wave spot and lagoons just in
            front of the camp ! The average wind speed is about 20 knots. We
            have a professional kiteschool with safety boat and staff to ensure
            you a hassle free and safe experience.’{'\n'}
            {'\n'}
            {'\t'} The Kitecamp consists of 12 bungalows, 8 deluxe tents, a
            dining area, a bar and many areas to chill and relax. All meals are
            included in the price as well as tea and coffee around the clock.
            {'\n'}
            {'\n'}
            {'\t'} The sunsets as well as the starry nights are stunning. The
            Vayu camp also offers Yoga, Massage, SUP, Kayaks and nature-based
            excursions. All bungalows have a 2 – 4 bed option, open-air stars
            showers and a verandah for you to relax.{'\n'}
            {'\n'}
            {'\t'} As with our setup in Kalpitiya, the vibes will remain the
            same. We continue to be a rustic location with lots of care and
            attention to detail. We offer Western and Local food. The local food
            reflects the different culture and cuisine that’s found in the North
            of Sri Lanka.{'\n'}
            {'\n'}
            {'\t'} The camp is about 300 KM from the airport in Colombo. On
            route you could stop to see Elephants and Ancient Cities as well. A
            shared taxi option is also available to save cost.{'\n'}
            {'\n'}
            {'\t'} The protected sandbanks of Mannar are well-known for strong
            winds and as a sanctuary for numerous migratory birds. You are in an
            Ornitholgists Dream Escape with countless species that can be
            spotted from your verandah!{'\n'}
            {'\n'}
      </CommonDetail>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88A2',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
