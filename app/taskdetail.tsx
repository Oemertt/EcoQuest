import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import TaskDetail from "@/components/TaskDetail";
import PrimaryButton from "@/components/PrimaryButton";

const TaskDetailScreen: React.FC = () => {
    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <Header title="Aufgabendetails" />

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

            <View style={styles.buttonWrapper}>
                <PrimaryButton title="Aufgabe starten" onPress={() => {}} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        marginTop: 16,
    },
    buttonWrapper: {
        marginBottom: 48,
    },
});

export default TaskDetailScreen;
