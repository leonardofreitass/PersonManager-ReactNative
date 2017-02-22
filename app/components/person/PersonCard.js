import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import mainStyle from './../../style';
import personImage from './../../images/person.png';

export default class PersonCard extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={mainStyle.centering}>
                    <Image style={styles.profileImage} source={personImage} />
                    <Text style={styles.profileName}>{this.props.person.name}</Text>
                    <Text>{this.props.person.email}</Text>
                </View>
                <View style={styles.contactContainer}>
                    {this._mountContacts()}
                </View>
            </ScrollView>
        )
    }

    _mountContacts(){
        return this.props.person.numbers.map((contact, index) => {
            return (
                <View key={index} style={styles.profileContact}>
                    <Text style={styles.profileDescription}>{contact.description}</Text>
                    <Text>{contact.number}</Text>
                </View>
            )
        });
    }
}

const styles = StyleSheet.create({
    profileImage: {
        width: 200,
        height: 200
    },
    profileName: {
        fontSize: 20
    },
    profileContact: {
        flex: 1,
        height: 80,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        paddingLeft: 5,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    contactContainer: {
        padding: 10,
        alignItems: "stretch"
    },
    profileDescription: {
        fontSize: 16
    }
});