import React from 'react'
import {View, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {PersonCard} from './../../components/';
import {PersonService} from './../../services/';
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
                    <ActionButton.Item buttonColor='red' title="Excluir contato" onPress={this._deletePerson.bind(this)}>
                        <Icon name="delete" color="white" size={20}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        )
    }

    _editPerson(){
        let person = this.props.data.person;
        let index = this.props.data.index;
        let route = routes.SCENES_CONFIG.editPersonScene;
        route.data = {person, index};
        route.titleProps.params = {name: person.name};
        this.props.toRoute(route);
    }

    _deletePerson(){
        Alert.alert(
            'Remover pessoa',
            `Deseja mesmo remover a pessoa ${this.props.data.person.name}?`,
            [
                {text: 'Não', onPress: () => {}},
                {text: 'Sim', onPress: () => {
                    PersonService.removePerson(this.props.data.index).then(() => {
                       this.props.toBack();
                    });
                }},
            ]
        )
    }
}