import React, {Component, Children} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import PalmyrahImage from '../assets/Palmyrah/Image/2.jpg';
import CommonDetail from './CommonDetail';


export default class PalmyrahHouse extends Component {
  static navigationOptions = {
    // header: null,
    headerTitle: ()=><Text
    style={{
      fontSize: 26,
      textShadowOffset: {width: 4, height: 2},
      // fontWeight: 'bold',
      color: 'white',
    }}>
    Palmyrah House
  </Text>,
headerStyle:{backgroundColor:"#b4816f"}  

  };
  render() {
    let parag = (
      <View >
        {/* <Image source={require('../assets/VayuResort/Image/2.jpg')} style={{}}></Image> */}
        <ScrollView>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Times New Roman',
              textAlign: 'justify',
              margin: 15,
              fontSize: 18,textShadowColor: 'white',textShadowRadius: 5,
            }}>
            {'\t'}Mannar is a district located in the far north-west of Sri
            Lanka. Steeped in history, nature and culture, its amazing offerings
            can now be truly explored in the post-war era. Located in Sri
            Lanka’s Dry Zone, Mannar receives plenty of sun, as well as a
            healthy breeze blowing throughout the land, particularly on Mannar
            Island. Found at the border of two seas, the waters are abundant
            with life; whilst on land, the district neighbors a vibrant national
            park.{'\n'}
            {'\n'}
            {'\t'}Mannar was a center of maritime trade since ancient times, and
            is influenced by over four centuries of colonial influence. Mannar
            is famed for the migratory birds which fly south during the Northern
            Hemisphere’s winter season and is a fantastic location for some of
            the island's best seafood.
            {'\n'}
            {'\n'}
            {'\t'}
            The feathered celebrities of Mannar, the legendary Flamingos,
            have arrived! Along with them have also arrived thousands of ducks
            and other rare migrant birds. Rare migrant birds routinely show up
            in Mannar, which is undeniably the best location in Sri Lanka to see
            these birds, with its network of easily accessible roads, flat open
            terrain and vast brackish-water lagoons that offer perfect
            conditions for these animals that seek food, security and space to
            spend their winter months, in tranquility and peace.
            {'\n'}
            {'\n'}
            {'\t'}Hailing from England, Doug has been interested in wildlife
            since childhood. He joined the Royal Society for the Protection of
            Birds and the British Trust for Ornithology as a teenager, working
            as a voluntary warden on nature reserves and starting a life-long
            habit of contributing to many BTO surveys. After leaving school he
            studied biochemistry and microbiology before moving into ecology. He
            worked at several universities and research institutes on subjects
            as diverse as monitoring atmospheric pollutants, rehabilitation of
            oiled seabirds, distribution of soil invertebrates, and the ecology
            of terrestrial molluscs, before becoming a nature reserve warden for
            the RSPB in 1981. He worked on more than a dozen reserves (mostly
            coastal) in the subsequent 36 years until his retirement in 2017.
            {'\n'}{'\n'}
          </Text>
        </ScrollView>
       
      </View>
    );
    return (
      <CommonDetail palmyrahhistory={parag} navigation={this.props.navigation} Image={PalmyrahImage} name={'Palmyra House'}>
         Palmyrah House provides everything guests need to stay refreshed,
       whether it be swimming pools, traditional well baths or trips to the
      beach. Enjoy our delicious local cuisine, made from the freshest
     local cuisine of land and sea.
      </CommonDetail>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf4d4',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
