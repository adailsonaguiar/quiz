import React, { Component } from 'react';

import NavigationBar from '../components/NavigationBar'
import { View, Button, Text } from 'react-native'

// import { Container } from './styles';

export default class Autenticacao extends Component {
    render() {
        return (
            <View >
                <NavigationBar  titulo='Acesse com sua conta!'/>
                <Text>Autenticacao</Text>
                <Button title='Menu' color='' onPress={() => { this.props.navigation.navigate('menu') }} />
            </View>
        )
    }
}
