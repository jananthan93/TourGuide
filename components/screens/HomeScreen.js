import { View,Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';



import React, { Component } from 'react';

export default class HomeScreen extends Component {
  render() {
  
    return (
   <View style={{flex: 1, backgroundColor: "#ffffff"}}>
            <View style={Styles.imageView}>
                <Image source={require("../../assets/img/55555.gif")} style={Styles.lakecropped}/>
                <Image source={require("../../assets/img/palmyrah.png")} style={Styles.logoImg}></Image>
                
                {/* <View style={Styles.logoView}>
                    <Text style={Styles.logoText}>PALMYRAH HOUSE</Text>
                    <Text style={Styles.logoTextSub}>Tourist Guide</Text>
                </View> */}
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
                     <Text style={Styles.kiteText}>KITE SURFING</Text>
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


const width = Dimensions.get('window').width;


var Styles = StyleSheet.create({
    
    lakecropped: {
        width: "100%",
        height: "212%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        opacity: 1,
      // top: -10,
        backgroundColor: "#ffffff",
        
     },
    
     logoImg: {
         position: "absolute",
         top: 8,
         left: 285,
         width: 130,
         height:70
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
       
      
     },
     


     loginBtnView: {
        
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
       
       
        
     },

     resortTouch: {
      width:"50%" ,
      height: "40%",
        left: 135,
        top: -160
     },

     B3: {
         width: "100%",
         height: "100%"
       
     
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
      color: "black",
      fontSize: 15,
      fontWeight: "100",
      letterSpacing: 1,
      top: -34,
      left:90,
      fontFamily: "Cochin", 
            fontWeight: 'bold', 
      },
      resortText: {
         color: "black",
         fontSize: 15,
         fontWeight: "100",
         letterSpacing: 1,
         top: -32,
         left:100,
         fontFamily: "Cochin", 
            fontWeight: 'bold', 
         },
         kiteText: {
            color: "black",
            fontSize: 13,
            fontWeight: "100",
            letterSpacing: 1,
            top: -30,
            left:85,
            fontFamily: "Cochin", 
            fontWeight: 'bold',
            },
            signinText: {
               color: "black",
               fontSize: 15,
               fontWeight: "100",
               letterSpacing: 1,
               top: -32,
               left:105,
               fontFamily: "Cochin", 
               fontWeight: 'bold',
               },
               registerText: {
                  color: "black",
                  fontSize: 15,
                  fontWeight: "100",
                  letterSpacing: 1,
                  top: -32,
                  left:90,
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
