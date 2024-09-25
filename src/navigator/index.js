import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/splashscreen";
import Signin from "../screens/Signin";
import Forgot from "../screens/forgotScreen";
import Reset from "../screens/reset";
import Home from "../screens/home";
import TutorialScreen from "../screens/tutorial";
import Otp1 from "../screens/otp1";
import Otp2 from "../screens/Otp2";
import BottomTab from "./bottomTab";
import { Modal } from "react-native";
import Modals from "../screens/home/components/modalPopup";

const stack=createNativeStackNavigator();

export default class RootNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <stack.Navigator  initialRouteName='SplashScreen'>
                <stack.Screen
                    component={SplashScreen}
                    name='SplashScreen'
                    options={{headerShown: false}}
                />
                <stack.Screen
                    component={Signin}
                    name='Signin'
                    options={{headerShown: false}}
                />
                <stack.Screen
                    component={Forgot}
                    name='ForgotScreen'
                    options={{headerShown: false}}
                />
                <stack.Screen
                    component={Reset}
                    name='Reset'
                    options={{headerShown: false}}
                />
                <stack.Screen
                    component={BottomTab}
                    name='BottomTab'
                    options={{headerShown: false}}
                />
                <stack.Screen
                    component={TutorialScreen}
                    name='TutorialScreen'
                    options={{headerShown: false}}
                />
                
                <stack.Screen
                    component={Otp1}
                    name='Otp1'
                    options={{headerShown: false}}
                />
                <stack.Screen
                    component={Otp2}
                    name='Otp2'
                    options={{headerShown: false}}
                />
                </stack.Navigator>
            </NavigationContainer>
        )
    }
}