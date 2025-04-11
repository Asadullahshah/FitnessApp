import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { pxToWidth, pxToHeight } from "../../utils";
import { TitleText } from "@/components/ui/TitleText";
import BackIconSvg from "@/components/ui/BackIconSvg";
import { SubTitleText } from "@/components/ui/SubTitleText";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { SettingsIconSvg } from "@/components/ui/SettingIconSvg";

const profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <BackIconSvg />
          <TitleText size={20}>My Profile</TitleText>
          <SettingsIconSvg />
        </View>
        <View style={styles.streakBox}>
          <Text style={styles.streakText}>20🔥</Text>
        </View>
      </View>
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
            <ButtonRed style={styles.button} heightB={30} widthB={83}>
              Edit
            </ButtonRed>
          </View>
          <View style={styles.infoContainer}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    backgroundColor: Colors.dark.background,
  },
  headerContainer: {
    height: pxToHeight(135),
    width: pxToWidth(390),
    backgroundColor: Colors.light.secondary_colors.dark_navy,
    alignItems: "center",
  },
  header: {
    height: pxToHeight(32),
    width: pxToWidth(341),
    marginTop: pxToHeight(16),
    marginHorizontal: pxToWidth(25),
    flexDirection: "row",
    justifyContent: "space-between",
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
  accountContainer: {
    marginTop: pxToHeight(32),
    width: pxToWidth(243),
    height: pxToHeight(55),
  },
  accountDetails: {
    flexDirection: "row",
    gap: pxToWidth(16),
  },
  streakText: {
    fontFamily: "marker",
    fontSize: pxToHeight(20),
    color: "white",
  },
  avatar: {
    width: pxToWidth(55),
    height: pxToWidth(55),
    borderRadius: pxToWidth(55),
    marginLeft: pxToWidth(8.5),
  },
  contentContainer: {
    marginHorizontal: pxToWidth(24),
  },
  button: {
    borderRadius: 999999,
  },
  infoContainer: {
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
