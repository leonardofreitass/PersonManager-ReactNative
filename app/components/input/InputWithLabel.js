import React from 'react'
import {StyleSheet, View, Text} from 'react-native';

export default class InputWithLabel extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.label}>
                    <Text>{this.props.label}</Text>
                </View>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        alignItems: 'flex-start',
        paddingLeft: 5
    }
});