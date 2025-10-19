// @ts-nocheck
import useUserStore, { userSelector } from "@/store/userStore";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, View } from "react-native";

const AnimatedBadge = ({ href, image, unlocked }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
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

  const badges = [
    {
      id: "dschungelkrieger",
      href: "/modal?badgeId=dschungelkrieger",
      image: require("@/assets/images/dschungelkrieger.webp"),
      unlocked: userData?.natureBadge,
    },
    {
      id: "aquaman",
      href: "/modal?badgeId=aquaman",
      image: require("@/assets/images/aquaman.webp"),
      unlocked: userData?.waterBadge,
    },
    {
      id: "energiesparmodus",
      href: "/modal?badgeId=energiesparmodus",
      image: require("@/assets/images/energiesparmodus.webp"),
      unlocked: userData?.energyBadge,
    },
    {
      id: "muellheld",
      href: "/modal?badgeId=muellheld",
      image: require("@/assets/images/MuellBadge.webp"),
      unlocked: userData?.recyclingBadge,
    },
    {
      id: "mobilitaet",
      href: "/modal?badgeId=mobilitaet",
      image: require("@/assets/images/MobilitaetBadge.webp"),
      unlocked: userData?.mobilityBadge,
    },
    {
      id: "konsum",
      href: "/modal?badgeId=konsum",
      image: require("@/assets/images/KonsumBadge.webp"),
      unlocked: userData?.consumptionBadge,
    },
  ];

  return (
    <View style={styles.listContainer}>
      <FlashList
        data={badges}
        renderItem={({ item }) => (
          <AnimatedBadge
            href={item.href}
            image={item.image}
            unlocked={item.unlocked}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        estimatedItemSize={120}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flashListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 120,
  },
  flashListContent: {
    paddingHorizontal: 4,
  },
  badgeWrapper: {
    borderRadius: 50,
    overflow: "hidden",
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
