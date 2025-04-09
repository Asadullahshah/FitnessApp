import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import BackIconSvg from "@/components/ui/BackIconSvg";
import OTPInput from "@/components/ui/OTPInput";
import { Keyboard } from "react-native";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const { width, height } = Dimensions.get("window");
const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const index = () => {
  const [digits, setDigits] = useState(["", "", "", ""]); // Four boxes
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null); // Track focused input
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { method } = useLocalSearchParams();

  const onOtpComplete = () => {
    if (digits.every((digit) => digit !== "")) {
      setIsLoading(true);
      setIsDisabled(true);
      Keyboard.dismiss();
      console.log("All digits are filled");
      // Simulate an async operation
      setTimeout(() => {
        // setIsLoading(false);
        // setIsDisabled(false);
        // Continue with the next steps
      }, 2000);
    }
  };

  useEffect(() => {
    if (digits.every((digit) => digit !== "")) {
      setIsDisabled(false);
      Keyboard.dismiss();
      // router.push("/newpass");
    } else {
      setIsDisabled(true);
    }
    console.log(digits);
  }, [digits]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselBar}>
        <Pressable
          style={{ width: pxtowidth(32), height: pxtoheight(32) }}
          onPress={() => router.back()}
        >
          <BackIconSvg />
        </Pressable>
      </View>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subTitle}>
        We sent a code to{" "}
        {method === "true" ? "(555) 555-1234" : "colebrown@gmail.com"}{" "}
      </Text>
      <OTPInput
        digits={digits}
        setDigits={setDigits}
        focusedIndex={focusedIndex}
        setFocusedIndex={setFocusedIndex}
      />
      <View
        style={{
          position: "absolute",
          bottom: pxtoheight(76),
          alignSelf: "center",
        }}
      >
        <Text style={styles.privacyText}>
          Didn't receive?{" "}
          <Text
            style={[
              styles.privacyText,
              {
                color: Colors.light.primary_colors.sky_blue,
                fontFamily: "regular",
              },
            ]}
          >
            Resend code in 00:08{" "}
          </Text>
        </Text>
        <ButtonRed
          opacityB={isDisabled ? 0.5 : 1}
          disabled={isDisabled}
          marginT={42}
          onPress={() => router.push("/newpass")}
        >
          Continue
        </ButtonRed>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:
      Platform.OS == "android" ? (StatusBar.currentHeight || 0) + 12 : 12,
  },
  carouselBar: {
    width: pxtowidth(342),
    marginLeft: pxtowidth(24),
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: {
    width: "100%",
    height: pxtoheight(36),
    marginTop: pxtoheight(16),
    color: "#FF6F61",
    fontFamily: "bold",
    fontSize: pxtowidth(24),
    lineHeight: pxtoheight(36),
    textAlign: "center",
  },
  subTitle: {
    width: "100%",
    color: "#B6B4C1",
    marginTop: pxtoheight(16),
    textAlign: "center",
    fontFamily: "regular",
    fontSize: pxtowidth(16),
  },
  privacyText: {
    color: "#B6B4C1",
    textAlign: "center",
    fontFamily: "regular",
    fontSize: pxtowidth(12),
  },
  button: {
    width: pxtowidth(342),
    height: pxtoheight(48),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "linear-gradient(90deg, #FF6F61 5%, #99433A 87.61%)",
    boxShadow: "1px 4px 25px 5px rgba(255, 111, 97, 0.25)",
    paddingVertical: pxtoheight(12),
    paddingHorizontal: pxtowidth(15),
    borderRadius: pxtowidth(12),
  },
  buttonText: {
    color: Colors.light.primary_colors.soft_white,
    fontFamily: "regular",
    fontSize: pxtowidth(18),
  },
});
