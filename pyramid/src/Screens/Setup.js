import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
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
            <Text style={{color: '#888', fontSize: 50, top:-100}}>Ingrese altura:</Text>
            <InputItem
                placeholder="Ingrese altura"
                onChange = {value => {
                    data.pyramid_height = value
                }}
            >
                Altura
            </InputItem>
            <Formik
                initialValues={{ players: [], }}
                onSubmit={values => console.log(values)}
            >
            {({ handleChange, handleSubmit, values, setFieldValue }) => (
                <View>
                <Text>Ingresa jugadores</Text>
                {values.players.map(({ name }, index) => (
                    <InputItem
                        placeholder="Ingresa nombre"
                        key={index}
                        onChangeText={handleChange(`players[${index}].name`)}
                        value={values.players[index].name}
                    />
                ))}
                <TouchableOpacity
                    onPress={() => setFieldValue('players', [...values.players, createPlayer()])}
                    style={{ backgroundColor: '#506280', padding: 10, alignSelf:"center", borderRadius: 5 }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Agregar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setFieldValue('players', [...values.players.slice(0,-1)])}
                    style={{ backgroundColor: '#506280', padding: 10, alignSelf:"center", borderRadius: 5 }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Quitar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={{ backgroundColor: '#d1625a', padding: 10, alignSelf:"center", borderRadius: 5 }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>A jugar!</Text>
                </TouchableOpacity>
                </View>
            )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });