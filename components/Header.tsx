import React from 'react';
import { Text, View } from 'react-native';

type HeaderProps = {
    title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => (
    <View style={{ padding: 16, alignItems: 'center', backgroundColor: '#f9fbfa' }}>
        <Text className='font-bold text-xl'>{title}</Text>
    </View>
);

export default Header;
