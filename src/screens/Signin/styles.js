import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    bg: { height: 55, width: 82, marginTop: 94 },
    textView: {
        marginTop: 27,
    },
    textHead1: {
        fontSize: 28,
        fontWeight: '800',
        color: '#ffffff',
    },
    text1: {
        color: '#ffffff',
    },
    signinView: {
        marginTop: 32,
        marginHorizontal: 30,
        flex: 5,
        marginBottom:100,
        backgroundColor:'white'
    },
    textHead2: {
        fontSize: 24,
        fontWeight: '700',
    },
    text2: {
        fontSize: 15,
        fontWeight: '400',
        color: '#4F5F72',
        marginTop: 4,
        marginBottom: 27,
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