import React, { Component } from 'react';
import { Alert, BackHandler, Image, ImageBackground, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Example from '../../assets/Example.png';
import background from '../../assets/Background.png';

export default class Home extends Component {

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress',this.handleBackButtonClick);
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress',this.handleBackButtonClickAfter);
  }

  handleBackButtonClick() {
    Alert.alert("¿Se acabo la noche?", "¿Quieres salir del juego?", [
      {
        text: "NO",
        onPress: () => null,
        style: "cancel"
      },
      { text: "SI", onPress: () => BackHandler.exitApp() }
    ]);
    return true
  }

  handleBackButtonClickAfter() {
    return true
  }

  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
        <Text style={{color: '#474442', fontSize: hp('5.9%'), alignSelf: 'flex-start', paddingLeft: wp('6%') }}>PIRÁMIDE</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Instructions')}
          style={{ borderColor: '#474442' , padding: hp('1.8%'), borderWidth: hp('0.25%'), top: hp('2%') }}>
          <Text style={{ fontSize: hp('2.2%'), color: '#474442' }}>A BEBER !!!</Text>
        </TouchableOpacity>
        <Image source={Example} resizeMode="stretch" 
        style={{width: wp('70%'), height: hp('45%'), marginBottom: hp('7%'), marginTop: hp('7%') }} /> 
        <Text style={{ fontSize: hp('1.5%'), color: '#474442'}}>By LPSoftware</Text>
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
    width: wp("100%"),
    height: hp("100%")
  },
});
