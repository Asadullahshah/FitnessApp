import { Colors } from "@/constants/Colors";
import { TitleText } from "./TitleText";
import { View, Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

export const Header = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        position: "absolute",
        // top: 0,
        // height: pxtoheight(112),
        width: "100%",
        backgroundColor: Colors.light.secondary_colors.dark_navy,
        justifyContent: "center",
        alignItems: "center",
        // zIndex: 99999,
      }}
    >
      <TitleText
        // style={{
        //   marginTop:
        //     Platform.OS == "android"
        //       ? (StatusBar.currentHeight || 0) + pxtoheight(12)
        //       : pxtoheight(12),
        // }}
        size={16}
        mTop={0}
      >
        {title}
      </TitleText>
    </View>
  );
};
