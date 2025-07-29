import React from 'react';
import { View, Text, ImageBackground, Pressable, StyleSheet } from 'react-native';

type TaskCardProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
    onStart?: () => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ title, subtitle, imageUrl, onStart }) => (
    <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.textButtonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <Pressable style={styles.button} onPress={onStart}>
                        <Text style={styles.buttonText}>Details</Text>
                    </Pressable>
                </View>
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
    container: {
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
        gap: 12,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 12,
    },
    imageStyle: {
        borderRadius: 12,
    },
    textButtonContainer: {
        flex: 1,
        // flexDirection: 'row', // rausgenommen, da Button jetzt unter Text
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: '#0e1a13',
        fontWeight: '600',
        fontSize: 16,
    },
    subtitle: {
        color: '#51946c',
        fontSize: 13,
        marginTop: 2,
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#e9f1ec',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 999,
        alignSelf: 'flex-start', // Button linksbündig unter dem Text
    },
    buttonText: {
        color: '#0e1a13',
        fontWeight: '500',
        fontSize: 14,
    },
});

export default TaskCard;
