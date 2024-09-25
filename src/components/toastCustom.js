import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import exclametry from "../assets/images/exclametry.png"
import toastCustomStyles from "./toastCustomStyles";

export default class ToastCustom extends Component{
    render(){
        const {txt}=this.props;
        return(
            <View style={toastCustomStyles.toastView}>
                <View style={toastCustomStyles.toastCont}>
                    <Image
                    source={exclametry}
                    style={toastCustomStyles.img}
                    />
                    <Text style={toastCustomStyles.toastTxt}>{txt}</Text>
                </View>
            </View>
        )
    }
}
