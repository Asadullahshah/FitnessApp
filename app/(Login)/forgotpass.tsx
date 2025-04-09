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
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import BackIconSvg from "@/components/ui/BackIconSvg";
import LockIconSvg from "@/components/ui/LockIconSvg";
import PhoneIconSvg from "@/components/ui/PhoneIconSvg";
import HidePasswordIconSvg from "@/components/ui/HidePasswordIconSvg";
import EmailIconSvg from "@/components/ui/EmailIconSvg";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { ButtonBack } from "@/components/ui/ButtonBack";
import TextBox from "@/components/TextBox";
import { supabase } from "../../lib/supabase"; // Make sure you have initialized Supabase
import { Alert } from "react-native";
import * as Linking from 'expo-linking';

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const index = () => {
  const [phoneSelected, setPhoneSelected] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(width, height);
  }, []);

  const handleResetPassword = async () => {
    const redirectUrl = Linking.createURL("/(Login)/resetpass");
  
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl,
    });
  
    console.log("Redirect URL ===>", redirectUrl);
  
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Success", "Check your email for the reset link.");
    }
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselBar}>
        <ButtonBack />
      </View>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subTitle}>Don't Stress, we'll help you reset it</Text>
      <View
        style={{
          marginTop: pxtoheight(32),
          marginBottom: pxtoheight(24),
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <TextBox
          placeholder={phoneSelected ? "Phone number" : "Email address"}
          customIcon={phoneSelected ? <PhoneIconSvg /> : <EmailIconSvg />}
          value={phoneSelected ? number : email}
          onChangeText={phoneSelected ? setNumber : setEmail}
        />
      </View>
      <TouchableOpacity
        style={{
          width: pxtowidth(229),
          height: pxtoheight(18),
          alignSelf: "center",
          marginTop: pxtoheight(24),
        }}
        onPress={() => setPhoneSelected(!phoneSelected)}
      >
        <Text style={styles.forgotPasswordText}>
          Reset with {!phoneSelected ? "Phone number" : "Email"} instead
        </Text>
      </TouchableOpacity>
      <Text
        style={[
          styles.subTitle,
          {
            // width: "80%",
            flexWrap: "wrap",
            textAlign: "center",
            // height: pxtoheight(42),
            fontSize: pxtowidth(14),
            marginTop: pxtoheight(334),
          },
        ]}
      >
        We'll send you a code to set up a new Password
      </Text>
      <ButtonRed
        marginT={42}
        onPress={() => {
          handleResetPassword();
          // router.push({
          //   pathname: "/resetpass",
          //   params: { method: phoneSelected.toString() },
          // })
        }}
      >
        Send Code
      </ButtonRed>
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
    color: Colors.light.primary_colors.coral_red,
    fontFamily: "bold",
    fontSize: pxtowidth(24),
    lineHeight: pxtoheight(36),
    textAlign: "center",
    alignSelf: "center",
  },
  subTitle: {
    height: pxtoheight(24),
    color: Colors.light.primary_colors.light_gray_purple,
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
    backgroundColor: Colors.light.secondary_colors.deep_black,
  },
  selectionButtonText: {
    color: Colors.light.primary_colors.soft_white,
    fontFamily: "regular",
    fontSize: pxtowidth(14),
  },
  input: {
    color: "#B6B4C1",
    width: pxtowidth(342),
    height: pxtoheight(48),
    alignSelf: "center",
    paddingTop: pxtoheight(14),
    paddingBottom: pxtoheight(8),
    paddingLeft: pxtowidth(48),
    alignItems: "center",
    flexDirection: "row",
    fontFamily: "regular",
    fontSize: pxtowidth(14),
    borderRadius: 12,
    backgroundColor: Colors.light.secondary_colors.dark_navy,
  },
  infoContainer: {
    flexDirection: "row",
    gap: pxtoheight(6),
    marginLeft: pxtowidth(24),
    marginTop: pxtoheight(12),
  },
  infoText: {
    color: Colors.light.secondary_colors.medium_gray,
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
  forgotPasswordText: {
    width: pxtowidth(229),
    height: pxtoheight(18),
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "regular",
    fontSize: pxtowidth(12),
    color: Colors.light.primary_colors.sky_blue,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: pxtowidth(10),
    backgroundColor: Colors.light.background,
    width: "100%",
    marginTop: pxtoheight(157),
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
