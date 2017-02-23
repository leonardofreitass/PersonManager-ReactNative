import React from 'react';
import Router from 'react-native-simple-router';

import {routes} from './config/';
import {BackButton, NavTitle} from './components/';
import style from './style';

export default class PersonManagerApp extends React.Component {
    render() {
        return (
            <Router
                firstRoute={routes.FIRST_SCENE}
                headerStyle={style.sceneHeader}
                statusBarColor="black"
                backButtonComponent={BackButton}
            />
        )
    }
}