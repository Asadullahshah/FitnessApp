import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { ButtonBack } from "@/components/ui/ButtonBack"; // Adjust the import path as necessary
import { pxToHeight } from "@/utils";
import { LinearGradient } from "expo-linear-gradient";

export default function SurpriseDropScreen() {
  const [revealed, setRevealed] = useState(false);
  const [lidAnim] = useState(new Animated.Value(0));

  const handleReveal = () => {
    Animated.timing(lidAnim, {
      toValue: -40,
      duration: 600,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => setRevealed(true));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{paddingHorizontal: 20}}>
        <ButtonBack />
        </View>
        <Text style={styles.title}>
          Surprise <Text style={{ color: "#FF5E5E" }}>Drop</Text>
        </Text>
        <Text style={styles.subtitle}>
          You showed up, Now luck's showing up for you
        </Text>
        {/* <View style={styles.boxContainer}>
          {!revealed && (
            <View style={styles.giftBox}>
              <Animated.View
                style={[styles.lid, { transform: [{ translateY: lidAnim }] }]}
              />
              <GiftBoxSvg />
              <TouchableOpacity
                style={styles.revealButton}
                onPress={handleReveal}
              >
                <Text style={styles.revealText}>Reveal</Text>
              </TouchableOpacity>
            </View>
          )}

          {revealed && (
            <View style={styles.badgeContainer}>
              <View style={styles.badgeGlow}>
                <Image
                  source={require("@/assets/images/ana.png")}
                  style={styles.badgeImage}
                />
              </View>
              <Text style={styles.badgeText}>You won a Foot Soldier Badge</Text>
              <TouchableOpacity style={styles.congratsButton}>
                <Text style={styles.revealText}>Congrats</Text>
              </TouchableOpacity>
            </View>
          )}
        </View> */}

        <View style={styles.boxContainer}>
          {!revealed && (
            <View style={styles.giftBox}>
              {/* <Animated.View
                style={[styles.lid, { transform: [{ translateY: lidAnim }] }]}
              /> */}
              <Image
                  source={require("@/assets/images/GiftBox.png")}
                  style={styles.badgeImage}
                />
              <TouchableOpacity
                style={styles.revealButton}
                onPress={handleReveal}
              >
                <Text style={styles.revealText}>Reveal</Text>
              </TouchableOpacity>
            </View>
          )}

          {revealed && (
            <View style={styles.badgeContainer}>
              <View style={styles.badgeGlow}>
                <Image
                  source={require("@/assets/images/ana.png")}
                  style={styles.badgeImage}
                />
              </View>
              <Text style={styles.badgeText}>You won a Foot Soldier Badge</Text>
              <TouchableOpacity style={styles.congratsButton}>
                <Text style={styles.revealText}>Congrats</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>
            Feeling <Text style={{ color: "#FF5E5E" }}>Lucky?</Text>
          </Text>
          <Text style={styles.bottomButtonText}>
            Tap to Reveal Your Surprise
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Consistency builds strength, Luck just adds glitter.
        </Text>

        <LinearGradient
          colors={["#c96c6c", "#325d78"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.Bottomcontainer}
        >
          <Text style={styles.bottomCardText}>This week’s Top 5 Most Committed</Text>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0A0E1A",
    marginTop:
      Platform.OS == "android"
        ? (StatusBar.currentHeight || 0) + pxToHeight(12)
        : pxToHeight(12),
  },
  backButton: { position: "absolute", top: 40, left: 20 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 16,
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 32,
    alignSelf: "center",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 306,
    backgroundColor: "#0F1B2A",
    borderRadius: 20,
    elevation: 5,
    boxShadow: "0 4px 26px 1px rgba(79, 192, 247, 0.30)",
    shadowColor: "#0B5C81",
    height: 335,
  },
  giftBox: { alignItems: "center" },
  lid: {
    position: "absolute",
    width: 120,
    height: 30,
    backgroundColor: "#4D4DFF",
    top: -30,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  boxBody: { width: 120, height: 120, resizeMode: "contain" },
  revealButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#1F2937",
    borderRadius: 8,
  },
  revealText: { color: "#fff", fontWeight: "bold" },
  badgeContainer: { alignItems: "center" },
  badgeGlow: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#101935",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FF5E5E",
    borderWidth: 2,
    marginBottom: 10,
  },
  badgeImage: { width: 158, height: 169, resizeMode: "contain", marginBottom: 57 },
  badgeText: { color: "#B2F5EA", fontSize: 16, marginBottom: 10 },
  congratsButton: {
    backgroundColor: "#1F2937",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  bottomButton: {
    alignSelf: "center",
    marginTop: 40,
    backgroundColor: "0deg, #0E2841 63.89%, rgba(33, 94, 152, 0.59) 100%",
    width: "85%",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: "center",
  },
  bottomButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "regular",
  },
  footer: {
    textAlign: "center",
    color: "#A1A1AA",
    marginTop: 15,
    fontSize: 12,
    fontFamily: "regular",
    fontWeight: "500",
    marginBottom: 61,
  },
  bottomCard: {
    marginTop: 20,
    backgroundColor: "#111827",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  Bottomcontainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    height: 46,
    opacity: 0.8,
    width: 342,
  },
  bottomCardText: { color: "#fff", fontSize: 13, fontFamily: "protest", opacity: 1 },
});
