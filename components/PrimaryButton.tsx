import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    GestureResponderEvent,
} from "react-native";

interface PrimaryButtonProps {
    title: string;
    onPressIn: (event: GestureResponderEvent) => void;
    color?: string;  // optionales Farb-Prop
}

// @ts-ignore
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPressIn, color }) => {
    return (
        <TouchableOpacity
            style={[styles.button, color ? { backgroundColor: color } : null]} // Farbe hier dynamisch setzen
            onPressIn={onPressIn}
            activeOpacity={0.8}
        >
            <Text style={styles.text} numberOfLines={1}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#94e0b2",  // Standardfarbe
        borderRadius: 24,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        minWidth: 84,
        maxWidth: "100%",
    },
    text: {
        color: "#101914",
        fontWeight: "700",
        fontSize: 16,
        letterSpacing: 0.3,
    },
});

export default PrimaryButton;
