import React, { Component } from 'react';
import { Alert, ImageBackground, Text, View, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import { Formik } from 'formik';
import background from '../../assets/Background.png';

export default class Setup extends Component{
    constructor(props){
      super(props)
      this.state = {
        pyramid_height : 0,
        hard: false,
        users: [],
      }
    }

    createPlayer = () => ({
        name: ''
    });
    
    render(){
        return(
            <View style={styles.container}>
            <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
            <ScrollView style={{width: "100%"}}>
                <Text style={{ textAlign:'center', color: '#474442', fontSize: 15, top:60, marginRight: 170}}>VARIABLES:</Text>
                <Text style={{ textAlign:'center', color: '#474442', fontSize: 25, top:60, marginRight: 170}}>INGRESAR:</Text>
                <Text style={{ textAlign:'center', color: '#474442', fontSize: 25, top:65, marginRight: 170}}>DATOS:</Text>
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
                            ["1","2","3","4","5","6","7","8","9","10"].includes(this.state.pyramid_height) 
                            && values.players.length > 0 && players_empty) {
                            this.setState({
                                users : values
                            })
                            this.props.navigation.navigate(
                                'Game', 
                                {pyramid_height: this.state.pyramid_height,
                                users: this.state.users, hard: this.state.hard}
                            )
                        }
                        else if(this.state.pyramid_height === 0 || this.state.pyramid_height > 10 && values.players.length > 0){
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
                        else{
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
                    <View style={{alignItems:'center', width: "70%", marginLeft: 70, marginTop: 120}}>
                    <Text style={{top: -30, left: -90, fontSize: 18}}>DIFICIL</Text>
                    <CheckBox
                        containerStyle = {{left: -90, marginTop: -30}}
                        checkedColor = '#474442'
                        uncheckedColor = '#474442'
                        checkedIcon= "check-square"
                        size={30}
                        checked = {this.state.hard}
                        onPress={() => this.setState({hard: !this.state.hard})}
                    />
                    <Text style={{ paddingTop: -10, color: '#474442', fontSize: 20, left: 20}}>INGRESA ALTURA MÁXIMA:</Text>
                    <Input
                        underlineColorAndroid="transparent"
                        containerStyle={{borderWidth: 2, borderColor: '#474442', left: 20}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        onChange = {value => {
                            this.setState({
                                pyramid_height : value.nativeEvent.text
                            })
                        }}
                    />
                    <Text style={{paddingTop: 30, color: '#474442', fontSize: 20, left: 40}}>INGRESAR JUGADORES:</Text>
                    {values.players.map(({ name }, index) => (
                        <Input
                            containerStyle={{borderWidth: 2, marginTop: 5, borderColor: '#474442', left: 20}}
                            inputContainerStyle={{borderBottomWidth:0}}
                            underlineColorAndroid="transparent"
                            key={index}
                            id={index}
                            onChangeText={handleChange(`players[${index}].name`)}
                            value={values.players[index].name}
                        />
                    ))}
                    <View style={{ flexDirection:"row", left: 40 }}>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                onPress={() => setFieldValue('players', [...values.players, this.createPlayer()])}
                                style={styles.buttonUsers}>
                                <Text style={{ fontSize: 20, color: '#474442' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                onPress={() => setFieldValue('players', [...values.players.slice(0,-1)])}
                                style={styles.buttonUsers}>
                                <Text style={{ fontSize: 20, color: '#474442' }}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={styles.buttonSubmit}>
                        <Text style={{ fontSize: 20, color: '#474442' }}>SALUD !!!</Text>
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
    buttonUsers:{
        marginTop:10,
        marginHorizontal:5,
        padding: 10,
        alignSelf:"center",
        borderColor: '#474442',
        borderWidth: 2
    },
    buttonSubmit: {
        marginTop: 30,
        padding: 10,
        alignSelf:"center",
        borderColor: '#474442',
        borderWidth: 2,
        left: 100
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      alignItems: 'center', 
      width: "100%",
      height: "100%"
    },
    textInput: {
        color: '#474442',
    }
});