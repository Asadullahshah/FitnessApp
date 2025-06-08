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
// import { TextInput } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import BackIconSvg from "@/components/ui/BackIconSvg";
import LockIconSvg from "@/components/ui/LockIconSvg";
import PhoneIconSvg from "@/components/ui/PhoneIconSvg";
import HidePasswordIconSvg from "@/components/ui/HidePasswordIconSvg";
import EmailIconSvg from "@/components/ui/EmailIconSvg";
import InfoSvgIcon from "@/components/ui/InfoIconSvg";
import CheckIconSvg from "@/components/ui/CheckIconSvg";
import GoogleIconSvg from "@/components/ui/GoogleIconSvg";
import AppleIconSvg from "@/components/ui/AppleIconSvg";
import TextBox from "@/components/TextBox";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { ActivityIndicator } from "react-native";
import { supabase } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const index = () => {
  const [phoneSelected, setPhoneSelected] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [phonePassword, setPhonePassword] = useState("");
  const [emailPassword, setEmailPassword] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(width, height);
  }, []);

  const handlePhonePasswordChange = (text: string) => {
    setPhonePassword(text);
  };

  const handleEmailPasswordChange = (text: string) => {
    setEmailPassword(text);
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
  
      if (phoneSelected && number) {
        // Sign in with phone OTP
        // const { error: phoneOtpError } = await supabase.auth.signInWithOtp({
        //   phone: number,
        //   options: {
        //     shouldCreateUser: false,
        //   },
        // });

        const { error: phonePasswordError } = await supabase.auth.signUp({
          phone: number,
          password: phonePassword,
        })
  
        if (phonePasswordError ) {
          Alert.alert("Phone OTP Error", phonePasswordError?.message);
          console.log("Phone OTP Error", phonePasswordError?.message);
          setLoading(false); 
          return;
        }
  
      } else if (!phoneSelected && email) {
        // Sign in with email OTP
        // const { error: emailOtpError } = await supabase.auth.signInWithOtp({
        //   email,
        //   options: {
        //     shouldCreateUser: false,
        //   },
        // });

        const { error : emailPasswordError } = await supabase.auth.signUp({
          email: email,
          password: emailPassword,
        })
  
        if (emailPasswordError ) {
          Alert.alert("Email OTP Error", emailPasswordError?.message);
          setLoading(false);
          return;
        }
  
      } else {
        Alert.alert("Input Missing", "Please enter a valid email or phone number.");
        setLoading(false);
        return;
      }
  
      // Navigate to verify screen
      router.navigate({
        pathname: "/verify",
        params: {
          method: phoneSelected.toString(),
          cred: phoneSelected ? number : email,
        },
      });
  
      setLoading(false);
    } catch (error: any) {
      Alert.alert("Unexpected Error", error.message);
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
      <Text style={styles.subTitle}>Now You're here, Do the needful!</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.selectionButton,
            { marginLeft: pxtowidth(24) },
            phoneSelected
              ? {
                  backgroundColor: "#122435",
                  borderWidth: 1,
                  borderColor: "#4FC3F7",
                }
              : {
                  backgroundColor: "#182025",
                },
          ]}
          onPress={() => {
            setPhoneSelected(true);
            setEmailPassword("");
            setEmail("");
          }}
        >
          <View>
            <Text style={styles.selectionButtonText}>Phone</Text>
          </View>
        </Pressable>
        <Pressable
          style={[
            styles.selectionButton,
            { marginRight: pxtowidth(24) },
            !phoneSelected
              ? {
                  backgroundColor: "#122435",
                  borderWidth: 1,
                  borderColor: "#4FC3F7",
                }
              : {
                  backgroundColor: "#182025",
                },
          ]}
          onPress={() => {
            setPhoneSelected(false);
            setPhonePassword("");
            setNumber("");
          }}
        >
          <View>
            <Text style={styles.selectionButtonText}>Email</Text>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 16,
        }}
      >
        {/* you can add customLeft icon so that we can use custom svg for future use */}
        <TextBox
          customIcon={phoneSelected ? <PhoneIconSvg /> : <EmailIconSvg />}
          placeholder={phoneSelected ? "Phone number" : "Email address"}
          placeholderTextColor={Colors.light.inputText}
          onChangeText={(text: any) => {
            phoneSelected ? setNumber(text) : setEmail(text);
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
          onChangeText={
            phoneSelected
              ? handlePhonePasswordChange
              : handleEmailPasswordChange
          }
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
        onPress={() =>
          // router.push({
          //   pathname: "/verify",
          //   params: {
          //     method: phoneSelected.toString(),
          //   },
          // })
          handleSignup()
        }
      >
        Join Now
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
          <Pressable onPress={() => router.navigate('./(EnterTheArena)')} >
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
