import React from 'react'

import {Text} from 'react-native';

export default class PersonScene extends React.Component {

    render() {
        return (
            <Text>{this.props.data.name}</Text>
        )
    }
}