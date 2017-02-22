import React from 'react'
import {View, Text, TextInput, Picker, TouchableHighlight, ScrollView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {InputWithLabel} from './../../components/';
import mainStyle from './../../style';

export default class PersonForm extends React.Component {
    constructor(){
        super();

        this.state = {
            person: {}
        }
    }

    render() {
        return  (
            <ScrollView>
                <View style={mainStyle.sceneSubHeader}>
                    <Text>
                        Dados
                    </Text>
                </View>
                <InputWithLabel label="Nome">
                    <TextInput
                        autoCapitalize="words"
                        onChangeText={this._handleInput.bind(this, 'name')}
                        value={this.state.person.name}
                    />
                </InputWithLabel>
                <InputWithLabel label="Email">
                    <TextInput
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={this._handleInput.bind(this, 'email')}
                        value={this.state.person.email}
                    />
                </InputWithLabel>
                <View flexDirection="row">
                    <View flex={1}>
                        <InputWithLabel label="Idade">
                            <TextInput
                                keyboardType="numeric"
                                onChangeText={this._handleInput.bind(this, 'age')}
                                value={this.state.person.age}
                            />
                        </InputWithLabel>
                    </View>
                    <View flex={1}>
                        <InputWithLabel label="Sexo">
                            <Picker
                                selectedValue={this.state.person.gender}
                                onValueChange={this._handleInput.bind(this, 'gender')}>
                                <Picker.Item label="Masculino" value="male" />
                                <Picker.Item label="Feminino" value="female" />
                                <Picker.Item label="Outro" value="other" />
                            </Picker>
                        </InputWithLabel>
                    </View>
                </View>
                <View style={mainStyle.sceneSubHeader}>
                    <Text>
                        Contatos
                    </Text>
                </View>
                {this._mountContactForm()}
                <View flexDirection="row">
                    <Icon.Button name="add" backgroundColor="#CCCCCC" onPress={this._addContact.bind(this)}>
                        <Text style={{fontFamily: 'Arial', fontSize: 15}}>Adicionar contato</Text>
                    </Icon.Button>
                </View>
                <View padding={10}>
                    <Button title="Salvar" onPress={this._validateToFinish.bind(this)}/>
                </View>

            </ScrollView>
        )
    }

    componentWillMount(){
        this.setState({person: this.props.person});
    }

    _mountContactForm(){
        return this.state.person.numbers.map((number, index) => {
            return (
                <View key={index} flexDirection="row">
                    <View flex={5}>
                        <InputWithLabel label="Descrição">
                            <TextInput
                                autoCapitalize="sentences"
                                onChangeText={this._handleContact.bind(this, index, 'description')}
                                value={this.state.person.numbers[index].description}
                            />
                        </InputWithLabel>
                    </View>
                    <View flex={4}>
                        <InputWithLabel label="Número">
                            <TextInput
                                keyboardType="phone-pad"
                                onChangeText={this._handleContact.bind(this, index, 'number')}
                                value={this.state.person.numbers[index].number}
                            />
                        </InputWithLabel>
                    </View>
                    <View flex={1}>
                        <TouchableHighlight style={mainStyle.centering} onPress={this._handleDeleteContact.bind(this, index)}>
                            <Icon name="clear" size={20} color="red" />
                        </TouchableHighlight>
                    </View>
                </View>
            )
        });
    }

    _handleInput(attr, text){
        let update = this.state.person;
        update[attr] = text;
        this.setState({person: update});
    }

    _handleContact(index, attr, text){
        let update = this.state.person;
        update.numbers[index][attr] = text;
        this.setState({person: update});
    }

    _handleDeleteContact(index){
        let update = this.state.person;
        if (update.numbers.length > 1){
            update.numbers.splice(index, 1);
        }
        else{
            update.numbers = [
                {
                    number: "",
                    description: ""
                }
            ];
        }
        this.setState({person: update});
    }

    _addContact(){
        let update = this.state.person;
        update.numbers.push({
            number: "",
            description: ""
        });
        this.setState({person: update});
    }

    _validateToFinish(){
        let person = this.state.person;
        if (!person.name || !person.email || !person.gender || !person.age){
            return this.props.fail();
        }
        for (let contact of person.numbers){
            if (!contact.number || !contact.description){
                return this.props.fail();
            }
        }

        this.props.finish();
    }
}