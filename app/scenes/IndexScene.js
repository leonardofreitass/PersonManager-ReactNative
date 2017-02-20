import React from 'react'
import {View, Text} from 'react-native';
import {PersonList} from './../components/'

export default class IndexScene extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Lista de Pessoas
                </Text>
                <PersonList/>
            </View>
        );
    }
}