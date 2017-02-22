import React from 'react'
import {View} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {PersonCard} from './../../components/';
import {routes} from './../../config/';

export default class PersonScene extends React.Component {

    render() {
        return (
            <View flex={1}>
                <PersonCard
                    person={this.props.data.person}
                />
                <ActionButton
                    buttonColor="#3498db"
                    icon={<Icon name="menu" color="white" size={20}/>}>

                    <ActionButton.Item buttonColor='orange' title="Editar contato" onPress={this._editPerson.bind(this)}>
                        <Icon name="edit" color="white" size={20}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='red' title="Excluir contato" onPress={() => {}}>
                        <Icon name="delete" color="white" size={20}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        )
    }

    _editPerson(){
        let person = this.props.data.person;
        let index = this.props.data.index;
        let route = Object.assign(
            {},
            routes.SCENES_CONFIG.editPersonScene,
            {data: {person, index}}
        );
        this.props.toRoute(route);
    }
}