import React from "react";
import { StyleSheet, View } from "react-native";
import ChallengeDetail from "@/components/ChallengeDetail";

const ChallengeDetailScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <ChallengeDetail
                title="Licht ausschalten"
                description="Lerne, wie du mit einfachem Ausschalten Energie sparen kannst."
                rewardPoints={10}
                expireDate="31.08.2025"
            />
        </View>
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
