import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import buttonStyles from "./buttonStyles";

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity 
                style={buttonStyles.button} 
                onPress={this.props.onPress} // Call onPress prop when button is pressed
            >
                <Text style={buttonStyles.buttonText}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}


