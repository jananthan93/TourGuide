import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import logo from '../assets/logo.png';
import Block from './block';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    usernameInputTxt: '',
    passwordInputTxt: '',
  };

  checkLogin = () => {
    const {usernameInputTxt, passwordInputTxt} = this.state;
    if (usernameInputTxt == 'admin' && passwordInputTxt == 'admin') {
      this.props.navigation.navigate('todo');
    } else {
      Alert.alert('Error', 'Username/Password mismatch', [
        {
          text: 'Okay',
        },
      ]);
    }
  };

  submit = () => {
    if (this.state.usernameInputTxt === '') {
      Alert.alert('Failed', 'Username is required'), [{text: 'Okay'}];
      return;
    }
    if (this.state.passwordInputTxt === '') {
      Alert.alert('Failed', 'Password is required'), [{text: 'Okay'}];
      return;
    }
  };
  render() {
    return (
      // <View style={styles.container}>
      //   <ScrollView>
      //     <View
      //       style={{
      //         height: deviceHeight,
      //         width: deviceWidth,
      //         alignItems: "center",
      //         justifyContent: "center"
      //       }}
      //     >
      //       <View style={styles.imageContainer}>
      //         <Image
      //           resizeMode="contain"
      //           source={logo}
      //           style={styles.image}
      //         />
      //       </View>
      //       <View style={styles.formContainer}>
      //         <TextInput
      //           style={styles.textInputStyle}
      //           placeholder="User Name"
      //           returnKeyType={"next"}
      //           autoCapitalize="none"
      //           autoCorrect={false}
      //           onSubmitEditing={event => {
      //             this.refs.passwordTextInputRef.focus();
      //           }}
      //           onChangeText={username =>
      //             this.setState({ usernameInputTxt: username })
      //           }
      //           value={this.state.usernameInputTxt}
      //         />
      //         <View style={styles.textInputBottomLine} />
      //         <TextInput
      //           ref="passwordTextInputRef"
      //           style={[styles.textInputStyle, { marginTop: 10 }]}
      //           placeholder="Password"
      //           returnKeyType="go"
      //           autoCapitalize="none"
      //           secureTextEntry={true}
      //           autoCorrect={false}
      //           onChangeText={passwordInputTxt =>
      //             this.setState({ passwordInputTxt })
      //           }
      //           value={this.state.passwordInputTxt}
      //           onSubmitEditing={event => {
      //             this.submit();
      //           }}
      //         />
      //         <View style={styles.textInputBottomLine} />
      //         <TouchableHighlight
      //           style={styles.button}
      //           underlayColor="transparent"
      //           onPress={() => this.checkLogin()}
      //         >
      //           <Text style={styles.buttonText}>Login</Text>
      //         </TouchableHighlight>

      //         <TouchableHighlight
      //           style={styles.buttonSignup}
      //           underlayColor={"transparent"}
      //           onPress={() => {
      //             Alert.alert("Info", "Forgot password clicked"),
      //               [{ text: "Okay" }];
      //           }}
      //         >
      //           <Text style={[styles.buttonTextSignup, { color: "#6D6E70" }]}>
      //             Forgot Password?
      //           </Text>
      //         </TouchableHighlight>

      //         <TouchableHighlight
      //           style={styles.buttonSignup}
      //           underlayColor={"transparent"}
      //           onPress={() => {
      //             Alert.alert("Info", "Don't have account clicked"),
      //               [{ text: "Okay" }];
      //           }}
      //         >
      //           <Text style={[styles.buttonTextSignup, { color: "#6D6E70" }]}>
      //             Don't have account? Click here
      //           </Text>
      //         </TouchableHighlight>
      //       </View>
      //     </View>
      //   </ScrollView>
      // </View>
      <Block style={styles.container} center>
        <Block flex={1} card center color='gray' style={{width:250 ,height:750 ,marginTop:200,marginBottom:200}}>
          <Block style={{marginTop:50}}>
          <Image resizeMode="contain" source={logo} />
        
          <TextInput
            // style={styles.textInputStyle}
            placeholder="User Name"
            returnKeyType={'next'}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => {
              this.refs.passwordTextInputRef.focus();
            }}
            onChangeText={username =>
              this.setState({usernameInputTxt: username})
            }
            value={this.state.usernameInputTxt}
          />
          <Block style={styles.textInputBottomLine} />
          <TextInput
                ref="passwordTextInputRef"
                style={[styles.textInputStyle, { marginTop: 10 }]}
                placeholder="Password"
                returnKeyType="go"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={passwordInputTxt =>
                  this.setState({ passwordInputTxt })
                }
                value={this.state.passwordInputTxt}
                onSubmitEditing={event => {
                  this.submit();
                }}
              />
          <Block style={styles.textInputBottomLine} />
          </Block>
        
        <Block center flex={false} >
        <TouchableHighlight
                style={styles.button}
                underlayColor="transparent"
                onPress={() => this.checkLogin()}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonSignup}
                underlayColor={"transparent"}
                onPress={() => {
                  Alert.alert("Info", "Forgot password clicked"),
                    [{ text: "Okay" }];
                }}
              >
                <Text style={[styles.buttonTextSignup, { color: "primary" }]}>
                  Forgot Password?
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonSignup}
                underlayColor={"transparent"}
                onPress={() => {
                  Alert.alert("Info", "Don't have account clicked"),
                    [{ text: "Okay" }];
                }}
              >
                <Text style={[styles.buttonTextSignup, { color: "primary" }]}>
                  Don't have account? Click here
                </Text>
              </TouchableHighlight>
              </Block>
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:deviceHeight,
    width:deviceWidth,
    backgroundColor: '#1e88a2',
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  textInputStyle: {
    height: 40,
    fontSize: 16,
    paddingLeft: 5,
    color: 'black',
  },
  textInputBottomLine: {
    height: 1,
    backgroundColor: 'black',
  },
  button: {
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#057DC1',
  },
  buttonText: {
    fontSize: 17,
    color: '#057DC1',
    fontWeight: 'bold',
  },
  buttonSignup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonTextSignup: {
    fontSize: 14,
  },
  viewTextRights: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
  },
  textRights: {
    fontSize: 12,
    color: 'black',
  },
});
