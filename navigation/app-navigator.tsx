import React, { Component } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/home.screen";
import { ProfileScreen } from "../screens/profile/profile.screen";
import { HeaderRight } from "./header-right";
import { BlogsScreen } from "../screens/blogs/blogs.screen";

const Stack: any = createStackNavigator();

const screenOptions = {
    title: 'Blogger',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerRight: () => (
        <HeaderRight />
    )
};

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Blogs" component={BlogsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}