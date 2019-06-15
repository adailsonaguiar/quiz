import React, { Component } from 'react'

import NavigationBar from '../components/NavigationBar'
import { View, Button, Text, StyleSheet, TextInput } from 'react-native'

// import { Container } from './styles';

export default class Cadastro extends Component {

    state = {
        nome: '',
        email: '',
        telefone: '',
        senha: '',
    }

    render() {
        return (
            <View >
                <NavigationBar />
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
                        keyboardType='default'
                    />
                    <Button title='Auth' color='#7b2de2ff' onPress={() => { this.props.navigation.navigate('autenticacao') }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Input: {
        height: 40,
        width: 350,
        backgroundColor: '#e6e6e6ff',
        textAlign: 'left',
        marginBottom: 15,
        fontSize: 16,
        borderRadius: 8,
    },
    form: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
    }
})

