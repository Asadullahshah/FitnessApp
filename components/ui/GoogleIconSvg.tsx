import * as React from "react";
import { SafeAreaView, View, Text, Dimensions } from "react-native";
import Svg, { Path, ClipPath, Defs, G, Rect } from "react-native-svg";

const { width, height } = Dimensions.get("window");
const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const SvgComponent = (props: any) => (
  <View>
    <View
      style={{
        height: 62,
        paddingTop: 19,
        paddingRight: 19.5,
        paddingBottom: 19,
        paddingLeft: 18.5,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch", // Makes it take full width of the parent
        borderRadius: 31,
        borderWidth: 1,
        borderColor: "#A5D6A7", // Converted from var(--Color-2, #A5D6A7)
        marginBottom: 12,
      }}
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
      >
        <G clipPath="url(#clip0_1_13929)">
          <Path
            d="M24.2663 12.2765C24.2663 11.4608 24.2001 10.6406 24.059 9.83813H12.7402V14.4591H19.222C18.953 15.9495 18.0888 17.2679 16.8233 18.1056V21.104H20.6903C22.9611 19.014 24.2663 15.9274 24.2663 12.2765Z"
            fill="#4285F4"
          />
          <Path
            d="M12.7391 24.0008C15.9756 24.0008 18.705 22.9382 20.6936 21.1039L16.8266 18.1055C15.7507 18.8375 14.3618 19.252 12.7435 19.252C9.61291 19.252 6.95849 17.1399 6.00607 14.3003H2.01562V17.3912C4.05274 21.4434 8.20192 24.0008 12.7391 24.0008Z"
            fill="#34A853"
          />
          <Path
            d="M6.00277 14.3002C5.50011 12.8099 5.50011 11.196 6.00277 9.70569V6.61475H2.01674C0.314734 10.0055 0.314734 14.0004 2.01674 17.3912L6.00277 14.3002Z"
            fill="#FBBC04"
          />
          <Path
            d="M12.7391 4.74966C14.4499 4.7232 16.1034 5.36697 17.3425 6.54867L20.7685 3.12262C18.5991 1.0855 15.7198 -0.034466 12.7391 0.000808666C8.20192 0.000808666 4.05274 2.55822 2.01562 6.61481L6.00166 9.70575C6.94967 6.86173 9.6085 4.74966 12.7391 4.74966Z"
            fill="#EA4335"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_13929">
            <Rect
              width={24}
              height={24}
              fill="white"
              transform="translate(0.5)"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
    <Text
      style={{
        alignSelf: "stretch", // Makes it take full width inside a flex parent
        color: "#9E9E9E", // Converted from var(--Grey-1, #9E9E9E)
        textAlign: "center",
        fontFamily: "regular", // Ensure it's loaded via expo-font if custom
        fontSize: 14,
      }}
    >
      Google
    </Text>
  </View>
);
export default SvgComponent;
