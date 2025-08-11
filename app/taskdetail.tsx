import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import TaskDetail from "@/components/TaskDetail";

const TaskDetailScreen: React.FC = () => {


    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <Header title="Aufgabe" />

            <View style={styles.content}>
                <TaskDetail
                    title="Licht ausschalten"
                    description="Lerne, wie du mit einfachem Ausschalten Energie sparen kannst."
                    steps={[
                        { id: "1", text: "Licht im Wohnzimmer ausschalten" },
                        { id: "2", text: "Licht in der Küche ausmachen" },
                        { id: "3", text: "Stehlampe vom Strom trennen" },
                    ]}
                    rewardPoints={10}

                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        marginTop: 16,
    },
    trophyWrapper: {
        marginBottom: 24,
        alignItems: "center",
    },
    trophyText: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "600",
        color: "#f0a500",
    },
});

export default TaskDetailScreen;
