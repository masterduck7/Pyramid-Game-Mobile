import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Game(props) {
  const { route } = props
  const { setup } = route.params
  const { pyramid_height, users } = setup
  
  return (
    <View style={styles.container}>
      <Text style={{color: '#888', fontSize: 50}}>{pyramid_height}</Text>
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
