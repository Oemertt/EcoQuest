import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from 'expo-haptics';
import { Platform } from "react-native";

export default function TabsLayout() {

    function giveHapticFeedback() {
        if(Platform.OS=== 'ios') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        } else {
            Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Keyboard_Release);
        }
    }
    return (
        <Tabs screenOptions={
            {
                tabBarActiveTintColor: "#50a353",
                tabBarInactiveTintColor: "gray",
                animation: "fade",
                headerShown: false,
            }
        }>
            <Tabs.Screen
                name="(home)/index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />,
                }}
                listeners={{
                    tabPress: (e) => {
                        giveHapticFeedback();
                    },
                }}
            />
            <Tabs.Screen
                name="tasks"
                options={{
                    title: "Aufgaben",
                    tabBarIcon: ({color}) => <Ionicons name="list" size={24} color={color} />,
                }}
                listeners={{
                    tabPress: (e) => {
                        giveHapticFeedback();
                    },
                }}
            />
            <Tabs.Screen
                name="progress"
                options={{
                    title: "Fortschritt",
                    tabBarIcon: ({color}) => <Ionicons name="bar-chart" size={24} color={color} />,
                }}
                listeners={{
                    tabPress: (e) => {
                        giveHapticFeedback();
                    },
                }}
            />
        </Tabs>
    );
}
