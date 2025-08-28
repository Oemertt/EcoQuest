import ProgressHeader from "@/components/ProgressHeader";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LeaderboardScreen from "@/app/(screens)/leaderboard";
import useUserStore, { userSelector } from "@/store/userStore";


const ProgressScreen = () => {

    const userData = useUserStore(userSelector);
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <ProgressHeader points={userData.points} badges={5} numberTasks={4}/>
            </View>

            <Text className="font-bold text-2xl mt-5 mb-3">Ranglisten</Text>
            <LeaderboardScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
        paddingHorizontal: 16,
    },
    profileContainer: {
        marginVertical: 16,
    },
});

export default ProgressScreen;
