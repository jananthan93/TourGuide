import { View,Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';



import React, { Component } from 'react';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default class HomeScreen extends Component {
   static navigationOptions = {
      header: null,
    };
  render() {
  
    return (
   <View style={{flex: 1}}>
            <View style={Styles.imageView}>
                <Image 
                  source={require("../../assets/img/back2.png")} 
                  style={Styles.lakecropped}
                />
                <Image 
                  source={require("../../assets/img/palmyrah.png")} 
                  style={Styles.logoImg}
                />
                <Image 
                  source={require("../../assets/img/back1.png")} 
                  style={Styles.lakecropped1}
                />
                
            </View>
            
            <View style={Styles.buttonView}>
               
                <View style={Styles.loginBtnView}>
                  <TouchableOpacity style={Styles.loginTouch}
                  onPress={() => {
                     this.props.navigation.navigate('location');
                   }}
                  >
                     <Image source={require("../../assets/img/b1.png")} style={Styles.B1}/>
                     <Text style={Styles.mapText}>MAP</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.registerBtnView}>
                  <TouchableOpacity style={Styles.registerTouch}
                   onPress={() => {
                     this.props.navigation.navigate('palmyrahhouse');
                   }}
                  >
                     <Image source={require("../../assets/img/b2.png")} style={Styles.B2}/>
                     <Text style={Styles.resortText}>RESORT</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.resortBtnView}>
                  <TouchableOpacity style={Styles.resortTouch}
                  onPress={() => {
                     this.props.navigation.navigate('vayuresort');
                   }}
                  >
                     <Image source={require("../../assets/img/b3.png")} style={Styles.B3}/>
                     <Text style={Styles.kiteText}>KITE</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.kiteSurfingBtnView}>
                  <TouchableOpacity style={Styles.kiteSurfingTouch}
                     onPress={() => {
                        this.props.navigation.navigate('login');
                     }}
                     >
                     <Image source={require("../../assets/img/b4.png")} style={Styles.B4}/>
                     <Text style={Styles.signinText}>SIGNIN</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.kiteSurfingBtnView}>
                  <TouchableOpacity style={Styles.LoginTouch}>
                     <Image source={require("../../assets/img/b5.png")} style={Styles.B5}/>
                     <Text style={Styles.registerText}>REGISTER</Text>
                  </TouchableOpacity>
                </View>
            </View>
   </View>
    
     
      
    );
  }
}


// const width = Dimensions.get('window').width;


var Styles = StyleSheet.create({
    
    lakecropped: {
      width: 350,
      height: 600,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      opacity: 1,
      backgroundColor: "#ffffff", 
     },
     lakecropped1: {
      width: width,
      height: height,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      opacity: 1, 
      position: "absolute",
     },
    
     logoImg: {
         position: "absolute",
         top: 15,
         left: 270,
         width: 130,
         height:70,
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
        left: 70,
       
     },

     loginTouch: {
      width:"42%" ,
      height: "40%",
        left: 240,
        top: -20
     },

     B1: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left:-30,
        top:10
      
     },
     registerTouch: {
      width:"50%" ,
      height: "40%",
        left: 185,
        top: -90
     },

     B2: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left:-30,
        top:10
       
        
     },

     resortTouch: {
      width:"50%" ,
      height: "40%",
        left: 135,
        top: -160
     },

     B3: {
         width: "100%",
         height: "100%",
         position: "absolute",
        left:-40,
        top:5
     
     },

     kiteSurfingTouch: {
        width:"50%" ,
        height: "40%",
        left: 75,
        top: -230,        
       
     },

     B4: {
         width: "100%",
         height: "100%",
         position: "absolute",
        left:-30,
        top:-3
     },
     LoginTouch: {
      width:"50%" ,
      height: "40%",
      left: 20,
      top: -300, 
     
   },

   B5: {
       width: "100%",
       height: "100%",
       position: "absolute",
        left:-20,
        top:-6
       
     
   },





    //  views
     imageView: {
        flex:2.7
    },


     buttonView: {
        flex: 3,
     },

     footerMapBtnTouch: {
      width: "40%",
      height: "80%",
       bottom: 20,
       alignSelf: "center",
     },

     footerMapBtn: {
     alignSelf: "center",
     bottom: 20,
      
       
       
     },
     mapText: {
      position: "absolute",
      left:50,
      color: "black",
      fontSize: 15,
      fontWeight: "100",
      letterSpacing: 1,
      top: 35,
      fontFamily: "Cochin", 
            fontWeight: 'bold', 
      },
      resortText: {
         color: "black",
         position: "absolute",
         left:50,
         fontSize: 15,
         fontWeight: "100",
         letterSpacing: 1,
         top: 35,
         fontFamily: "Cochin", 
            fontWeight: 'bold', 
         },
         kiteText: {
            color: "black",
            position: "absolute",
            left:55,
            fontSize: 15,
            fontWeight: "100",
            letterSpacing: 1,
            top: 32,
            fontFamily: "Cochin", 
            fontWeight: 'bold',
            },
            signinText: {
               color: "black",
               position: "absolute",
               left:50,
               fontSize: 15,
               fontWeight: "100",
               letterSpacing: 1,
               top: 22,
               fontFamily: "Cochin", 
               fontWeight: 'bold',
               },
               registerText: {
                  color: "black",
                  position: "absolute",
                  left:55,
                  fontSize: 15,
                  fontWeight: "100",
                  letterSpacing: 1,
                  top: 18,
                  fontFamily: "Cochin", 
                  fontWeight: 'bold',
                  },

     footerView: {
        width: "100%",
     
        flex: 0.4,
        backgroundColor: "#b4816f",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
     }
  });


// const styles = StyleSheet.create({
//     container: {
//         margin: 0,
//         padding: 0,
//     },
//     lakecropped: {
//         width: "360px",
//         height: "263px",
//         objectFit: "contain",
//         opacity: 0.8,
//         boxShadow:"5px 10px 6px 0 rgba(0, 0, 0, 0.16)",
//       }
// })
