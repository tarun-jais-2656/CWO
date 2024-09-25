import React, { Component } from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
export default class ModalPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: true
        };
    }

    toggleModal = () => {
        this.setState(prevState => ({
            isModalVisible: false
        }))
    }

    handleNavigation = () => {
        this.toggleModal;
        const { navigation } = this.props;
        navigation.navigate('Otp1');
    };

    render() {
        const { isModalVisible } = this.state;
        return (
            <Modal
            isVisible={isModalVisible}
            onBackdropPress={this.toggleModal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            style={styles.modal}
            >

                <View style={styles.modalsContent}>
                    <Image
                        source={require('../../../assets/images/secure.png')}
                        style={{ width: 111, height: 148 }}
                    />
                    <View style={styles.signinView}>
                        <Text style={styles.textHead2}>Secure your Account ?</Text>
                        <Text style={styles.text2}>Setup two-factor authentication to secure your account in just two steps.</Text>
                        <View>
                            <Image
                                source={require('../../../assets/images/dot.png')}
                                style={{ width: 2, height: 140, marginLeft: 28, marginTop: 15 }}
                            />
                            <View style={{ position: 'absolute' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../../assets/images/call.png')}
                                        style={{ width: 60, height: 60, marginTop: 10 }}
                                    />
                                    <Text>Link your account with your phone {"\n"}number</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../../assets/images/dotLock.png')}
                                        style={{ width: 60, height: 60, marginTop: 10 }}
                                    />
                                    <Text>Enter the one-time passcode</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../../assets/images/secureCircle.png')}
                                        style={{ width: 60, height: 60, marginTop: 10 }}
                                    />
                                    <Text>Secure your account</Text>
                                </View>

                            </View>
                            <TouchableOpacity onPress={() => this.setState({ isModalVisible: false }, this.props.onPress)} style={styles.button}>
                                <Text style={styles.buttonText}>Get Started</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalsContent: {
        backgroundColor: '#E6EDF3',
        padding: 30,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '75%',
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    signinView: {
        marginTop: 24,
    },
    textHead2: {
        fontSize: 24,
        fontWeight: '700',
    },
    text2: {
        fontSize: 15,
        fontWeight: '400',
        color: '#4F5F72',
        marginTop: 8,
        marginBottom: 27,
    },
    button: {
        padding: 20,
        backgroundColor: '#2A7BBB',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 70,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff',
    },
})