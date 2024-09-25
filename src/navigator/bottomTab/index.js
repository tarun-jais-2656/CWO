import React, { Component, } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/home";
import Account from "../../screens/account";
import Fav from "../../screens/fav";
import Menu from "../../screens/menu";
import home from "../../assets/images/home.png"
import account from "../../assets/images/account.png"
import fav from "../../assets/images/fav.png"
import menu from "../../assets/images/menu.png"

const Tabs = createBottomTabNavigator();

export default class BottomTab extends Component {
    render() {
        return (
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let icon;
                        const iconColor = focused ? '#46A4BA' : undefined;

                        switch (route.name) {
                            case 'Home':
                                icon = home;
                                break;
                            case 'Account':
                                icon = account;
                                break;
                            case 'Fav':
                                icon = fav;
                                break;
                            case 'Menu':
                                icon = menu;
                                break;
                        }

                        return (
                            <Image
                                source={icon}
                                style={{ width: 25, height: 25, tintColor: iconColor }}
                            />
                        );
                    }
                })}>

                <Tabs.Screen
                    component={Home}
                    name='Home'
                    options={{ headerShown: false }}
                />
                <Tabs.Screen
                    component={Account}
                    name='Account'
                    options={{ headerShown: false }}
                />
                <Tabs.Screen
                    component={Fav}
                    name='Fav'
                    options={{ headerShown: false }}
                />
                <Tabs.Screen
                    component={Menu}
                    name='Menu'
                    options={{ headerShown: false }}
                />
            </Tabs.Navigator>
        );
    }
}