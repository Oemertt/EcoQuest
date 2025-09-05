import ChallengeCard from "@/components/ChallengeCard";
import ProfileCard from "@/components/ProfileCard";
import RecommendedTaskCard from "@/components/RecommendedTaskCard";
import { SignOutButton } from "@/components/SignOutButton";
import useUserStore, { initUserSelector, userSelector } from "@/store/userStore";
import { useUser } from '@clerk/clerk-expo';
import { router } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const recommendedTasks = [
    {
        id: "1",
        title: "Lichter ausschalten",
        imageUrl: require("@/assets/images/light.png"),
        url: "/(tasks)/1"
    },
    {
        id: "2",
        title: "Kurz duschen",
        imageUrl: require("@/assets/images/duschen.png"),
        url: "/(tasks)/4"
    },
    {
        id: "3",
        title: "Wasserhahn zudrehen",
        imageUrl: require("@/assets/images/water.png"),
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
                <View className="flex-row justify-between">
                    <ProfileCard
                    name={user?.firstName + " " + user?.lastName || user?.emailAddresses[0]?.emailAddress || "Benutzer"}
                    points={userData?.points || 0}
                    badges={7}
                    imageUrl={user?.imageUrl || ""}
                    />
                    <SignOutButton />
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

                <Text style={styles.sectionTitle}>Aktuelle Challenges</Text>
                <ChallengeCard
                    title="10.000 Schritte schaffen"
                    subtitle="Bleibe heute aktiv!"
                    expires="läuft noch 5 Stunden"
                    imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                    onStart={() => router.push("/challengedetail")}
                />
                <ChallengeCard
                    title="Wasser trinken"
                    subtitle="Trinke 2 Liter heute"
                    expires="läuft noch 12 Stunden"
                    imageUrl="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03"
                    onStart={() => router.push("/challengedetail")}
                />

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