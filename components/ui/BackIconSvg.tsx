import * as React from "react";
import { SafeAreaView, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { pxToWidth, pxToHeight } from "@/utils";

const SvgComponent = (props: any) => (
  <View
    style={{
      width: pxToWidth(32),
      height: pxToWidth(32),
      padding: pxToWidth(4),
      alignItems: "center",
      // gap: pxToWidth(10),
      flexShrink: 0,
      borderRadius: 8,
      backgroundColor: "#122435",
    }}
  >
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={pxToWidth(24)}
      height={pxToWidth(24)}
      fill="none"
      {...props}
      viewBox={`0 0 ${pxToWidth(24)} ${pxToWidth(24)}`}
      style={{
        flexShrink: 0,
      }}
    >
      <Path
        stroke="#4FC3F7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 6C15 6 9 10.419 9 12C9 13.581 15 18 15 18"
      />
    </Svg>
  </View>
);
export default SvgComponent;
