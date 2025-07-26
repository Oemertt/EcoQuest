import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

type NavItem = {
    label: string;
    icon: keyof typeof Feather.glyphMap;
    isActive?: boolean;
    onPress?: () => void;
};

type BottomNavigationProps = {
    items: NavItem[];
};

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items }) => (
    <View style={styles.container}>
        {items.map((item, index) => (
            <Pressable key={index} onPress={item.onPress} style={styles.item}>
                <Feather name={item.icon} size={24} color={item.isActive ? '#0e1a13' : '#51946c'} />
                <Text style={[styles.label, { color: item.isActive ? '#0e1a13' : '#51946c' }]}>{item.label}</Text>
            </Pressable>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#e8f2ec',
        paddingVertical: 8,
        backgroundColor: '#f8fbfa',
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
