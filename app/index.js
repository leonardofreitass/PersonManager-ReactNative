import React from 'react';
import Router from 'react-native-simple-router';
import {routes} from './config/';

export default class PersonManagerApp extends React.Component {
    render() {
        return (
            <Router firstRoute={routes.FIRST_SCENE} />
        )
    }
}