import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    subCont:{
        marginHorizontal:16,
        marginTop:24
    },
    setupView:{
        padding:20,
        backgroundColor:'#D9E2EE',
        flexDirection:'row',
        borderRadius:8
    },
    sett:{
        height:36,
        width:36,
    },
    textView:{
        marginLeft:16
    },
    text1:{
        fontSize:15,
        fontWeight:'700',
        color: '#164061'
    },
    text2:{
        color: '#60707D',
        fontSize:13,
    },
    text3:{
        marginTop:32,
        marginHorizontal:16,
        fontWeight:'600',
        fontSize:12,
        marginBottom:10
    },
    text4:{
        marginTop:12,
        marginHorizontal:16,
        fontWeight:'600',
        fontSize:12
    },
    text5:{
        marginTop:12,
        marginHorizontal:16,
        fontWeight:'600',
        fontSize:15,
        color:'#23679D'
    },
    textView2:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    productView:{
        backgroundColor:'#FFFFFF',
        marginHorizontal:16,
        marginTop:16,
        borderRadius:8,
        paddingH:10,
    }
})

export default styles;