import { StyleSheet, Dimensions, Pressable, Text } from "react-native";
import BackIconSvg from "@/components/ui/BackIconSvg";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");
const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface ButtonRedProps {
  marginT?: number;
  widthB?: number;
  heightB?: number;
}

export const ButtonBack: React.FC<ButtonRedProps> = ({
  marginT = 0,
  widthB = 32,
  heightB = 32,
}) => (
  <Pressable
    style={{
      marginTop: pxtoheight(marginT),
      width: pxtowidth(widthB),
      height: pxtoheight(heightB),
    }}
    onPress={() => router.back()}
  >
    <BackIconSvg />
  </Pressable>
);
