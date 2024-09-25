import React, { Component } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import Signin from "../Signin";
import styles from "./styles";

export default class SplashScreen extends Component {

    handleNavigation=()=>{
        const{navigation}=this.props;
        navigation.navigate('TutorialScreen');
    };

    componentDidMount() {
        setTimeout(() => { this.handleNavigation() }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/images/splash.png')}
                    style={styles.container}
                />
                <Image
                    source={require('../../assets/images/splashLogo.png')}
                    style={{position:'absolute',height:69,width:200,marginLeft:110}}
                
                />
            </View>

        );
    }
}


