import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/topbar";
import ModalPopup from "./components/modalPopup";
import Slider2 from "./components/slider2";
import Product from "./components/product";
import sett from "../../assets/images/sett.png"
import styles from "./styles";


export default class Home extends Component {


    render() {
        handleNavigation = () => {
            const { navigation } = this.props;
            navigation.navigate('Otp1');
        };

        return (
            <View style={styles.container}>
                <ModalPopup onPress={handleNavigation} />
                <TopBar />
                <View style={styles.subCont}>
                    <View style={styles.setupView}>
                        <Image source={sett} style={styles.sett}/>
                        <View  style={styles.textView}>
                            <Text style={styles.text1}>Complete your account setup</Text>
                            <Text style={styles.text2}>Tap to continue</Text>
                        </View>
                    </View>
                </View>
                <View>
                <Text style={styles.text3}>FREQUENTLY USED</Text>
                <Slider2/>
                <View style={styles.textView2}>
                    <Text style={styles.text4}>RECENT ACTIVITIES</Text>
                    <Text style={styles.text5}>All Products</Text>
                </View>
                </View>
                <ScrollView style={styles.productView}>
                    <Product txt1={'Successfully configured POS for sites'}/>
                    <Product txt1={'You ended the campaign Holiday\nSpecial'}/>
                    <Product txt1={'Created a campaign Holiday Special'}/>
                    <Product txt1={'Activated the user access group named\nSite manager'}/>
                    <Product txt1={'Added a discount code to a campaign\nnamed Holiday Special'}/>
                    <Product txt1={'Added a new customer C02039'}/>
                    <Product txt1={'Activated the user access group named\nSite Managers'}/>
                </ScrollView>
                
            </View>
        )
    }
}

