import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import { InputItem } from '@ant-design/react-native';
import { Formik } from 'formik';

export default function Setup(props) {
    const { navigation } = props
    const data = {
        pyramid_height: 0,
        users: []
    }
    const createPlayer = () => ({
        name: ''
    });
    return (
        <View style={styles.container}>
        <ScrollView>
            <Text style={{ textAlign:'center', color: '#888', fontSize: 40, top:-15}}>Ingresar Datos:</Text>
            <Formik
                initialValues={{ players: [], }}
                onSubmit={values => {
                    if (["1","2","3","4","5","6","7","8","9","10"].includes(data.pyramid_height) && values.players.length > 0) {
                        data.users = values;
                        navigation.navigate('Game', {setup: data})
                    }else{
                        alert("Favor completa todos los campos")
                    }
                }}
            >
            {({ handleChange, handleSubmit, values, setFieldValue }) => (
                <View style={{alignItems:'center'}}>
                <InputItem
                    placeholder="Ingrese altura"
                    onChange = {value => {
                        data.pyramid_height = value
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
                            onPress={() => setFieldValue('players', [...values.players, createPlayer()])}
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