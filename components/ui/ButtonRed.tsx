import {
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
  PressableProps,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");
const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface ButtonRedProps {
  onPress?: () => void;
  disabled?: boolean;
  marginT?: number;
  widthB?: number;
  heightB?: number;
  padV?: number;
  padH?: number;
  fontH?: number;
  opacityB?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export const ButtonRed: React.FC<ButtonRedProps> = ({
  onPress,
  marginT = 0,
  widthB = 342,
  heightB = 48,
  padV = 12,
  padH = 16,
  fontH = 18,
  opacityB,
  children,
  style,
  ...props
}) => (
  <Pressable style={style} onPress={onPress}>
    <LinearGradient
      colors={["#FF6F61", "#99433A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[
        styles.button,
        {
          width: pxtowidth(widthB),
          paddingVertical: pxtoheight(padV),
          paddingHorizontal: pxtowidth(padH),
          marginTop: pxtoheight(marginT),
        },
      ]}
    >
      <Text style={[styles.buttonText, { fontSize: pxtowidth(fontH) }]}>
        {children}
      </Text>
    </LinearGradient>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `linear-gradient(90deg, ${Colors.light.primary_colors.coral_red} 5%, #99433A 87.61%)`,
    boxShadow: "1px 4px 25px 5px rgba(255, 111, 97, 0.25)",
    borderRadius: pxtowidth(12),
  },
  buttonText: {
    color: "#fff",
    fontFamily: "regular",
  },
});
