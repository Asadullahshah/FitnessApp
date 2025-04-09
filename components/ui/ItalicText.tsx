import { Text, StyleSheet, Dimensions, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface ItalicTextProps {
  size?: number;
  mTop?: number;
  color?: string;
  style?: TextStyle;
  children: React.ReactNode;
}

export const ItalicText: React.FC<ItalicTextProps> = ({
  size,
  mTop,
  color,
  style,
  children,
}) => {
  return (
    <Text
      style={[
        styles.infoText,
        {
          color: color ?? Colors.light.inputText,
          fontSize: pxtowidth(size ?? 12),
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
  infoText: {
    textAlign: "center",
    fontFamily: "italic",
  },
});
