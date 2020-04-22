import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Steps, WingBlank } from '@ant-design/react-native';

const Step = Steps.Step;

export default function Instructions(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={{color: '#888', fontSize: 50, top:-100}}>Instrucciones</Text>
            <WingBlank size="lg">
            <Steps>
                <Step
                    title="Ingrese nombre de jugadores"
                />
                <Step
                    title="Ingrese altura de pirámide"
                />
                <Step title="Empiece a jugar y beber"
                />
                </Steps>
            </WingBlank>
            <TouchableOpacity
                onPress={() => navigation.navigate('Setup')}
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