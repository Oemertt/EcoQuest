// @ts-nocheck
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export default function ModalLevelMap() {
    
    return (
        <View style={{ width: '100%', height: 400, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <Image
                source={require("@/assets/images/levelmap.webp")}
                style={styles.badgeImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
    badgeImage: {
        width: '100%',
        height: '100%',
        contentFit: 'contain',
    },
});