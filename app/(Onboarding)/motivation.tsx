import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import CursorIconSvg from "@/components/ui/CursorIconSvg";
// @ts-ignore
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

import BackIconSvg from "@/components/ui/BackIconSvg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");
const motivation = () => {
  const options = [
    { label: "Light encouragement", value: 0 },
    { label: "Tough love", value: 1 },
    { label: "Brutal Honesty", value: 2 },
  ];

  const [selected, setSelected] = React.useState<number>(-1);
  useEffect(() => {
    console.log("selected", selected);
    if (selected) {
      AsyncStorage.setItem("motivation", String(selected));
    }
  }, [selected]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: "absolute",
          alignItems: "flex-end",
          width: "100%",
          height: "5%",
          zIndex: 100,
          marginTop:
            Platform.OS == "android"
              ? (StatusBar.currentHeight || 0) + 12
              : "18%",
        }}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <BackIconSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.heading}>
        <Text style={[styles.title]}>Tell us...</Text>
        <Text style={styles.title}>
          What{" "}
          <Text
            style={[
              styles.title,
              { color: Colors.light.primary_colors.coral_red },
            ]}
          >
            Lights
          </Text>{" "}
          Your{" "}
          <Text style={{ color: Colors.light.primary_colors.coral_red }}>
            Fire?
          </Text>
        </Text>
        <Text style={styles.subTitle}>
          Your journey, your rules! We’ve got options for every mood & mindset
          because fitness isn’t one size-fits-all.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/onBoarding-3.png")}
          style={[styles.svg, { height: height * 0.3 }]}
        />
      </View>
      {/* <AnimationSvg /> */}
      <View style={styles.cursor}>
        <CursorIconSvg width={20} height={20} />
        <Text style={styles.cursorText}>Choose Motivational Tone</Text>
      </View>

      <View style={styles.chooseContainer}>
        <RadioButtonGroup
          containerStyle={{ gap: 12 }}
          selected={selected}
          onSelected={(value: number) => setSelected(Number(value))}
          radioBackground={Colors.light.primary_colors.sky_blue}
          radioStyle={{
            width: 16,
            height: 16,
            borderRadius: 100,
            borderColor: Colors.light.primary_colors.soft_white,
          }}
        >
          {options.map((option, index) => (
            <RadioButtonItem
              key={index}
              label={<Text style={styles.options}>{option.label}</Text>}
              value={option.value} // Assigning unique value
              onPress={() => {
                setSelected(Number(option.value)); // Update selected state
              }}
            />
          ))}
        </RadioButtonGroup>
      </View>
      <Pressable onPress={() => router.push("/(SignUp)")}>
        <LinearGradient
          colors={["#FF6F61", "#99433A"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go on..</Text>
        </LinearGradient>
      </Pressable>
      <Text
        style={[
          styles.cursorText,
          { textAlign: "center", marginTop: height * 0.018 },
        ]}
      >
        Don’t worry, you can change this later
      </Text>
    </SafeAreaView>
  );
};

export default motivation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flexDirection: "column",
    padding: width * 0.05,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight || 0 : 12,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "bold",
  },
  subTitle: {
    marginTop: height * 0.01,
    color: Colors.light.primary_colors.light_gray_purple,
    fontFamily: "regular",
  },
  svg: {
    resizeMode: "contain",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  italicSubheading: {
    color: Colors.light.primary_colors.mint_green,
    fontSize: 14,
    fontFamily: "italic",
    fontWeight: "400",
    textAlign: "center",
    marginTop: height * 0.04,
    width: width * 0.9,
    alignSelf: "center",
  },
  button: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // elevation: 8,
    backgroundColor: "linear-gradient(90deg, #FF6F61 5%, #99433A 87.61%)",
    boxShadow: "1px 4px 25px 5px rgba(255, 111, 97, 0.25)",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginTop: height * 0.02,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "medium",
    fontWeight: "600",
  },
  backButton: {
    padding: 4,
    // marginTop: Platform.OS == "android" ? (StatusBar.currentHeight || 0) + 12 : "18%",
    marginRight: "5%",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    backgroundColor: "#122435",
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  cursor: {
    width: width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    margin: 10,
  },
  cursorText: {
    fontFamily: "regular",
    fontSize: 14,
    fontWeight: "400",
    color: Colors.light.primary_colors.soft_white,
  },
  chooseContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 16,
    borderWidth: 1,
    borderColor: Colors.light.primary_colors.sky_blue,
    borderRadius: 12,
    paddingLeft: 14,
    paddingVertical: 11,
  },
  options: {
    color: Colors.light.primary_colors.soft_white,
    paddingLeft: 16,
    fontFamily: "regular",
    fontSize: 12,
    fontWeight: "400",
  },
});
