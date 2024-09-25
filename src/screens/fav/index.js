import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class Fav extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Hey...I'm Favorites Screen</Text>
            </View>
        )
    }
}