import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChallengeCard from "@/components/ChallengeCard";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import RecommendedTaskCard from "@/components/RecommendedTaskCard";
import { router } from "expo-router";

const recommendedTasks = [
    {
        id: "1",
        title: "Müll trennen",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZtD_LXf6CywdjZPgNQR1nqpNp8H7ZbOdEUPL-IhfAMvshaCiM5BArS9_6GgxTnyup6OLjifi3uU8DiZ-m1n1igqO-59OokpErYysnIAi_--t0ZMTROspstZ3Muox7Qnn-tgxueXG279rhjyeSMrTfiYASP2zgvr1hmvWRy1tOuzAg3x1kVaKVNXe5BU-Mdw7ccm5d-FXIpXRNraHQps_-ARY4bq_W54mOmwta_4VPCY8KGsOKJuU-9dS9Vby6Ms2X-G7MNeRomGk\n",
    },
    {
        id: "2",
        title: "Kurzer Spaziergang",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZtD_LXf6CywdjZPgNQR1nqpNp8H7ZbOdEUPL-IhfAMvshaCiM5BArS9_6GgxTnyup6OLjifi3uU8DiZ-m1n1igqO-59OokpErYysnIAi_--t0ZMTROspstZ3Muox7Qnn-tgxueXG279rhjyeSMrTfiYASP2zgvr1hmvWRy1tOuzAg3x1kVaKVNXe5BU-Mdw7ccm5d-FXIpXRNraHQps_-ARY4bq_W54mOmwta_4VPCY8KGsOKJuU-9dS9Vby6Ms2X-G7MNeRomGk\n",
    },
    {
        id: "3",
        title: "Licht ausschalten",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZtD_LXf6CywdjZPgNQR1nqpNp8H7ZbOdEUPL-IhfAMvshaCiM5BArS9_6GgxTnyup6OLjifi3uU8DiZ-m1n1igqO-59OokpErYysnIAi_--t0ZMTROspstZ3Muox7Qnn-tgxueXG279rhjyeSMrTfiYASP2zgvr1hmvWRy1tOuzAg3x1kVaKVNXe5BU-Mdw7ccm5d-FXIpXRNraHQps_-ARY4bq_W54mOmwta_4VPCY8KGsOKJuU-9dS9Vby6Ms2X-G7MNeRomGk\n",
    },
];

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <Header title="Home" />

            <ScrollView style={styles.content} contentContainerStyle={{ gap: 16 }}>
                <ProfileCard
                    name="Max Mustermann"
                    points={3450}
                    badges={7}
                    imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCMZlu-716uMlFR2wmDQs292n35ubOQHUHfiv_aM1PeQGAhC1Ma-b4y6ErFNGF9m3q8mo6l-PlMsb0zdX0-7BFBKeFc2mRZPuBra2UaMtvVRFbJYDCD8C9KPUyOMWRq4Y5KVqSaygThmMDuP515IOYcFaYNRIi-2U17uTpMtjWabWDNWCdY9lv_GaD04EzIP7ajJ90AvYVgwwCKczA0kf93OAsRotWV0ffK2yHOohiUlKrOFwev1d4W_mc9bkDgRWYDxS-k_QMUIgw"
                />

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
