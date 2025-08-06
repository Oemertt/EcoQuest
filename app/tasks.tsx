import BottomNavigation, { NavItem } from "@/components/BottomNavigation";
import Header from "@/components/Header";
import TaskContainer from "@/components/TaskContainer";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tasksGruppe1 = [
    {
        id: "1",
        title: "Lichter ausschalten",
        subtitle: "Schalte die Lichter aus, wenn du einen Raum verlässt",
        imageUrl: require("@/assets/images/light.png"),
        onPress: () => router.push("./taskdetail"),
    },
    {
        id: "2",
        title: "Stecker Ziehen",
        subtitle: "Ziehe den Stecker von nicht verwendeten Geräten",
        imageUrl: require("@/assets/images/unplug.png"),
        onPress: () => router.push("./taskdetail"),
    },
];

const tasksGruppe2 = [
    {
        id: "3",
        title: "Zimmer aufräumen",
        subtitle: "Sorge für Ordnung",
        imageUrl: "",
        onPress: () => router.push("./taskdetail"),
    },
];

const TasksScreen: React.FC = () => {
    const navItems: NavItem[] = [
        { label: "Home", icon: "home", onPress: () => router.push("/") },
        { label: "Aufgaben", icon: "list", isActive: true },
        { label: "Fortschritt", icon: "bar-chart", onPress: () => router.push("./progress")  },
    ];

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <Header title="Tasks" />
            <ScrollView contentContainerStyle={styles.scroll}>
                <TaskContainer
                    title="Energie sparen"
                    description="Diese Aufgaben helfen dir, Strom zu sparen"
                    tasks={tasksGruppe1}
                />

                <TaskContainer
                    title="Recycling"
                    description="Halte dein Zimmer sauber und ordentlich"
                    tasks={tasksGruppe2}
                />
            </ScrollView>
            <BottomNavigation items={navItems} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
    },
    scroll: {
        paddingVertical: 16,
        gap: 16,
    },
});

export default TasksScreen;
