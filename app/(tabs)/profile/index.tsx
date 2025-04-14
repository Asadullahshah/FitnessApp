import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView
} from "react-native";
import React, { useRef } from "react";
import { Colors } from "@/constants/Colors";
import { pxToWidth, pxToHeight } from "@/utils";
import { SubTitleText } from "@/components/ui/SubTitleText";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { InfoBox } from "@/components/InfoBox";
import { Options } from "@/components/Options";
import { HeartIconSvg } from "@/components/HeartIconSvg";
import { ArrowRight } from "@/components/ArrowRight";
import { FavIconSvg } from "@/components/ui/FavIconSvg";
import { PlansIconSvg } from "@/components/PlansIconSvg";
import { TrackIconSvg } from "@/components/TrackIconSvg";
import { AchievementIconSvg } from "@/components/AchievemtIconSvg";
import { BubbleIcon } from "@/components/BubbleIcon";
import { ManualIconSvg } from "@/components/ManualIconSvg";
import { SignOutIconSvg } from "@/components/SignOutIconSvg";
import { router } from "expo-router";
import { TitleText } from "@/components/ui/TitleText";
import { SettingsIconSvg } from "@/components/ui/SettingIconSvg";
import BackIconSvg from "@/components/ui/BackIconSvg";
const options = [
  "Favourites",
  "Premium & Plans",
  "Track my Progress",
  "Achievement",
];

const optionIcons = [
  HeartIconSvg,
  PlansIconSvg,
  TrackIconSvg,
  AchievementIconSvg,
];

const otherIcons = [ManualIconSvg, SignOutIconSvg];

const otherOptions = ["Workout Manual", "Sign Out"];

const bubbles = [
  require("@/assets/images/shoe.png"),
  require("@/assets/images/foot.png"),
  require("@/assets/images/target.png"),
  require("@/assets/images/candle.png"),
];

const profile = () => {
  const routeRef = useRef<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          width: "100%",
          alignSelf: "center",
          backgroundColor: Colors.light.secondary_colors.dark_navy,
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <BackIconSvg onPress={() => router.back()} />
            <Pressable onPress={() => router.push("/(tabs)/profile/settings")}>
              <SettingsIconSvg />
            </Pressable>
        </View>
        <View style={styles.streakBox}>
          <Text style={styles.streakText}>20🔥</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.contentContainer}>
        <View style={styles.accountContainer}>
          <View style={styles.accountDetails}>
            <Image
              source={require("@/assets/images/avatar.png")}
              style={styles.avatar}
            />
            <View>
              <SubTitleText color={Colors.light.primary_colors.soft_white}>
                Joseph Crown (Jojo)
              </SubTitleText>
              <SubTitleText color="#9E9E9E">joecrown@gmail.com</SubTitleText>
            </View>
            <ButtonRed
              style={styles.button}
              heightB={30}
              widthB={80}
              onPress={() => router.push("/(tabs)/profile/profileEdit")}
            >
              Edit
            </ButtonRed>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <InfoBox title="185cm">Height</InfoBox>
          <InfoBox title="24 Y/O">Age</InfoBox>
          <InfoBox title="70KG">Weight</InfoBox>
        </View>
        <View style={styles.optionsContainer}>
          {options.map((v, i) => (
            <Pressable
              key={i}
              onPress={() => {
                console.log(`${v} Pressed`);
              }}
            >
              <Options
                name={v}
                IconL={optionIcons[i]}
                IconR={ArrowRight}
                key={i}
              />
            </Pressable>
          ))}
        </View>
        <View style={styles.achievementsContainer}>
          {bubbles.map((v, i) => (
            <BubbleIcon img={v} key={i} />
          ))}
        </View>
        <TitleText
          style={styles.text}
          color={Colors.light.primary_colors.soft_white}
          size={18}
          mTop={20}
        >
          Others
        </TitleText>
        <View style={[styles.optionsContainer, styles.otherOptionsContainer]}>
          {otherOptions.map((v, i) => (
            <Pressable
              key={i}
              onPress={() => {
                console.log(`${v} Pressed`);
              }}
            >
              <Options name={v} IconL={otherIcons[i]} key={i} />
            </Pressable>
          ))}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    backgroundColor: Colors.dark.background,
  },
  accountContainer: {
    // marginTop: pxToHeight(32),
    width: pxToWidth(350),
    height: pxToHeight(70),
  },
  accountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    width: pxToWidth(55),
    height: pxToWidth(55),
    borderRadius: pxToWidth(55),
    // marginLeft: pxToWidth(8.5),
  },
  contentContainer: {
    padding: 24,
    height: "100%",
  },
  button: {
    borderRadius: 999999,
  },
  infoContainer: {
    flexDirection: "row",
    height: pxToHeight(65),
    width: pxToWidth(341),
    backgroundColor: Colors.light.secondary_colors.navy_blue,
    marginTop: pxToHeight(24),
    borderRadius: pxToWidth(20),
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    alignSelf: "flex-start",
  },
  optionsContainer: {
    marginTop: pxToHeight(32),
    width: pxToWidth(342),
    flexDirection: "column",
    gap: pxToHeight(16),
    padding: 10
  },
  otherOptionsContainer: {
    marginTop: pxToHeight(24),
  },
  achievementsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: pxToWidth(342),
    height: pxToHeight(71.071),
    marginTop: pxToHeight(16),
    gap: pxToWidth(8),
    alignItems: "center",
    // justifyContent: "center",
  },
  streakBox: {
    backgroundColor: Colors.dark.background,
    borderRadius: 8,
    height: pxToHeight(33),
    width: pxToWidth(74),
    marginTop: pxToHeight(19),
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  streakText: {
    fontFamily: "marker",
    fontSize: pxToHeight(20),
    color: "white",
  },
});
