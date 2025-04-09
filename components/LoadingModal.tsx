import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import VerifiedBadgeIconSvg from "@/components/ui/LoadingIconSvg"

const { width, height } = Dimensions.get("window");
const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;
const LoadingModal = () => {
  const { method } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.verificationLoadingContainer}>
        <View style={styles.modal}>
            <VerifiedBadgeIconSvg  width={pxtowidth(81)} height={pxtoheight(81)}/>
        </View>
        <Text style={styles.verificationText}>
         Verifying{" "}
         <Text style={{ color: Colors.light.primary_colors.soft_white }}>
           your {method === "true" ? "number" : "email"}
         </Text>
       </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 999,
  },
  verificationLoadingContainer: {
    alignItems: "center",
    height: height,
  },
  modal: {
    width: pxtowidth(235.64),
    height: pxtowidth(206),
    borderRadius: pxtowidth(21),
    borderWidth: 1,
    borderColor: Colors.light.primary_colors.sky_blue,
    backgroundColor: Colors.light.secondary_colors.dark_navy,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: pxtoheight(183),
    marginBottom: pxtoheight(93),
  },
  verificationText: {
      color: Colors.light.primary_colors.coral_red,
      textAlign: "center",
      fontFamily: "regular",
      fontSize: pxtowidth(18), // 1.125rem (assuming base 16px, 1rem = 16px)
    },
});