// @ts-nocheck
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';


const TaskCard = ({ title, subtitle, imageUrl, onStart }) => (
    <View style={styles.container} className='py-3 p'>
        <View style={styles.row}>
            <View style={styles.textButtonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title} className='pb-2'>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <Pressable style={styles.button} onPress={onStart}>
                        <Text style={styles.buttonText}>Details</Text>
                    </Pressable>
                </View>
            </View>
            <Image source={imageUrl} style={styles.image} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fbfa',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    image: {
        width: 115,
        height: 115,
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
        fontWeight: '700',
        fontSize: 17,
        
        
    },
    subtitle: {
        color: '#51946c',
        fontSize: 15,
        marginTop: 2,
        marginBottom: 8,
        paddingBottom: 10
    },
    button: {
        backgroundColor: '#e9f1ec',
        paddingHorizontal: 20,
        paddingVertical: 8,
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
