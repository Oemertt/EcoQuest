import LevelCard from "@/components/LevelCard";
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
        title: "Kurz duschen",
        imageUrl: require("@/assets/images/duschen.webp"),
        url: "/(tasks)/4"
    },
    {
        id: "3",
        title: "Wasserhahn zudrehen",
        imageUrl: require("@/assets/images/water.webp"),
        url: "/(tasks)/5"
    },
];

const HomeScreen: React.FC = () => {
    const { user } = useUser()
    const initUser = useUserStore(initUserSelector);
    const userData = useUserStore(userSelector);

    useEffect(() => {
        if (user?.id) {
            initUser(user.id);
        }
    }, [user?.id]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content} contentContainerStyle={{ gap: 16 }}>
                <View className="flex-col flex">
                    <View className="flex-row justify-between">
                        <Text style={styles.sectionTitle}>{user?. firstName + " " + user?. lastName}</Text>
                        <SignOutButton />
                    </View>
                    <LevelCard /> 

                </View>
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
    horizontalList: {
        paddingLeft: 4,
    },
    
});

export default HomeScreen;