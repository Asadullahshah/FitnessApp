import * as React from "react";
import { View, Dimensions, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface FavIconSvgProps {
  style?: ViewStyle;
}

export const FavIconSvg: React.FC<FavIconSvgProps> = ({ style }) => (
  <View
    style={[
      {
        alignSelf: "center",
        backgroundColor: "#122435",
        width: pxtowidth(32),
        height: pxtoheight(32),
        justifyContent: "center",
        borderRadius: pxtowidth(8),
      },
      style,
    ]}
  >
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ alignSelf: "center" }}
    >
      <Path
        d="M12.2211 15.366L12.2216 15.3655C12.4605 15.1774 12.7044 14.9895 12.9504 14.8C13.9976 13.9932 15.0827 13.1573 15.9777 12.1496C17.0658 10.9245 17.8327 9.48478 17.8327 7.61499C17.8327 5.77622 16.7933 4.22711 15.3643 3.57366C13.967 2.93466 12.1066 3.11554 10.3596 4.93087L9.99935 5.30523L9.63908 4.93087C7.89202 3.11548 6.03164 2.93425 4.63429 3.57297C3.20542 4.2261 2.16602 5.77496 2.16602 7.61416C2.16602 9.48434 2.93307 10.924 4.02132 12.1493C4.91482 13.1553 5.99752 13.9901 7.04286 14.7961C7.29078 14.9872 7.53659 15.1767 7.77729 15.3665M12.2211 15.366L7.77729 15.3665M12.2211 15.366C11.7842 15.7111 11.3865 16.0201 11.001 16.2454C10.6153 16.4708 10.2892 16.5833 9.99935 16.5833C9.70966 16.5833 9.38351 16.4707 8.99768 16.2452M12.2211 15.366L8.99768 16.2452M7.77729 15.3665C8.2144 15.711 8.61206 16.0198 8.99768 16.2452M7.77729 15.3665L8.99768 16.2452"
        stroke="#FF6F61"
      />
    </Svg>
  </View>
);
