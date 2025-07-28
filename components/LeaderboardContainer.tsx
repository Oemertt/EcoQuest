import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ProfileCard from "./ProfileCard";

type User = {
    id: string;
    name: string;
    points: number;
    imageUrl: string;
};

interface LeaderboardContainerProps {
    users: User[];
}

const LeaderboardContainer: React.FC<LeaderboardContainerProps> = ({ users }) => {
    const sortedUsers = [...users].sort((a, b) => b.points - a.points);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {sortedUsers.map((user) => (
                <View key={user.id} style={styles.cardWrapper}>
                    <ProfileCard
                        name={user.name}
                        points={user.points}
                        imageUrl={user.imageUrl}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        gap: 16,
        alignItems: "center",
    },
    cardWrapper: {
        width: "90%",
        marginBottom: 12,
    },
});

export default LeaderboardContainer;
