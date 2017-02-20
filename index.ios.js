import React from 'react';
import { AppRegistry } from 'react-native';
import PersonManagerApp from './app/';

export default class PersonManagerReactNative extends React.Component {
    render() {
        return (
            <PersonManagerApp/>
        );
    }
}

AppRegistry.registerComponent('PersonManagerReactNative', () => PersonManagerReactNative);
