import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import ChallengeDetail from "@/components/ChallengeDetail";

const ChallengeDetailScreen: React.FC = () => {
    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <Header title="Challenge" />
            <View style={styles.content}>
                <ChallengeDetail
                    title="Licht ausschalten"
                    description="Lerne, wie du mit einfachem Ausschalten Energie sparen kannst."
                    rewardPoints={10}
                    expireDate="31.08.2025"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        marginTop: 16,
    },
});

export default ChallengeDetailScreen;
