import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Button, InputItem, List } from '@ant-design/react-native';


export default function Setup(props) {
    const { navigation } = props
    const data = {
        pyramid_height: 0,
        users: []
    }
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
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{ backgroundColor: '#d1625a', padding: 10, borderRadius: 5 }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Jugar</Text>
            </TouchableOpacity>
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