import React, { Component } from 'react';

import NavigationBar from '../components/NavigationBar'
import { View, TouchableOpacity, Dimensions, TextInput, Text, StyleSheet, Image } from 'react-native'

// import { Container } from './styles';

const desen = require('../imgs/desen.png')
const logo = require('../imgs/logo.png')

const width = Dimensions.get('window').width

export default class Autenticacao extends Component {

    state = {
        email: '',
        senha: '',
    }

    render() {
        return (
            <View style={styles.Scene} >
                <NavigationBar titulo='Acesse com sua conta!' />
                <Image style={{ marginTop: 10, width: 150, height: 150, }} source={logo} />
                <View style={styles.form}>
                    <TextInput
                        style={styles.Input}
                        value={this.state.email}
                        onChangeText={(value) => this.setState({ email: value })}
                        placeholder='Digite seu e-mail'
                        keyboardType='email-address'
                    />

                    <TextInput
                        style={styles.Input}
                        value={this.state.senha}
                        onChangeText={(value) => this.setState({ senha: value })}
                        placeholder='Digite uma senha'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('menu') }}
                        style={styles.btnlogin}
                        underlayColor={'#ff4081ff'}
                        activeOpacity={0.90}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>LogIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('menu') }}
                        style={styles.btnEsqSenha}
                        underlayColor={'#ff4081ff'}
                        activeOpacity={0.90}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Esqueci minha senha</Text>
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
    btnlogin: {
        elevation: 5,
        borderColor: 'white',
        height: 55,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#ff9700ff'
    },
    btnEsqSenha: {
        marginTop: 20
    }
})
