import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface LinkTextProps {
    text: string;
    onPress: () => void;
}

const LinkText: React.FC<LinkTextProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: "#5a8c6e",
        fontSize: 14,
        textDecorationLine: "underline",
        textAlign: "center",
        marginVertical: 12,
    },
});

export default LinkText;
