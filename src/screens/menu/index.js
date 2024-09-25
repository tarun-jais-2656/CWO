import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class Menu extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Hey...I'm Menu Screen</Text>
            </View>
        )
    }
}