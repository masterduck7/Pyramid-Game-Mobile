import React, { Component } from 'react';
import { Alert, BackHandler, Image, ImageBackground, Modal, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Example from '../../assets/Example.png';
import background from '../../assets/Background.png';
import StepsWhite from '../../assets/StepsWhite.png';

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalInstructions: false
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClickAfter)
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

  openModalInstructions() {
    this.setState({ modalInstructions: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalInstructions}
          onRequestClose={() => this.setState({ modalInstructions: false })}
        >
          <View style={styles.modal}>
            <Image source={StepsWhite} resizeMode="stretch"
              style={styles.instructionsImage} />
            <TouchableOpacity
              onPress={() => this.setState({ modalInstructions: false })}
              style={{ borderColor: 'white', padding: hp('1%'), borderWidth: hp('0.25%'), marginBottom: hp('2%') }}>
              <Text style={{ fontSize: hp('1.5%'), color: 'white' }}>CERRAR</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
          <Text style={{ color: '#474442', fontSize: hp('5.9%'), alignSelf: 'flex-start', paddingLeft: wp('6%') }}>PIRÁMIDE</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Modes')}
            style={{ backgroundColor: "#474442", borderColor: "#474442", padding: hp('1.8%'), borderWidth: hp('0.25%'), top: hp('2%') }}>
            <Text style={{ fontSize: hp('2.5%'), color: 'white' }}>A BEBER !!!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.openModalInstructions()}
            style={{ borderColor: '#474442', padding: hp('1%'), borderWidth: hp('0.25%'), top: hp('4%') }}>
            <Text style={{ fontSize: hp('1.5%'), color: '#474442' }}>INSTRUCCIONES</Text>
          </TouchableOpacity>
          <Image source={Example} resizeMode="stretch"
            style={{ width: wp('70%'), height: hp('45%'), marginBottom: hp('7%'), marginTop: hp('5%') }} />
          <Text style={{ fontSize: hp('1.5%'), color: '#474442' }}>By LPSoftware</Text>
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
  modal: {
    backgroundColor: "#474442",
    borderWidth: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: hp('42%'),
    width: wp('90%'),
    position: "absolute",
    top: hp('30%'),
    left: wp('5%')
  },
  instructionsImage: {
    width: wp('90%'),
    height: hp('30%')
  }
});
