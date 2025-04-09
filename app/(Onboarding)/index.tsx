import {
  useWindowDimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Index = () => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.heading, { padding: width * 0.05, marginTop:
            Platform.OS == "android" ? (StatusBar.currentHeight || 0) + 12 : 12, }]}>
        <Text style={[styles.title, { color: Colors.light.primary_colors.coral_red }]}>
          Welcome
        </Text>
        <Text style={styles.title}>
          to Your{" "}
          <Text style={{ color: Colors.light.primary_colors.coral_red }}>Fitness</Text> Reality.
        </Text>
        <Text style={[styles.subTitle, { marginTop: height * 0.02 }]}>
          No fluff. Just goals and tough love.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/Fitness-stats-1.png")}
          style={{ height: height * 0.4, resizeMode: "contain" }}
        />
      </View>

      <Text style={[styles.italicSubheading, { marginTop: height * 0.04, width: width * 0.9 }]}>
        The one app that’ll have you sweating and smiling at the same time.
      </Text>

      <Link href="/avatar" asChild>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FF6F61", "#99433A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.button, { marginTop: height * 0.04, width: "90%" }]}
          >
            <Text style={styles.buttonText}>Let’s Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Link>

      <View style={[styles.loginContainer, { bottom: height * 0.02 }]}>
        <Text style={[styles.singUpLink, { color: Colors.light.primary_colors.light_gray_purple }]}>
          Old Timer?
        </Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)")}>
          <Text style={[styles.singUpLink, { color: Colors.light.primary_colors.coral_red }]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "bold",
  },
  subTitle: {
    color: Colors.light.primary_colors.light_gray_purple,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  italicSubheading: {
    color: Colors.light.primary_colors.mint_green,
    fontSize: 14,
    fontFamily: "italic",
    fontWeight: "400",
    textAlign: "center",
    alignSelf: "center",
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "medium",
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
  singUpLink: {
    fontFamily: "semiBold",
    fontSize: 14,
    marginHorizontal: 5,
  },
});
