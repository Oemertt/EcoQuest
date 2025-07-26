import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

type HeaderProps = {
    title: string;
    onSettingsPress?: () => void; // ✅ Typ hinzugefügt
};

const Header: React.FC<HeaderProps> = ({ title, onSettingsPress }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
        <View style={{ flex: 1, alignItems: 'center', paddingLeft: 48 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0e1a13' }}>{title}</Text>
        </View>
        {onSettingsPress && (
            <Pressable onPress={onSettingsPress}>
                <Feather name="settings" size={24} color="#0e1a13" />
            </Pressable>
        )}
    </View>
);

export default Header;
