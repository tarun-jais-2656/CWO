import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Modal, Image } from "react-native";
import Button from "../../components/button";
import pro from "../../assets/images/pro.png";
import verify from "../../assets/images/verify.png";
import styles from "./styles";

var accountLocked = false;
var failedAttempts = 0;

class Otp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ['', '', '', '', '', ''], // State to hold each digit of the OTP
      isModalVisible: false,
      isModalVisible2: false,
    };
  }

  handleOtpChange = (text, index) => {
    // Ensure only numeric characters are set
    const numericText = text.replace(/[^0-9]/g, '');
    const newOtp = [...this.state.otp];
    newOtp[index] = numericText;
    this.setState({ otp: newOtp }, () => {
      if (numericText && index < this.state.otp.length - 1) {
        // Move to the next input if the current one is filled
        this[`otpInput${index + 1}`].focus();
      }
    });
  };

  handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      const newOtp = [...this.state.otp];
      if (newOtp[index] === '') {
        // Move to the previous input if the current one is empty
        this[`otpInput${index - 1}`].focus();
      } else {
        // Clear the current input
        newOtp[index] = '';
        this.setState({ otp: newOtp });
      }
    }
  };

  handleVerifyButton = () => {
    const { otp } = this.state;
    const defaultOtp = '123456';
    const enteredOtp = otp.join(''); // Convert the OTP array into a string
    if (accountLocked) {
      this.setState({ isModalVisible: true });
      return;
    }
    else if (enteredOtp != defaultOtp) {
      failedAttempts++;
      if (failedAttempts >= 3) {
        accountLocked = true;
      }
    } else {
      this.setState({ isModalVisible2: true });
      return;
    }

  }
  handleNavToLogin = () => {
    this.closeModal2();
    const { navigation } = this.props;
    navigation.navigate('Signin');
  };

  handleNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('Otp1');
  };
  closeModal = () => {
    this.setState({ isModalVisible: false });
  };
  closeModal2 = () => {
    this.setState({ isModalVisible2: false });
  };


  handleNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('Otp1');
  };

  render() {
    const { isModalVisible,isModalVisible2 } = this.state;
    return (
      <KeyboardAvoidingView
        style={styles.cont}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: '#ffffff', marginTop: 80, borderRadius: 8, position: 'absolute', padding: 18 }}>
            <TouchableOpacity onPress={this.handleNavigation}>
              <Image
                source={require('../../assets/images/back.png')}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 100 }}>
            <Text style={styles.headingText}>Verify Account Access</Text>
            <Text style={styles.instructionText}>
              Enter the verification code sent to{'\n'}
              <Text style={{ fontSize: 18 }}>+1*******940
                <Text onPress={this.handleNavigation} style={{ color: '#4091cf', marginLeft: 20, marginTop: 10, fontSize: 18, }}>  EDIT</Text>
              </Text>
            </Text>
          </View>

          <View style={styles.otpContainer}>
            {this.state.otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="number-pad"  // Use numeric keyboard
                maxLength={1}  // Only one character per input box
                value={digit}
                onChangeText={(text) => this.handleOtpChange(text, index)}
                onKeyPress={(e) => this.handleKeyPress(e, index)}
                ref={(input) => { this[`otpInput${index}`] = input; }}
              />
            ))}
          </View>
          <View style={{ flex: 1, justifyContent: 'space-between', marginBottom: 20 }}>
            <TouchableOpacity style={styles.resendButton} onPress={() => {/* Handle resend on press */ }}>
              <Text onPress={this.handleNavigation} style={styles.resendButtonText}>Resend</Text>
            </TouchableOpacity>
            <Button title={"Confirm Code"} onPress={this.handleVerifyButton} />
          </View>

        </SafeAreaView>

        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={pro} style={{ height: 60, width: 60 }} />
              <Text style={styles.modalTitle}>Too many failed{"\n"}        attempts</Text>
              <Text style={styles.modalMessage}>Your account has been locked, please try again in one hour.</Text>
              <Button title="Back to Login" onPress={this.closeModal} />
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          visible={isModalVisible2}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={verify} style={{ height: 60, width: 60 }} />
              <Text style={styles.modalTitle}>Account Verified !</Text>
              <Text style={styles.modalMessage}>Your account has been verified successfully.</Text>
              <Button title="Back to Login" onPress={this.handleNavToLogin} />
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    );
  }
}



export default Otp2;
