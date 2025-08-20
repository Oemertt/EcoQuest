// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Animated, Platform,
} from "react-native";
import Reward from "./Reward";
import PrimaryButton from "./PrimaryButton";
import * as Haptics from 'expo-haptics';
import {useToast} from "@/components/ui/toast";
import ToastExample from "@/components/ToastExample";
import { useAudioPlayer } from 'expo-audio';
import useUserStore, {addPointsSelector} from "@/store/userStore";


const TaskDetail = ({
    title,
    description,
    steps: initialSteps,
    rewardPoints,
}) => {
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
                    {initialSteps.map(step => (
                        <View
                            key={step.id}
                            style={styles.stepItem}
                        >
                            <Text style={styles.stepText}>{step.text}</Text>
                        </View>
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
