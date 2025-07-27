import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";
import InputField from "@/components/InputField";

const RegistrationScreen: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        console.log("Name:", name);
        console.log("E-Mail:", email);
        console.log("Passwort:", password);
        router.push("/home");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Text style={[styles.sectionTitle, { fontSize: 22, fontWeight: "bold"}]}>Registrieren</Text>
                <InputField
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <InputField
                    placeholder="E-Mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <InputField
                    placeholder="Passwort"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <PrimaryButton title="Registrieren" onPress={handleRegister} />

                <TouchableOpacity onPress={() => router.push("./login")}>
                    <Text style={styles.linkText}>
                        Bereits ein Konto? <Text style={styles.link}>Anmelden</Text>
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

export default RegistrationScreen;
