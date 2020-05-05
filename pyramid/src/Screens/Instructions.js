import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import background from '../../assets/Background.png';

export default class Instructions extends Component {
    render(){
        const stepIndicatorStyles = {
            stepIndicatorSize: 30,
            currentStepIndicatorSize: 30,
            separatorStrokeWidth: 3,
            currentStepStrokeWidth: 3,
            stepStrokeCurrentColor: '#474442',
            separatorFinishedColor: '#474442',
            separatorUnFinishedColor: '#474442',
            stepIndicatorFinishedColor: '#474442',
            stepIndicatorUnFinishedColor: '#474442',
            stepIndicatorCurrentColor: '#ffffff',
            stepIndicatorLabelFontSize: 15,
            currentStepIndicatorLabelFontSize: 15,
            stepIndicatorLabelCurrentColor: '#000000',
            stepIndicatorLabelFinishedColor: '#ffffff',
            stepIndicatorLabelUnFinishedColor: '#474442',
            labelColor: '#474442',
            labelSize: 30,
            currentStepLabelColor: '#474442'
        }

        const data = [
            {title: '¿MODO DIFÍCIL? ¿ACEPTAS EL RETO?', body: 'TODAS LAS CARTAS TIENEN PREMIO Y BEBES MUCHO MÁS'},
            {title: 'INGRESA ALTURA DE PIRÁMIDE', body: '¡ MÁS ALTA MÁS BEBES !'},
            {title: 'INGRESA JUGADORES', body:'(1-26 PERSONAS)'}
        ]
        return (
            <View style={styles.container}>
                <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
                <Text style={{color: '#474442', fontSize: 40, top: 60}}>INSTRUCCIONES</Text>
                <View style={{flex: 1, width: 300, height: 100, left: -15}}>
                <StepIndicator
                    stepCount={3}
                    currentPosition = {3}
                    direction='vertical'
                    customStyles={stepIndicatorStyles}
                    labels={data.map(item => [item.title, item.body])}
                    renderLabel={function (position, stepStatus, label, currentPosition){
                        if (position["position"] === 2) {
                            return (
                                <View>
                                <Text style={{fontWeight: "bold", color: '#474442', fontSize: 16, top: 0, left: -30}}>{position.label[0]}</Text>
                                <Text style={{color: '#474442', fontSize: 15, top: 10, left: -30}}>{position.label[1]}</Text>
                                </View>
                            )
                        }
                        else if (position["position"] === 1) {
                            return (
                                <View>
                                <Text style={{fontWeight: "bold", color: '#474442', fontSize: 16, top: 0, left: 5}}>{position.label[0]}</Text>
                                <Text style={{color: '#474442', fontSize: 15, top: 10, left: 5}}>{position.label[1]}</Text>
                                </View>
                            )
                        }
                        else{
                            return (
                                <View>
                                <Text style={{fontWeight: "bold", color: '#474442', fontSize: 16, top: 25, left: 18}}>{position.label[0]}</Text>
                                <Text style={{color: '#474442', fontSize: 15, top: 35, left: 18}}>{position.label[1]}</Text>
                                </View>
                            )
                        } 
                }}
                />
                </View>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Setup')}
                style={{ borderColor: '#474442' , padding: 15, borderWidth: 2, top: -40 }}>
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