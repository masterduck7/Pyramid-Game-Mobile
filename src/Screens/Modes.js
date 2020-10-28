import React, { Component } from 'react';
import { Image, ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import background from '../../assets/Background.png';
import Steps from '../../assets/Steps.png';

export default class Modes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
                    <Text style={{ color: '#474442', fontSize: hp('4.9%'), marginTop: hp('-10%') }}>MODOS</Text>
                    <Image source={Steps} resizeMode="stretch"
                        style={{ width: wp('90%'), height: hp('30%'), alignContent: 'center' }} />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Setup')}
                        style={{
                            borderColor: '#474442', padding: wp('4%'), borderWidth: hp('0.25%'),
                            top: hp('5%'), alignSelf: 'flex-end', marginRight: wp('10%')
                        }}>
                        <Text style={{ fontSize: hp('2.2%'), color: '#474442' }}>JUGAR</Text>
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
        width: wp("100%"),
        height: hp("100%")
    },
});