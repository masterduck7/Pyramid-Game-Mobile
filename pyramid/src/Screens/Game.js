import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Game extends Component{
  constructor(props){
    super(props)
    this.state = {
      pyramid_height : props.route.params.pyramid_height,
      users: props.route.params.users
    }
  }
  
  render(){
    return(
      <View>
        <Text>{this.state.pyramid_height}</Text>
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
