import { Text, StyleSheet, Dimensions, TextStyle, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { SubTitleText } from "./SubTitleText";

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

export const BottomText: React.FC<SubTitleTextProps> = ({
  size,
  mTop,
  color,
  style,
  children,
}) => {
  return (
    <View style={styles.signUpContainer}>
      <SubTitleText>I will do this, but </SubTitleText>
      <Text
        style={[
          styles.singUpLink,
          {
            color: Colors.light.primary_colors.coral_red,
          },
        ]}
      >
        Later
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    paddingVertical: pxtoheight(10),
    backgroundColor: Colors.light.background,
    width: "100%",
    marginTop: pxtoheight(157),
  },
  singUpLink: {
    fontFamily: "semiBold",
    fontSize: pxtowidth(14),
  },
});
