import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default class Statistics extends Component {
    constructor(props){
        super(props)
        this.state = {
          users: props.route.params.users
        }
      }

    render(){
        const items = this.state.users.map(function(item){
            return <Text title={item.name} key={item.name}> {item.name}: {item.drinks} </Text>;
        });
        return(
        <View style={styles.container}>
            {items}
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{ backgroundColor: '#d1625a', bottom: -50, padding: 10, borderRadius: 5 }}>
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
