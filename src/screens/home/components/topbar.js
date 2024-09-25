import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import chat from "../../../assets/images/chat.png"
import bell from "../../../assets/images/bell.png"

export default class TopBar extends Component {


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.subContainer}>
                    <View>
                        <Text style={styles.text1}>Welcome</Text>
                        <Text style={styles.text2}>Kevin</Text>
                    </View>

                    <View style={styles.iconCont}>
                        <View style={styles.iconView}><Image source={chat} style={styles.icon} /></View>
                        <View style={styles.iconView}><Image source={bell} style={styles.icon}/></View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A7BBB',
    },
    subContainer: {
        marginHorizontal: 24,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text1: {
        fontSize: 18,
        fontWeight: "400",
        color: '#FFFFFF'
    },
    text2: {
        fontSize: 20,
        fontWeight: "600",
        color: '#FFFFFF',
    },
    iconCont:{
        flexDirection:'row'
    },
    iconView:{
        backgroundColor:'#5998cf',
        marginLeft:8,
        justifyContent:'center',
        paddingHorizontal:10,
        borderRadius:8,
    },
    icon:{
        height:24,
        width:24,
    }
})