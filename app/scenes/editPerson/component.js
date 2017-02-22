import React from 'react'

import {View, Text, TextInput, ActivityIndicator} from 'react-native';

import {PersonForm} from './../../components/';
import {PersonService} from './../../services/';
import mainStyle from "./../../style";

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
        this.setState({editPerson: this.props.data.person});
    }

    _showError(){

    }

    _editPerson(){
        PersonService.updatePerson(this.props.data.index, this.state.editPerson).then(
            () => {
                this.props.toBack();
            }
        );
    }
}