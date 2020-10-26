import React, { Component } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/home.screen";
import { ProfileScreen } from "../screens/profile/profile.screen";
import { Button } from "react-native";

const Stack: any = createStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    title: 'Blogger',
                    headerStyle: {
                        backgroundColor: '#f4511e',

                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <Button
                          onPress={() => console.log('This is a button!')}
                          title="Info"
                          color="#fff"
                        />
                      )
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}