import { View,Text, StyleSheet, Image, Dimensions,Button, TouchableOpacity, nav } from 'react-native';
import React, { Component } from 'react';
import Block from '../common/block';

export default class HomeScreen extends Component {
  render() {
  
    return (
<Block flex={1}>
      <Block flex={2.7}>
      <Image source={require("../assets/img/lakecropped.jpg")} style={Styles.lakecropped}/>
         <Image source={require("../assets/img/palmyrah.png")} style={Styles.logoImg}></Image>
           <Block style={Styles.logoView}>
              <Text style={Styles.logoText}>PALMYRAH HOUSE</Text>
               <Text style={Styles.logoTextSub}>Tourist Guide</Text>
        </Block>
      </Block>
      <Block flex={3}>
         <Block flex={1}>
         <TouchableOpacity style={Styles.touchView}>
                 <Image source={require("../assets/img/loginbtn1x.png")} style={Styles.loginBtn}/>
              </TouchableOpacity>
         </Block>
         <Block flex={1} color='accent'>
         <TouchableOpacity style={Styles.touchView}>
       <Image source={require("../assets/img/registerbtn1x.png")} style={Styles.registerBtn}/>
       </TouchableOpacity>
         </Block>
         <Block flex={1}>
         <TouchableOpacity style={Styles.touchView}>
          <Image source={require("../assets/img/resortbtn1x.png")} style={Styles.resortBtn}/>
         </TouchableOpacity>
         </Block>
         <Block flex={1}>
         <TouchableOpacity style={Styles.touchView}>
           <Image source={require("../assets/img/kitesurfingbtn1x.png")} style={Styles.kiteSurfingBtn}/>
             </TouchableOpacity>
         </Block>
      </Block>
      <Block flex={0.3}>

      </Block>
</Block>
   // <View style={{flex: 1, backgroundColor: "#fcf4d4"}}>
   //          <View style={Styles.imageView}>
   //              <Image source={require("../assets/img/lakecropped.jpg")} style={Styles.lakecropped}/>
   //              <Image source={require("../assets/img/palmyrah.png")} style={Styles.logoImg}></Image>
   //              <View style={Styles.logoView}>
   //                  <Text style={Styles.logoText}>PALMYRAH HOUSE</Text>
   //                  <Text style={Styles.logoTextSub}>Tourist Guide</Text>
   //              </View>
   //          </View>
   //          <View style={Styles.buttonView}>
               
   //              <View style={Styles.loginBtnView}>
   //                <TouchableOpacity style={Styles.loginTouch}>
   //                   <Image source={require("../assets/img/loginbtn1x.png")} style={Styles.loginBtn}/>
   //                </TouchableOpacity>
   //              </View>
   //              <View style={Styles.registerBtnView}>
   //                <TouchableOpacity style={Styles.registerTouch}>
   //                   <Image source={require("../assets/img/registerbtn1x.png")} style={Styles.registerBtn}/>
   //                </TouchableOpacity>
   //              </View>
   //              <View style={Styles.resortBtnView}>
   //                <TouchableOpacity style={Styles.resortTouch}>
   //                   <Image source={require("../assets/img/resortbtn1x.png")} style={Styles.resortBtn}/>
   //                </TouchableOpacity>
   //              </View>
   //              <View style={Styles.kiteSurfingBtnView}>
   //                <TouchableOpacity style={Styles.kiteSurfingTouch}>
   //                   <Image source={require("../assets/img/kitesurfingbtn1x.png")} style={Styles.kiteSurfingBtn}/>
   //                </TouchableOpacity>
   //              </View>
               
   //          </View>
   //          <View style={Styles.footerView}>
   //              <TouchableOpacity style={Styles.footerMapBtnTouch}>
   //                  <Image title=""
   //                          source={require("../assets/img/mapbtn.png")}
   //                          style={Styles.footerMapBtn}/>
   //              </TouchableOpacity>
   //          </View>

          
 
   // </View>
    
     
      
    );
  }
}

const width = Dimensions.get('window').width;


var Styles = StyleSheet.create({
   kiteSurfingBtnView:{
      width:"50%" ,
      left: 100,
   },
    lakecropped: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        opacity: 0.89,
        backgroundColor: "#fcf4d4",
        backgroundColor: "yellow",
        backgroundColor: "#b4816f",
        
     },
    
     logoImg: {
         position: "absolute",
         top: 3,
         left: 2
     },
     logoText: {
        color: "white",
        fontSize: 24,
        fontWeight: "100",
        letterSpacing: 2.5,
        textShadowRadius: 1000,
        textShadowColor:"#484e35",
        textShadowOffset:{
            width: 10,
            height:20
        },
        fontFamily: "Georgia",
     },

     logoTextSub: {
        color: "white",
        top: -2,
        left: 50,
        fontWeight: "200",
        letterSpacing: 2.5,
        fontSize: 18,
        textShadowRadius: 10,
        textShadowColor:"#484e35",
        textShadowOffset:{
            width: 20,
            height:40
        },
        fontFamily: "Georgia",
     },
     logoView: {
        position: "absolute",
        height: "100%",
        top: 230,
        left: 70
     },
     touchView:{
      width: "50%",
      left: 100,
      top: 10
     },
     btnView:{
      width: "100%",
      height: "80%"
     },
     loginBtn: {
        width: "98%",
        height: "55%",      
     },
     
     registerTouch: {
        width: "50%",
        left: 100,
     },

     registerBtn: {
        width: "100%",
        height: "55%",
     },

     resortTouch: {
        width:"50%" ,
        left: 100,
     },

     resortBtn: {
         width: "100%",
         height: "80%"
       
     
     },
     kiteSurfingBtn: {
         width: "100%",
         height: "55%",
     },
    //  views
     imageView: {
        flex:2.7
    },


     buttonView: {
        flex: 3,
     },

     footerMapBtnTouch: {
         width: "60%",
         height: "80%"
         
     },

     footerMapBtn: {
         bottom: 38,
         left:150, 
     },

     footerView: {
        flex: 0.3,
        backgroundColor: "#b4816f",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

     }
  });
