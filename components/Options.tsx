import { pxToHeight, pxToWidth } from "@/utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SubTitleText } from "./ui/SubTitleText";
import { Colors } from "@/constants/Colors";

export const Options = ({
  name,
  IconR,
  IconL,
}: {
  name: string;
  IconR: React.ElementType;
  IconL: React.ElementType;
}) => {
  return (
    <View style={[styles.bar]}>
      <IconL />
      <SubTitleText
        style={styles.nameText}
        size={14}
        color={Colors.light.primary_colors.soft_white}
      >
        {name}
      </SubTitleText>
      <View style={styles.iconRight}>
        <IconR />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    width: pxToWidth(342),
    height: pxToHeight(20),
  },
  nameText: {
    marginLeft: pxToWidth(16),
  },
  iconRight: {
    position: "absolute",
    right: 0,
  },
});
