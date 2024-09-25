import React, { Component } from "react";
import { Alert, Image, KeyboardAvoidingView, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EmailInput from "../../components/emailInput";
import Button from "../../components/button";
import Toast from "react-native-toast-message";
import accountlock from "../../assets/images/accountlock.png"
import goal from "../../assets/images/goal.png"
import exclametry from "../../assets/images/exclametry.png"
import ToastCustom from "../../components/toastCustom";
import styles from "./styles";


const defaultEmail = 'Tarun@gmail.com';
export default class Forgot extends Component {

    state = {
        email: '',
        emailValid: true,
        emailErrorMessage: '',
        isModalVisible: false,
    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    validateInputs = () => {
        const { email} = this.state;
        const emailValid = this.validateEmail(email);

        this.setState({
            emailValid: emailValid,
            emailErrorMessage: emailValid ? '' : 'Invalid email address entered',
        });

        return emailValid;
    };

    handleBlurEmail = () => {
        const { email } = this.state;
        const emailValid = this.validateEmail(email);
        this.setState({
            emailValid: emailValid,
            emailErrorMessage: emailValid ? '' : 'Invalid email address entered',
        });
    };

    handleNavigation = () => {
        this.closeModal()
        const { navigation } = this.props;
        navigation.navigate('Signin');
    };
    handleNavToReset = () => {
        this.closeModal()
        const { navigation } = this.props;
        navigation.navigate('Reset');
    };

    
    handleButtonPress = () => {
        const { email,emailValid} = this.state;
        if (this.validateInputs() && defaultEmail!=email) {
            // this.setState({
            //     emailValid: emailValid,
            // });
            Toast.show({
                text1: "Email not found. Contact admin.",
                type: 'error',
                topOffset:60
            });
        }
        else if(this.validateInputs()) {
            this.setState({ isModalVisible: true });
            return;
        }
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
    };


    render() {
        const { emailValid,emailErrorMessage,isModalVisible,} = this.state;
        return (
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                // keyboardVerticalOffset={20} //
            >
            <SafeAreaView style={{ marginHorizontal: 24,marginBottom:30, flex: 1 }}>
                <View style={{ backgroundColor: '#ffffff', borderRadius: 8,padding:10,alignSelf:'flex-start',marginTop:7 }}>
                    <TouchableOpacity onPress={this.handleNavigation}>
                        <Image
                            source={require('../../assets/images/back.png')}
                            style={{ height: 20, width: 20 }}
                        />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.signinView}>
                    <Text style={styles.textHead2}>Forgot Password</Text>
                    <Text style={styles.text2}>Reset your password with just a few clicks</Text>
                </View>
                <View style={{flex:1,justifyContent:'space-between'}}>
                <EmailInput 
                onChangeText={this.handleEmailChange}
                onBlur={this.handleBlurEmail} // Add onBlur handler here
                isValid={emailValid}
                errorMessage={emailErrorMessage}
                errorImage={exclametry}
                />
                <Button title={'Send Link'} onPress={this.handleButtonPress} />
                </View>
                
                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={goal}
                            style={{height:60,width:60}}
                            />
                            <Text style={styles.modalTitle}>Link Sent !</Text>
                            <Text style={styles.modalMessage}>The link to reset your password has been sent on your email address.</Text>
                            <Button title="Okay" onPress={this.handleNavToReset} />
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


