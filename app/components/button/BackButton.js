import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BackButton extends React.Component {
    render() {
        return (<Icon name="keyboard-arrow-left" size={20} style={styles.backButton} />);
    }
}

const styles = StyleSheet.create({
    backButton: {
        marginLeft: 10,
        color: "white"
    },
});