import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

type ChallengeCardProps = {
    title: string;
    subtitle: string;
    expires: string;
    imageUrl: string;
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, subtitle, expires, imageUrl }) => (
    <View style={styles.card}>
        <View style={styles.textBlock}>
            <Text style={styles.expires}>{expires}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <ImageBackground source={{ uri: imageUrl }} style={styles.image} imageStyle={styles.imageStyle} />
    </View>
);

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        gap: 16,
        borderRadius: 16,
        overflow: 'hidden',
    },
    textBlock: { flex: 2 },
    expires: { color: '#51946c', fontSize: 13 },
    title: { fontWeight: 'bold', fontSize: 16, color: '#0e1a13' },
    subtitle: { color: '#51946c', fontSize: 13 },
    image: { flex: 1, aspectRatio: 1.7 },
    imageStyle: { borderRadius: 16 },
});

export default ChallengeCard;
