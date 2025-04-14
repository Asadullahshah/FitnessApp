import { pxToHeight, pxToWidth } from "@/utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SubTitleText } from "./ui/SubTitleText";
import { Colors } from "@/constants/Colors";

export const Options = ({
  name,
  children,
  IconR,
  IconL,
}: {
  name: string;
  children?: React.ReactNode;
  IconR?: React.ElementType;
  IconL: React.ElementType;
}) => {
  return (
    <View
      style={[styles.bar, children ? { height: pxToHeight(40) } : undefined]}
    >
      <IconL />
      <View style={styles.optionsTextContainer}>
        <SubTitleText size={14} color={Colors.light.primary_colors.soft_white}>
          {name}
        </SubTitleText>
        {children && (
          <SubTitleText mTop={2} size={12} color="#9E9E9E">
            {children}
          </SubTitleText>
        )}
      </View>
      {IconR && (
        <View style={styles.iconRight}>
          <IconR />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    width: pxToWidth(342),
    height: pxToHeight(20),
    alignItems: "center",
  },
  iconRight: {
    position: "absolute",
    right: 0,
  },
  optionsTextContainer: { flexDirection: "column", marginLeft: pxToWidth(16) },
});
