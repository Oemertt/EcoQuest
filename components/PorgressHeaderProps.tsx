import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Reward from "./Reward";

interface ProgressHeaderProps {
    points: number;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({ points }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="trophy" size={36} color="#f5c518" style={styles.icon} />
            <Reward points={points} textStyle={styles.pointsText} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 4, // für Android Schatten
        marginVertical: 16,
        marginHorizontal: 24,
    },
    icon: {
        // optional noch etwas Abstand rechts
        marginRight: 8,
    },
    pointsText: {
        fontSize: 28,
        fontWeight: "700",
        color: "#51946c",
    },
});

export default ProgressHeader;
