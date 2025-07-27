import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TaskCard from "./TaskCard";

interface Task {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    onPress?: () => void;   // onPress ist optional, falls gewünscht
}

interface TaskContainerProps {
    title: string;
    description: string;
    tasks: Task[];
}

const TaskContainer: React.FC<TaskContainerProps> = ({
                                                         title,
                                                         description,
                                                         tasks,
                                                     }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

            {/* Task cards */}
            {tasks.map((task) => (
                <View key={task.id} style={styles.cardWrapper}>
                    <TaskCard
                        title={task.title}
                        subtitle={task.subtitle}
                        imageUrl={task.imageUrl}
                        onStart={task.onPress}
                    />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
        paddingHorizontal: 16,
        backgroundColor: "#f9fbfa",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#101914",
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: "#101914",
        marginBottom: 16,
    },
    cardWrapper: {
        marginBottom: 16,
    },
});

export default TaskContainer;
