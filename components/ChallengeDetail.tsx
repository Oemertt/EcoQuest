import React, { useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Animated,
} from "react-native";
import Reward from "./Reward";
import PrimaryButton from "./PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

interface ChallengeDetailProps {
    title: string;
    description: string;
    rewardPoints: number;
    expireDate?: string;
}

const ChallengeDetail: React.FC<ChallengeDetailProps> = ({
                                                             title,
                                                             description,
                                                             rewardPoints,
                                                             expireDate,
                                                         }) => {
    const [status, setStatus] = useState<"notStarted" | "running" | "won">("notStarted");
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const iconOpacity = useRef(new Animated.Value(0)).current;

    const handlePress = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.05,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start(() => {
            if (status === "notStarted") {
                setStatus("running");
            } else if (status === "running") {
                setStatus("won");
                Animated.timing(iconOpacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            }
        });
    };

    const getButtonText = () => {
        if (status === "notStarted") return "Challenge annehmen";
        if (status === "running") return "Challenge läuft";
        return "Challenge gewonnen";
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

            {expireDate && (
                <Text style={styles.expireText}>
                    Gültig bis: <Text style={styles.expireDate}>{expireDate}</Text>
                </Text>
            )}

            <Reward points={rewardPoints} />

            <View style={styles.buttonWrapper}>
                {status !== "won" && (
                    <Animated.View style={{ transform: [{ scale: scaleAnim }], width: "100%" }}>
                        <PrimaryButton title={getButtonText()} onPress={handlePress} />
                    </Animated.View>
                )}

                {status === "won" && (
                    <Animated.View style={[styles.iconWrapper, { opacity: iconOpacity }]}>
                        <Ionicons name="star" size={64} color="#f5c518" />
                        <Text style={styles.iconText}>Challenge gewonnen!</Text>
                    </Animated.View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0e1a13",
    },
    description: {
        fontSize: 16,
        color: "#4a635f",
    },
    expireText: {
        fontSize: 14,
        color: "#4a635f",
    },
    expireDate: {
        fontWeight: "600",
        color: "#0e1a13",
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop: 16,
    },
    iconWrapper: {
        marginTop: 16,
        alignItems: "center",
    },
    iconText: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "600",
        color: "#f5c518",
    },
});

export default ChallengeDetail;
