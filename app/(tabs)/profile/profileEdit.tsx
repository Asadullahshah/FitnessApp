import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { pxToHeight, pxToWidth } from "@/utils";
import { Colors } from "@/constants/Colors";
import { SubTitleText } from "@/components/ui/SubTitleText";
import { TitleText } from "@/components/ui/TitleText";
import { UploadIconSvg } from "@/components/UploadIconSvg";
import TextBox from "@/components/TextBox";
import { GenderIconSvg } from "@/components/GenderIconSvg";
import { CalendarIconSvg } from "@/components/CalendarIconSvg";
import { WeightIconSvg } from "@/components/WeightIconSvg";
import { HeightIconSvg } from "@/components/HeightIconSvg";
import { ToneIconSvg } from "@/components/ToneIconSvg";
import { SelectIconSvg } from "@/components/SelectIconSvg";
import { useState } from "react";

export default function profileEdit() {
  const [kg, setKg] = useState(true);
  const [cm, setCm] = useState(true);

  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                alignSelf: "center",
                backgroundColor: Colors.light.secondary_colors.dark_navy,
                paddingHorizontal: 10,
                paddingVertical: 30,
              }}/>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? pxToHeight(156) : 0}
      >
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/avatar.png")}
              style={styles.avatar}
            />
            <View style={styles.uploadIcon}>
              <UploadIconSvg />
            </View>
          </View>
          <TitleText
            mTop={12}
            size={14}
            color={Colors.light.primary_colors.soft_white}
          >
            Joseph Crown (Jojo)
          </TitleText>
          <SubTitleText
            style={{ marginBottom: pxToHeight(8) }}
            size={14}
            color="#9E9E9E"
          >
            joecrown@gmail.com
          </SubTitleText>
          <View style={styles.input}>
            <TextBox placeholder={"Male"} customIcon={<GenderIconSvg />} />
          </View>
          <View style={styles.input}>
            <TextBox placeholder={"24"} customIcon={<CalendarIconSvg />} />
          </View>
          <View style={styles.interactiveBoxContainer}>
            <View style={styles.interactiveBox}>
              <TextBox
                width={266}
                placeholder={kg ? "70" : "154"}
                customIcon={<WeightIconSvg />}
              />
            </View>
            <Pressable onPress={() => setKg(!kg)}>
              <View style={styles.interactiveButton}>
                <TitleText
                  style={{ textAlign: "center" }}
                  mTop={6}
                  color={Colors.light.primary_colors.soft_white}
                  size={14}
                >
                  {kg ? "KG" : "LB"}
                </TitleText>
              </View>
            </Pressable>
          </View>
          <View style={styles.interactiveBoxContainer}>
            <View style={styles.interactiveBox}>
              <TextBox
                width={266}
                placeholder={cm ? "185" : "73"}
                customIcon={<HeightIconSvg />}
              />
            </View>
            <Pressable onPress={() => setCm(!cm)}>
              <View style={styles.interactiveButton}>
                <TitleText
                  style={{ textAlign: "center" }}
                  mTop={6}
                  color={Colors.light.primary_colors.soft_white}
                  size={14}
                >
                  {cm ? "CM" : "IN"}
                </TitleText>
              </View>
            </Pressable>
          </View>
          <View style={styles.input}>
            <TextBox
              placeholder={"Choose Motivational Tone"}
              customIcon={<ToneIconSvg />}
            />
          </View>
          <View style={styles.input}>
            <TextBox
              placeholder={"Customize Interests"}
              customIcon={<SelectIconSvg />}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.dark.background,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    flex: 1,
  },
  avatar: {
    width: pxToWidth(75),
    height: pxToWidth(75),
    borderRadius: pxToWidth(75),
    opacity: 0.5,
  },
  uploadIcon: {
    opacity: 1,
    width: pxToWidth(24),
    height: pxToWidth(24),
    position: "absolute",
    left: pxToWidth(75 / 2 - 24 / 2),
    top: pxToWidth(75 / 2 - 24 / 2),
  },
  imageContainer: {
    width: pxToWidth(75),
    height: pxToWidth(75),
    marginTop: pxToWidth(24),
  },
  input: {
    width: pxToWidth(342),
    height: pxToHeight(48),
    marginTop: pxToHeight(16),
  },
  interactiveBoxContainer: {
    flexDirection: "row",
    gap: pxToWidth(16),
    alignItems: "center",
    marginTop: pxToHeight(16),
  },
  interactiveBox: {
    width: pxToWidth(266),
    height: pxToHeight(48),
  },
  interactiveButton: {
    width: pxToWidth(60),
    height: pxToHeight(48),
    backgroundColor: "#2E7291",
    borderRadius: 12,
  },
});
