import * as React from "react";
import { SafeAreaView, View } from "react-native";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props: any) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        d="M13.9178 6.37598L10.2151 9.38684C9.51549 9.94184 8.53122 9.94184 7.83164 9.38684L4.09766 6.37598"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0901 16.5C15.6245 16.507 17.3327 14.4246 17.3327 11.8653V6.14168C17.3327 3.58235 15.6245 1.5 13.0901 1.5H4.90863C2.37417 1.5 0.666016 3.58235 0.666016 6.14168V11.8653C0.666016 14.4246 2.37417 16.507 4.90863 16.5H13.0901Z"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);
export default SvgComponent;
