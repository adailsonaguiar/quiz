import React, { Component } from 'react';

import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native'

// import { Container } from './styles';
const vida = require('../imgs/vida.png')
const clock = require('../imgs/clock.png')
const alternativa = require('../imgs/alternativa.png')

export default class Quiz extends Component {

    respostaCorreta = (resposta) => {
        alert(`A resposta ${resposta}`)
    }
    render() {
        return (
            <View style={styles.Scene} >
                <View style={{ height: 55, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff6600ff' }}>
                    <StatusBar
                        //hidden
                        backgroundColor='#ff6600ff'
                    />
                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'flex-start', flex: 1 }}>
                        <Text style={{ color: 'black', fontSize: 21, fontWeight: 'bold' }}>3/10</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Image style={{ width: 70, height: 70 }} source={clock} />
                    </View>
                    <View style={{ marginRight: 10, justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
                        <Image style={{ width: 50, height: 50 }} source={vida} />
                    </View>
                </View>
                <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold' }}>Pergunta</Text>
                <View style={styles.pergunta} >
                    <Text style={{ marginTop: 30, fontSize: 30, color: 'black', padding: 10 }}>Qual o grupo em que todas as palavras foram escritas corretamente?</Text>
                </View>
                <View style={styles.alternativas}>
                    <TouchableOpacity
                        id='1'
                        onPress={() => this.respostaCorreta('Errada!')}
                        style={{ marginBottom: 10, flexDirection: 'row' }}
                        activeOpacity={0.5}>
                        <Image style={{ width: 35, height: 35, marginRight: 10 }} source={alternativa} />
                        <Text style={styles.txtAlternativa}>Asterístico, beneficente, meteorologia, entertido</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        id='2'
                        onPress={() => this.respostaCorreta('Errada!')}
                        style={{ marginBottom: 10, flexDirection: 'row' }}
                        activeOpacity={0.5}>
                        <Image style={{ width: 35, height: 35, marginRight: 10 }} source={alternativa} />
                        <Text style={styles.txtAlternativa}>Asterístico, beneficente, meteorologia, entertido</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        id='3'
                        onPress={() => this.respostaCorreta('Correta!')}
                        style={{ marginBottom: 10, flexDirection: 'row' }}
                        activeOpacity={0.5}>
                        <Image style={{ width: 35, height: 35, marginRight: 10 }} source={alternativa} />
                        <Text style={styles.txtAlternativa}>Asterisco, beneficente, meteorologia, entretido</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        id='4'
                        onPress={() => this.respostaCorreta('Errada!')}
                        style={{ marginBottom: 10, flexDirection: 'row' }}
                        activeOpacity={0.5}>
                        <Image style={{ width: 35, height: 35, marginRight: 10 }} source={alternativa} />
                        <Text style={styles.txtAlternativa}>Asterístico, beneficente, meteorologia, entretido</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        id='5'
                        onPress={() => this.respostaCorreta('Errada!')}
                        style={{ marginBottom: 10, flexDirection: 'row' }}
                        activeOpacity={0.5}>
                        <Image style={{ width: 35, height: 35, marginRight: 10 }} source={alternativa} />
                        <Text style={styles.txtAlternativa}>Asterisco, beneficente, meteorologia, entretido</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Scene: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ff6600ff',
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
    alternativas: {
        flex: 1,
        margin: 'auto',
        alignItems: 'flex-start',
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
    txtAlternativa: {
        color: 'white',
        fontSize: 15,
        marginBottom: 20,
        textAlign: 'center'
    },
    pergunta: {
        marginTop: 20,
        elevation: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 250,
        width: 370,
        alignItems: 'center',
        textAlign: 'center'
    }
})
