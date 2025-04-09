import * as React from "react";
import { SafeAreaView, View } from "react-native";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props: any) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <Path
        d="M12.3173 7.58579V5.97554C12.3173 4.09079 10.7888 2.56229 8.90406 2.56229C7.01931 2.55404 5.48481 4.07504 5.47656 5.96054V5.97554V7.58579"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7623 16.4372H6.0315C4.461 16.4372 3.1875 15.1645 3.1875 13.5932V10.3765C3.1875 8.80522 4.461 7.53247 6.0315 7.53247H11.7623C13.3328 7.53247 14.6063 8.80522 14.6063 10.3765V13.5932C14.6063 15.1645 13.3328 16.4372 11.7623 16.4372Z"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.89648 11.1519V12.8176"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);
export default SvgComponent;
