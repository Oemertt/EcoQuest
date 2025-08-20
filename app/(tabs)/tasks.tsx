// @ts-nocheck
import BottomNavigation, { NavItem } from "@/components/BottomNavigation";
import Header from "@/components/Header";
import TaskContainer from "@/components/TaskContainer";
import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { LegendList } from "@legendapp/list";



const taskGroups = [
    {
        id: "energieSparen",
        title: "Energie sparen",
        tasks: [
            {
                id: "1",
                title: "Lichter ausschalten",
                subtitle: "Schalte die Lichter aus, wenn du einen Raum verlässt",
                imageUrl: require("@/assets/images/light.png"),
            },
            {
                id: "2",
                title: "Stecker Ziehen",
                subtitle: "Ziehe den Stecker von nicht verwendeten Geräten",
                imageUrl: require("@/assets/images/unplug.png"),
            },
            {
                id: "3",
                title: "Digital Detox",
                subtitle: "Weniger Streaming und Surfen – spart Strom und entlastet Server.",
                imageUrl: require("@/assets/images/handy.png"),
            }
        ]
    },
    {
        id: "wasserSparen",
        title: "Wasser sparen",
        tasks: [
            {
                id: "4",
                title: "Kurz duschen",
                subtitle: "Zeit unter der Dusche reduzieren, um Wasser und Energie zu sparen.",
                imageUrl: require("@/assets/images/duschen.png"),
            },
            {
                id: "5",
                title: "Wasserhahn zudrehen",
                subtitle: "Drehe den Wasserhahn zu, während du Zähne putzt oder dich einseifst.",
                imageUrl: require("@/assets/images/water.png"),
            },
            {
                id: "6",
                title: "Regenwasser nutzen",
                subtitle: "Sammle Regenwasser für die Gartenbewässerung.",
                imageUrl: require("@/assets/images/regenwasser.png"),
            }
        ]
    },
    {
        id: "nachhaltigeMobilitaet",
        title: "Nachhaltige Mobilität",
        tasks: [
            {
                id: "7",
                title: "Fahrrad nutzen",
                subtitle: "Kurzstrecken zu Fuß oder mit dem Rad zurücklegen, um CO₂ zu sparen.",
                imageUrl: require("@/assets/images/fahrrad.png"),
            },
            {
                id: "8",
                title: "Öffis nutzen",
                subtitle: "Nutze öffentliche Verkehrsmittel, um CO₂ zu sparen.",
                imageUrl: require("@/assets/images/öffis.png"),
            },
        ]
    },
    {
        id: "muellVermeiden",
        title: "Müll vermeiden",
        tasks: [
            {
                id: "9",
                title: "Mülltrennung",
                subtitle: "Abfälle richtig sortieren, um Recycling zu ermöglichen.",
                imageUrl: require("@/assets/images/trash.png"),
            },
            {
                id: "10",
                title: "Upcycling machen",
                subtitle: "Aus alten Dingen Neues basteln – z. B. Gläser als Aufbewahrung nutzen.",
                imageUrl: require("@/assets/images/upcycling.png"),
            },
            {
                id: "11",
                title: "Mehrweg statt Einweg",
                subtitle: "Stoffbeutel, Trinkflaschen und Brotdosen statt Einwegplastik verwenden.",
                imageUrl: require("@/assets/images/reusableBag.png"),
            }
        ]
    },
    {
        id: "naturUndUmwelt",
        title: "Natur & Umwelt",
        tasks: [
            {
                id: "12",
                title: "Gemüse anbauen",
                subtitle: "Tomaten, Paprika oder Kräuter selbst anpflanzen – frisch und umweltfreundlich.",
                imageUrl: require("@/assets/images/gemüse.png"),
            },
            {
                id: "13",
                title: "Pflanzen für Natur & Artenvielfalt setzen",
                subtitle: "Einen Baum, Blumen oder bienenfreundliche Pflanzen anpflanzen, um das Klima zu schützen und Insekten zu unterstützen.",
                imageUrl: require("@/assets/images/baum.png"),
            },
        ]
    },
    {
        id: "nachhaltigerKonsum",
        title: "Nachhaltiger Konsum",
        tasks: [
            {
                id: "14",
                title: "Regional & saisonal einkaufen",
                subtitle: "Lebensmittel aus der Region kaufen, am besten unverpackt auf dem Markt.",
                imageUrl: require("@/assets/images/regional.png"),
            },
            {
                id: "15",
                title: "Second Hand kaufen",
                subtitle: "Gebrauchte Artikel wie Kleidung und Möbel kaufen, um Ressourcen zu schonen.",
                imageUrl: require("@/assets/images/secondHand.png"),
            }
        ]
    }
];


const TasksScreen = () => {

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <Header title="Tasks" />
            <FlashList data={taskGroups} renderItem={({ item }) => (
                <TaskContainer
                    key={item.id}
                    title={item.title}
                    tasks={item.tasks}
                />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
    },
    scroll: {
        paddingVertical: 16,
        gap: 16,
    },
});

export default TasksScreen;
