import { Text, StyleSheet, Dimensions, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface TitleTextProps {
  size?: number;
  mTop?: number;
  color?: string;
  style?: TextStyle;
  children: React.ReactNode;
}

export const TitleText: React.FC<TitleTextProps> = ({
  size,
  mTop,
  color,
  style,
  children,
}) => {
  return (
    <Text
      style={[
        styles.title,
        {
          color: color ?? Colors.light.primary_colors.coral_red,
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
  title: {
    fontFamily: "bold",
    lineHeight: pxtoheight(36),
    // textAlign: "center",
    // alignSelf: "center",
  },
});
