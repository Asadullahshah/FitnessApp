import {
  Alert,
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Modal
} from "react-native";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import BackIconSvg from "@/components/ui/BackIconSvg";
import OTPInput from "@/components/ui/OTPInput";
import { Keyboard } from "react-native";
import { ButtonRed } from "@/components/ui/ButtonRed";
import VerifiedBadgeIconSvg from "@/components/ui/LoadingIconSvg"
import LoadingModal from "@/components/LoadingModal";
import { supabase } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");
const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

type credentials = {
  phone: string | string[];
  token: string;
  type: string;
  email?: undefined;
} | {
  email: string | string[];
  token: string;
  type: string;
  phone?: undefined;
}

const index = () => {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]); // Four boxes
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null); // Track focused input
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { method, cred } = useLocalSearchParams();

  // const onOtpComplete = () => {
  //   if (digits.every((digit) => digit !== "")) {
  //     setIsLoading(true);
  //     setIsDisabled(true);
  //     Keyboard.dismiss();
  //     console.log("All digits are filled");
  //     // Simulate an async operation
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       setIsDisabled(false);
  //       router.push("/(Login)");
  //       // Continue with the next steps
  //     }, 2000);
  //   }
  // };

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

  const verifyOTP = async () => {
    const username = await AsyncStorage.getItem("username");
    const gender = await AsyncStorage.getItem("gender");
    if (digits.every((digit) => digit !== "")) {
      setIsLoading(true);
      setIsDisabled(true);
      Keyboard.dismiss();
      console.log("All digits are filled");
      
      try {
        let response;
    
        if (method === "true") {
          response = await supabase.auth.verifyOtp({
            phone: `${cred}`,
            token: digits.join(""),
            type: "sms",
          });
        } else {
          response = await supabase.auth.verifyOtp({
            email: `${cred}`,
            token: digits.join(""),
            type: "email",
          });
        }
    
        const { data: { session }, error } = response;
        console.log("Session =========:", session);
        if(session) {
           // Get the authenticated user's ID
        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError || !userData?.user) {
          Alert.alert("Error", "Failed to fetch user ID.");
          return;
        }

        const userId = userData.user.id; // UUID

        // Insert username & gender into users table
        const { error: insertError } = await supabase.from("users").insert([
          { id: userId, username, gender },
        ]);

        if (insertError) {
          console.error("Database Insert Error:", insertError.message);
          Alert.alert("Database Error", insertError.message);
          return;
        }
          setIsLoading(false);
          router.replace("/(tabs)"); 
        }
        if (error) {
          console.error("OTP Verification Error:", error.message);
          Alert.alert("Verification Failed", error.message);
        } else {
          Alert.alert("Success", "OTP Verified Successfully!");
        }
    
      } catch (err) {
        console.error("Unexpected Error:", err);
        Alert.alert("Error", "Something went wrong.");
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading} // No need for {isLoading && ...}, 'visible' controls it
        onRequestClose={() => setIsLoading(false)} // Ensures proper closing
      >
        <LoadingModal />
      </Modal>

      <View style={styles.carouselBar}>
        <Pressable
          style={{ width: pxtowidth(32), height: pxtoheight(32) }}
          onPress={() => router.back()}
        >
          <BackIconSvg />
        </Pressable>
      </View>
      <Text style={styles.title}>
        Verify your {method === "true" ? "Number" : "Email"}
      </Text>
      <Text style={styles.subTitle}>
        We sent a code to{" "}
        {cred}{" "}
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
          heightB={24}
          widthB={310}
          marginT={42}
          onPress={() => verifyOTP()}
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
  verificationLoadingContainer: {
    width: pxtowidth(235.64),
    height: pxtowidth(206),
    borderRadius: pxtowidth(21),
    borderWidth: 1,
    borderColor: Colors.light.primary_colors.sky_blue,
    backgroundColor: Colors.light.secondary_colors.dark_navy,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: pxtoheight(185.6),
    zIndex: 99,
  },
  verificationText: {
    color: Colors.light.primary_colors.coral_red,
    textAlign: "center",
    fontFamily: "regular",
    fontSize: pxtowidth(18), // 1.125rem (assuming base 16px, 1rem = 16px)
    marginTop: pxtoheight(93),
  },
});
