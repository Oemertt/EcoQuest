import LeaderboardScreen from "@/app/(screens)/leaderboard";
import Badges from "@/components/Badges";
import ProgressHeader from "@/components/ProgressHeader";
import useUserStore, { userSelector } from "@/store/userStore";
import { StyleSheet, Text, View } from "react-native";

const ProgressScreen = () => {
    const userData = useUserStore(userSelector);


    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <ProgressHeader points={userData?.points || 0} badges={5} numberTasks={userData?.tasksCompleted || 0}/>
            </View>
            <Text className="font-bold text-2xl mt-5 mb-3">Abzeichen</Text>
            <Badges />
            <Text className="font-bold text-2xl mt-8 mb-3">Ranglisten</Text>
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
