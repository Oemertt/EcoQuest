import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import RecommendedTaskCard from "./RecommendedTaskCard";

type Task = {
    id: string;
    title: string;
    imageUrl: string;
};

type RecommendedTaskListProps = {
    tasks: Task[];
};

const RecommendedTaskList: React.FC<RecommendedTaskListProps> = ({ tasks }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {tasks.map((task) => (
                    <RecommendedTaskCard
                        key={task.id}
                        title={task.title}
                        imageUrl={task.imageUrl}
                        taskId={task.id}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
});

export default RecommendedTaskList;
