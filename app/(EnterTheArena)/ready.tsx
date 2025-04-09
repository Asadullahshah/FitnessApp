import { Dimensions, ScrollView, StyleSheet, View, Image, SafeAreaView } from "react-native";
import { Colors } from "@/constants/Colors";
import SafeView from "@/components/ui/SafeView";
import { TitleText } from "@/components/ui/TitleText";
import { Header } from "@/components/ui/Header";
import { SubTitleText } from "@/components/ui/SubTitleText";
import { WorkoutTile } from "@/components/ui/WorkoutTile";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { BottomText } from "@/components/ui/BottomText";
import { DifficultyBox } from "@/components/ui/DifficultyBox";
import { FavIconSvg } from "@/components/ui/FavIconSvg";
import { WorkoutDetails } from "@/components/ui/WorkoutDetails";
import { useState } from "react";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const index = () => {
  const arr = Array.from({ length: 100 }, (_, i) => i);
  const [difficulty, setDifficulty] = useState(1);
  const { workout } = useLocalSearchParams();

  console.log("Workout: ", workout);

  console.log(workout);
  return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            height: pxtoheight(44),
            backgroundColor: Colors.light.secondary_colors.dark_navy,
            flexDirection: "row",
            gap: pxtowidth(12),
          }}
        >
          <DifficultyBox
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            style={{ marginLeft: pxtowidth(126) }}
          />
          <FavIconSvg style={{ marginLeft: pxtowidth(70) }} />
        </View>
        <WorkoutDetails difficulty={difficulty} />
        <ButtonRed
          marginT={32}
          widthB={342}
          heightB={48}
          style={{ marginBottom: pxtoheight(45) }}
          onPress={() => router.push("/countdown")}
        >
          Let's Count
        </ButtonRed>
      </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
