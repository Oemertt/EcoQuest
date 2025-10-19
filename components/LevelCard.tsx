// @ts-nocheck
import { AnimatedProgressBar } from "@/components/progress/AnimatedProgress";
import useUserStore, { userSelector } from "@/store/userStore";
import { Link } from "expo-router";
import { useRef } from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native"; // <--- normales Image hier

const levelImages = {
  1: require('@/assets/images/level1.webp'),
  2: require('@/assets/images/level2.webp'),
  3: require('@/assets/images/level3.webp'),
  4: require('@/assets/images/level4.webp'),
  5: require('@/assets/images/level5.webp'),
};

const levelColors = [
  { progressBarColor: '#a5a5a5', levelTagBg: '#d3d3d3', levelTagColor: '#5a5a5a' },
  { progressBarColor: '#b0c79b', levelTagBg: '#e0f1d3', levelTagColor: '#6c8e4d' },
  { progressBarColor: '#82b05b', levelTagBg: '#c6e3b5', levelTagColor: '#4d6934' },
  { progressBarColor: '#579a32', levelTagBg: '#b3d4a2', levelTagColor: '#3c6e22' },
  { progressBarColor: '#3d881e', levelTagBg: '#8ec775', levelTagColor: '#2b5a15' },
];

const LevelCard = () => {
  const userData = useUserStore(userSelector);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const getLevel = () => {
    const points = userData?.points ?? 0;
    if (points >= 200) return 5;
    if (points >= 160) return 4;
    if (points >= 120) return 3;
    if (points >= 80) return 2;
    return 1;
  };

  const level = getLevel();
  const { progressBarColor, levelTagBg, levelTagColor } = levelColors[level - 1];

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 30,
      bounciness: 10,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 10,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Link href="/modalLevelMap" push asChild>
          <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.Image
              source={levelImages[level]}
              style={[
                styles.image,
                {
                  transform: [{ scale: scaleAnim }],
                },
              ]}
              resizeMode="cover"
            />
          </Pressable>
        </Link>
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
    width: "100%",
    aspectRatio: 1.8,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
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
  },
  progressContainer: {
    marginTop: 0,
  },
});

export default LevelCard;
