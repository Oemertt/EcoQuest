import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
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
    onStart?: () => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ title, description, steps: initialSteps, rewardPoints, onStart }) => {
    const [steps, setSteps] = useState(initialSteps);

    const toggleStep = (id: string) => {
        setSteps(prev =>
            prev.map(step =>
                step.id === id ? { ...step, checked: !step.checked } : step
            )
        );
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
});

export default TaskDetail;
