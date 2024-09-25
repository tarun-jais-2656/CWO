import React from "react";
import { StyleSheet } from "react-native";

const emailInputStyles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 0.3,
        borderRadius: 8,
        alignItems: 'center',
    },
    input: {
        marginHorizontal: 10,
        flex: 1,
    },
    icon: {
        height: 24,
        width: 24,
        marginVertical:20,
        marginLeft:10
    },
    errorBorder: {
        borderColor: 'red',
    },
    errorIcon: {
        tintColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 8,
    },
});


export default emailInputStyles;