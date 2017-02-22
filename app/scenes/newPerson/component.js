import React from 'react'

import {View, Text, TextInput} from 'react-native';

import {PersonForm} from './../../components/';
import {PersonService} from './../../services/';

export default class NewPersonScene extends React.Component {

    constructor(){
        super();

        this.state = {
            newPerson: {
                name: "",
                email: "",
                gender: "male",
                age: "",
                numbers: [
                    {
                        number: "",
                        description: ""
                    }
                ]
            }
        }
    }

    render() {
        return (
            <View>
                <PersonForm
                    person={this.state.newPerson}
                    fail={this._showError.bind(this)}
                    finish={this._createNewPerson.bind(this)}
                />
            </View>
        )
    }

    _showError(){

    }

    _createNewPerson(){
        PersonService.savePerson(this.state.newPerson).then(
            () => {
                this.props.toBack();
            }
        );
    }
}