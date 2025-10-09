// @ts-nocheck
import useUserStore, { userSelector } from "@/store/userStore";
import * as Haptics from 'expo-haptics';
import { Link } from "expo-router";
import { useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, View } from "react-native";

const AnimatedBadge = ({ href, image, unlocked }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.spring(scaleAnim, {
      toValue: 0.9,
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
    <Link href={href} push asChild>
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Animated.View
          style={[
            styles.badgeWrapper,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <Image
            source={image}
            style={unlocked ? styles.badgeImage : styles.locked}
          />
        </Animated.View>
      </Pressable>
    </Link>
  );
};

const Badges = () => {
  const userData = useUserStore(userSelector);

  return (
    <View style={styles.container}>
      <AnimatedBadge
        href="/modal?badgeId=dschungelkrieger"
        image={require("@/assets/images/dschungelkrieger.webp")}
        unlocked={userData?.natureBadge}
      />
      <AnimatedBadge
        href="/modal?badgeId=aquaman"
        image={require("@/assets/images/aquaman.webp")}
        unlocked={userData?.waterBadge}
      />
      <AnimatedBadge
        href="/modal?badgeId=energiesparmodus"
        image={require("@/assets/images/energiesparmodus.webp")}
        unlocked={userData?.energyBadge}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  badgeWrapper: {
    borderRadius: 50,
    overflow: "hidden", // damit Ecken rund bleiben beim Skalieren
  },
  badgeImage: {
    width: 100,
    height: 100,
    contentFit: "contain",
  },
  locked: {
    width: 100,
    height: 100,
    contentFit: "contain",
    opacity: 0.3,
  },
});

export default Badges;
