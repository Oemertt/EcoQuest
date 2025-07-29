import React from "react";
import { View, Text, StyleSheet, TextStyle, ViewStyle, Image } from "react-native";

interface RewardBadgeProps {
    badges: number | string; // Anzahl der Abzeichen
    textStyle?: TextStyle;
    containerStyle?: ViewStyle;
    showTitle?: boolean;
}

const RewardBadge: React.FC<RewardBadgeProps> = ({
                                                     badges,
                                                     textStyle,
                                                     containerStyle,
                                                     showTitle = true,
                                                 }) => (
    <View style={[styles.container, containerStyle]}>
        {showTitle && <Text style={styles.title}>Abzeichen</Text>}
        <View style={styles.row}>
            <Image source={require("../assets/images/badge.png")} style={styles.icon} />
            <Text style={[styles.points, textStyle]}>{badges}</Text>
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
        width: 36,
        height: 36,
        resizeMode: "contain",
    },
    points: {
        color: "#101914",
        fontSize: 32,
        fontWeight: "700",
    },
});

export default RewardBadge;
