import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';



const ProfileCard = ({ name, points, badges, imageUrl }: any) => (
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
        width: 90,
        height: 90,
        borderRadius: 50,
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
        fontSize: 16,
        color: '#51946c',
    },
});

export default ProfileCard;
