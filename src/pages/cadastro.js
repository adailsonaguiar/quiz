import React, { Component } from 'react'

import NavigationBar from '../components/NavigationBar'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

import Base64 from 'Base64'

// import { Container } from './styles'

export default class Cadastro extends Component {

    state = {
        nome: '',
        email: '',
        telefone: '',
        senha: '',
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyBx7BJr64PyjrB9Nhh3xdZgxeuZTX7QBuE",
            authDomain: "quiz-f043e.firebaseapp.com",
            databaseURL: "https://quiz-f043e.firebaseio.com",
            projectId: "quiz-f043e",
            storageBucket: "quiz-f043e.appspot.com",
            messagingSenderId: "281101740362",
            appId: "1:281101740362:web:d0fd411bbd773c7e"
        }
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
    }

    cadastroUsuario = async () => {

        var database = firebase.database()
        database.ref('pont').remove()

        /*
        let encodedEmail = Base64.btoa(this.state.email)

        firebase.auth().createUserWithEmailAndPassword('adailsonaacj@live.com', '123456as')
            .then(user => {
                console.log(user)
                // firebase.database().ref(`/pessoa/${encodedEmail}`).push({ nome: this.state.nome, telefone: this.state.telefone })
                //   .then(value => console.log(value), alert('Cadastrado'))
            })
            .catch(error => console.log(error.code))
            */
    }

    signUp = async () => {
        let encodedEmail = Base64.btoa(this.state.email)

        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
                .then(
                    await firebase.database().ref(`/pessoa/${encodedEmail}`).push({ nome: this.state.nome, telefone: this.state.telefone })
                        .then(value => console.log(value), alert('Cadastrado'))
                )

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }
    }

    render() {
        return (
            <View style={styles.Scene} >
                <NavigationBar titulo='Cadastre-se' />
                <View style={styles.form}>
                    <TextInput
                        style={styles.Input}
                        value={this.state.nome}
                        onChangeText={(value) => this.setState({ nome: value })}
                        placeholder='Digite seu nome'
                        keyboardType='default'
                    />
                    <TextInput
                        style={styles.Input}
                        value={this.state.email}
                        onChangeText={(value) => this.setState({ email: value })}
                        placeholder='Digite seu email'
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={styles.Input}
                        value={this.state.telefone}
                        onChangeText={(value) => this.setState({ telefone: value })}
                        placeholder='Digite seu Telefone'
                        keyboardType='phone-pad'
                    />
                    <TextInput
                        style={styles.Input}
                        value={this.state.senha}
                        onChangeText={(value) => this.setState({ senha: value })}
                        placeholder='Digite uma senha'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        onPress={this.signUp}
                        style={styles.btnCadastrar}
                        underlayColor={'#ff4081ff'}
                        activeOpacity={0.90}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Scene: {
        flex: 1,
        backgroundColor: '#0e4b9bff'
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
    btnCadastrar: {
        height: 55,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#ff9700ff'
    }
})

