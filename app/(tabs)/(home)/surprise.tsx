import { ButtonRed } from "@/components/ui/ButtonRed";
import ThreeButtonGradient from "@/components/ui/ThreeButtonGradient";
import { Colors } from "@/constants/Colors";
import { pxToHeight } from "@/utils";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";

const surprise = () => {
  const handleReveal = () => {
    console.log("Surprise revealed! 🎁");
    // navigate or show a modal etc.
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <LinearGradient
        colors={["#c96c6c", "#325d78"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientbox}
      >
        <Text style={styles.gradientText}>This week's most lucky User</Text>
      </LinearGradient>

      <View
        style={{
          height: 50,
          width: "100%",
          marginBottom:
            Platform.OS == "android" ? pxToHeight(20) : pxToHeight(10),
        }}
      >
        <View style={styles.angledTextContainer}>
          <Text style={styles.angledTextDim}>Surprise</Text>
          <Text style={styles.angledTextBold}>Surprise</Text>
        </View>
      </View>

      <Text style={styles.title}>SURPRISE DROP</Text>
      <Text style={styles.subtitle}>
        You showed up, Now luck’s showing up for you
      </Text>

      <Image
        source={require("@/assets/images/surprise-box.png")} // replace with your local image or uri
        style={styles.boxImage}
        resizeMode="contain"
      />

      <View
        style={{
          marginBottom: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.feelingText}>Feeling Lucky?</Text>
        <Text style={styles.feelingText}>Tap to Reveal Your Surprise</Text>
      </View>

      <ButtonRed children="Reveal" onPress={handleReveal} />
      <Text style={styles.footerText}>
        Consistency builds strength, Luck just adds glitter.
      </Text>
    </SafeAreaView>
  );
};

export default surprise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop:
      Platform.OS == "android"
        ? (StatusBar.currentHeight || 0) + pxToHeight(12)
        : pxToHeight(12),
  },
  gradientbox: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
    width: "90%",
    margin: 10,
    height: 46,
    alignItems: "center",
  },
  gradientText: {
    color: "lightgrey",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "left",
    opacity: 0.8,
  },
  title: {
    color: Colors.light.primary_colors.coral_red,
    fontSize: 28,
    fontFamily: "bold",
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#E0E0E0",
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "regular",
    textAlign: "center",
    marginBottom: 30,
  },
  boxImage: {
    height: 219,
  },
  feelingText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  footerText: {
    color: Colors.light.primary_colors.sky_blue,
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "italic",
    textAlign: "center",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 30,
  },
  angledTextContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    transform: [{ rotate: "-20deg" }],
  },
  angledTextDim: {
    color: "#718096",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  angledTextBold: {
    color: "#63B3ED",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 30,
  },
});
