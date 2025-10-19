// @ts-nocheck
import TaskCard from "@/components/TaskCard";
import { FlashList } from "@shopify/flash-list";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const tasks = [
    { type: "header", id: "energieSparen", title: "Energie sparen" },
    {
        type: "task",
        id: "1",
        title: "Lichter ausschalten",
        subtitle: "Schalte die Lichter aus, wenn du einen Raum verlässt",
        imageUrl: require("@/assets/images/light.webp"),
    },
    {
        type: "task",
        id: "2",
        title: "Stecker Ziehen",
        subtitle: "Ziehe den Stecker von nicht verwendeten Geräten",
        imageUrl: require("@/assets/images/unplug.webp"),
    },
    {
        type: "task",
        id: "3",
        title: "Digital Detox",
        subtitle: "Weniger Streaming und Surfen – spart Strom und entlastet Server.",
        imageUrl: require("@/assets/images/handy.webp"),
    },

    { type: "header", id: "wasserSparen", title: "Wasser sparen" },
    {
        type: "task",
        id: "4",
        title: "Kurz duschen",
        subtitle: "Zeit unter der Dusche reduzieren, um Wasser und Energie zu sparen.",
        imageUrl: require("@/assets/images/duschen.webp"),
    },
    {
        type: "task",
        id: "5",
        title: "Wasserhahn zudrehen",
        subtitle: "Drehe den Wasserhahn zu, während du Zähne putzt oder dich einseifst.",
        imageUrl: require("@/assets/images/water.webp"),
    },
    {
        type: "task",
        id: "6",
        title: "Regenwasser nutzen",
        subtitle: "Sammle Regenwasser für die Gartenbewässerung.",
        imageUrl: require("@/assets/images/regenwasser.webp"),
    },

    { type: "header", id: "nachhaltigeMobilitaet", title: "Nachhaltige Mobilität" },
    {
        type: "task",
        id: "7",
        title: "Fahrrad nutzen",
        subtitle: "Kurzstrecken zu Fuß oder mit dem Rad zurücklegen, um CO₂ zu sparen.",
        imageUrl: require("@/assets/images/fahrrad.webp"),
    },
    {
        type: "task",
        id: "8",
        title: "Öffis nutzen",
        subtitle: "Nutze öffentliche Verkehrsmittel, um CO₂ zu sparen.",
        imageUrl: require("@/assets/images/oeffis.webp"),
    },

    { type: "header", id: "muellVermeiden", title: "Müll vermeiden" },
    {
        type: "task",
        id: "9",
        title: "Mülltrennung",
        subtitle: "Abfälle richtig sortieren, um Recycling zu ermöglichen.",
        imageUrl: require("@/assets/images/trash.webp"),
    },
    {
        type: "task",
        id: "10",
        title: "Upcycling machen",
        subtitle: "Aus alten Dingen Neues basteln – z. B. Gläser als Aufbewahrung nutzen.",
        imageUrl: require("@/assets/images/upcycling.webp"),
    },
    {
        type: "task",
        id: "11",
        title: "Mehrweg statt Einweg",
        subtitle: "Stoffbeutel, Trinkflaschen und Brotdosen statt Einwegplastik verwenden.",
        imageUrl: require("@/assets/images/reusableBag.webp"),
    },

    { type: "header", id: "naturUndUmwelt", title: "Natur & Umwelt" },
    {
        type: "task",
        id: "12",
        title: "Gemüse anbauen",
        subtitle: "Tomaten, Paprika oder Kräuter selbst anpflanzen – frisch und umweltfreundlich.",
        imageUrl: require("@/assets/images/gemuese.webp"),
    },
    {
        type: "task",
        id: "13",
        title: "Pflanzen für Natur & Artenvielfalt setzen",
        subtitle: "Einen Baum, Blumen oder bienenfreundliche Pflanzen anpflanzen, um das Klima zu schützen und Insekten zu unterstützen.",
        imageUrl: require("@/assets/images/baum.webp"),
    },

    { type: "header", id: "nachhaltigerKonsum", title: "Nachhaltiger Konsum" },
    {
        type: "task",
        id: "14",
        title: "Regional & saisonal einkaufen",
        subtitle: "Lebensmittel aus der Region kaufen, am besten unverpackt auf dem Markt.",
        imageUrl: require("@/assets/images/regional.webp"),
    },
    {
        type: "task",
        id: "15",
        title: "Second Hand kaufen",
        subtitle: "Gebrauchte Artikel wie Kleidung und Möbel kaufen, um Ressourcen zu schonen.",
        imageUrl: require("@/assets/images/secondHand.webp"),
    },
];

const TasksScreen = () => {
    return (
        <View style={styles.container}>
            <FlashList
                data={tasks}
                keyExtractor={(item) => `${item.type}-${item.id}`}
                estimatedItemSize={291}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    if (item.type === "header") {
                        return <Text style={styles.title}>{item.title}</Text>;
                    }
                    return (
                        <TaskCard
                            title={item.title}
                            subtitle={item.subtitle}
                            imageUrl={item.imageUrl}
                            onStart={() => router.push(`/(tabs)/(tasks)/${item.id}`)}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#101914",
        marginBottom: 18,
        marginTop: 20,
        paddingHorizontal: 3,
    },
    scroll: {
        paddingVertical: 16,
        gap: 16,
    },
});

export default TasksScreen;
