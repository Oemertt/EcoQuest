import React from "react";
import { View, StyleSheet } from "react-native";
import PrimaryButton from "@/components/PrimaryButton";

interface TaskFooterProps {
    onStart?: () => void;
    buttonText?: string;
}

const TaskFooter: React.FC<TaskFooterProps> = ({
                                                   onStart,
                                                   buttonText = "Aufgabe starten",
                                               }) => {
    return (
        <View>
            <View style={styles.buttonContainer}>
                <PrimaryButton title={buttonText} onPress={onStart || (() => {})} />
            </View>
            <View style={styles.bottomSpacer} />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    bottomSpacer: {
        height: 20,
        backgroundColor: "#f9fbfa",
    },
});

export default TaskFooter;
