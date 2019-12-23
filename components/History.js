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
  static navigationOptions =  {
      headerTitle: ()=><Text
      style={{
        textShadowColor: 'blue',
        fontSize: 30,
        textShadowOffset: {width: 4, height: 2},
        textShadowRadius: 5,
        fontWeight: 'bold',
        color: 'white',
      }}>
      {title}
    </Text>,
    headerStyle:{backgroundColor:"#1E88A2"} 
    // header: null,
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
    backgroundColor: '#1E88A2',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
