import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  // Extrapolate,
  Extrapolation,
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
          
          // Width interpolation: active dot is wider, inactive dots are narrow
          const width = interpolate(
            scrollX.value,
            inputRange,
            [7, 14, 7], // Active dot is wider (36), inactive dots are narrow (8)
            Extrapolation.CLAMP
          );
          
          // Opacity interpolation: active dot is fully opaque, inactive dots are dimmed
          const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0.3, 1, 0.3], // Active dot is fully opaque, inactive dots are dimmed
            Extrapolation.CLAMP
          );
          
          // Scale interpolation: active dot is slightly larger
          const scale = interpolate(
            scrollX.value,
            inputRange,
            [0.8, 1, 0.8], // Active dot is slightly larger
            Extrapolation.CLAMP
          );
          
          return {
            width,
            opacity,
            transform: [{ scale }],
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
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 16,
    // paddingHorizontal: 20,
    // paddingVertical: 8,
    // backgroundColor: 'rgba(79, 195, 247, 0.1)', // Subtle blue background
    // borderRadius: 20,
    alignSelf: 'flex-end',
  },
  dot: {
    height: 4,
    borderRadius: 2, // This makes them rectangular with rounded corners
    backgroundColor: "#4FC3F7", // Using your sky_blue color from Colors
    shadowColor: "#4FC3F7",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default ScrollIndicator;