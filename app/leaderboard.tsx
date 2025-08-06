import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Crown, Medal, Award } from 'lucide-react-native';

interface LeaderboardEntry {
    id: string;
    rank: number;
    name: string;
    points: number;
    avatar: string;
    change?: number;
}

const leaderboardData: LeaderboardEntry[] = [
    { id: '1', rank: 1, name: 'Anna Müller', points: 2847, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', change: 2 },
    { id: '2', rank: 2, name: 'Max Schmidt', points: 2654, avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', change: -1 },
    { id: '3', rank: 3, name: 'Sophie Weber', points: 2489, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', change: 1 },
    { id: '4', rank: 4, name: 'Leon Bauer', points: 2387, avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', change: 3 },
    { id: '5', rank: 5, name: 'Emma Fischer', points: 2156, avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', change: -2 },
    { id: '6', rank: 6, name: 'Paul Wagner', points: 1987, avatar: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', change: 0 },
    { id: '7', rank: 7, name: 'Lisa Hoffmann', points: 1845, avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', change: 1 },
    { id: '8', rank: 8, name: 'Tim Klein', points: 1723, avatar: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', change: -3 },
];

function getRankIcon(rank: number) {
    switch (rank) {
        case 1:
            return <Crown size={20} color="#F59E0B" />;
        case 2:
            return <Medal size={20} color="#9CA3AF" />;
        case 3:
            return <Award size={20} color="#CD7C2F" />;
        default:
            return null;
    }
}

/*function getRankStyle(rank: number) {
    switch (rank) {
        case 1:
            return styles.goldRank;
        case 2:
            return styles.silverRank;
        case 3:
            return styles.bronzeRank;
        default:
            return styles.defaultRank;
    }
}

function getChangeIndicator(change?: number) {
    if (!change || change === 0) return null;

    const isPositive = change > 0;
    return (
        <View style={[styles.changeIndicator, isPositive ? styles.positiveChange : styles.negativeChange]}>
            <Text style={[styles.changeText, isPositive ? styles.positiveChangeText : styles.negativeChangeText]}>
                {isPositive ? '+' : ''}{change}
            </Text>
        </View>
    );
}*/

export default function LeaderboardScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>


            <View style={styles.podium}>
                {leaderboardData.slice(0, 3).map((entry, index) => (
                    <View key={entry.id} style={[styles.podiumPlace, index === 0 ? styles.firstPlace : index === 1 ? styles.secondPlace : styles.thirdPlace]}>
                        <View style={styles.podiumRank}>
                            {getRankIcon(entry.rank)}
                            <Text style={styles.podiumRankText}>#{entry.rank}</Text>
                        </View>
                        <Image source={{ uri: entry.avatar }} style={styles.podiumAvatar} />
                        <Text style={styles.podiumName} numberOfLines={1}>{entry.name}</Text>
                        <Text style={styles.podiumPoints}>{entry.points.toLocaleString()}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.subtitle}>Sehen Sie, wer an der Spitze steht</Text>


            {/*<View style={styles.leaderboardList}>
                <Text style={styles.sectionTitle}>Vollständige Rangliste</Text>
                {leaderboardData.map((entry) => (
                    <View key={entry.id} style={[styles.leaderboardItem, getRankStyle(entry.rank)]}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankNumber}>#{entry.rank}</Text>
                            {getRankIcon(entry.rank)}
                        </View>

                        <Image source={{ uri: entry.avatar }} style={styles.avatar} />

                        <View style={styles.playerInfo}>
                            <Text style={styles.playerName}>{entry.name}</Text>
                            <Text style={styles.playerPoints}>{entry.points.toLocaleString()} Punkte</Text>
                        </View>

                        {getChangeIndicator(entry.change)}
                    </View>
                ))}
            </View>*/}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 20
    },
    content: {
        paddingBottom: 100,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#64748B',
        textAlign: 'center',
    },
    podium: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,

        paddingHorizontal: 16,
    },
    podiumPlace: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 15,
        minWidth: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    firstPlace: {
        borderWidth: 2,
        borderColor: '#F59E0B',
        transform: [{ scale: 1.05 }],
    },
    secondPlace: {
        borderWidth: 2,
        borderColor: '#9CA3AF',
        marginTop: 8,
    },
    thirdPlace: {
        borderWidth: 2,
        borderColor: '#CD7C2F',
        marginTop: 16,
    },
    podiumRank: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 4,
    },
    podiumRankText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    podiumAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
    },
    podiumName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E293B',
        textAlign: 'center',
        marginBottom: 4,
    },
    podiumPoints: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '500',
    },
    /*leaderboardList: {
        gap: 12,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 16,
    },
    leaderboardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },*/
    /*goldRank: {
        borderLeftWidth: 4,
        borderLeftColor: '#F59E0B',
    },
    silverRank: {
        borderLeftWidth: 4,
        borderLeftColor: '#9CA3AF',
    },
    bronzeRank: {
        borderLeftWidth: 4,
        borderLeftColor: '#CD7C2F',
    },
    defaultRank: {
        borderLeftWidth: 4,
        borderLeftColor: '#E2E8F0',
    },
    rankContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 60,
        gap: 4,
    },
    rankNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E293B',
    },*/
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginHorizontal: 16,
    },
    playerInfo: {
        flex: 1,
    },
    playerName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 2,
    },
    playerPoints: {
        fontSize: 14,
        color: '#64748B',
    },
    changeIndicator: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        minWidth: 32,
        alignItems: 'center',
    },
    positiveChange: {
        backgroundColor: '#DCFCE7',
    },
    negativeChange: {
        backgroundColor: '#FEE2E2',
    },
    changeText: {
        fontSize: 12,
        fontWeight: '600',
    },
    positiveChangeText: {
        color: '#16A34A',
    },
    negativeChangeText: {
        color: '#DC2626',
    },
});