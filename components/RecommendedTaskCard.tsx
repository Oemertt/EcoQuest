// @ts-nocheck

import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";



const RecommendedTaskCard = ({ title, imageUrl, taskId, url }) => {
    return (
        <Link href={url} push asChild>
            <Pressable style={styles.card}>
                <Image source={imageUrl} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 150,
        marginRight: 16,
    },
    image: {
        width: 150,
        height: 150,
        justifyContent: "flex-end",
        borderRadius: 12,
    },
    
    title: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "500",
        color: "#0e1a13",
    },
});

export default RecommendedTaskCard;
