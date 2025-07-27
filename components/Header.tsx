import React from 'react';
import { View, Text } from 'react-native';

type HeaderProps = {
    title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => (
    <View style={{ padding: 16, alignItems: 'center', backgroundColor: '#f9fbfa' }}>
        <Text style={{ fontSize: 25, fontWeight: '900', color: '#5a8c6e' }}>{title}</Text>
    </View>
);

export default Header;
