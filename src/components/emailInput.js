import React, { Component } from "react";
import { View, Image, TextInput, StyleSheet, Text } from "react-native";
import emailInputStyles from "./emailInputStyles";

export default class EmailInput extends Component {
    render() {
        const { isValid, errorMessage,errorImage } = this.props;
        return (
            <View>
                <View style={[emailInputStyles.container, !isValid && emailInputStyles.errorBorder]}>
                    <Image
                        source={require('../assets/images/email.png')}
                        style={[emailInputStyles.icon, !isValid && emailInputStyles.errorIcon]}
                    />
                    <TextInput
                        placeholder="Email Address"
                        style={emailInputStyles.input}
                        onChangeText={this.props.onChangeText}
                        onBlur={this.props.onBlur}
                    />
                </View>
                {!isValid
                    &&
                    <View style={{ flexDirection: 'row', marginTop: 5, }}>
                        <Image source={errorImage} style={{ height: 17, width: 17 }} />
                        <Text style={emailInputStyles.errorText}>{errorMessage}</Text>
                    </View>
                }
            </View>
        );
    }
}

