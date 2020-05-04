import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Example from '../../assets/Example.png';
import background from '../../assets/Background.png';

export default class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
        <Text style={{color: '#474442', fontSize: 55, top: -20, left: -50}}>PYRAMID</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Setup')}
          style={{ borderColor: '#474442' , padding: 15, borderWidth: 2, top: 20 }}>
          <Text style={{ fontSize: 20, color: '#474442' }}>A BEBER !!!</Text>
        </TouchableOpacity>
        <Image source={Example} resizeMode="stretch" style={{width: 270, height: 370, marginBottom: 50, marginTop: 50}} /> 
        <Text style={{ bottom:-10, color: '#474442'}}>By LPSoftware</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
