import React, { Component } from 'react';
import { ImageBackground, FlatList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
            <View style={{top: hp('7%'), alignSelf: 'flex-start'}}>
                <Text style={{ color: '#474442', fontSize: hp('3.5%'), marginLeft: wp('5%')}}>¿QUIÉN</Text>
                <Text style={{ color: '#474442', fontSize: hp('3.5%'), marginLeft: wp('15%')}}>BEBIÓ</Text>
                <Text style={{ color: '#474442', fontSize: hp('3.5%'), marginLeft: wp('20%')}}>MÁS?</Text>
            </View>
            <View style={styles.container_list}>
            <FlatList
            nestedScrollEnabled
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
            <Text style={{ fontSize: hp('2.2%'), color: '#474442' }}>TERMINAR</Text>
            </TouchableOpacity>
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
        padding: hp('1%'),
        fontSize: hp('2%'),
        marginLeft: wp('14%')
    },
    list: {
        marginTop: hp('10%'),
        height: hp("80%")
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      alignItems: 'center', 
      width: wp("100%"),
      height: hp("100%")
    },
    buttonSubmit: {
      marginBottom: hp('7%'),
      padding: hp('1.2%'),
      alignSelf:"center",
      borderColor: '#474442',
      borderWidth: hp('0.25%'),
    }
});
