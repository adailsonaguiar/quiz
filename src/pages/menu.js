import React, { Component } from 'react';

import NavigationBar from '../components/NavigationBar'
import { View, Button, Text } from 'react-native'

// import { Container } from './styles';

export default class Menu extends Component {
    render() {
        return (
            <View >
                <NavigationBar titulo='Menu'/>
                <Text>Menu</Text>
                <Button title='Jogar' color='' onPress={() => { this.props.navigation.navigate('quiz') }} />
            </View>
        )
    }
}
