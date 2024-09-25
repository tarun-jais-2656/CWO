import React, { Component } from "react";
import { Modal, StyleSheet, View,Text } from "react-native";
import modalProtoStyles from "./modalProtoStyles";

export default class ModalProto extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalVisible:false
        };
    }

    toggleModal=()=>{
        this.setState(prevState=>({
            isModalVisible: !prevState.isModalVisible
        }))
    }

    render(){
        const {isModalVisible} = this.state;
        return(
            <View style={modalProtoStyles.container}>
                <Modal 
                isVisible={isModalVisible}
                onBackdropPress={this.toggleModal}
                animationType='slide'
                >
                <View style={modalProtoStyles.modalsContent}>
                    
                </View>
                </Modal>
            </View>
        )
    }
}
