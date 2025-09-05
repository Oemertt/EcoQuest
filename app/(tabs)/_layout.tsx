import { Ionicons } from "@expo/vector-icons";
import * as Haptics from 'expo-haptics';
import { Tabs } from "expo-router";

export default function TabsLayout() {

    function giveHapticFeedback() {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    return (
        <Tabs screenOptions={
            {
                tabBarActiveTintColor: "#50a353",
                tabBarInactiveTintColor: "gray",
                animation: "fade",
                headerStyle: {
                    backgroundColor: '#f9fbfa',
                },
                headerTitleStyle: {
                    fontFamily: 'BeVietnamPro-Bold',
                    fontSize: 16,
                },
                headerShadowVisible: false,
            }
        }>
            <Tabs.Screen
                name="(home)/index"
                options={{
                    title: "Startseite",
                    tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />,
                }}
                listeners={{
                    tabPress: (e) => {
                        giveHapticFeedback();
                    },
                }}
            />
            <Tabs.Screen
                name="(tasks)"
                options={{
                    title: "Aufgaben",
                    headerShown: false,
                    tabBarIcon: ({color}) => <Ionicons name="list" size={24} color={color} />,
                }}
                listeners={{
                    tabPress: (e) => {
                        giveHapticFeedback();
                    },
                }}

            />
            <Tabs.Screen
                name="(progress)/index"
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
            <Tabs.Screen
                name="(progress)/[id]"
                options={{
                    href: null, // Versteckt diese dynamische Route aus der Tab-Bar
                }}
            />
        
        </Tabs>
    );
}
