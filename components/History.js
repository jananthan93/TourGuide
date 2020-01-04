import React, {Component, Children} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
let title;
export default class History extends Component {
  componentWillMount(){
    title=this.props.navigation.getParam('titleHistory','error');
  }
  static navigationOptions = {
    // header: null,
    headerTitle: ()=><Text
    style={{
      fontSize: 26,
      textShadowOffset: {width: 4, height: 2},
      // fontWeight: 'bold',
      color: 'white',
    }}>
    {title}
  </Text>,
headerStyle:{backgroundColor:"#b4816f"}  

  };
  render() {
    // console.log(this.props.navigation.getParam('title','error'))
    return (
      <>
      <View style={styles.container}>
        {this.props.navigation.getParam('history','error')}
      </View>
      </>
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
