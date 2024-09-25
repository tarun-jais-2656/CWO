import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headingText: {
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 16,
    },
    instructionText: {
      fontSize: 16,
      marginBottom: 20,
      color: '#555',
    },
    phoneNumberContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingVertical: 10,
      marginBottom: 20,
    },
    num: {
      width: '80%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 20,
      marginLeft: 10,
    },
    phoneNumberInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginTop: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
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
      fontSize: 13
    },
  });

export default styles;