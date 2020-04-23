import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Example from '../../assets/Example.png';

export default class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={{color: '#888', fontSize: 50}}>Pirámide</Text>
        <Image source={Example} resizeMode="stretch" /> 
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Setup')}
          style={{ backgroundColor: '#d1625a', padding: 10, borderRadius: 5 }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>A beber!</Text>
        </TouchableOpacity>
        <Text style={{ bottom:-50, color: '#888'}}>By LP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
