import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Reward from "./Reward";
import PrimaryButton from "./PrimaryButton";

interface Step {
    id: string;
    text: string;
    checked?: boolean;
}

interface TaskDetailProps {
    title: string;
    description: string;
    steps: Step[];
    rewardPoints: number;
    started?: boolean;
    completed?: boolean;
    onStart?: () => void;
    onComplete?: () => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({
                                                   title,
                                                   description,
                                                   steps: initialSteps,
                                                   rewardPoints,
                                                   started = false,
                                                   completed = false,
                                                   onStart,
                                                   onComplete,
                                               }) => {
    const [steps, setSteps] = useState(initialSteps);
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const trophyOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (completed) {
            Animated.timing(trophyOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else if (started) {
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
            ]).start();
        }
    }, [started, completed]);

    const toggleStep = (id: string) => {
        setSteps(prev =>
            prev.map(step =>
                step.id === id ? { ...step, checked: !step.checked } : step
            )
        );
    };

    const handlePress = () => {
        if (!started) {
            onStart && onStart();
        } else if (!completed) {
            onComplete && onComplete();
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            <View style={styles.stepsContainer}>
                {steps.map(step => (
                    <Pressable
                        key={step.id}
                        onPress={() => toggleStep(step.id)}
                        style={styles.stepItem}
                    >
                        <View style={[styles.checkbox, step.checked && styles.checked]} />
                        <Text style={styles.stepText}>{step.text}</Text>
                    </Pressable>
                ))}
            </View>

            <Reward points={rewardPoints} />

            {!completed && (
                <View style={styles.largeButtonWrapper}>
                    <Animated.View style={{ width: "100%", transform: [{ scale: scaleAnim }] }}>
                        <PrimaryButton
                            title={started ? "Erledigt" : "Aufgabe starten"}
                            onPress={handlePress}
                        />
                    </Animated.View>
                </View>
            )}

            {completed && (
                <Animated.View style={[styles.trophyWrapper, { opacity: trophyOpacity }]}>
                    <Ionicons name="trophy" size={64} color="#f5c518" />
                    <Text style={styles.trophyText}>Aufgabe abgeschlossen!</Text>
                </Animated.View>
            )}
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
    stepsContainer: {
        gap: 12,
    },
    stepItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#4a635f",
    },
    checked: {
        backgroundColor: "#4a635f",
    },
    stepText: {
        fontSize: 16,
        color: "#0e1a13",
    },
    trophyWrapper: {
        marginTop: 24,
        alignItems: "center",
    },
    trophyText: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "600",
        color: "#f5c518",
    },
    largeButtonWrapper: {
        marginTop: 16,
        width: "100%",
    },
});

export default TaskDetail;
