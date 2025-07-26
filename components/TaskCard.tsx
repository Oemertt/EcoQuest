import React from 'react';
import { View, Text, ImageBackground, Pressable, StyleSheet } from 'react-native';

type TaskCardProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
    onStart: () => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ title, subtitle, imageUrl, onStart }) => (
    <View style={styles.container}>
        <View style={styles.row}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.image} imageStyle={styles.imageStyle} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
        <Pressable style={styles.button} onPress={onStart}>
            <Text style={styles.buttonText}>Start</Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2, // Android shadow
        flexDirection: 'column',
        gap: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    image: { width: 56, height: 56 },
    imageStyle: { borderRadius: 12 },
    textContainer: { flex: 1, justifyContent: 'center' },
    title: {
        color: '#0e1a13',
        fontWeight: '600',
        fontSize: 16,
    },
    subtitle: {
        color: '#51946c',
        fontSize: 13,
        marginTop: 2,
    },
    button: {
        alignSelf: 'flex-start',
        backgroundColor: '#e8f2ec',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 999,
    },
    buttonText: { color: '#0e1a13', fontWeight: '500', fontSize: 14 },
});

export default TaskCard;
