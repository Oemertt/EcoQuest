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
        backgroundColor: '#f8fbfa',
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
    },
    row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    image: { width: 56, height: 56 },
    imageStyle: { borderRadius: 12 },
    textContainer: { justifyContent: 'center' },
    title: { color: '#0e1a13', fontWeight: '500' },
    subtitle: { color: '#51946c', fontSize: 13 },
    button: {
        backgroundColor: '#e8f2ec',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 999,
    },
    buttonText: { color: '#0e1a13', fontWeight: '500', fontSize: 14 },
});

export default TaskCard;
