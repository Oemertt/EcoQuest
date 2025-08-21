import ProgressHeader from "@/components/ProgressHeader";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LeaderboardScreen from "@/app/(screens)/leaderboard";

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

const ProgressScreen = () => {
    const currentUser = {
        name: "Du",
        points: 200,
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        badges: 5,
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <ProgressHeader points={currentUser.points} badges={currentUser.badges} />
            </View>

            <Text className="font-bold text-2xl mt-5 mb-3">Ranglisten</Text>
            <LeaderboardScreen />
        </View>
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
});

export default ProgressScreen;
