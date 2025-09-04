import TaskDetail from "@/components/TaskDetail";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

const taskdetails = [
    {
        id: "1",
        title: "Licht ausschalten",
        description: "Lerne, wie du mit einfachem Ausschalten Energie sparen kannst.",
        steps: [
            { id: "1", text: "Licht im Wohnzimmer ausschalten" },
            { id: "2", text: "Licht in der Küche ausmachen" },
            { id: "3", text: "Stehlampe vom Strom trennen" },
        ],
        rewardPoints: 10,
        category: "Energy"
    },
    {
        id: "2",
        title: "Stecker ziehen",
        description: "Reduziere den Stromverbrauch, indem du Geräte ganz vom Netz nimmst.",
        steps: [
            { id: "1", text: "Handyladegerät nach Gebrauch ausstecken" },
            { id: "2", text: "Kaffeemaschine nach dem Gebrauch ausschalten und Stecker ziehen" },
            { id: "3", text: "Fernsehgerät oder Konsole über eine Steckerleiste abschalten" },
        ],
        rewardPoints: 15,
        category: "Energy"

    },
    {
        id: "3",
        title: "Digital Detox",
        description: "Weniger Streaming und Surfen spart Strom und entlastet Server.",
        steps: [
            { id: "1", text: "Einen Tag ohne Social Media ausprobieren" },
            { id: "2", text: "Streaming-Zeit pro Woche um eine Stunde reduzieren" },
            { id: "3", text: "Offline-Aktivität wie Spaziergang oder Buchlesen wählen" },
        ],
        rewardPoints: 20,
        category: "Energy"

    },
    {
        id: "4",
        title: "Kurz duschen",
        description: "Spare Wasser und Energie, indem du deine Duschzeit reduzierst.",
        steps: [
            { id: "1", text: "Duschzeit auf 5 Minuten beschränken" },
            { id: "2", text: "Wasser während des Einseifens abstellen" },
            { id: "3", text: "Kalt oder lauwarm duschen probieren" },
        ],
        rewardPoints: 15,
        category: "Water"

    },
    {
        id: "5",
        title: "Wasserhahn zudrehen",
        description: "Vermeide unnötigen Wasserverbrauch im Alltag.",
        steps: [
            { id: "1", text: "Wasser beim Zähneputzen zudrehen" },
            { id: "2", text: "Wasserhahn beim Einseifen der Hände schließen" },
            { id: "3", text: "Wasserhahn prüfen, ob er richtig zugedreht ist" },
        ],
        rewardPoints: 10,
        category: "Water"

    },
    {
        id: "6",
        title: "Regenwasser nutzen",
        description: "Spare Trinkwasser, indem du Regenwasser sammelst.",
        steps: [
            { id: "1", text: "Regenfass im Garten aufstellen" },
            { id: "2", text: "Regenwasser für Pflanzen nutzen" },
            { id: "3", text: "Regenwasser statt Leitungswasser für Autowäsche verwenden" },
        ],
        rewardPoints: 25,
        category: "Water"

    },
    {
        id: "7",
        title: "Fahrrad nutzen",
        description: "Lege kurze Strecken mit dem Rad zurück, um CO₂ zu sparen.",
        steps: [
            { id: "1", text: "Einkauf mit dem Fahrrad statt mit dem Auto erledigen" },
            { id: "2", text: "Täglichen Arbeitsweg mit dem Rad fahren (falls möglich)" },
            { id: "3", text: "Freizeitwege mit dem Rad planen" },
        ],
        rewardPoints: 30,
        category: "Mobility"
    },
    {
        id: "8",
        title: "Öffentliche Verkehrsmittel nutzen",
        description: "Nutze Bus oder Bahn, um CO₂ zu reduzieren.",
        steps: [
            { id: "1", text: "Wochenkarte oder Ticket kaufen" },
            { id: "2", text: "Kurze Fahrten mit Bus statt Auto machen" },
            { id: "3", text: "Fahrgemeinschaft mit Öffis kombinieren" },
        ],
        rewardPoints: 25,
        category: "Mobility"
    },
    {
        id: "9",
        title: "Mülltrennung",
        description: "Sortiere Abfälle richtig, um Recycling zu ermöglichen.",
        steps: [
            { id: "1", text: "Bioabfälle in den Biomüll werfen" },
            { id: "2", text: "Plastik und Verpackungen in die Gelbe Tonne geben" },
            { id: "3", text: "Papier und Glas getrennt entsorgen" },
        ],
        rewardPoints: 20,
        category: "Recycling"
    },
    {
        id: "10",
        title: "Upcycling machen",
        description: "Verwende alte Dinge kreativ neu.",
        steps: [
            { id: "1", text: "Altes Glas als Vase nutzen" },
            { id: "2", text: "T-Shirt in einen Putzlappen umfunktionieren" },
            { id: "3", text: "Alte Möbel neu bemalen oder umbauen" },
        ],
        rewardPoints: 30,
        category: "Recycling"
    },
    {
        id: "11",
        title: "Mehrweg statt Einweg",
        description: "Nutze wiederverwendbare Alternativen.",
        steps: [
            { id: "1", text: "Stofftasche beim Einkauf mitnehmen" },
            { id: "2", text: "Eigene Trinkflasche auffüllen statt Plastikflasche kaufen" },
            { id: "3", text: "Brotdose statt Alufolie oder Plastiktüte nutzen" },
        ],
        rewardPoints: 15,
        category: "Recycling"
    },
    {
        id: "12",
        title: "Gemüse anbauen",
        description: "Pflanze eigenes Gemüse oder Kräuter für frische Mahlzeiten.",
        steps: [
            { id: "1", text: "Tomatensamen in einem Topf einsetzen" },
            { id: "2", text: "Kräuter wie Basilikum oder Petersilie auf der Fensterbank ziehen" },
            { id: "3", text: "Gemüse regelmäßig gießen und pflegen" },
        ],
        rewardPoints: 25,
        category: "Nature"

    },
    {
        id: "13",
        title: "Pflanzen für Natur & Artenvielfalt setzen",
        description: "Unterstütze die Umwelt durch das Pflanzen von Bäumen und Blumen.",
        steps: [
            { id: "1", text: "Bienenfreundliche Blumen im Garten pflanzen" },
            { id: "2", text: "Einen kleinen Baum oder Strauch setzen" },
            { id: "3", text: "Pflanzen regelmäßig pflegen" },
        ],
        rewardPoints: 35,
        category: "Nature"
    },
    {
        id: "14",
        title: "Regional & saisonal einkaufen",
        description: "Kaufe Lebensmittel aus der Region und zur richtigen Jahreszeit.",
        steps: [
            { id: "1", text: "Wochenmarkt in deiner Nähe besuchen" },
            { id: "2", text: "Obst und Gemüse nach Saison kaufen" },
            { id: "3", text: "Unverpackte Lebensmittel bevorzugen" },
        ],
        rewardPoints: 20,
        category: "Consumption"
    },
    {
        id: "15",
        title: "Second Hand kaufen",
        description: "Verwende gebrauchte Artikel und verlängere ihren Lebenszyklus.",
        steps: [
            { id: "1", text: "Second-Hand-Laden besuchen" },
            { id: "2", text: "Online-Plattformen für gebrauchte Kleidung nutzen" },
            { id: "3", text: "Möbel oder Geräte gebraucht kaufen" },
        ],
        rewardPoints: 25,
        category: "Consumption"
    },
];

const TaskDetailScreen = () => {
    const { id } = useLocalSearchParams();
    const taskIndex = parseInt(id as string) - 1;
    const task = taskdetails[taskIndex];
    
    if (!task) {
        return (
            <View style={styles.container}>
            </View>
        );
    }
    
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <TaskDetail
                    title={task.title}
                    description={task.description}
                    steps={task.steps}
                    rewardPoints={task.rewardPoints}
                    category={task.category}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fbfa",
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        marginTop: 16,
    },
    trophyWrapper: {
        marginBottom: 24,
        alignItems: "center",
    },
    trophyText: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "600",
        color: "#f0a500",
    },
});

export default TaskDetailScreen;
