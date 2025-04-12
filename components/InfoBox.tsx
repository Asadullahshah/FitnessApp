import { View } from "react-native";
import { SubTitleText } from "./ui/SubTitleText";
import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";

export const InfoBox = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <View>
      <SubTitleText
        style={{ textAlign: "center" }}
        size={14}
        color={Colors.light.primary_colors.mint_green}
      >
        {title}
      </SubTitleText>
      <SubTitleText
        style={{ textAlign: "center" }}
        size={12}
        color={Colors.light.inputText}
      >
        {children}
      </SubTitleText>
    </View>
  );
};
