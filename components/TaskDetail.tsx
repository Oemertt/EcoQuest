import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
    Animated, Platform,
} from "react-native";
import Reward from "./Reward";
import PrimaryButton from "./PrimaryButton";
import * as Haptics from 'expo-haptics';
import {useToast} from "@/components/ui/toast";
import ToastExample from "@/components/ToastExample";
import { useAudioPlayer } from 'expo-audio';
import Rive from 'rive-react-native';
import useUserStore from "@/store/userStore";
import {addPointsSelector} from "@/store/userStore";


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
}

const TaskDetail: React.FC<TaskDetailProps> = ({
    title,
    description,
    steps: initialSteps,
    rewardPoints,
}) => {
    const [steps, setSteps] = useState(initialSteps);
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);
    const toast = useToast();
    const audioSource = require('../assets/appSound.mp3');
    const player = useAudioPlayer(audioSource);
    const addPoints = useUserStore(addPointsSelector);
    useEffect(() => {
        if (started && !completed) {
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
    }, [started, completed, scaleAnim]);

    const toggleStep = (id: string) => {
        setSteps(prev =>
            prev.map(step =>
                step.id === id ? { ...step, checked: !step.checked } : step
            )
        );
    };

    const handlePress = () => {
        if(started) {
            player.seekTo(0);
            player.play();
            const newId = Math.random().toString();
            toast.show({
                id: newId,
                placement:"top",
                render: ({ id }) => {
                    const toastId = "toast-" + id;
                    return (
                        <ToastExample id={toastId}/>
                    );
                },
            });
            addPoints(rewardPoints);
        }

        if(Platform.OS=== 'ios') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        } else {
            Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Reject);
        }

        if (!started) {
            setStarted(true);
            setCompleted(false);
        } else if (!completed) {
            setCompleted(true);
            setStarted(false);
        }
    };

    return (
        <View style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.container}>





                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>

                <Text style={styles.sectionTitle}>Schritte: </Text>
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

            <View style={styles.fixedButton}>
                <Animated.View style={{ width: "100%", transform: [{ scale: scaleAnim }] }}>
                    <PrimaryButton
                        title={started ? "Erledigt" : "Aufgabe starten"}
                        onPressIn={handlePress}
                    />
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "space-between",
    },
    container: {
        gap: 20,
        paddingBottom: 100,
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0e1a13",
        paddingTop: 16,
        paddingBottom: 4,
        paddingHorizontal: 4,
    },
    stepsContainer: {
        gap: 30,
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
    fixedButton: {
        position: "absolute",
        bottom: 60,
        left: 20,
        right: 20,
    },
});

export default TaskDetail;
