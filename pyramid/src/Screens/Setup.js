import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import { InputItem } from '@ant-design/react-native';
import { Formik } from 'formik';

export default class Setup extends Component{
    constructor(props){
      super(props)
      this.state = {
        pyramid_height : 0,
        users: []
      }
    }

    createPlayer = () => ({
        name: ''
    });
    
    render(){
        return(
            <View style={styles.container}>
            <ScrollView>
                <Text style={{ textAlign:'center', color: '#888', fontSize: 40, top:-15}}>Ingresar Datos:</Text>
                <Formik
                    initialValues={{ players: [], }}
                    onSubmit={values => {
                        if (["1","2","3","4","5","6","7","8","9","10"].includes(this.state.pyramid_height) && values.players.length > 0) {
                            this.setState({
                                users : values
                            })
                            this.props.navigation.navigate('Game', {pyramid_height: this.state.pyramid_height, users: this.state.users})
                        }
                        else if(this.state.pyramid_height === 0 || this.state.pyramid_height > 10 && values.players.length > 0){
                            alert("Altura pirámide debe estar entre 1 y 10")
                        }
                        else{
                            alert("Favor completa todos los campos")
                        }
                    }}
                >
                {({ handleChange, handleSubmit, values, setFieldValue }) => (
                    <View style={{alignItems:'center'}}>
                    <InputItem
                        placeholder="Ingrese altura"
                        onChange = {value => {
                            this.setState({
                                pyramid_height : value
                            })
                        }}
                    >
                        Altura
                    </InputItem>
                    <Text style={{color: '#888', fontSize: 20}}>Ingresar Jugadores:</Text>
                    {values.players.map(({ name }, index) => (
                        <InputItem
                            placeholder="Ingresa nombre"
                            key={index}
                            onChangeText={handleChange(`players[${index}].name`)}
                            value={values.players[index].name}
                        />
                    ))}
                    <View style={{ flexDirection:"row" }}>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                onPress={() => setFieldValue('players', [...values.players, this.createPlayer()])}
                                style={styles.buttonUsers}>
                                <Text style={{ fontSize: 20, color: '#fff' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                onPress={() => setFieldValue('players', [...values.players.slice(0,-1)])}
                                style={styles.buttonUsers}>
                                <Text style={{ fontSize: 20, color: '#fff' }}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={styles.buttonSubmit}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Salud !!!</Text>
                    </TouchableOpacity>
                    </View>
                )}
                </Formik>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonUsers:{
        marginTop:10,
        marginHorizontal:5,
        backgroundColor: '#506280',
        padding: 10,
        alignSelf:"center",
        borderRadius: 5
    },
    buttonSubmit: {
        marginTop:10,
        backgroundColor: '#d1625a',
        padding: 10,
        alignSelf:"center",
        borderRadius: 5
    }
});