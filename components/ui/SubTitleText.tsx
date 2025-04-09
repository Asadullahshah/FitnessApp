import { Text, StyleSheet, Dimensions, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface SubTitleTextProps {
  size?: number;
  mTop?: number;
  color?: string;
  style?: TextStyle;
  children?: React.ReactNode;
}

export const SubTitleText: React.FC<SubTitleTextProps> = ({
  size,
  mTop,
  color,
  style,
  children,
}) => {
  return (
    <Text
      style={[
        styles.subTitle,
        {
          color: color ?? "#B6B4C1",
          fontSize: pxtowidth(size ?? 16),
          marginTop: pxtoheight(mTop ?? 0),
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "regular",
  },
});
