import React from "react";
import { StyleSheet } from "react-native";
 
const passwordStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 0.3,
        borderRadius: 8,
        marginTop: 20,
        justifyContent: 'space-between',
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
    },
    errorBorder: {
        borderColor: 'red',
    },
    errorIcon: {
        tintColor: 'red',
    },
    errorText: {
        color: 'red',
        marginLeft: 8,
        fontSize: 12,
    },
});


export default passwordStyles;