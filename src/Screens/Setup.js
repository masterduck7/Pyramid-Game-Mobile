import React, { Component } from 'react';
import { Alert, ImageBackground, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input, CheckBox } from 'react-native-elements';
import { Formik } from 'formik';
import background from '../../assets/Background.png';

export default class Setup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pyramid_height: 0,
            hard: false,
            users: [],
        }
    }

    createPlayer = () => ({
        name: ''
    });

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
                    <ScrollView style={{ width: "100%" }}>
                        <View style={{ top: hp('8%'), alignSelf: 'flex-start', marginLeft: wp('15%') }} >
                            <Text style={{ color: '#474442', fontSize: hp('2.2%'), marginLeft: wp('5%') }}>VARIABLES</Text>
                            <Text style={{ color: '#474442', fontSize: hp('3.2%') }}>INGRESAR</Text>
                            <Text style={{ color: '#474442', fontSize: hp('3.2%'), marginLeft: wp('5.7%') }}>DATOS:</Text>
                        </View>
                        <Formik
                            initialValues={{ players: [], }}
                            onSubmit={values => {
                                let players_empty = true
                                values.players.forEach(player => {
                                    if (player.name === "") {
                                        players_empty = false
                                    }
                                });
                                if (
                                    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(this.state.pyramid_height)
                                    && values.players.length > 0 && players_empty) {
                                    this.setState({
                                        users: values
                                    })
                                    this.props.navigation.navigate(
                                        'Game',
                                        {
                                            pyramid_height: this.state.pyramid_height,
                                            users: this.state.users, hard: this.state.hard
                                        }
                                    )
                                }
                                else if (this.state.pyramid_height === 0 || this.state.pyramid_height > 10 && values.players.length > 0) {
                                    Alert.alert(
                                        "Error",
                                        "Altura pirámide debe estar entre 1 y 10",
                                        [
                                            {
                                                text: "OK",
                                                style: "cancel"
                                            }
                                        ],
                                        { cancelable: false }
                                    );
                                }
                                else {
                                    Alert.alert(
                                        "Error",
                                        "Favor ingresar todos los datos",
                                        [
                                            {
                                                text: "OK",
                                                style: "cancel"
                                            }
                                        ],
                                        { cancelable: false }
                                    );
                                }
                            }}
                        >
                            {({ handleChange, handleSubmit, values, setFieldValue }) => (
                                <View style={{ alignItems: 'center', width: wp("70%"), marginLeft: wp('17%'), marginTop: hp('15%') }}>
                                    <Text style={{ marginBottom: hp('2%'), marginTop: hp('-3%'), alignSelf: 'flex-start', marginLeft: wp('6%'), fontSize: hp('2.2%') }}>DIFICIL</Text>
                                    <CheckBox
                                        containerStyle={{ left: wp('-22%'), marginTop: hp('-3%') }}
                                        checkedColor='#474442'
                                        uncheckedColor='#474442'
                                        checkedIcon="check-square"
                                        size={hp('3.5%')}
                                        checked={this.state.hard}
                                        onPress={() => this.setState({ hard: !this.state.hard })}
                                    />
                                    <Text style={{ color: '#474442', fontSize: hp('2.2%'), alignSelf: 'flex-end', left: wp('3%') }}>INGRESA ALTURA MÁXIMA:</Text>
                                    <Input
                                        underlineColorAndroid="transparent"
                                        containerStyle={{ borderWidth: hp('0.25%'), borderColor: '#474442', alignSelf: 'flex-end', left: hp('2%') }}
                                        inputContainerStyle={{ borderBottomWidth: 0 }}
                                        onChange={value => {
                                            this.setState({
                                                pyramid_height: value.nativeEvent.text
                                            })
                                        }}
                                    />
                                    <Text style={{ paddingTop: hp('2%'), color: '#474442', fontSize: hp('2.2%'), alignSelf: 'flex-end', left: wp('3%') }}>INGRESAR JUGADORES:</Text>
                                    {values.players.map(({ name }, index) => (
                                        <Input
                                            containerStyle={{ borderWidth: hp('0.25%'), marginTop: hp('0.3%'), borderColor: '#474442', alignSelf: 'flex-end', left: hp('2%') }}
                                            inputContainerStyle={{ borderBottomWidth: 0 }}
                                            underlineColorAndroid="transparent"
                                            key={index}
                                            id={index}
                                            onChangeText={handleChange(`players[${index}].name`)}
                                            value={values.players[index].name}
                                        />
                                    ))}
                                    <View style={{ flexDirection: "row", alignSelf: 'flex-end', left: wp('4%') }}>
                                        <View style={styles.buttonStyle}>
                                            <TouchableOpacity
                                                onPress={() => setFieldValue('players', [...values.players, this.createPlayer()])}
                                                style={styles.buttonUsers}>
                                                <Text style={{ fontSize: hp('2.2%'), color: '#474442' }}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.buttonStyle}>
                                            <TouchableOpacity
                                                onPress={() => setFieldValue('players', [...values.players.slice(0, -1)])}
                                                style={styles.buttonUsers}>
                                                <Text style={{ fontSize: hp('2.2%'), color: '#474442' }}>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={styles.buttonSubmit}>
                                        <Text style={{ fontSize: hp('2.2%'), color: '#474442' }}>SALUD !!!</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonUsers: {
        marginTop: hp('1%'),
        marginHorizontal: hp('0.5%'),
        padding: hp('1.2%'),
        alignSelf: "center",
        borderColor: '#474442',
        borderWidth: hp('0.25%')
    },
    buttonSubmit: {
        marginTop: hp('3%'),
        padding: hp('1.2%'),
        alignSelf: "flex-end",
        borderColor: '#474442',
        borderWidth: hp('0.25%'),
        left: wp('4%')
    },
    image: {
        flex: 1,
        resizeMode: "stretch",
        justifyContent: "center",
        alignItems: 'center',
        width: wp("100%"),
        height: hp("100%")
    },
    textInput: {
        color: '#474442',
    }
});