import React from 'react'
import {View, Text, ActivityIndicator, TouchableHighlight, ScrollView } from 'react-native';

import {PersonService} from './../../services/'
import mainStyle from "./../../style";

export default class PersonList extends React.Component {
    constructor(){
        super();

        this.state = {
            loading: true,
            people: []
        }
    }

    render() {
        if (this.state.loading){
            return (
                <ActivityIndicator style={mainStyle.centering}/>
            )
        }
        else if (!this.state.people.length){
            return (
                <View style={mainStyle.centering}>
                    <Text>Nenhuma pessoa adicionada ainda.</Text>
                </View>

            )
        }
        else{
            return (
                <ScrollView >{this._mountPeopleList()}</ScrollView >
            )
        }
    }

    componentWillMount(){
        this._reloadPeople();
    }

    _personClickFactory(person){
        return () => {
            this.props.onPersonClick(person);
        };
    }

    _mountPeopleList(){
        return this.state.people.map((person, index) => {
            return (
            <TouchableHighlight key={index} onPress={this._personClickFactory(person)}>
                <View style={mainStyle.listItem}>
                    <Text>{person.name}</Text>
                    <Text style={mainStyle.smallText}>{person.email}</Text>
                </View>
            </TouchableHighlight>

            )
        });
    }

    _reloadPeople(){
        PersonService.getPeople()
            .then((people) => {
                this.setState({people, loading: false});
            });
    }
}