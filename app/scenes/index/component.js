import React from 'react'
import {View, Text} from 'react-native';
import ActionButton from 'react-native-action-button';

import {PersonList} from './../../components/'
import mainStyle from "./../../style";
import {routes} from './../../config/';

export default class IndexScene extends React.Component {


    render() {
        return (
            <View flex={1}>
                <View style={mainStyle.sceneSubHeader}>
                    <Text>
                        Lista de Pessoas
                    </Text>
                </View>
                <PersonList
                    onPersonClick={this.openPersonScene.bind(this)}
                    ref={(personList) => {this._personList = personList}}
                />
                <ActionButton buttonColor="rgba(231,76,60,1)" onPress={this._openNewPersonScene.bind(this)}>

                </ActionButton>
            </View>
        );
    }

    componentWillMount(){
        this.props.routeEmitter.addListener('willFocus', (route) => {
            if (this.props.name === route.name){
                this._personList._reloadPeople();
            }
        });
        
    }

    openPersonScene(person, index){
        let route = routes.SCENES_CONFIG.personScene;
        route.data = {person, index};
        route.titleProps.params = {name: person.name};
        this.props.toRoute(route);
    }

    _openNewPersonScene(){
        this.props.toRoute(routes.SCENES_CONFIG.newPersonScene);
    }

}