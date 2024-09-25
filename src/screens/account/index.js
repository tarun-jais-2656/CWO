import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class Account extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Hey...I'm Account Screen</Text>
            </View>
        )
    }
}