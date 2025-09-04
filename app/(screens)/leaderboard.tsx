import axios from 'axios';
import { Award, Crown, Medal } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface LeaderboardEntry {
    clerkUserId: string;
    points: number;
    name: string;
    imageUrl: string;
}

export default function LeaderboardScreen() {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get('http://192.168.1.5:5001/leaderboard');
            console.log("leaderbord:" + response.data);
            setLeaderboard(response.data);
        } catch (err) {
            console.error('Fehler beim Laden der Rangliste:', err);
            setError('Fehler beim Laden der Rangliste');
            setLeaderboard([]);
        } finally {
            setLoading(false);
        }
    };

    const getRankIcon = (rank: number) => {
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
    };

    if (loading) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <Text style={styles.loadingText}>Lade Rangliste...</Text>
            </View>
        );
    }

    /*if (error) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <Text style={styles.errorText}>{error}</Text>
                <Text style={styles.retryText} onPress={fetchLeaderboard}>
                    Erneut versuchen
                </Text>
            </View>
        );
    }*/

  /*  if (leaderboard.length === 0) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <Text style={styles.emptyText}>Noch keine Daten verfügbar</Text>
            </View>
        );
    }*/

    return (
        <View style={styles.container} >
            <View style={styles.podium}>
                {leaderboard.slice(0, 3).map((entry, index) => (
                    <View key={entry.clerkUserId} style={[styles.podiumPlace, index === 0 ? styles.firstPlace : index === 1 ? styles.secondPlace : styles.thirdPlace]}>
                        <View style={styles.podiumRank}>
                            {getRankIcon(index + 1)}
                            <Text style={styles.podiumRankText}>#{index + 1}</Text>
                        </View>
                        <Image
                            source={{ uri: entry.imageUrl || 'https://via.placeholder.com/60' }}
                            style={styles.podiumAvatar}
                        />
                        <Text style={styles.podiumName} numberOfLines={1}>
                            {entry.name || 'Unbekannt'}
                        </Text>
                        <Text style={styles.podiumPoints}>{entry.points.toLocaleString()}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.subtitle}>Sehen Sie, wer an der Spitze steht</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fbfa',
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
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        color: '#1E293B',
    },
    errorText: {
        fontSize: 16,
        color: '#DC2626',
        marginBottom: 8,
    },
    retryText: {
        fontSize: 16,
        color: '#2563EB',
        textDecorationLine: 'underline',
    },
    emptyText: {
        fontSize: 16,
        color: '#64748B',
    },
});