import React from 'react'
import {Text, StyleSheet} from 'react-native';

export default class NavTitle extends React.Component {
    constructor(){
        super();

        this.state = {
        };
    }
    render() {
        return (
            <Text style={styles.title}>{this._getTitle()}</Text>
        )
    }

    componentWillMount(){
        this.setState({
            title: this.props.title,
            params: this.props.params
        });
    }

    componentWillReceiveProps(props){
        this.setState({
            title: props.title,
            params: props.params
        });
    }

    _getTitle(){
        let _title;
        if (this.state){
            _title = this.state.title;
            if (this.state.params){
                for (let attr in this.state.params){
                    if (this.state.params.hasOwnProperty(attr)){
                        _title = _title.replace(new RegExp("{{" + attr + "}}", "g"), this.state.params[attr]);
                    }
                }
            }
        }

       return _title;
    }
}

const styles = StyleSheet.create({
    title: {
        paddingLeft: 5,
        color: "white",
        fontSize: 16
    }
});