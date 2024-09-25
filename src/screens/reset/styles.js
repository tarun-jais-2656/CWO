import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    criteriaIcon: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    criteriaSub: { flexDirection: 'row', alignItems: 'center' },
    signinView: {
        marginTop: 60,
    },
    textHead2: {
        fontSize: 24,
        fontWeight: '700',
    },
    text2: {
        fontSize: 15,
        fontWeight: '400',
        color: '#4F5F72',
        marginTop: 8,
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
        fontSize: 13
    },
    validCriteria: {
        color: 'green',
        marginVertical: 2,
    },
    invalidCriteria: {
        color: 'red',
        marginVertical: 2,
    },
});

export default styles;