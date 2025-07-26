import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface RewardProps {
    points: number | string;
}

const Reward: React.FC<RewardProps> = ({ points }) => (
    <View style={styles.container}>
        <Text style={styles.title}>Belohnung</Text>
        <Text style={styles.points}>{points} Punkte</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    title: {
        color: "#101914",
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 24,
        letterSpacing: -0.25,
        paddingHorizontal: 16,
        paddingBottom: 8,
        paddingTop: 16,
    },
    points: {
        color: "#101914",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 20,
        paddingBottom: 12,
        paddingTop: 4,
        paddingHorizontal: 16,
    },
});

export default Reward;
