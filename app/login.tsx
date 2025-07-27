import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";
import InputField from "@/components/InputField";

const LoginScreen: React.FC = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Name:", name);
        console.log("Passwort:", password);
        router.push("/home");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Text style={[styles.sectionTitle, { fontSize: 22, fontWeight: "bold" }]}>
                    Anmelden
                </Text>

                <InputField
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />

                <InputField
                    placeholder="Passwort"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <PrimaryButton title="Anmelden" onPress={handleLogin} />

                <TouchableOpacity onPress={() => router.push("/registration")}>
                    <Text style={styles.linkText}>
                        Noch kein Konto? <Text style={styles.link}>Registrieren</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
    },
    form: {
        padding: 24,
        gap: 16,
    },
    linkText: {
        marginTop: 6,
        textAlign: "center",
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
    link: {
        fontWeight: "bold",
        color: "#0e1a13",
    },
});

export default LoginScreen;
