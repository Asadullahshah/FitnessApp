import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import BackIconSvg from "@/components/ui/BackIconSvg";
import LockIconSvg from "@/components/ui/LockIconSvg";
import HidePasswordIconSvg from "@/components/ui/HidePasswordIconSvg";
import { ButtonBack } from "@/components/ui/ButtonBack";
import { ButtonRed } from "@/components/ui/ButtonRed";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const index = () => {
  const [phoneSelected, setPhoneSelected] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(false);
  const [hidePassword2, setHidePassword2] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetPopup, setResetPopup] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  useEffect(() => {
    if (password1 !== "" && password1.length === 8 && password1 === password2) {
      setIsDisabledButton(false);
      // Keyboard.dismiss();
      // setResetPopup(true);
    } else {
      setIsDisabledButton(true);
    }
  }, [password1, password2]);

  const resetComplete = () => {
    Keyboard.dismiss();
    setResetPopup(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {resetPopup && (
        <View
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            width: width,
            height: height,
            zIndex: 100,
          }}
        >
          <View style={styles.verificationLoadingContainer}>
            <Text style={styles.verificationText}>
              Password{" "}
              <Text style={{ color: Colors.light.primary_colors.soft_white }}>
                Reset Successful!
              </Text>
            </Text>
            <Image
              source={require("@/assets/images/image.png")}
              style={{ alignSelf: "center", marginTop: pxtoheight(24) }}
            />
            <Text
              style={[
                styles.subTitle,
                {
                  fontSize: pxtowidth(12),
                  width: pxtowidth(255),
                  height: pxtoheight(54),
                  alignSelf: "center",
                  marginTop: pxtoheight(24),
                },
              ]}
            >
              A new password has been created for your account! Login again to
              Enter the Arena
            </Text>
            <ButtonRed
              marginT={24}
              fontH={12}
              widthB={132}
              heightB={37}
              onPress={() => router.push("/(Login)")}
            >
              Login
            </ButtonRed>
          </View>
        </View>
      )}
      <View style={styles.carouselBar}>
        <ButtonBack />
      </View>
      <Text style={styles.title}>Create New Password</Text>
      <Text style={styles.subTitle}>
        Make sure it's strong and easy for you to remember!
      </Text>
      <TextInput
        autoCapitalize="none"
        textContentType="password"
        // keyboardType="visible-password"
        secureTextEntry={hidePassword1}
        onChangeText={(v) => setPassword1(v)}
        value={password1}
        cursorColor="#B6B4C1"
        selectionColor="#B6B4C1"
        placeholder={"Choose a new password"}
        placeholderTextColor={"#B6B4C1"}
        style={[styles.input, { marginTop: pxtoheight(32) }]}
      />
      <View
        style={{
          position: "absolute",
          top: pxtoheight(195),
          left: pxtowidth(40),
          zIndex: 99,
        }}
      >
        <LockIconSvg />
      </View>
      <View
        style={{
          position: "absolute",
          top: pxtoheight(195),
          right: pxtowidth(40),
          zIndex: 99,
        }}
      >
        <TouchableOpacity onPress={() => setHidePassword1(!hidePassword1)}>
          <HidePasswordIconSvg />
        </TouchableOpacity>
      </View>
      <TextInput
        autoCapitalize="none"
        textContentType="password"
        // keyboardType="visible-password"
        secureTextEntry={hidePassword2}
        onChangeText={(v) => setPassword2(v)}
        value={password2}
        cursorColor="#B6B4C1"
        selectionColor="#B6B4C1"
        placeholder={"Confirm new password"}
        placeholderTextColor={"#B6B4C1"}
        style={[styles.input, { marginTop: pxtoheight(16) }]}
      />
      <View
        style={{
          position: "absolute",
          top: pxtoheight(255.5),
          left: pxtowidth(40),
          zIndex: 99,
        }}
      >
        <LockIconSvg />
      </View>
      <View
        style={{
          position: "absolute",
          top: pxtoheight(259),
          right: pxtowidth(40),
          zIndex: 99,
        }}
      >
        <TouchableOpacity onPress={() => setHidePassword2(!hidePassword2)}>
          <HidePasswordIconSvg />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: pxtoheight(76),
          alignSelf: "center",
        }}
      >
        <ButtonRed
          opacityB={isDisabledButton ? 0.5 : 1}
          disable={isDisabledButton}
          widthB={342}
          heightB={48}
          onPress={() => resetComplete()}
        >
          Reset Password
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
    width: pxtowidth(271),
    height: pxtoheight(48),
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
  input: {
    color: "#B6B4C1",
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
  forgotPasswordText: {
    textAlign: "center",
    fontFamily: "regular",
    fontSize: pxtowidth(12),
    color: "#4FC3F7",
    marginTop: pxtoheight(24),
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
    color: "#fff",
    fontSize: pxtowidth(18),
    fontFamily: "regular",
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
  verificationLoadingContainer: {
    width: pxtowidth(318),
    height: pxtowidth(331),
    borderRadius: pxtowidth(21),
    borderWidth: 1,
    borderColor: Colors.light.primary_colors.sky_blue,
    backgroundColor: Colors.light.secondary_colors.dark_navy,
    alignSelf: "center",
    // alignContent: "center",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: pxtoheight(185.6),
    zIndex: 99,
  },
  verificationText: {
    color: Colors.light.primary_colors.coral_red,
    textAlign: "center",
    fontFamily: "regular",
    fontSize: pxtowidth(18), // 1.125rem (assuming base 16px, 1rem = 16px)
    marginTop: pxtoheight(30),
  },
});
