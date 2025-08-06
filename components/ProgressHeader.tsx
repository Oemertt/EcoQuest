import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProgressHeaderProps {
    points: number;
    badges: number;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({ points, badges }) => {
    return (
        <View style={styles.container}>
            {/* Punkte-Box */}
            <View style={styles.box}>
                <View style={styles.row}>
                    {/* <Image source={require("../assets/images/trophy.png")} style={styles.icon} /> */}
                    <Text style={styles.pointsText}>{points}</Text>
                </View>
                <Text style={styles.label}>Punkte</Text>
            </View>

            {/* Abzeichen-Box */}
            <View style={styles.box}>
                <View style={styles.row}>
                    {/* <Image source={require("../assets/images/badge.png")} style={styles.icon} /> */}
                    <Text style={styles.pointsText}>{badges}</Text>
                </View>
                <Text style={styles.label}>Abzeichen</Text>
            </View>
            {/* Aufgaben-Box */}
            <View style={styles.box}>
                <View style={styles.row}>
                    {/* <Image source={require("../assets/images/badge.png")} style={styles.icon} /> */}
                    <Text style={styles.pointsText}>{badges}</Text>
                </View>
                <Text style={styles.label}>Aufgaben</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 16,
        
    },
    box: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#cde5d6",
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        alignItems: "center",
        backgroundColor: "#f9fdfb",
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
    pointsText: {
        fontSize: 28,
        fontWeight: "700",
    },
    label: {
        marginTop: 8,
        fontSize: 16,
        color: "#51946c",
    },
});

export default ProgressHeader;
