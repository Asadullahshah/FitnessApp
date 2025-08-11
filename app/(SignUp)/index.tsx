import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import BackIconSvg from "@/components/ui/BackIconSvg";
import EmailIconSvg from "@/components/ui/EmailIconSvg";
import InfoSvgIcon from "@/components/ui/InfoIconSvg";
import CheckIconSvg from "@/components/ui/CheckIconSvg";
import GoogleIconSvg from "@/components/ui/GoogleIconSvg";
import AppleIconSvg from "@/components/ui/AppleIconSvg";
import TextBox from "@/components/TextBox";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiService } from "@/lib/api";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const index = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(width, height);
  }, []);

  const handleEmailPasswordChange = (text: string) => {
    setEmailPassword(text);
  };



  const handleSignup = async () => {
    console.log("handleSignup");
    try {
      setLoading(true);

      // Get onboarding data from AsyncStorage
      const username = await AsyncStorage.getItem("username");
      const gender = await AsyncStorage.getItem("gender");
      const motivationStr = await AsyncStorage.getItem("motivation");
      const motivation = motivationStr != null ? Number(motivationStr) : null;
      console.log("username", username);
      console.log("gender", gender);
      console.log("motivation", motivation);
      // Validate required fields
      if (!username || !gender || !motivation) {
        Alert.alert("Missing Data", "Please complete the onboarding process first.");
        setLoading(false);
        return;
      }

      if (!email || !emailPassword) {
        Alert.alert("Input Missing", "Please enter a valid email and password.");
        setLoading(false);
        return;
      }

      // Map motivation tone to backend format
      // const motivationToneMap: string[] = [
      //    "Light Encouragement",
      //    "Tough Love", 
      //    "Brutal Honesty"
      // ];

      const motivationalToneID = motivation;
      console.log("motivationalToneID", motivationalToneID);

      // Prepare signup data
      const signupData = {
        avatar: (gender === "Male" ? "male" : "female") as "male" | "female",
        email: email,
        motivational_tone_id: motivationalToneID,
        password: emailPassword,
        username: username
      };
      console.log("signupData", signupData);

      // Call the signup API
      const response = await apiService.signup(signupData);
      
      console.log("Signup response:", response);
      console.log("Verification email should be sent to:", email);
      
      // Store user data locally (without access token yet)
      await apiService.storeUserData(response.access_token,response.id , response.is_email_verified);

      Alert.alert("Success");
      
      // Navigate to verification screen
      router.navigate({
        pathname: "/verify",
        params: {
          email: email,
        },
      });
      
      setLoading(false);
    } catch (error: any) {
      console.error("Signup error:", error);
      Alert.alert("Signup Failed", error.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      {loading && <ActivityIndicator />}
      <View style={styles.carouselBar}>
        <Pressable
          style={{ width: pxtowidth(32), height: pxtoheight(32) }}
          onPress={() => router.back()}
        >
          <BackIconSvg />
        </Pressable>

      </View>
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subTitle}>Complete your registration with email and password</Text>
      
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 16,
        }}
      >
        <TextBox
          customIcon={<EmailIconSvg />}
          placeholder="Email address"
          placeholderTextColor={Colors.light.inputText}
          onChangeText={(text: any) => {
            setEmail(text);
            console.log(text);
          }}
        />
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <TextBox
          leftIcon={"lock-outline"}
          placeholder="Choose a password"
          rightIcon="eye"
          secureTextEntry
          onChangeText={handleEmailPasswordChange}
        />
      </View>
      <View style={styles.infoContainer}>
        <InfoSvgIcon />
        <Text style={styles.infoText}>
          Password must be at least 8 characters
        </Text>
      </View>
      <View style={styles.conditionsContainer}>
        <CheckIconSvg />
        <Text style={styles.privacyText}>
          I agree with{" "}
          <Text
            style={[
              styles.privacyText,
              {
                color: "#4FC3F7",
                fontFamily: "italic",
                fontSize: pxtowidth(12),
                lineHeight: pxtoheight(16),
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
              },
            ]}
          >
            Privacy{" "}
          </Text>
          and{" "}
          <Text
            style={[
              styles.privacyText,
              {
                color: "#4FC3F7",
                fontFamily: "italic",
                fontSize: pxtowidth(12),
                lineHeight: pxtoheight(16),
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
              },
            ]}
          >
            Terms of Use
          </Text>
        </Text>
      </View>
      <ButtonRed
        marginT={24}
        onPress={handleSignup}
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Join Now"}
      </ButtonRed>
      <View style={styles.externalAccountContainer}>
        <Text
          style={{
            color: "#F2F2F2",
            textAlign: "center",
            fontFamily: "regular",
            fontSize: pxtowidth(16),
          }}
        >
          Join with
        </Text>
        <View style={styles.logoContainer}>
          <Pressable onPress={() => router.navigate('./(Login)')} >
            <GoogleIconSvg />
          </Pressable>
          <AppleIconSvg />
        </View>
      </View>
      <View style={styles.loginContainer}>
        <Text
          style={[
            styles.singUpLink,
            {
              color: Colors.light.primary_colors.light_gray_purple,
            },
          ]}
        >
          Old Timer?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push("/(Login)")}>
          <Text
            style={[
              styles.singUpLink,
              {
                color: Colors.light.primary_colors.coral_red,
              },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    height: pxtoheight(24),
    color: "#B6B4C1",
    marginTop: pxtoheight(16),
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "regular",
    fontSize: pxtowidth(16),
  },
  buttonContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
  selectionButton: {
    marginTop: pxtoheight(32),
    width: pxtowidth(171),
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: pxtoheight(10),
    borderRadius: pxtowidth(12),
    backgroundColor: "#182025",
  },
  selectionButtonText: {
    color: "#F2F2F2",
    fontFamily: "regular",
    fontSize: pxtowidth(14),
  },
  inputTextWrapper: {},

  input: {
    width: pxtowidth(342),
    height: pxtoheight(48),
    alignSelf: "center",
    paddingTop: pxtoheight(14),
    paddingBottom: pxtoheight(13),
    paddingLeft: pxtowidth(48),
    alignItems: "center",
    flexDirection: "row",
    fontFamily: "regular",
    fontSize: pxtowidth(14),
    // borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#0F1B2A",
  },
  infoContainer: {
    flexDirection: "row",
    gap: pxtoheight(6),
    marginLeft: pxtowidth(24),
    marginTop: pxtoheight(12),
  },
  infoText: {
    color: "#B0BEC5",
    textAlign: "center",
    fontFamily: "italic",
    fontSize: pxtowidth(12),
  },
  conditionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: pxtoheight(8),
    marginTop: pxtoheight(42),
  },
  privacyText: {
    color: "#B6B4C1",
    textAlign: "center",
    fontFamily: "regular",
    fontSize: pxtowidth(12),
  },
  button: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "linear-gradient(90deg, #FF6F61 5%, #99433A 87.61%)",
    boxShadow: "1px 4px 25px 5px rgba(255, 111, 97, 0.25)",
    paddingVertical: pxtoheight(12),
    paddingHorizontal: pxtowidth(15),
    borderRadius: pxtowidth(12),
    marginTop: pxtoheight(24),
  },
  buttonText: {
    color: "#fff",
    fontSize: pxtowidth(18),
    fontFamily: "regular",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: pxtowidth(10),
    backgroundColor: Colors.light.background,
    width: "100%",
    marginTop: pxtoheight(43),
  },
  singUpLink: {
    fontFamily: "semiBold",
    fontSize: pxtowidth(14),
  },
  externalAccountContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: pxtoheight(24),
    marginTop: pxtoheight(42),
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: pxtoheight(24),
    gap: pxtowidth(42),
  },
});
