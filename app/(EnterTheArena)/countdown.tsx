import * as SystemUI from "expo-system-ui";
import { setStatusBarHidden } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SubTitleText } from "@/components/ui/SubTitleText";
import { TitleText } from "@/components/ui/TitleText";
import { Dimensions, Image, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Redirect, router } from "expo-router";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const countdown = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      router.push("/(EnterTheArena)/workoutVideo");
      return; // Stop execution if count is 0
    }

    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1); // Functional update to get latest value
      console.log(count); // This might still log stale values due to closure
    }, 1000);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks

  }, [count]);

  useEffect(() => {
    setStatusBarHidden(true, "fade"); // Hide status bar
    SystemUI.setBackgroundColorAsync("transparent"); // Hide system UI
    return () => {
      setStatusBarHidden(false, "fade");
      SystemUI.setBackgroundColorAsync("white");
    };
  }, []);

  

  return (
    <View>
      <SubTitleText size={18} mTop={118}>
        Are you <TitleText size={18}>Ready?</TitleText>
      </SubTitleText>
      <Text
        style={{
          color: Colors.light.primary_colors.sky_blue,
          marginTop: pxtoheight(80),
          alignSelf: "center",
          fontFamily: "protest",
          fontSize: pxtowidth(200),
        }}
      >
        {count}
      </Text>
      <Image
        source={require("@/assets/images/clock.png")}
        style={{
          width: pxtowidth(74),
          height: pxtoheight(74),
          alignSelf: "center",
          marginTop: pxtoheight(80),
        }}
      />
      <SubTitleText
        size={18}
        mTop={80}
        style={{ marginBottom: pxtoheight(118) }}
      >
        Turn your <TitleText size={18}>Volume </TitleText> up
      </SubTitleText>
    </View>
  );
};

export default countdown;
