import React, {Component} from 'react';  
import {StyleSheet, View, Button, Modal} from 'react-native'; 
import SoundPalmyrah from './audio';
  
export default class SoundModal extends Component{  
  state = {  
    isVisible: false, //state of modal default false  
  }  
  render() {  
    return (  
      <View style = {styles.container}>  
        <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {true}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
              <SoundPalmyrah/> 
              <Button title="X" onPress = {() => {  
                  this.setState({ isVisible:!this.state.isVisible})}}/>  
          </View>  
        </Modal>  
        {/*Button will change state to true and view will re-render*/}  
        <Button   
           title="Sound"   
           onPress = {() => {this.setState({ isVisible: true})}}  
        />  
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    backgroundColor: '#ecf0f1',  
  },  
  modal: {  
  justifyContent: 'center',  
  alignItems: 'center',   
  backgroundColor : "#ADEFD1FF",   
  height: 150 ,  
  width: '90%',  
  borderRadius:10,  
  borderWidth: 1,  
  borderColor: '#fff',    
  marginTop: 60,  
  marginLeft: 20,  
   
   },  
   text: {  
      color: '#3f2949',  
      marginTop: 10  
   }  
});  