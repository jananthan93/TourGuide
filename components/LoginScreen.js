import { View,Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, Button, TouchableHighlight } from 'react-native';



import React, { Component } from 'react';
import { shadow } from 'react-native-paper';

export default class LoginScreen extends Component {
  render() {
   
    return (
   <View style={{flex: 1, backgroundColor: "#fcf4d4"}}>
            <View style={Styles.imageView}>
                <Image source={require("../assets/img/login_bg.jpg")} style={Styles.lakecropped}/>
              
              
            </View>
            <View style={Styles.loginView}>
               <View>
                   <Image source={require("../assets/img/sun-bath.png")}
                   style={Styles.loginImg}
                   />
               </View>
               <View style={Styles.formView}>
                   <Text style={Styles.labelText}>Username</Text>
               <TextInput
                    style={Styles.textInput}
                    placeholder=" Any User Name"
                    placeholderTextColor="#877570"

                />
                 <Text style={Styles.labelText1}>Password</Text>
                 <TextInput
                    style={Styles.passwordInput}
                    placeholder=" ***********"
                    placeholderTextColor="#877570"
                    
                />
                <TouchableOpacity style={Styles.forgotPasswordTouch}>
                    <Text style={Styles.forgotPasswordText}>forgot password ?</Text>
                </TouchableOpacity>
                <View style={Styles.buttonArea}>
                <TouchableOpacity style={Styles.loginButton} >
                    <Text style={Styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                </View>
               
               </View>
               <View style={Styles.bottomTextView}>
                      <Text style={Styles.BottomText1}>Don't Have an account?</Text>
                        <TouchableOpacity style={Styles.SignUpTouch}>
                            <Text style={Styles.SignUp}>Sign Up</Text>
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
        height: "100%",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        opacity: 0.89,
        backgroundColor: "#fcf4d4",
        backgroundColor: "yellow",
        backgroundColor: "#b4816f",
        
     },
    
     loginImg: {
        alignSelf: "center",
        top: 15
     },

     textInput: {
      height: 40,
      width: 174,
      shadowColor:"rgba(0, 0, 0, 0.16)",
      shadowRadius: 1.1,
      shadowOffset: {
          height: 10.5,
          width: 0.5
      },
      elevation: 3,
      shadowOpacity: 0.3,
      borderRadius: 8,
      backgroundColor: "#ffff",
      textShadowColor: "black",
      textAlignVertical: "center",
      textShadowRadius: 4,
      textShadowOffset: {
          height: 5,
          width: 2.5
      },
      textShadowRadius: 4,
      includeFontPadding: true,
      fontFamily: 'Georgia',
      fontWeight: "100",
      letterSpacing: 1,
      zIndex: 500,
      
      
      
     },

     
     passwordInput: {
        height: 40,
        width: 174,
        top: 20,
        shadowColor:"rgba(0, 0, 0, 0.16)",
        shadowRadius: 1.1,
        shadowOffset: {
            height: 10.5,
            width: 0.5
        },
        elevation: 3,
        shadowOpacity: 0.3,
        borderRadius: 8,
        backgroundColor: "#ffff",
        textShadowColor: "black",
        textAlignVertical: "center",
        textShadowRadius: 4,
        textShadowOffset: {
            height: 5,
            width: 2.5
        },
        textShadowRadius: 4,
        includeFontPadding: true,
        fontFamily: 'Georgia',
        fontWeight: "100",
        letterSpacing:1.6,
        padding: 2,
        zIndex: 500,
       
        
        
       },

       labelText: {
        color: "#ab7362",
        fontFamily: 'Georgia',
        fontSize: 14,
        fontWeight: "600",
        textShadowColor: "rgba(0, 0, 0, 0.16)",
        textShadowOffset: {
            width:0.5,
            height:0.5
        },
        textShadowRadius:2
        


       },

       labelText1: {
           top: 20,
        color: "#ab7362",
        fontFamily: 'Georgia',
        fontSize: 14,
        fontWeight: "600",
        textShadowColor: "rgba(0, 0, 0, 0.16)",
        textShadowOffset: {
            width:0.5,
            height:0.5
        },
        textShadowRadius:2
        


       },

       forgotPasswordTouch: {
           top: 22,
           width: 100,
           alignSelf: "flex-end",
           
        
       },

       forgotPasswordText: {
        color: "#ab7362",
        fontFamily: 'Georgia',
        fontSize: 12,
        fontWeight: "600",
        textShadowColor: "rgba(0, 0, 0, 0.16)",
        textShadowOffset: {
            width:0.5,
            height:0.5
        },
        textShadowRadius:2,
        alignSelf: "flex-end",
        textDecorationLine: "underline"

       },

       buttonArea: {
        top: 45,
        width: 120,
        alignSelf: "center",
       
       },

       loginButton: {
            width: 120,
            height: 40,
            backgroundColor: "#b4816f",
            borderRadius: 20,
            elevation: 4
       },
       loginButtonText: {
           alignSelf:"center",
           textAlignVertical: "center",
           top: 5,
        color: "white",
        fontFamily: 'Georgia',
        fontSize: 18,
        fontWeight: "bold",
        textShadowColor: "rgba(0, 0, 0, 0.16)",
        textShadowOffset: {
            width:1,
            height:1
        },
        textShadowRadius:4,
       },

       bottomTextView: {
           top: 90,
           left: 80
       },

       BottomText1: {
        color: "#ab7362",
        fontFamily: 'Georgia',
        fontSize: 15,
        fontWeight: "600",
        textShadowColor: "rgba(0, 0, 0, 0.16)",
        textShadowOffset: {
            width:1,
            height:1
        },
        textShadowRadius:2,
        alignSelf: "flex-start"
       },

       SignUpTouch: {
        top:-20,
        left: 180,
        width: 60,
       },

       SignUp:{
        color: "#636363",
        fontFamily: 'Georgia',
        fontSize: 15,
        fontWeight: "400",
        textShadowColor: "rgba(0, 0, 0, 0.16)",
        textShadowOffset: {
            width:0.5,
            height:0.5
        },
        textShadowRadius:2,
        textDecorationLine: "underline"
       },




     //sub views
     formView: {
         top: 35,
         alignSelf: "center",
     },
    
  

    //  main views
    imageView: {
        flex:1.9
    },
    loginView: {
        flex: 3
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