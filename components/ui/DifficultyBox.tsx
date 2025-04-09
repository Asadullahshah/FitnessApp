import React, { useState } from "react";
import { View, ViewStyle, Dimensions, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
import { SubTitleText } from "./SubTitleText";
import { DotIconSvg } from "./DotIconSvg";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface DifficultyBoxProps {
  style?: ViewStyle;
  difficulty: number;
  setDifficulty: React.Dispatch<React.SetStateAction<number>>;
}

export const DifficultyBox: React.FC<DifficultyBoxProps> = ({
  style,
  difficulty,
  setDifficulty,
}) => {
  // const [difficulty, setDifficulty] = useState(1);
  console.log(difficulty);
  return (
    <View
      style={[
        {
          flexDirection: "row",
          gap: pxtowidth(12),
          alignSelf: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          gap: pxtowidth(12),
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <SubTitleText size={12}>Difficulty</SubTitleText>
        <Pressable
          style={{
            height: pxtoheight(31),
            width: pxtowidth(74),
            flexDirection: "row",
            gap: pxtowidth(2),
            alignSelf: "center",
            justifyContent: "center",
            borderRadius: pxtowidth(8),
          }}
          onPress={() => {
            if (difficulty >= 3) setDifficulty(1);
            else setDifficulty(difficulty + 1);
          }}
        >
          <View
            style={{
              borderRadius: pxtowidth(8),
              height: pxtoheight(31),
              width: pxtowidth(74),
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              backgroundColor: Colors.light.secondary_colors.dark_gray,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: pxtowidth(11),
                marginVertical: pxtoheight(10),
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                gap: pxtowidth(8),
              }}
            >
              <DotIconSvg
                color={
                  difficulty ? Colors.light.primary_colors.sky_blue : "#204A62"
                }
              />
              <DotIconSvg
                color={
                  difficulty >= 2
                    ? Colors.light.primary_colors.sky_blue
                    : "#204A62"
                }
              />
              <DotIconSvg
                color={
                  difficulty === 3
                    ? Colors.light.primary_colors.sky_blue
                    : "#204A62"
                }
              />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
