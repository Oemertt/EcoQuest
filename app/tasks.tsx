import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation, { NavItem } from "@/components/BottomNavigation";
import Header from "@/components/Header";
import { router } from "expo-router";
import TaskContainer from "@/components/TaskContainer";

const tasksGruppe1 = [
    {
        id: "1",
        title: "Licht ausschalten",
        subtitle: "Schalte unnötige Lichter aus",
        imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        onPress: () => router.push("./taskdetail"),
    },
    {
        id: "2",
        title: "Heizung herunterdrehen",
        subtitle: "Spare Energie im Winter",
        imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
        onPress: () => router.push("./taskdetail"),
    },
];

const tasksGruppe2 = [
    {
        id: "3",
        title: "Zimmer aufräumen",
        subtitle: "Sorge für Ordnung",
        imageUrl: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
        onPress: () => router.push("./taskdetail"),
    },
];

const TasksScreen: React.FC = () => {
    const navItems: NavItem[] = [
        { label: "Home", icon: "home", onPress: () => router.push("/home") },
        { label: "Aufgaben", icon: "list", isActive: true },
        { label: "Fortschritt", icon: "bar-chart", onPress: () => router.push("./progress")  },
    ];

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <Header title="Deine Aufgaben" />
            <ScrollView contentContainerStyle={styles.scroll}>
                <TaskContainer
                    title="Energie sparen"
                    description="Diese Aufgaben helfen dir, Strom zu sparen"
                    tasks={tasksGruppe1}
                />

                <TaskContainer
                    title="Zimmerpflege"
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
