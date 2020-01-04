import { View,Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, Button, TouchableHighlight } from 'react-native';



import React, { Component } from 'react';


export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
      };
  render() {
   
    return (
   <View style={{flex: 1, backgroundColor: "#ffffff"}}>
            <View style={Styles.imageView}>
                <Image source={require("../../assets/img/login.png")} style={Styles.lakecropped}/>
              
              
            </View>
            <View style={Styles.loginView}>
               <View>
                   <Image source={require("../../assets/img/palmyrah.png")}
                   style={Styles.logoImg}
                   />
               </View>
               <View>
                   <Text style={Styles.logoText}>PALMYRAH HOUSE</Text>
                   <Text style={Styles.logoText1}>TOURIST GUIDE</Text>
               </View>
               <View>
                   <Text style={Styles.login}> Login</Text>
               </View>
               <View style={Styles.formView}>
                   <Text style={Styles.labelText}>UserName</Text>
               <TextInput
                    style={Styles.textInput}
                    placeholder=" UserName or Email Id"
                    placeholderTextColor="#877570"

                />
                 <Text style={Styles.labelText1}>Password</Text>
                 <TextInput
                    style={Styles.passwordInput}
                    placeholder=" *********************"
                    placeholderTextColor="#877570"
                    
                />
                <TouchableOpacity style={Styles.forgotPasswordTouch}>
                    <Text style={Styles.forgotPasswordText}>forgot password ?</Text>
                </TouchableOpacity>
                <View style={Styles.buttonArea}>
                <TouchableOpacity style={Styles.loginButton} 
                onPress={() => {
                    this.props.navigation.navigate('nearby');
                  }}
                >
                    <Text style={Styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                
                </View>
                <View style={Styles.buttonArea1}>
                <TouchableOpacity style={Styles.loginButton} >
                    <Text style={Styles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
                
                </View>
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
        height: "260%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        opacity: 1,
        backgroundColor: "#ffffff",
        backgroundColor: "ffffff",
        backgroundColor: "#ffffff",
        
     },
    
     loginImg: {
        alignSelf: "center",
        top: 15
     },

     textInput: {
      height: 40,
      width: 250,
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
        width: 250,
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
        color: "#a1020e",
        fontFamily: 'Georgia',
        fontSize: 18,
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
        color: "#a1020e",
        fontFamily: 'Georgia',
        fontSize: 18,
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
        color: "#a1020e",
        fontFamily: 'Georgia',
        fontSize: 12,
        fontWeight: "600",
        width:100,
        // textShadowColor: "rgba(0, 0, 0, 0.16)",
        // textShadowOffset: {
        //     width:0.5,
        //     height:0.5
        // },
        textShadowRadius:2,
        left: -150,
       // alignSelf: "flex-end",
        textDecorationLine: "underline"

       },

       buttonArea: {
        top: 45,
        width: 120,
        //left: -35,
      //  alignSelf: "center",
       
       },
       buttonArea1: {
        top: 5,
        width: 120,
        left: 130,
      //  alignSelf: "center",
       
       },

       loginButton: {
            width: 120,
            height: 40,
            backgroundColor: "#a6020e",
          
  
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
         top: -150,
         left: -35,
         alignSelf: "center",
     },
     logoText: {
        color: "#63030b",
        fontSize: 20,
        fontWeight: "100",
        letterSpacing: 2.5,
        //textShadowRadius: 1000,
        top: -230,
        left:140,
       // textShadowColor:"#484e35",
        textShadowOffset:{
            width: 10,
            height:20
        },
        fontFamily: "Georgia",
     
        
     },
     logoText1: {
        color: "#63030b",
        fontSize: 15,
        fontWeight: "100",
        letterSpacing: 2.5,
        //textShadowRadius: 1000,
        top: -230,
        left:175,
       // textShadowColor:"#484e35",
        textShadowOffset:{
            width: 10,
            height:20
        },
        fontFamily: "Georgia",
    },
    login: {
        color: "black",
        fontSize: 40,
        fontWeight: "100",
        letterSpacing: 2.5,
        //textShadowRadius: 1000,
        top: -210,
       // textShadowColor:"#484e35",
        textShadowOffset:{
            width: 10,
            height:20
        },
        fontFamily: "Georgia",
    },

    //  main views
    imageView: {
        flex:1.9
    },
    loginView: {
        flex: 3
    },
    logoImg: {
        position: "absolute",
        top: -240,
        left: 10,
        width: 130,
        height:70
    },



  
  });


