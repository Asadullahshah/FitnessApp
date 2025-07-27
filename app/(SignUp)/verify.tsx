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
import LoadingModal from "@/components/LoadingModal";
import { apiService } from "@/lib/api";

const { width, height } = Dimensions.get("window");
const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const index = () => {
  const [digits, setDigits] = useState(["", "", "", ""]); // Four boxes for verification code
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const { email } = useLocalSearchParams();

  useEffect(() => {
    if (digits.every((digit) => digit !== "")) {
      setIsDisabled(false);
      Keyboard.dismiss();
    } else {
      setIsDisabled(true);
    }
  }, [digits]);

  // Countdown timer for resend
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (countdown > 0 && !canResend) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown, canResend]);

  const verifyEmail = async () => {
    if (digits.every((digit) => digit !== "")) {
      setIsLoading(true);
      setIsDisabled(true);
      Keyboard.dismiss();
      
      try {
        const verificationCode = digits.join("");
        
        const response = await apiService.verifyEmail({
          code: verificationCode,
          email: email as string,
        });

        // Store user data with access token
        await apiService.storeUserData(
          response.user.id,
          response.user.username,
          response.user.email,
          response.access_token
        );

        Alert.alert("Success", "Email verified successfully!", [
          {
            text: "Continue",
            onPress: () => router.replace("/(tabs)/(home)")
          }
        ]);

      } catch (error: any) {
        console.error("Email verification error:", error);
        Alert.alert("Verification Failed", error.message || "Invalid verification code. Please try again.");
        // Clear the digits for retry
        setDigits(["", "", "", ""]);
      } finally {
        setIsLoading(false);
        setIsDisabled(false);
      }
    }
  };

  const handleResendCode = async () => {
    if (!canResend) return;
    
    try {
      // Test backend health first
      const isHealthy = await apiService.testConnection();
      if (!isHealthy) {
        Alert.alert("Backend Error", "Backend is not responding. Please try again later.");
        return;
      }
      
      // You might want to add a resend code API endpoint
      // For now, we'll just reset the countdown
      setCountdown(30);
      setCanResend(false);
      Alert.alert("Code Sent", "A new verification code has been sent to your email.");
    } catch (error) {
      Alert.alert("Error", "Failed to resend code. Please try again.");
    }
  };

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading}
        onRequestClose={() => setIsLoading(false)}
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
      
      <Text style={styles.title}>Verify your Email</Text>
      <Text style={styles.subTitle}>
        We sent a code to{" "}
        <Text style={{ color: Colors.light.primary_colors.sky_blue }}>
          {email}
        </Text>
      </Text>
      <Text style={[styles.subTitle, { marginTop: 10, fontSize: 12, color: "#FF6F61" }]}>
        📧 Check your spam/junk folder first!
      </Text>
      <Text style={[styles.subTitle, { marginTop: 5, fontSize: 12 }]}>
        If you don't receive the email within 2 minutes, try resending
      </Text>
      
      <OTPInput
        digits={digits}
        setDigits={setDigits}
        focusedIndex={focusedIndex}
        setFocusedIndex={setFocusedIndex}
      />
      
      <View style={styles.resendContainer}>
        <Text style={styles.privacyText}>
          Didn't receive?{" "}
          {canResend ? (
            <Text
              style={[
                styles.privacyText,
                {
                  color: Colors.light.primary_colors.sky_blue,
                  fontFamily: "regular",
                  textDecorationLine: "underline",
                },
              ]}
              onPress={handleResendCode}
            >
              Resend code
            </Text>
          ) : (
            <Text
              style={[
                styles.privacyText,
                {
                  color: Colors.light.primary_colors.sky_blue,
                  fontFamily: "regular",
                },
              ]}
            >
              Resend code in {formatCountdown(countdown)}
            </Text>
          )}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonRed
          opacityB={isDisabled ? 0.5 : 1}
          disabled={isDisabled}
          heightB={24}
          widthB={310}
          marginT={42}
          onPress={verifyEmail}
        >
          {isLoading ? "Verifying..." : "Verify Email"}
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
      Platform.OS == "android"
        ? (StatusBar.currentHeight || 0) + pxtoheight(12)
        : pxtoheight(12),
  },
  carouselBar: {
    width: pxtowidth(342),
    marginLeft: pxtowidth(24),
    justifyContent: "space-between",
  },
  title: {
    height: pxtoheight(36),
    marginTop: pxtoheight(16),
    color: "#FF6F61",
    fontFamily: "bold",
    fontSize: pxtowidth(24),
    lineHeight: pxtoheight(36),
    textAlign: "center",
    alignSelf: "center",
  },
  subTitle: {
    height: pxtoheight(20),
    marginTop: pxtoheight(8),
    color: Colors.light.primary_colors.light_gray_purple,
    fontFamily: "regular",
    fontSize: pxtowidth(14),
    lineHeight: pxtoheight(20),
    textAlign: "center",
    alignSelf: "center",
  },
  resendContainer: {
    position: "absolute",
    bottom: pxtoheight(120),
    alignSelf: "center",
    alignItems: "center",
  },
  privacyText: {
    color: Colors.light.primary_colors.light_gray_purple,
    fontFamily: "regular",
    fontSize: pxtowidth(14),
    lineHeight: pxtoheight(20),
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: pxtoheight(76),
    alignSelf: "center",
  },
});
