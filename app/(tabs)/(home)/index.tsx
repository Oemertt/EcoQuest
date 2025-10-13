// @ts-nocheck
import LevelCard from "@/components/LevelCard";
import Loader from "@/components/Loader";
import RecommendedTaskCard from "@/components/RecommendedTaskCard";
import { SignOutButton } from "@/components/SignOutButton";
import YoutubeScreen from "@/components/YoutubeScreen";
import useUserStore, { initUserSelector, userSelector } from "@/store/userStore";
import { useUser } from '@clerk/clerk-expo';
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const recommendedTasks = [
    {
        id: "1",
        title: "Lichter ausschalten",
        imageUrl: require("@/assets/images/light.webp"),
        url: "/(tasks)/1"
    },
    {
        id: "2",
        title: "Stecker ziehen",
        imageUrl: require("@/assets/images/unplug.webp"),
        url: "/(tasks)/2"
    },
    {
        id: "3",
        title: "Kurz duschen",
        imageUrl: require("@/assets/images/duschen.webp"),
        url: "/(tasks)/4"
    },
    {
        id: "4",
        title: "Wasserhahn zudrehen",
        imageUrl: require("@/assets/images/water.webp"),
        url: "/(tasks)/5"
    },
    
    
];

const HomeScreen: React.FC = () => {
    const { user } = useUser()
    const initUser = useUserStore(initUserSelector);
    const userData = useUserStore(userSelector);
    const isLoading = useUserStore((state) => state.isLoading);

    useEffect(() => {
        if (user?.id) {
            initUser(user.id);
        }
    }, [user?.id]);
    
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.content} contentContainerStyle={{ gap: 16 }}>
                {isLoading ? <Loader/> : (
                    <View className="flex-col flex">
                    <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center">
                            <Text style={styles.sectionTitle}>{user?.firstName + " " + user?.lastName}</Text>
                            <View style={[userData?.points > 19 ? styles.pointsBackgroundColorHigh : styles.pointsBackgroundColorLow, styles.pointsContainer]}>
                                <Text style={[userData?.points > 19 ? styles.pointsTextColorHigh : styles.pointsTextColorLow, styles.pointsText]}>{userData?.points || 0} Punkte</Text>
                            </View>
                        </View>
                        <SignOutButton />
                    </View>
                    <LevelCard /> 

                </View>
                )} 
                
               
                <Text style={styles.sectionTitle}>Empfohlene Aufgaben</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
                    {recommendedTasks.map((task) => (
                        <RecommendedTaskCard
                            key={task.id}
                            title={task.title}
                            imageUrl={task.imageUrl}
                            taskId={task.id}
                            url={task.url}
                        />
                    ))}
                </ScrollView>
                <Text style={styles.sectionTitle}>Informiere dich</Text>
                <YoutubeScreen />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f9fbfa" },
    content: { flex: 1, paddingHorizontal: 16, paddingTop: 8 },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0e1a13",
        paddingTop: 16,
        paddingBottom: 6,
        paddingHorizontal: 4,
    },
    pointsContainer: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginTop: 11,
        marginLeft: 12,
    },
    pointsText: {
        fontSize: 12,
        fontWeight: '600',
    },
    pointsTextColorLow: {
        color: '#7a7a7a' // vorher #5a5a5a, etwas heller
    },
    pointsTextColorHigh: {
        color: '#2e7d32'
    },
    pointsBackgroundColorLow: {
        backgroundColor: '#e6e6e6' // vorher #d3d3d3, heller
    },
    pointsBackgroundColorHigh: {
        backgroundColor: '#e8f5e9'
    },
    horizontalList: {
        paddingLeft: 4,
    },
});

export default HomeScreen;