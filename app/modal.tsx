import { AnimatedProgressBar } from "@/components/progress/AnimatedProgress";
import useUserStore, { userSelector } from "@/store/userStore";
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";




export default function Modal() {
    const { badgeId } = useLocalSearchParams<{ badgeId: string }>();
    const userData = useUserStore(userSelector);

    // Badge data configuration
const badgeData = {
    dschungelkrieger: {
        image: require("@/assets/images/dschungelkrieger.png"),
        title: "Dschungelkrieger",
        description: "Bezwinge den Dschungel mit 5 Natur-Aufgaben",
        category: "Natur",
        requiredTasks: 5,
        earned: userData?.natureBadge,
        progress: userData?.natureTasksCompleted / 5,
    },
    // Weitere Badges können hier hinzugefügt werden
    aquaman: {
        image: require("@/assets/images/aquaman.png"),
        title: "Wasserwächter", 
        description: "Schütze unsere Gewässer durch 3 Wasser-Aufgaben",
        category: "Wasser",
        requiredTasks: 5,
        earned: userData?.waterBadge,
        progress: userData?.waterTasksCompleted / 5, 
    },
    energiesparmodus: {
        image: require("@/assets/images/energiesparmodus.png"), 
        title: "Energiesparmodus", 
        description: "Schalte den Energiesparmodus frei durch 5 Energie-Aufgaben",
        category: "Energie",
        requiredTasks: 5,
        earned: userData?.energyBadge,
        progress: userData?.energyTasksCompleted / 5,
    }
};



    // Fallback to default badge if no ID provided
    const badge = badgeData[badgeId as keyof typeof badgeData] || badgeData.dschungelkrieger;
    
    return (
        <View className="items-center p-6">
            <Image
                source={badge.image}
                style={badge.earned ? styles.badgeImage : styles.locked}
            />
            <Text className="text-center text-xl font-bold text-gray-800 mt-4 mb-2">
                {badge.title}
            </Text>
            <Text className="text-center text-lg font-semibold text-gray-700 mt-2 mx-4 leading-6">
                {badge.description}
            </Text>
            {/* <View className="mt-4 bg-green-100 px-4 py-2 rounded-lg">
                <Text className="text-green-700 font-medium">
                    Kategorie: {badge.category} • {badge.requiredTasks} Aufgaben
                </Text>
            </View> */}
            <View
                className={`my-4 px-4 py-2 rounded-lg ${
                    badge.earned ? "bg-green-100" : "bg-red-100"
                }`}
                >
                <Text
                    className={`font-medium ${
                    badge.earned ? "text-green-700" : "text-red-700"
                    }`}
                >
                    {badge.earned ? "Freigeschaltet" : "Nicht freigeschaltet"}
                </Text>
            </View>
            <AnimatedProgressBar progress={badge.progress} progressColor="#a5c779"/>
            <Text className="text-center text-lg font-semibold text-gray-700 mt-2 mx-4 leading-6">
                ({badge.progress*5} / 5)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badgeImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    locked: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        opacity: 0.3,
    }
});