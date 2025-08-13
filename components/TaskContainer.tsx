import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TaskCard from "./TaskCard";

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
