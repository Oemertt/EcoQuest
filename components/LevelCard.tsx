// @ts-nocheck
import { AnimatedProgressBar } from "@/components/progress/AnimatedProgress";
import useUserStore, { userSelector } from "@/store/userStore";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const levelImages = {
  1: require('@/assets/images/level1.webp'),
  2: require('@/assets/images/level2.webp'),
  3: require('@/assets/images/level3.webp'),
  4: require('@/assets/images/level4.webp'),
  5: require('@/assets/images/level5.webp'),
};

const levelColors = [
  { progressBarColor: '#a5a5a5', levelTagBg: '#d3d3d3', levelTagColor: '#5a5a5a' }, // Level 1
  { progressBarColor: '#b0c79b', levelTagBg: '#e0f1d3', levelTagColor: '#6c8e4d' }, // Level 2
  { progressBarColor: '#82b05b', levelTagBg: '#c6e3b5', levelTagColor: '#4d6934' }, // Level 3
  { progressBarColor: '#579a32', levelTagBg: '#b3d4a2', levelTagColor: '#3c6e22' }, // Level 4
  { progressBarColor: '#3d881e', levelTagBg: '#8ec775', levelTagColor: '#2b5a15' }, // Level 5
];

const LevelCard = () => {
  const userData = useUserStore(userSelector);

  const getLevel = () => {
    const points = userData?.points ?? 0;

    if (points >= 50) return 5;
    if (points >= 40) return 4;
    if (points >= 30) return 3;
    if (points >= 20) return 2;
    return 1;
  };

  const level = getLevel();
  const { progressBarColor, levelTagBg, levelTagColor } = levelColors[level - 1];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={levelImages[level]}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.progressWrapper}>
        <View style={styles.progressContainer}>
          <AnimatedProgressBar
            progress={level / 5}
            progressColor={progressBarColor}
            showPercentage={true}
            percentagePosition="right"
            formatPercentage={() => `Lvl: ${level}`}
            percentageTextStyle={[
              styles.levelTag,
              { backgroundColor: levelTagBg, color: levelTagColor },
            ]}
            width="78%"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1.8,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  progressWrapper: {
    paddingTop: 6,
  },
  levelTag: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontWeight: "600",
    fontSize: 14,
    overflow: "hidden",
  },
  progressContainer: {
    marginTop: 0,
  },
});

export default LevelCard;

