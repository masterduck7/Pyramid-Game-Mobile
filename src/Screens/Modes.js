import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { FlatList, Image, ImageBackground, Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import background from '../../assets/Background.png';
import icon from '../../assets/icon.png';

export default class Modes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modes: [
                { "name": "Normal", "image": icon, "color": "green" },
                { "name": "Birthday", "image": icon, "color": "red" },
                { "name": "Missile", "image": icon, "color": "black" },
                { "name": "Armageddon", "image": icon, "color": "blue" },
            ]
        }
    }

    goToMode(mode) {
        this.props.navigation.navigate("Setup" + mode)
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={background} resizeMethod="resize" style={styles.image}>
                    <Text style={{ color: '#474442', fontSize: hp('4.9%'), marginTop: hp('10%'), marginBottom: hp('5%') }}>MODOS</Text>
                    <SafeAreaView style={styles.containerCards}>
                        <FlatGrid
                            itemDimension={120}
                            style={styles.modeCards}
                            data={this.state.modes}
                            renderItem={({ item }) => (
                                <View>
                                    <TouchableOpacity onPress={() => this.goToMode(item.name)} style={[styles.itemContainer, { backgroundColor: item.color }]}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </SafeAreaView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        flex: 1,
        resizeMode: "stretch",
        justifyContent: "center",
        alignItems: 'center',
        width: wp("100%"),
        height: hp("100%")
    },
    modeCards: {
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        width: wp('90%'),
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        textAlign: "center"
    },
    containerCards: {
        flex: 1,
        width: wp("100%")
    }
});