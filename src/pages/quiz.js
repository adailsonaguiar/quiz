import React, { Component } from 'react';

import NavigationBar from '../components/NavigationBar'
import { View, Button, Text } from 'react-native'

// import { Container } from './styles';

export default class Quiz extends Component {
    render() {
        return (
            <View >
                <NavigationBar />
                <Text>Jogando...</Text>
            </View>
        )
    }
}
