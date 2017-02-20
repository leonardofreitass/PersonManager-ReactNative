import React from 'react'
import {View, Text} from 'react-native';
import {PersonService} from './../services/'

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
            return (<Text>Carregando...</Text>)
        }
        else if (!this.state.people.length){
            return (<Text>Nenhuma pessoa adicionada ainda.</Text>)
        }
        else{
            return (
                <View>{this._mountPeopleList()}</View>
            )
        }
    }

    componentWillMount(){
        PersonService.getPeople()
            .then((people) => {
                this.setState({people, loading: false});
            });
    }

    _mountPeopleList(){
        return this.state.people.map((person) => {
            return (<Text>{person.name}</Text>)
        });
    }
}