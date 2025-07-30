import React from 'react';
import { View, Text, ImageBackground, Pressable, StyleSheet } from 'react-native';

type TaskCardProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
    onStart?: () => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ title, subtitle, imageUrl, onStart }) => (
    <View style={styles.card}>
        <View style={styles.row}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Pressable style={styles.button} onPress={onStart}>
                    <Text style={styles.buttonText}>Details</Text>
                </Pressable>
            </View>

            <ImageBackground
                source={{ uri: imageUrl }}
                style={styles.image}
                imageStyle={styles.imageStyle}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#0e1a13',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 4,
    },
    subtitle: {
        color: '#51946c',
        fontSize: 14,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#e9f1ec',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 999,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#0e1a13',
        fontWeight: '500',
        fontSize: 14,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 12,
    },
    imageStyle: {
        borderRadius: 12,
    },
});

export default TaskCard;
