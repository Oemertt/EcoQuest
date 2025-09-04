// @ts-nocheck
import ToastExample from "@/components/ToastExample";
import ToastForBadge from "@/components/ToastForBadge";
import { useToast } from "@/components/ui/toast";
import useUserStore, { activateBadgeSelector, increaseTasksAndPointsSelector, userSelector } from "@/store/userStore";
import { useAudioPlayer } from 'expo-audio';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from "react";
import {
    Animated, Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Confetti, ConfettiMethods } from "react-native-fast-confetti";
import PrimaryButton from "./PrimaryButton";
import Reward from "./Reward";

const TaskDetail = ({
    title,
    description,
    steps: initialSteps,
    rewardPoints,
    category
}) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);
    const toast = useToast();
    const audioSource = require('../assets/appSound.mp3');
    const audioSource2 = require('../assets/success2.mp3');
    const player = useAudioPlayer(audioSource);
    const player2 = useAudioPlayer(audioSource2);
    const userData = useUserStore(userSelector);
    const increaseTasksAndPoints = useUserStore(increaseTasksAndPointsSelector)
    const activateBadge = useUserStore(activateBadgeSelector)
    const confettiRef = useRef<ConfettiMethods>(null);
    const [showConfetti, setShowConfetti] = useState(false);

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


    const earnBadge = (category, title, description, src) => {
        activateBadge(category);
        setShowConfetti(true);  
        player2.seekTo(0);
        player2.play();
        const newId = Math.random().toString();
        toast.show({
            id: newId,
            placement:"top",
            render: ({ id }) => {
                const toastId = "toast-" + id;
                return (
                    <ToastForBadge id={toastId} title={title} description={description} src={src}/>
                );
            },
        });            
    }

    const handlePress = () => {
        if(started) {
            increaseTasksAndPoints(category, rewardPoints);
            if(category === "Nature" && userData.natureTasksCompleted === 4 && userData.natureBadge === false) {
                earnBadge("Nature", "Dschungelkrieger Abzeichen verdient", "Du hast 5 Natur-Aufgaben erledigt!", "dschungelkrieger.png");
            }
            else if(category === "Energy" && userData.energyTasksCompleted === 4 && userData.energyBadge === false) {
                earnBadge("Energy", "Energiesparmodus Abzeichen verdient", "Du hast 5 Energiespar-Aufgaben erledigt!", "energiesparmodus.png");
            }
            else if(category === "Water" && userData.waterTasksCompleted === 4 && userData.waterBadge === false) {
                earnBadge("Water", "Aquaman Abzeichen verdient", "Du hast 5 Wasserspar-Aufgaben erledigt!", "aquaman.png");
            }
            else {
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
            }
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
            {showConfetti && (
                <Confetti
                ref={confettiRef}
                count={200}
                autoplay={true}
                isInfinite={false}
                fadeOutOnEnd={true}
                />
            )}
            
           
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
