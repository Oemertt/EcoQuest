import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from 'expo-haptics';
import { Redirect, Tabs } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function TabsLayout() {
    const { isSignedIn, isLoaded } = useAuth();

    console.log('🟣 TabsLayout - isLoaded:', isLoaded, 'isSignedIn:', isSignedIn);

    // Warte, bis Clerk vollständig geladen ist
    if (!isLoaded) {
        console.log('🟣 Clerk noch nicht geladen, zeige Loader...');
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9fbfa' }}>
                <ActivityIndicator size="large" color="#50a353" />
            </View>
        );
    }

    // Wenn nicht angemeldet, redirect zum Sign-In
    if (!isSignedIn) {
        console.log('🟣 User nicht angemeldet, redirect zu sign-in...');
        return <Redirect href="/(auth)/sign-in" />;
    }

    console.log('🟣 User angemeldet, zeige Tabs');

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
