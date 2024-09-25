import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, KeyboardAvoidingView, Image, Modal } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Button from '../../components/button';
import exit from "../../assets/images/exit.png"
import styles from './styles';

class Otp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '', // State to hold the phone number
      countryCode: 'US', // Default country code
      callingCode: '1',  // Default calling code
      isModalVisible: false,
    }
  }

  handlePhoneNumberChange = (text) => {
    // Remove non-numeric characters from the input
    const numericText = text.replace(/[^0-9]/g, '');
    this.setState({ phoneNumber: numericText });
  };


  handleSendOtp = () => {
    const { phoneNumber, callingCode } = this.state;
    const fullPhoneNumber = `+${callingCode}${phoneNumber}`;

    // Basic phone number validation (e.g., length check)
    if (phoneNumber.length < 10) {
      Alert.alert("Invalid Phone Number", "Please enter a valid phone number.");
      return;
    }


    // Clear phone number input field
    this.setState({ phoneNumber: '' });
    this.handleNavigation();
  };

  handleNavigation = () => {
    this.closeModal()
    const { navigation } = this.props;
    navigation.navigate('BottomTab');
  };

  handleNavToOtp2 = () => {
    const { navigation } = this.props;
    navigation.navigate('Otp2');
  };

  handleCountrySelect = (country) => {
    this.setState({
      countryCode: country.cca2,
      callingCode: country.callingCode[0],
    });
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };
  openModel=()=>{
    this.setState({ isModalVisible: true});
  }



  render() {
    const { countryCode, phoneNumber, isModalVisible } = this.state;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // keyboardVerticalOffset={100}
      >
        <SafeAreaView style={styles.container}>

          <View style={{ backgroundColor: '#ffffff', borderRadius: 8, marginHorizontal: 24,padding:10,alignSelf:'flex-start',marginTop:7 }}>
            <TouchableOpacity onPress={this.openModel}>
              <Image
                source={require('../../assets/images/back.png')}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 60, paddingHorizontal: 24 }}>
            <Text style={styles.headingText}>Add Phone Number</Text>
            <Text style={styles.instructionText}>
              To initiate the two-factor authentication, {'\n'}provide your phone number below.
            </Text>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 24, justifyContent: 'space-between', marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={styles.phoneNumberContainer}>
                <CountryPicker
                  countryCode={countryCode}
                  withFilter
                  withFlag
                  withCallingCode
                  withCallingCodeButton
                  onSelect={this.handleCountrySelect}
                />
              </View>
              <View style={styles.num}>
                <TextInput
                  style={styles.phoneNumberInput}
                  placeholder="Phone number"
                  keyboardType="number-pad"  // Use numeric keyboard
                  value={phoneNumber}
                  onChangeText={this.handlePhoneNumberChange}
                  maxLength={15}  // Optional: Limit input length
                />
              </View>
            </View>
            <Button title={"Send Code"} onPress={this.handleNavToOtp2} />
          </View>
        </SafeAreaView>
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={exit}
                style={{ height: 60, width: 60 }}
              />
              <Text style={styles.modalTitle}>Exit 2FA</Text>
              <Text style={styles.modalMessage}>Are you sure you want to exit 2FA, You will need to redo it again.</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <TouchableOpacity onPress={this.closeModal} style={{padding:20,backgroundColor:'#F6F7F7',borderRadius:8}}>
                  <Text style={{fontSize:14,fontWeight:'600',alignSelf:'center'}}>No, Continue</Text>
                </TouchableOpacity>
                <Button title="Yes, Exit" onPress={this.handleNavigation} />
              </View>
              
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    );
  }
}



export default Otp1;
