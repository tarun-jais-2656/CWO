import React from "react";
import { StyleSheet } from "react-native";
 
const modalProtoStyles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalsContent: {
        backgroundColor: 'lightgrey',
        padding: 30,
        marginTop:400,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '60%', // Half-screen height
    },
})

export default modalProtoStyles;