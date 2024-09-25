import React from "react";
import { StyleSheet } from "react-native";

const toastCustomStyles=StyleSheet.create({
    toastView:{
        backgroundColor:"#F44336",
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:10,
    },
    toastCont:{
        flexDirection:'row',
        alignItems:'center',
    },
    toastTxt:{
        color:'#ffffff',
        fontSize:14,
        marginLeft:10,
    },
    img:{
        height:20,
        width:20,
        tintColor:'white',
        paddingVertical:8,
    }
})

export default toastCustomStyles;