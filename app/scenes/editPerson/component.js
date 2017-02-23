import React from 'react'

import {View, Text, TextInput, ActivityIndicator} from 'react-native';

import {PersonForm} from './../../components/';
import {PersonService} from './../../services/';
import mainStyle from "./../../style";
import {routes} from "./../../config/";

export default class EditPersonScene extends React.Component {

    render() {
        if (this.state.editPerson){
            return (
                <View>
                    <PersonForm
                        person={this.state.editPerson}
                        fail={this._showError.bind(this)}
                        finish={this._editPerson.bind(this)}
                    />
                </View>
            )
        }
        else{
            return (<ActivityIndicator style={mainStyle.centering}/>);
        }
    }

    componentWillMount(){
        this.setState({editPerson: this._copyPerson(this.props.data.person)});
    }

    _copyPerson(person){
        let json = JSON.stringify(person);
        return JSON.parse(json);
    }

    _showError(){

    }

    _editPerson(){
        let index = this.props.data.index;
        let person = this.state.editPerson;
        PersonService.updatePerson(index, person).then(
            () => {
                let route = routes.SCENES_CONFIG.personScene;
                route.data = {person, index};
                route.titleProps.params = {name: person.name};
                this.props.popToRoute(route);
            }
        );
    }
}