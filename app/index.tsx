import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, Animated } from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import { router } from "expo-router";

const IndexScreen: React.FC = () => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const pulse = Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        );
        pulse.start();

        return () => pulse.stop();
    }, [scaleAnim]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Animated.Text
                    style={[styles.title, { transform: [{ scale: scaleAnim }] }]}
                >
                    EcoQuest
                </Animated.Text>
                <Text style={styles.subtitle}>
                    Sammle Punkte und werde zum Umweltchampion!
                </Text>

                <View style={styles.buttons}>
                    <PrimaryButton title="Loslegen" onPress={() => router.push("./login")} />
                    <PrimaryButton
                        title="Registrieren"
                        onPress={() => router.push("./registration")}
                        color="#dee3e2"/>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#0e1a13",
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: "#4a635f",
        textAlign: "center",
        marginBottom: 32,
    },
    buttons: {
        width: "100%",
        gap: 16,
    },
});

export default IndexScreen;
