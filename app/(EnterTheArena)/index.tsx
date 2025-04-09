import {
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Colors } from "@/constants/Colors";
import SafeView from "@/components/ui/SafeView";
import { TitleText } from "@/components/ui/TitleText";
import { Header } from "@/components/ui/Header";
import { SubTitleText } from "@/components/ui/SubTitleText";
import { WorkoutTile } from "@/components/ui/WorkoutTile";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { BottomText } from "@/components/ui/BottomText";
import { router } from "expo-router";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

const workouts = ["Push-ups", "Side Squats", "Jumping Jacks"];

const colors = [
  Colors.light.primary_colors.sky_blue,
  Colors.light.primary_colors.coral_red,
  Colors.light.primary_colors.mint_green,
];

const workoutImgs = [
  require("@/assets/images/push-ups.png"),
  require("@/assets/images/side-squats.png"),
  require("@/assets/images/jumping-jacks.png"),
];

const index = () => {
  const arr = Array.from({ length: 100 }, (_, i) => i);
  const [workOut, setWorkOut] = useState(Array(3).fill(false));
  console.log(workOut);
  return (
    <SafeView style={styles.container}>
      {/* <Header title={"Entering the Arena..."} /> */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
        <TitleText
          size={20}
          color={Colors.light.primary_colors.soft_white}
          style={{
            textAlign: "left",
            alignSelf: "flex-start",
            marginTop: pxtoheight(17),
          }}
        >
          Welcome, Warrior
        </TitleText>
        <SubTitleText
          mTop={12}
          size={12}
          color={Colors.light.primary_colors.soft_white}
          style={{ textAlign: "left", alignSelf: "flex-start" }}
        >
          Let's see what we're working with, how many reps can you do? No
          worries if one exercise feels tough, just modify or switch to
          something that feels right for you!
        </SubTitleText>
        <SubTitleText
          mTop={16}
          size={12}
          color={Colors.light.primary_colors.soft_white}
          style={{ textAlign: "left", alignSelf: "flex-start" }}
        >
          We just want to get your blood pumping as you explore the app.{"\n"}
          <SubTitleText
            mTop={0}
            size={12}
            color={Colors.light.primary_colors.mint_green}
            style={{ textAlign: "left", alignSelf: "flex-start" }}
          >
            PS: This counts as a warm up.
          </SubTitleText>
        </SubTitleText>
        <TitleText
          size={16}
          color={Colors.light.primary_colors.soft_white}
          style={{
            textAlign: "left",
            alignSelf: "flex-start",
            marginTop: pxtoheight(17),
          }}
        >
          👊Pick Your Move{" "}
          <SubTitleText
            mTop={0}
            size={12}
            color={Colors.light.inputText}
            style={{ textAlign: "left", alignSelf: "flex-start" }}
          >
            (Tap to Select)
          </SubTitleText>
        </TitleText>
        {workoutImgs.map((v, i) => (
          <WorkoutTile
            onPress={() => {
              const newWorkout = [...workOut];
              newWorkout[i] = !newWorkout[i];
              setWorkOut(newWorkout);
              console.log("newWorkout ===>",newWorkout);
            }}
            style={{
              marginTop: i == 0 ? pxtoheight(16) : pxtoheight(32),
              borderWidth: workOut[i] ? pxtowidth(1) : 0,
              borderColor: workOut[i]
                ? Colors.light.primary_colors.sky_blue
                : undefined,
            }}
            title={workouts[i]}
            dotColor={colors[i]}
            img={v}
            key={i}
          />
        ))}
        <ButtonRed
          onPress={() =>
            router.push({
              pathname: "/ready",
              params: {
                workout: workOut,
              },
            })
          }
          heightB={48}
          widthB={342}
          marginT={24}
        >
          Start Moving!
        </ButtonRed>
        <SubTitleText
          size={14}
          mTop={24}
          style={{ marginBottom: pxtoheight(40) }}
        >
          I will do this, but <TitleText size={16}>Later</TitleText>
        </SubTitleText>
        {/* {arr.map(() => (
            <TitleText>Hi</TitleText>
          ))} */}
      </ScrollView>
    </SafeView>
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
