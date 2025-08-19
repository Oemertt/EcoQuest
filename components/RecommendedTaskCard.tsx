import React from "react";
import {Text, ImageBackground, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";

type RecommendedTaskCardProps = {
    title: string;
    imageUrl: string;
    taskId: string;
};

const RecommendedTaskCard: React.FC<RecommendedTaskCardProps> = ({ title, imageUrl, taskId }) => {
    const goToTask = () => {
        router.push({ pathname: "/tasks", params: { taskId } });
    };

    return (
        <Pressable style={styles.card} onPress={goToTask}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.image} imageStyle={styles.imageStyle} />
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 120,
        marginRight: 16,
    },
    image: {
        width: "100%",
        height: 120,
        justifyContent: "flex-end",
    },
    imageStyle: {
        borderRadius: 12,
    },
    title: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "bold",
        color: "#0e1a13",
    },
});

export default RecommendedTaskCard;
