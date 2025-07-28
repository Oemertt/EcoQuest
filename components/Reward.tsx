import React from "react";
import { View, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface RewardProps {
    points: number | string;
    textStyle?: TextStyle;
    containerStyle?: ViewStyle;
    showTitle?: boolean;
}

const Reward: React.FC<RewardProps> = ({
                                           points,
                                           textStyle,
                                           containerStyle,
                                           showTitle = true,
                                       }) => (
    <View style={[styles.container, containerStyle]}>
        {showTitle && <Text style={styles.title}>Belohnung</Text>}
        <View style={styles.row}>
            <Ionicons name="trophy" size={36} color="#f5c518" style={styles.icon} />
            <Text style={[styles.points, textStyle]}>{points}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
    },
    title: {
        color: "#101914",
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 24,
        letterSpacing: -0.25,
        paddingBottom: 6,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    icon: {
        marginRight: 4,
    },
    points: {
        color: "#101914",
        fontSize: 32,
        fontWeight: "700",
    },
});

export default Reward;
