import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default class Statistics extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={{color: '#888', fontSize: 50}}>Pirámide</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={{ backgroundColor: '#d1625a', bottom: -100, padding: 10, borderRadius: 5 }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Terminar</Text>
        </TouchableOpacity>
        <Text style={{ bottom:-200, color: '#888'}}>By LP</Text>
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
