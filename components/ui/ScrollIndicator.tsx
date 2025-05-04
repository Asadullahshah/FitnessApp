import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

interface ScrollIndicatorProps {
  scrollX: Animated.SharedValue<number>;
  itemCount: number;
  itemWidth: number;
}

const ScrollIndicator = ({ scrollX, itemCount, itemWidth }: ScrollIndicatorProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: itemCount }).map((_, i) => {
        const animatedDotStyle = useAnimatedStyle(() => {
          const inputRange = [(i - 1) * itemWidth, i * itemWidth, (i + 1) * itemWidth];
          const width = interpolate(
            scrollX.value,
            inputRange,
            [8, 24, 8],
            Extrapolate.CLAMP
          );
          return {
            width,
          };
        });

        return (
          <Animated.View key={i} style={[styles.dot, animatedDotStyle]} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4FD1FF", // cyan-ish blue
  },
});

export default ScrollIndicator;