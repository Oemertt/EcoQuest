import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TaskCard from "./TaskCard";
import { LegendList } from "@legendapp/list";
import { FlashList } from "@shopify/flash-list";
import {router} from "expo-router";

interface Task {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string | any;
    onPress?: () => void;   // onPress ist optional, falls gewünscht
}

interface TaskContainerProps {
    title: string;
    tasks: Task[];
}

const TaskContainer: React.FC<TaskContainerProps> = ({ title, tasks, }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            {/* Task cards */}
            <FlashList data={tasks} renderItem={({ item }) => (
                    <TaskCard
                        key={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        imageUrl={item.imageUrl}
                        onStart={ () => router.push(`/(tabs)/(tasks)/${item.id}`) }
                    />
                )}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        marginBottom: 6,
        paddingHorizontal: 16,
        backgroundColor: "#f9fbfa",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#101914",
        marginBottom: 18,
    },
    cardWrapper: {
        marginBottom: 10,
    },
});

export default TaskContainer;
