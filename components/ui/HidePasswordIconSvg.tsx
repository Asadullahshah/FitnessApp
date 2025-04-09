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
        d="M7.3207 10.7753C6.88945 10.3448 6.62695 9.75975 6.62695 9.1035C6.62695 7.78875 7.68595 6.729 8.99995 6.729C9.6502 6.729 10.2487 6.99225 10.6725 7.42275"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3285 9.52417C11.1545 10.4917 10.3925 11.2552 9.42578 11.4307"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.99125 13.1042C3.801 12.1697 2.793 10.8047 2.0625 9.10298C2.8005 7.39373 3.81525 6.02123 5.013 5.07923C6.20325 4.13723 7.5765 3.62573 9 3.62573C10.4318 3.62573 11.8043 4.14473 13.002 5.09348"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5866 6.74316C15.1026 7.42866 15.5563 8.21991 15.9381 9.10266C14.4628 12.5204 11.8558 14.5792 9.00056 14.5792C8.35331 14.5792 7.71506 14.4742 7.10156 14.2694"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9164 3.18726L3.08594 15.0178"
        stroke="#F2F2F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);
export default SvgComponent;
