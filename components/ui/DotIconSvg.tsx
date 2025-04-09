import { Colors } from "@/constants/Colors";
import * as React from "react";
import { ViewStyle, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface DotIconSvgProps {
  color?: string;
  style?: ViewStyle;
  size?: number;
}

export const DotIconSvg: React.FC<DotIconSvgProps> = ({
  color,
  style,
  size,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${pxtowidth(10)}`}
    height={`${pxtowidth(11)}`}
    viewBox="0 0 10 11"
    fill="none"
    style={style}
  >
    <Circle
      cx="5"
      cy="5.5"
      r="5"
      fill={color ?? Colors.light.primary_colors.sky_blue}
    />
  </Svg>
);
