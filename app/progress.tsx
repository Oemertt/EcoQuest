import React from "react";
import {View, StyleSheet, Text} from "react-native";
import Header from "@/components/Header";
import LeaderboardContainer from "@/components/LeaderboardContainer";
import ProfileCard from "@/components/ProfileCard"; // Stelle sicher, dass der Pfad korrekt ist
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation, {NavItem} from "@/components/BottomNavigation";
import { router } from "expo-router";

const users = [
    { id: "1", name: "Anna", points: 150, imageUrl: "https://i.pravatar.cc/150?img=1" },
    { id: "2", name: "Ben", points: 230, imageUrl: "https://i.pravatar.cc/150?img=2" },
    { id: "3", name: "Clara", points: 180, imageUrl: "https://i.pravatar.cc/150?img=3" },
];

const ProgressScreen: React.FC = () => {
    const currentUser = {
        name: "Du",
        points: 200,
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    };

    const navItems: NavItem[] = [
        { label: "Home", icon: "home", onPress: () => router.push("./home")},
        { label: "Aufgaben", icon: "list", onPress: () => router.push("./tasks")},
        { label: "Fortschritt", icon: "bar-chart", isActive: true },
    ];

    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <Header title="Dein Fortschritt" />

            <View style={styles.profileContainer}>
                <ProfileCard name={currentUser.name} points={currentUser.points} imageUrl={currentUser.imageUrl} />
            </View>
            <Text style={[styles.sectionTitle, { fontWeight: "bold" }]}>Rangliste</Text>
            <LeaderboardContainer users={users} />
            <BottomNavigation items={navItems} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
        paddingHorizontal: 16,
    },
    profileContainer: {
        marginVertical: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0e1a13",
        paddingTop: 16,
        paddingBottom: 4,
        paddingHorizontal: 4,
    },
});

export default ProgressScreen;
