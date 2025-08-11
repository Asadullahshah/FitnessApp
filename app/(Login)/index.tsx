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
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { ButtonBack } from "@/components/ui/ButtonBack";
import LockIconSvg from "@/components/ui/LockIconSvg";
import HidePasswordIconSvg from "@/components/ui/HidePasswordIconSvg";
import GoogleIconSvg from "@/components/ui/GoogleIconSvg";
import AppleIconSvg from "@/components/ui/AppleIconSvg";
import PeopleIconSvg from "@/components/ui/PeopleIconSvg";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { ButtonBlue } from "@/components/ui/ButtonBlue";
import TextBox from "@/components/TextBox";
import { supabase } from "@/lib/supabase";
import { apiService } from "@/lib/api";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const index = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
console.log("Login Screen",login);
const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

const SignIn = async () => {
  try {
    if(isEmail(login)){
      const loginData = {
        email: login,
        password: password
      }
      const response = await apiService.login(loginData);
      console.log("Login response:", response);
      if(response.is_email_verified){
        router.push("/(EnterTheArena)");
      } else {
        Alert.alert("Email not verified");
      }
    } else {
      Alert.alert("Invalid Email");
      return;
    }

    //   console.log("Credentials ===>", credentials);
    // const { data, error } = await supabase.auth.signInWithPassword(credentials);

    // if (error) {
    //   Alert.alert("Login Error", error.message);
    //   console.log("Login Error", error.message);
    //   return;
    // }

    // if (data) {
    //   console.log("Data from Login Screen", data);
    //   router.push("/(EnterTheArena)");
    // }
  } catch (err: any) {
    Alert.alert("Unexpected Error", err.message);
  }
};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselBar}>
        <ButtonBack />
      </View>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subTitle}>We've missed you! Login to continue</Text>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 16,
        }}
      >
        <TextBox
          customIcon={<PeopleIconSvg />}
          placeholder={"Phone number, Email address or username"}
          placeholderTextColor={Colors.light.inputText}
          onChangeText={(text: any) => {
            console.log(text);
            setLogin(text);
          }}
        />
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <TextBox
          customIcon={<LockIconSvg />}
          placeholder="Choose a password"
          placeholderTextColor={Colors.light.inputText}
          rightIcon="eye"
          secureTextEntry
          onChangeText={(text: any) => {
            console.log(text);
            setPassword(text);
          }}
        />
      </View>
      <ButtonBlue marginT={24}>Forgot Password?</ButtonBlue>
      <ButtonRed marginT={32} onPress={SignIn}>
        Enter The Arena
      </ButtonRed>
      <View style={styles.externalAccountContainer}>
        <Text
          style={{
            color: Colors.light.primary_colors.soft_white,
            textAlign: "center",
            fontFamily: "regular",
            fontSize: pxtowidth(16),
          }}
        >
          Continue with
        </Text>
        <View style={styles.logoContainer}>
          <GoogleIconSvg />
          <AppleIconSvg />
        </View>
      </View>
      <View style={styles.signUpContainer}>
        <Text
          style={[
            styles.singUpLink,
            {
              color: Colors.light.primary_colors.light_gray_purple,
            },
          ]}
        >
          Newbie?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push("/(SignUp)")}>
          <Text
            style={[
              styles.singUpLink,
              {
                color: Colors.light.primary_colors.coral_red,
              },
            ]}
          >
            Join
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
    color: Colors.light.primary_colors.coral_red,
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
  forgotPasswordText: {
    width: pxtowidth(229),
    height: pxtoheight(18),
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "regular",
    fontSize: pxtowidth(12),
    color: Colors.light.primary_colors.sky_blue,
  },
  button: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `linear-gradient(90deg, ${Colors.light.primary_colors.coral_red} 5%, #99433A 87.61%)`,
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
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    paddingVertical: pxtoheight(10),
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
