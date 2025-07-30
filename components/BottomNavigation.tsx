import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export type NavItem = {
    label: string;
    icon: keyof typeof Feather.glyphMap;
    isActive?: boolean;
    onPress?: () => void;
    onSettingsPress?: () => void;
};

type BottomNavigationProps = {
    items: NavItem[];
};

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items }) => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
            <View style={styles.container}>
                {items.map((item, index) => (
                    <Pressable key={index} onPress={item.onPress} style={styles.item}>
                        <Feather name={item.icon} size={24} color={item.isActive ? '#0e1a13' : '#51946c'} />
                        <Text style={[styles.label, { color: item.isActive ? '#0e1a13' : '#51946c' }]}>{item.label}</Text>
                    </Pressable>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#f8fbfa',
    },
    container: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#e8f2ec',
        paddingVertical: 8,
        backgroundColor: '#f8fbfa',
        marginTop: 12,
    },
    item: {
        flex: 1,
        alignItems: 'center',
        gap: 4,
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
    },
});

export default BottomNavigation;
