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
import mannarImage from '../assets/MannarFort/Image/2.jpg';
import CommonDetail from './CommonDetail';

export default class MannarFort extends Component {
  static navigationOptions = {
    // header: null,
    headerTitle: ()=><Text
    style={{
      fontSize: 26,
      textShadowOffset: {width: 4, height: 2},
      // fontWeight: 'bold',
      color: '#a16355',
    }}>
    Mannar Fort
  </Text>,
headerStyle:{backgroundColor:"#ffff"}  

  };
  render() {
    
    return (
      <CommonDetail  navigation={this.props.navigation} Image={mannarImage} name={'Mannar Fort'}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Times New Roman',
              textAlign: 'justify',
              margin: 15,
              fontSize: 18,textShadowColor: 'white',textShadowRadius: 5,
            }}>
            {'\t'}Built on the island of Mannar by the Portuguese in 1560, 
Mannar Fort surrendered to the Dutch on 22 February 1658 and
was rebuilt by the Dutch in 1696.{'\n'}
            {'\n'}
            {'\t'}
            {'\t'}
            Once the LTTE was destroyed in 2009 this area was opened to 
the public transport. Now the area surrounding the fort is used 
by the police department. But public are not restricted from visiting the fort.
This colonial military fort was first built by the Portuguese around 1560 AD and 
then used by the Dutch and the British. It fell under the control of the Tamil 
Tigers during the country's civil war and has been been abandoned and neglected for many years.
            {'\n'}
            It is sad and depressing to see the ancient walls, ramparts and what is left of the buildings
being taken over by vegetation. An old church inside has the remains of an alter, baptismal pond 
and many old Dutch gravestones.
This heritage structure should really be converted into a museum and tourist information office 
for Mannar Island.
            {'\n'}
            {'\t'}
          </Text>
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
