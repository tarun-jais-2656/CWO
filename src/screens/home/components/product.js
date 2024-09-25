import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import add from "../../../assets/images/add.png"

export default class Product extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const{txt1}=this.props;
        return (
            <View style={styles.subCont}>
                <View style={styles.setupView}>
                    <Image source={add} style={styles.sett} />
                    <View style={styles.textView}>
                        <Text style={styles.text1}>{txt1}</Text>
                        <Text style={styles.text2}>Jun 3, 2023 | 12:30 PM</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    subCont:{
        
    },
    setupView:{
        padding:16,
        borderBottomWidth:0.3,
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
        marginTop:5,
        color: '#60707D',
        fontSize:13,
    },
})