// @ts-nocheck
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
        image: require("@/assets/images/dschungelkrieger.webp"),
        title: "Dschungelkrieger",
        description: "Bezwinge den Dschungel mit 10 Natur-Aufgaben",
        category: "Natur",
        requiredTasks: 10,
        earned: userData?.natureBadge,
        progress: userData?.natureTasksCompleted / 10,
        barColor: '#a5c779',
    },
    // Weitere Badges können hier hinzugefügt werden
    aquaman: {
        image: require("@/assets/images/aquaman.webp"),
        title: "Wasserwächter", 
        description: "Schütze unsere Gewässer durch 10 Wasser-Aufgaben",
        category: "Wasser",
        requiredTasks: 10,
        earned: userData?.waterBadge,
        progress: userData?.waterTasksCompleted / 10, 
        barColor: '#69b9ff',
    },
    energiesparmodus: {
        image: require("@/assets/images/energiesparmodus.webp"), 
        title: "Energiesparmodus", 
        description: "Schalte den Energiesparmodus frei durch 10 Energie-Aufgaben",
        category: "Energie",
        requiredTasks: 10,
        earned: userData?.energyBadge,
        progress: userData?.energyTasksCompleted / 10,
        barColor: '#ffae44',
    },
    muellheld: {
        image: require("@/assets/images/MuellBadge.webp"),
        title: "Müllheld",
        description: "Werde zum Müllhelden durch 10 Recycling-Aufgaben",
        category: "Recycling",
        requiredTasks: 10,
        earned: userData?.recyclingBadge,
        progress: userData?.recyclingTasksCompleted / 10,
        barColor: '#8b7355',
    },
    mobilitaet: {
        image: require("@/assets/images/MobilitaetBadge.webp"),
        title: "Nachhaltige Mobilität",
        description: "Bewege dich nachhaltig mit 10 Mobilitäts-Aufgaben",
        category: "Mobilität",
        requiredTasks: 10,
        earned: userData?.mobilityBadge,
        progress: userData?.mobilityTasksCompleted / 10,
        barColor: '#4a90e2',
    },
    konsum: {
        image: require("@/assets/images/KonsumBadge.webp"),
        title: "Nachhaltiger Konsum",
        description: "Konsumiere bewusst durch 10 Konsum-Aufgaben",
        category: "Konsum",
        requiredTasks: 10,
        earned: userData?.consumptionBadge,
        progress: userData?.consumptionTasksCompleted / 10,
        barColor: '#9b59b6',
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
            <AnimatedProgressBar progress={badge.progress} progressColor={badge.barColor}/>
            <Text className="text-center text-lg font-semibold text-gray-700 mt-2 mx-4 leading-6">
                ({badge.progress*10} / 10)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badgeImage: {
        width: 100,
        height: 100,
        contentFit: 'contain',
    },
    locked: {
        width: 100,
        height: 100,
        contentFit: 'contain',
        opacity: 0.3,
    }
});