import React from 'react';
import { View, Text, Pressable } from 'react-native';

type HeaderProps = {
    title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => (
    <View style={{ padding: 16, alignItems: 'center', backgroundColor: '#f9fbfa' }}>
        <Text style={{ fontSize: 20, fontWeight: '900', color: '#0e1a13' }}>{title}</Text>
    </View>
);


export default Header;
