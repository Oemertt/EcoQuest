import BottomNavigation, { NavItem } from "@/components/BottomNavigation";
import Header from "@/components/Header";
import LeaderboardContainer from "@/components/LeaderboardContainer";
import ProgressHeader from "@/components/ProgressHeader";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const users = [
    {
        id: "1",
        name: "Anna",
        points: 150,
        imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        id: "2",
        name: "Ben",
        points: 230,
        imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        id: "3",
        name: "Clara",
        points: 180,
        imageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
        id: "4",
        name: "Markus",
        points: 120,
        imageUrl: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    {
        id: "5",
        name: "Julia",
        points: 170,
        imageUrl: "https://randomuser.me/api/portraits/women/41.jpg",
    },
];


const ProgressScreen: React.FC = () => {
    const currentUser = {
        name: "Du",
        points: 200,
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        badges: 5,
    };

    const navItems: NavItem[] = [
        { label: "Home", icon: "home", onPress: () => router.push("./") },
        { label: "Aufgaben", icon: "list", onPress: () => router.push("./tasks") },
        { label: "Fortschritt", icon: "bar-chart", isActive: true },
    ];

    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <Header title="Dein Fortschritt" />

            <View style={styles.profileContainer}>
                <ProgressHeader points={currentUser.points} badges={currentUser.badges} />
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
