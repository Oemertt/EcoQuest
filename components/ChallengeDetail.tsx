import React, { useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Animated,
} from "react-native";
import PrimaryButton from "./PrimaryButton";
import RewardBadge from "@/components/RewardBadge";

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
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>

                {expireDate && (
                    <Text style={styles.expireText}>
                        Gültig bis: <Text style={styles.expireDate}>{expireDate}</Text>
                    </Text>
                )}
                <RewardBadge badges={rewardPoints} />
            </ScrollView>

            {status !== "won" && (
                <Animated.View style={[styles.fixedButton, { transform: [{ scale: scaleAnim }] }]}>
                    <PrimaryButton title={getButtonText()} onPress={handlePress} />
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 120, // Platz für Button
        gap: 20,
    },
    fixedButton: {
        position: "absolute",
        bottom: 60,
        left: 20,
        right: 20,
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
});

export default ChallengeDetail;
