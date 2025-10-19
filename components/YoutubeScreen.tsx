import { FlashList } from "@shopify/flash-list";
import { Dimensions, StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoCarousel() {
  // Beispielvideos
  const videos = [
    { id: "1", videoId: "FoMzyF_B7Bg" },
    { id: "2", videoId: "zVz1m_Bm2Uo" },
    { id: "3", videoId: "xwLmHtwDv2k" },
  ];

  const screenWidth = Dimensions.get("window").width;
  const videoWidth = screenWidth * 0.8; // 80% der Bildschirmbreite
  const videoHeight = videoWidth * (9 / 16); // 16:9 Verhältnis

  // Render-Funktion für einzelne Videos
  const renderItem = ({ item }: { item: typeof videos[0] }) => (
    <View style={[styles.videoWrapper, { width: videoWidth, height: videoHeight }]}>
      <YoutubePlayer
        width={videoWidth}
        height={videoHeight}
        videoId={item.videoId}
        initialPlayerParams={{
          modestbranding: true,
          rel: false, // keine verwandten Videos am Ende
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={videos}
        renderItem={renderItem}
        estimatedItemSize={130}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 4 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  videoWrapper: {
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 16,
    backgroundColor: "#000", // sauberer Rand für Player-Ecken
    marginBottom: 28,
  },
});

