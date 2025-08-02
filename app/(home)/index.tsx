import BottomNavigation, { NavItem } from "@/components/BottomNavigation";
import ChallengeCard from "@/components/ChallengeCard";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import RecommendedTaskCard from "@/components/RecommendedTaskCard";
import { SignOutButton } from "@/components/SignOutButton";
import { useUser } from '@clerk/clerk-expo';
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const recommendedTasks = [
    {
        id: "1",
        title: "Einkaufen gehen",
        imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },
    {
        id: "2",
        title: "Kurzer Spaziergang",
        imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    },
    {
        id: "3",
        title: "Licht ausschalten",
        imageUrl: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
    },
];

const HomeScreen: React.FC = () => {
    const navItems: NavItem[] = [
        { label: "Home", icon: "home", isActive: true },
        { label: "Aufgaben", icon: "list", onPress: () => router.push("./tasks") },
        { label: "Fortschritt", icon: "bar-chart", onPress: () => router.push("./progress") },
    ];
    const { user } = useUser()
    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <Header title="Home" />

            <ScrollView style={styles.content} contentContainerStyle={{ gap: 16 }}>
                <View className="flex-row justify-between">
                    <ProfileCard
                    name={user?.firstName + " " + user?.lastName || user?.emailAddresses[0]?.emailAddress || "Benutzer"}
                    points={3450}
                    badges={7}
                    imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
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

            <BottomNavigation items={navItems} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f9fbfa" },
    content: { flex: 1, paddingHorizontal: 16, paddingTop: 8 },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0e1a13",
        paddingTop: 16,
        paddingBottom: 4,
        paddingHorizontal: 4,
    },
    horizontalList: {
        paddingLeft: 4,
    },
});

export default HomeScreen;