import React, { Component } from 'react';
import { Image, ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import background from '../../assets/Background.png';
import Steps from '../../assets/Steps.png';

export default class Instructions extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
                <Text style={{color: '#474442', fontSize: 43, left: -5, top: 150}}>INSTRUCCIONES</Text>
                <View style={{flex: 1, width: 300, height: 100, left: -15}}>
                <Image source={Steps} resizeMode="stretch" style={{width: 400, height: 250, top: 200, left: -40}} /> 
                </View>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Setup')}
                style={{ borderColor: '#474442' , padding: 15, borderWidth: 2, top: -230, left: 125 }}>
                    <Text style={{ fontSize: 20, color: '#474442' }}>JUGAR</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row'
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      alignItems: 'center', 
      width: "100%",
      height: "100%"
    },
  });