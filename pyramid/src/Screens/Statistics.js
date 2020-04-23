import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native';

export default class Statistics extends Component {
    constructor(props){
        super(props)
        this.state = {
          users: props.route.params.users
        }
    }
    
    render(){
        return(
        <View style={styles.container_list}>
            <View style={styles.container_list}>
            <FlatList
            data={this.state.users}
            renderItem={
                ({item, index}) => 
                <Text key={index} id={index} style={styles.item}>{item.name}: {item.drinks}</Text>
            }
            keyExtractor={(item,index) => index.toString()}
            />
            </View>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{ backgroundColor: '#d1625a', alignSelf:"center", width:150, bottom: 50, padding: 10, borderRadius: 5 }}>
            <Text key="finish" style={{ alignSelf:"center", fontSize: 20, color: '#fff' }}>Terminar</Text>
            </TouchableOpacity>
            <Text key="brand" style={{ bottom:-200, color: '#888'}}>By LP</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container_list: {
        flex: 1,
        paddingTop: 22,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
