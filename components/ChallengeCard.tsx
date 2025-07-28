import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';

type ChallengeCardProps = {
    title: string;
    subtitle: string;
    expires: string;
    imageUrl: string;
    onStart?: () => void;
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({
                                                         title,
                                                         subtitle,
                                                         expires,
                                                         imageUrl,
                                                         onStart,
                                                     }) => (
    <View style={styles.card}>
        <View style={styles.textBlock}>
            <Text style={styles.expires}>{expires}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>

            <Pressable style={styles.button} onPress={onStart}>
                <Text style={styles.buttonText}>Annehmen</Text>
            </Pressable>
        </View>
        <ImageBackground
            source={{ uri: imageUrl }}
            style={styles.image}
            imageStyle={styles.imageStyle}
        />
    </View>
);

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        gap: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    textBlock: {
        flex: 1,
        justifyContent: 'center',
        gap: 4,
    },
    expires: {
        color: '#51946c',
        fontSize: 13,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        color: '#0e1a13',
    },
    subtitle: {
        color: '#51946c',
        fontSize: 13,
    },
    image: {
        width: 72,
        height: 72,
    },
    imageStyle: {
        borderRadius: 12,
    },
    button: {
        marginTop: 8,
        backgroundColor: '#e8f2ec',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 999,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#0e1a13',
        fontWeight: '500',
        fontSize: 14,
    },
});

export default ChallengeCard;
