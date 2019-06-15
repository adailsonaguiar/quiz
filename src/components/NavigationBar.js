import React, { Component } from 'react';

import { View, StatusBar, Text } from 'react-native';

// import { Container } from './styles';

export default class NavigationBar extends Component {
    render() {
        return (
            <View style={{ height: 55, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7b2de2ff' }}>
                <StatusBar
                    //hidden
                    backgroundColor='#7b2de2ff'
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 4 }}>
                    <Text style={{ fontFamily: 'mainFontBold', color: '#fff', fontSize: 19, fontWeight: 'bold', }}>Cadastro</Text>
                </View>
            </View>
        )
    }
}
