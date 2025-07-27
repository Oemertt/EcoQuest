import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "@/components/BottomNavigation";
import ChallengeCard from "@/components/ChallengeCard";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import TaskCard from "@/components/TaskCard";
import { NavItem } from "@/components/BottomNavigation";
import { router } from "expo-router";

const HomeScreen: React.FC = () => {

    const navItems: NavItem[] = [
        { label: "Home", icon: "home", isActive: true},
        { label: "Aufgaben", icon: "list", onPress: () => router.push("./tasks")},
        { label: "Fortschritt", icon: "bar-chart", onPress: () => router.push("./progress") },
        { label: "Einstellung", icon: "settings", onPress: () =>router.push("./settings")  },
    ];

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <Header title="Home" />

            <ScrollView style={styles.content} contentContainerStyle={{ gap: 16 }}>
                <ProfileCard
                    name="Max Mustermann"
                    points={3450}
                    imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
                />

                <Text style={[styles.sectionTitle, { fontWeight: "bold" }]}>Empfohlene Aufgaben</Text>
                <TaskCard
                    title="Einkaufen gehen"
                    subtitle="Besorge frische Lebensmittel"
                    imageUrl="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
                    onStart={() => router.push("/taskdetail")}
                />
                <TaskCard
                    title="Kurzer Spaziergang"
                    subtitle="Geh für 15 Minuten raus"
                    imageUrl="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
                    onStart={() => router.push("/taskdetail")}
                />
                <TaskCard
                    title="Kurzer Spaziergang"
                    subtitle="Geh für 15 Minuten raus"
                    imageUrl="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
                    onStart={() => router.push("/taskdetail")}
                />
                <TaskCard
                    title="Kurzer Spaziergang"
                    subtitle="Geh für 15 Minuten raus"
                    imageUrl="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
                    onStart={() => router.push("/taskdetail")}
                />
                <TaskCard
                    title="Kurzer Spaziergang"
                    subtitle="Geh für 15 Minuten raus"
                    imageUrl="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
                    onStart={() => router.push("/taskdetail")}
                />
                <TaskCard
                    title="Kurzer Spaziergang"
                    subtitle="Geh für 15 Minuten raus"
                    imageUrl="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
                    onStart={() => router.push("/taskdetail")}
                />
                <TaskCard
                    title="Kurzer Spaziergang"
                    subtitle="Geh für 15 Minuten raus"
                    imageUrl="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
                    onStart={() => router.push("/taskdetail")}
                />

                <Text style={[styles.sectionTitle, { fontWeight: "bold" }]}>Aktuelle Challenges</Text>
                <ChallengeCard
                    title="10.000 Schritte schaffen"
                    subtitle="Bleibe heute aktiv!"
                    expires="läuft noch 5 Stunden"
                    imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                />
                <ChallengeCard
                    title="Wasser trinken"
                    subtitle="Trinke 2 Liter heute"
                    expires="läuft noch 12 Stunden"
                    imageUrl="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03"
                />
                <ChallengeCard
                    title="Wasser trinken"
                    subtitle="Trinke 2 Liter heute"
                    expires="läuft noch 12 Stunden"
                    imageUrl="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03"
                />
                <ChallengeCard
                    title="Wasser trinken"
                    subtitle="Trinke 2 Liter heute"
                    expires="läuft noch 12 Stunden"
                    imageUrl="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03"
                />
                <ChallengeCard
                    title="Wasser trinken"
                    subtitle="Trinke 2 Liter heute"
                    expires="läuft noch 12 Stunden"
                    imageUrl="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03"
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
});

export default HomeScreen;
