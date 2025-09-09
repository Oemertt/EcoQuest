// app/YouTubeScreen.tsx
import { Dimensions, StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YouTubeScreen() {
    const screenWidth = Dimensions.get("window").width;
    const videoHeight = screenWidth * (9 / 16); // 16:9 Verhältnis

  return (
    <View style={styles.wrapper}>
      <YoutubePlayer
        width="100%"
        height={videoHeight-19}
        videoId="zVz1m_Bm2Uo"   // nur die Video-ID, nicht die ganze URL
        initialPlayerParams={{
            modestbranding: true, // entfernt Logo
            rel: false,           // keine verwandten Videos
            controls: true,       // normale Player Controls
            showinfo: false       // früher für Titel, heute aber deprecated
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      borderRadius: 12,     // Rundung
      overflow: "hidden",   // zwingend notwendig!
      backgroundColor: "black", // damit die Ecken sauber sind
      marginBottom: 20,
    },
  });
