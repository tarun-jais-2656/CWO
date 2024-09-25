import React, { Component } from "react";
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import passwordStyles from "./passwordStyles";

export default class PasswordInput extends Component {
    render() {
        const { isValid, errorMessage,secureTextEntry,errorImage } = this.props;
        return (
            <View>
                <View style={[passwordStyles.container, !isValid && passwordStyles.errorBorder]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center',paddingHorizontal:10 }}>
                        <Image
                            source={require('../assets/images/pass.png')}
                            style={[passwordStyles.icon, !isValid && passwordStyles.errorIcon]}
                        />
                        <TextInput
                            placeholder={this.props.placehold}
                            style={passwordStyles.input}
                            secureTextEntry = {secureTextEntry}
                            onChangeText={this.props.onChangeText}
                            onBlur={this.props.onBlur}
                        />
                        <TouchableOpacity onPress={this.props.secure}>

                        <Image
                            source={require('../assets/images/eye.png')}
                            style={passwordStyles.icon}
                            />
                            </TouchableOpacity>
                    </View>


                </View>
                {!isValid
                    &&
                    <View style={{ flexDirection: 'row', marginTop: 5, }}>
                        <Image source={errorImage} style={{ height: 17, width: 17 }} />
                        <Text style={passwordStyles.errorText}>{errorMessage}</Text>
                    </View>
                }
            </View>
        );
    }
}


