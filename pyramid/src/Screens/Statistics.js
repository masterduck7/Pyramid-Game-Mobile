import React, { Component } from 'react';
import { ImageBackground, FlatList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import background from '../../assets/Background.png';

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
            <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
            <Text style={{ textAlign:'center', color: '#474442', fontSize: 30, top:60, marginRight: 260}}>¿QUIÉN</Text>
            <Text style={{ textAlign:'center', color: '#474442', fontSize: 30, top:60, marginRight: 210}}>BEBIÓ</Text>
            <Text style={{ textAlign:'center', color: '#474442', fontSize: 30, top:60, marginRight: 145}}>MÁS?</Text>
                
            <View style={styles.container_list}>
            <FlatList
            style={styles.list}
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
                style={styles.buttonSubmit}>
            <Text style={{ fontSize: 20, color: '#474442' }}>TERMINAR</Text>
            </TouchableOpacity>
            <Text key="brand" style={{ bottom:-200, color: '#888'}}>By LPSoftware</Text>
            </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container_list: {
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        padding: 7,
        fontSize: 18,
    },
    list: {
        top: 80,
        left: 85
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      alignItems: 'center', 
      width: "100%",
      height: "100%"
    },
    buttonSubmit: {
      marginTop: 30,
      top: -50,
      padding: 10,
      alignSelf:"center",
      borderColor: '#474442',
      borderWidth: 2,
    }
});
