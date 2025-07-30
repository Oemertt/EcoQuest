import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ProfileCardProps = {
    name: string;
    points: number;
    badges: number;
    imageUrl: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, points, badges, imageUrl }) => (
    <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.avatar} />
        <View>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.pointsRow}>
                <Text style={styles.points}>Punkte:  </Text>
                <Image source={require('../assets/images/trophy.png')} style={styles.iconImage} />
                <Text style={styles.points}>{points}</Text>
            </View>
            <View style={styles.pointsRow}>
                <Text style={styles.points}>Abzeichen:  </Text>
                <Image source={require('../assets/images/badge.png')} style={styles.iconImage} />
                <Text style={styles.points}>{badges}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    avatar: {
        width: 115,
        height: 115,
        borderRadius: 60,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0e1a13',
    },
    pointsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    iconImage: {
        width: 18,
        height: 18,
        marginRight: 6,
    },
    points: {
        fontSize: 14,
        color: '#51946c',
    },
});

export default ProfileCard;
