import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import BottomNavigation, { NavItem } from '@/components/BottomNavigation'; // passe den Pfad an
import { usePathname, router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
    const pathname = usePathname();
    const insets = useSafeAreaInsets();

    const navItems: NavItem[] = [
        {
            label: 'Home',
            icon: 'home',
            isActive: pathname === '/home',
            onPress: () => router.push('/home'),
        },
        {
            label: 'Aufgaben',
            icon: 'check-circle',
            isActive: pathname === '/tasks',
            onPress: () => router.push('/tasks'),
        },
        {
            label: 'Fortschritt',
            icon: 'bar-chart-2',
            isActive: pathname === '/profile',
            onPress: () => router.push('/progress'),
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }} />
            <BottomNavigation items={navItems} />
        </View>
    );
}
