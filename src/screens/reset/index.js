import React, { Component } from "react";
import { Image, KeyboardAvoidingView, Modal, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PasswordInput from "../../components/password";
import Button from "../../components/button";
import Toast from 'react-native-toast-message';
import key from "../../assets/images/key.png";
import tick from "../../assets/images/tick.png"
import cross from "../../assets/images/cross.png"
import ToastCustom from "../../components/toastCustom";
import styles from "./styles";


export default class Reset extends Component {
    state = {
        password: '',
        confirmPassword: '',
        passwordValid: true,
        confirmPasswordValid: true,
        secureTextEntry: false,
        secureTextEntry1: false,
        isModalVisible: false,
        passwordCriteria: {
            length: false,
            specialChar: false,
            number: false,
            upperLowerCase: false,
        },
        isPasswordFocused: false,
        isConfirmPasswordFocused: false,
    };

    validatePasswordCriteria = (password) => {
        const passwordCriteria = {
            length: password.length >= 8,
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            number: /\d/.test(password),
            upperLowerCase: /[a-z]/.test(password) && /[A-Z]/.test(password),
        };
        this.setState({ passwordCriteria });
    };

    handlePasswordChange = (password) => {
        this.setState({ password });
        this.validatePasswordCriteria(password);
        this.handlePasswordFocus();
    };

    handleConfirmPasswordChange = (confirmPassword) => {
        this.setState({ confirmPassword });
    };

    validatePassword = (password) => {
        const { length, specialChar, number, upperLowerCase } = this.state.passwordCriteria;
        return length && specialChar && number && upperLowerCase;
    };

    validateInputs = () => {
        const { password, confirmPassword } = this.state;
        const passwordValid = this.validatePassword(password);
        const confirmPasswordValid = this.validatePassword(confirmPassword) && password === confirmPassword;

        if (password === '' || confirmPassword === '') {
            Toast.show({
                text1: "Fields can't be Empty!",
                type: 'error',
                topOffset: 60
            });
        } else if (password.length < 8 || confirmPassword.length < 8) {
            Toast.show({
                text1: "Password must be greater than 8 characters!",
                type: 'error',
                topOffset: 60
            });
        } else if (!confirmPasswordValid) {
            Toast.show({
                text1: "Your passwords do not match!",
                type: 'error',
                topOffset: 60
            });
        }

        this.setState({
            passwordValid,
            confirmPasswordValid,
        });

        return passwordValid && confirmPasswordValid;
    };

    handleNavigation = () => {
        this.closeModal();
        const { navigation } = this.props;
        navigation.navigate('Signin');
    };

    handleButtonPress = () => {
        if (this.validateInputs()) {
            this.setState({ isModalVisible: true });
            return;
        }
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
    };

    togglePassword = () => {
        this.setState(prevState => ({ secureTextEntry: !prevState.secureTextEntry }));
    }

    toggleConfirmPassword = () => {
        this.setState(prevState => ({ secureTextEntry1: !prevState.secureTextEntry1 }));
    }

    renderPasswordCriteria = () => {
        const { passwordCriteria, isPasswordFocused } = this.state;
        if (!isPasswordFocused) return null;

        return (
            <View style={styles.criteriaContainer}>
                <View style={styles.criteriaSub}>
                    <Image source={passwordCriteria.length ? tick : cross} style={styles.criteriaIcon} />
                    <Text style={passwordCriteria.length ? styles.validCriteria : styles.invalidCriteria}>
                        8 characters or above
                    </Text>
                </View>
                <View style={styles.criteriaSub}>
                    <Image source={passwordCriteria.specialChar ? tick : cross} style={styles.criteriaIcon} />
                    <Text style={passwordCriteria.specialChar ? styles.validCriteria : styles.invalidCriteria}>
                        1 or more special characters
                    </Text>
                </View>
                <View style={styles.criteriaSub}>
                    <Image source={passwordCriteria.number ? tick : cross} style={styles.criteriaIcon} />
                    <Text style={passwordCriteria.number ? styles.validCriteria : styles.invalidCriteria}>
                        1 or more numbers
                    </Text>
                </View>
                <View style={styles.criteriaSub}>
                    <Image source={passwordCriteria.upperLowerCase ? tick : cross} style={styles.criteriaIcon} />
                    <Text style={passwordCriteria.upperLowerCase ? styles.validCriteria : styles.invalidCriteria}>
                        Upper and lowercase
                    </Text>
                </View>
            </View>
        );
    };

    handlePasswordFocus = () => {
        this.setState({ isPasswordFocused: true, isConfirmPasswordFocused: false });
    };

    handleConfirmPasswordFocus = () => {
        this.setState({ isConfirmPasswordFocused: true, isPasswordFocused: false });
    };

    render() {
        const { passwordValid, confirmPasswordValid, isModalVisible } = this.state;
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <SafeAreaView style={{ marginHorizontal: 24, flex: 1 }}>
                    <Image
                        source={require('../../assets/images/q1.png')}
                        style={{ height: 55, width: 83, marginTop: 12 }}
                    />
                    <View style={styles.signinView}>
                        <Text style={styles.textHead2}>Reset Password</Text>
                        <Text style={styles.text2}>Enter in your new password.</Text>
                    </View>
                    <PasswordInput
                        placehold={'New Password'}
                        onChangeText={this.handlePasswordChange}
                        onFocus={this.handlePasswordChange}
                        onBlur={() => this.setState({ isPasswordFocused: false })}
                        secure={this.togglePassword}
                        secureTextEntry={this.state.secureTextEntry}
                        isValid={passwordValid}
                    />
                    {this.renderPasswordCriteria()}
                    <View style={{ flex: 1, justifyContent: 'space-between' }}>
                        <PasswordInput
                            placehold={'Confirm Password'}
                            onChangeText={this.handleConfirmPasswordChange}
                            onFocus={this.handleConfirmPasswordFocus}
                            onBlur={() => this.setState({ isConfirmPasswordFocused: false })}
                            secure={this.toggleConfirmPassword}
                            secureTextEntry={this.state.secureTextEntry1}
                            isValid={confirmPasswordValid}
                        />
                        <Button title={'Continue'} onPress={this.handleButtonPress} />
                    </View>
                    <Modal
                        transparent={true}
                        visible={isModalVisible}
                        animationType="slide"
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Image source={key} style={{ height: 60, width: 60 }} />
                                <Text style={styles.modalTitle}>Password Updated</Text>
                                <Text style={styles.modalMessage}>Your new password has been updated successfully.</Text>
                                <Button title="Back to Login" onPress={this.handleNavigation} />
                            </View>
                        </View>
                    </Modal>
                    <Toast config={{error:({text1})=><ToastCustom txt={text1}/>}}
                    ref={(ref) => Toast.setRef(ref)} />
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}


