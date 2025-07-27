import React from "react";
import { View, TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions; // <--- HIER HINZUGEFÜGT
}

const InputField: React.FC<InputFieldProps> = ({
                                                   placeholder,
                                                   value,
                                                   onChangeText,
                                                   secureTextEntry = false,
                                                   keyboardType = "default", // <--- fallback setzen
                                               }) => {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#5a8c6e"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize="none"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        minWidth: 160,
        marginVertical: 8,
    },
    input: {
        height: 56,
        borderColor: "#d3e3da",
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: "#f9fbfa",
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#101914",
    },
});

export default InputField;
