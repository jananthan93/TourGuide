import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Category from './category'

const { height, width } = Dimensions.get('window')

export default class ImagePalmyrah extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                         <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../../../assets/Palmyrah/Image/1.jpg')}
                                    />

                                </View>
                            </View>
                            
                            <View style={{ height: 130, marginTop: 15}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/1.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/2.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/3.jpg')}
                                        name="Resturant"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/4.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/5.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/6.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                           
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
});