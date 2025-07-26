import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   placeholder,
                                                   value,
                                                   onChangeText,
                                                   secureTextEntry = false,
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
                autoCapitalize="none"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
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
