import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cont: {
      flex: 1
    },
    container: {
      flex: 1,
      marginHorizontal: 24
    },
    headingText: {
      fontWeight: '700',
      fontSize: 24,
      marginBottom: 16,
    },
    instructionText: {
      fontSize: 16,
      marginBottom: 20,
      color: '#555',
    },
    otpContainer: {
      flexDirection: 'row',
      backgroundColor: "#ffffff",
      borderRadius: 8,
      paddingVertical: 16,
      justifyContent: "space-between"
    },
    otpInput: {
      width: 60,
      borderRightWidth: 1,
      borderColor: '#ccc',
  
      textAlign: 'center',
      fontSize: 18,
    },
    button: {
      backgroundColor: '#007bff',
      height: 50,
      width: 'auto',
      marginTop: 10,
      marginRight: 30,
      marginLeft: 30,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    resendButton: {
      alignSelf: 'flex-end',
      marginTop: 28,
      marginBottom: 20,
    },
    resendButtonText: {
      fontWeight: '600',
      fontSize: 14,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      marginHorizontal: 24,
      paddingHorizontal: 50,
      paddingVertical: 28,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '700',
    },
    modalMessage: {
      marginVertical: 15,
      textAlign: 'center',
      fontWeight: '400',
      color: '#60707D',
      fontSize: 13,
    },
  });

export default styles;