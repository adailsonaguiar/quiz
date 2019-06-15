import React, { Component } from 'react';

import NavigationBar from '../components/NavigationBar'
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'

// import { Container } from './styles';
const placar = require('../imgs/placar.png')

const width = Dimensions.get('window').width
const desen = require('../imgs/desen.png')
const avatar = require('../imgs/avatar.png')

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.Scene} >
                <NavigationBar />
                <View style={styles.form}>
                    <Image style={{ marginBottom: 20, width: 150, height: 150, }} source={avatar} />
                    <Text style={{ marginBottom: 30, fontSize: 20, fontWeight: 'bold', color: 'white' }}>William Ramos</Text>
                    <Image style={{ marginTop: 10, width: 420, height: 140, }} source={placar} />
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('quiz') }}
                        style={styles.btnJogar}
                        underlayColor={'#ff4081ff'}
                        activeOpacity={0.90}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>JOGAR</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={{ width: width, height: width / 4, }} source={desen} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Scene: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#0e4b9bff',
    },
    Input: {
        height: 60,
        width: 350,
        backgroundColor: '#e6e6e6ff',
        textAlign: 'left',
        paddingLeft: 25,
        marginBottom: 50,
        fontSize: 16,
        borderRadius: 20,
    },
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnJogar: {
        elevation: 5,
        marginTop: 50,
        borderColor: 'white',
        height: 75,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#ff9700ff'
    },
})
