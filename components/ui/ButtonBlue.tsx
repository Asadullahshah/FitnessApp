import { TouchableOpacity, Dimensions, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");
const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface ButtonBlueProps {
  marginT?: number;
  widthB?: number;
  heightB?: number;
  fontH?: number;
  children?: React.ReactNode;
}

export const ButtonBlue: React.FC<ButtonBlueProps> = ({
  marginT = 0,
  widthB = 229,
  heightB = 18,
  fontH = 12,
}) => (
  <TouchableOpacity
    style={{
      width: pxtowidth(widthB),
      height: pxtoheight(heightB),
      alignSelf: "center",
      marginTop: pxtoheight(marginT),
    }}
    onPress={() => router.push("/forgotpass")}
  >
    <Text
      style={{
        width: pxtowidth(229),
        height: pxtoheight(heightB),
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "regular",
        fontSize: pxtowidth(fontH),
        color: Colors.light.primary_colors.sky_blue,
      }}
    >
      Forgot Password?
    </Text>
  </TouchableOpacity>
);
