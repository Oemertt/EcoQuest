import useUserStore, { userSelector } from "@/store/userStore";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

// const badges = [
//     {
//         id: '1',
//         name: 'Energie-Sparer',
//         imageUrl: require('@/assets/images/energy.png'),
//         description: 'Abzeichen für das Abschließen von 5 Energie sparenden Aufgaben.',
//         criteria: 'Schalte Lichter aus, ziehe Stecker und reduziere Streaming-Zeit.',
//     },
//     {
//         id: '2',
//         name: 'Wasser-Held',
//         imageUrl: require('@/assets/images/water.png'),
//         description: 'Abzeichen für das Abschließen von 5 Wasser sparenden Aufgaben.',
//         criteria: 'Dusche kurz, drehe den Wasserhahn zu und sammle Regenwasser.',
//     },
//     {
//         id: '3',
//         name: 'Mobilitäts-Champion',
//         imageUrl: require('@/assets/images/test3.png'),
//         description: 'Abzeichen für das Abschließen von 5 nachhaltigen Mobilitätsaufgaben.',
//         criteria: 'Nutze Fahrrad, öffentliche Verkehrsmittel und bilde Fahrgemeinschaften.',
//     }
// ]

const Badges = () => {
    const userData = useUserStore(userSelector);
    return (
        <View className="flex-row gap-8">
            <Image
                source={require("@/assets/images/dschungelkrieger.png")}
                style={userData?.natureBadge ? styles.badgeImage : styles.locked}
            />

            <Image
                source={require("@/assets/images/energiesparmodus.png")}
                style={userData?.energyBadge ? styles.badgeImage : styles.locked}
            />
            <Image
                source={require("@/assets/images/aquaman.png")}
                style={userData?.waterBadge ? styles.badgeImage : styles.locked}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    badgeImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    locked: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        opacity: 0.3,
    }
});

export default Badges;