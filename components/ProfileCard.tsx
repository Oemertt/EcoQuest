import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ProfileCardProps = {
    name: string;
    points: number;
    imageUrl: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, points, imageUrl }) => (
    <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.avatar} />
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.points}>Total Points: {points}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', gap: 16 },
    avatar: { width: 80, height: 80, borderRadius: 40 },
    name: { fontSize: 22, fontWeight: 'bold', color: '#0e1a13' },
    points: { fontSize: 16, color: '#51946c' },
});

export default ProfileCard;
