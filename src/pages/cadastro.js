import React, { Component } from 'react'

import { View, Button, Text, StatusBar } from 'react-native'

// import { Container } from './styles';

export default class Cadastro extends Component {
    render() {
        return (
            <View >
                <View style={{ height: 55, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7b2de2ff' }}>
                    <StatusBar
                        //hidden
                        backgroundColor='#7b2de2ff'
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 4 }}>
                        <Text style={{ fontFamily: 'mainFontBold', color: '#fff', fontSize: 19, fontWeight: 'bold', }}>Cadastro</Text>
                    </View>
                </View>
                <Text>Cadastro</Text>
                <Button title='Auth' color='#7b2de2ff' onPress={() => { this.props.navigation.navigate('autenticacao') }} />
            </View>
        )
    }
}
