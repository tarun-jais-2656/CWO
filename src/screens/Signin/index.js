import React, { Component } from "react";
import { Modal, StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Platform } from "react-native";
import EmailInput from "../../components/emailInput";
import PasswordInput from "../../components/password";
import Button from "../../components/button";
import Slider from "../../components/slider";
import Toast from "react-native-toast-message";
import accountlock from "../../assets/images/accountlock.png";
import exclametry from "../../assets/images/exclametry.png"
import ToastCustom from "../../components/toastCustom";
import styles from "./styles";

var accountLocked = false;
var failedAttempts = 0;

export default class Signin extends Component {
    state = {
        email: '',
        password: '',
        emailValid: true,
        passwordValid: true,
        emailErrorMessage: '',
        passwordErrorMessage: '',
        secureTextEntry:false,
        isModalVisible: false,
    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (password) => {
        this.setState({ password });
    };

    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    validatePassword = (password) => {
        return password.length >= 6
    };

    validateInputs = () => {
        const { email, password } = this.state;
        const emailValid = this.validateEmail(email);
        const passwordValid = this.validatePassword(password);

        this.setState({
            emailValid: emailValid,
            passwordValid: passwordValid,
            emailErrorMessage: emailValid ? '' : 'Invalid email address entered',
            passwordErrorMessage: passwordValid ? '' : 'Invalid password entered',
        });

        return emailValid && passwordValid;
    };

    handleBlurEmail = () => {
        const { email } = this.state;
        const emailValid = this.validateEmail(email);
        this.setState({
            emailValid: emailValid,
            emailErrorMessage: emailValid ? '' : 'Invalid email address entered',
        });
    };

    handleBlurPassword = () => {
        const { password } = this.state;
        const passwordValid=this.validatePassword(password);
        this.setState({ 
            passwordValid:passwordValid,
            passwordErrorMessage: passwordValid ? '' : 'Invalid password entered',
        });
    };

    handleButtonPress = () => {
        if (accountLocked) {
            this.setState({ isModalVisible: true });
            return;
        } else if (this.validateInputs()) {
            const { navigation } = this.props;
            navigation.navigate('BottomTab'); // Navigate to Home if validation passes
        } else {
            Toast.show({
                text1: "Invalid credentials. Please try again!",
                type: 'error',
                topOffset:60
            });
            failedAttempts++;
            if (failedAttempts >= 3) {
                accountLocked = true;
            }
        }
    };

    handleNavigation = () => {
        const { navigation } = this.props;
        navigation.navigate('ForgotScreen');
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
    };
    togglePassword = ()=>{
        const {secureTextEntry} = this.state
        this.setState({secureTextEntry:!secureTextEntry})
        
    }

    render() {
        const { emailValid, passwordValid, emailErrorMessage,passwordErrorMessage, isModalVisible, } = this.state;

        return (
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={100} // Adjust this value as needed
            >
                <View style={{ flex: 4 ,backgroundColor:'white'}}>
                    <ImageBackground
                        source={require('../../assets/images/half.png')}
                        style={{flex:1 }}
                    />
                    <View style={{ position: 'absolute', marginLeft: 30 }}>
                        <Image
                            source={require('../../assets/images/q.png')}
                            style={styles.bg}
                        />
                        <View style={styles.textView}>
                            <Text style={styles.textHead1}>QUIVIO</Text>
                            <Text style={styles.text1}>Your Personal CarWash Assistant</Text>
                        </View>
                        <Slider />
                    </View>
                </View>

                <View style={styles.signinView}>
                    <Text style={styles.textHead2}>Sign in</Text>
                    <Text style={styles.text2}>with your valid credentials</Text>
                    <EmailInput
                        onChangeText={this.handleEmailChange}
                        onBlur={this.handleBlurEmail}
                        isValid={emailValid}
                        errorMessage={emailErrorMessage}
                        errorImage={exclametry}
                    />
                    <PasswordInput
                        placehold={'Password'}
                        onChangeText={this.handlePasswordChange}
                        onBlur={this.handleBlurPassword}
                        secure={this.togglePassword}
                        secureTextEntry= {this.state.secureTextEntry}
                        isValid={passwordValid}
                        errorMessage={passwordErrorMessage}
                        errorImage={exclametry}
                    />
                    <View style={{ alignItems: 'flex-end', marginTop: 28, marginBottom: 38 }}>
                        <Text onPress={this.handleNavigation}>Forgot Password</Text>
                    </View>
                    <Button title={'Primary'} onPress={this.handleButtonPress} />
                </View>

                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={accountlock} style={{ height: 60, width: 60 }} />
                            <Text style={styles.modalTitle}>Account Locked</Text>
                            <Text style={styles.modalMessage}>
                                Your account has been locked due to too many failed login attempts. Please try again after some time.
                            </Text>
                            <Button title="Okay" onPress={this.closeModal} />
                        </View>
                    </View>
                </Modal>

                <Toast config={{error:({text1})=><ToastCustom txt={text1}/>}}
                ref={(ref) => Toast.setRef(ref)} />
            </KeyboardAvoidingView>
        );
    }
}

