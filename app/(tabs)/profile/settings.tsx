import {
  SafeAreaView,
  View,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Options } from "@/components/Options";
import { CountIconSvg } from "@/components/CountIconSvg";
import { SoundIconSvg } from "@/components/SoundIconSvg";
import { pxToHeight, pxToWidth } from "@/utils";
import { TitleText } from "@/components/ui/TitleText";
import { generalIcons, supportUsIcons, voiceIcons } from "@/constants/Icons";
import { Platform } from "react-native";
import { StatusBar } from "react-native";

const workoutSettings = ["Countdown Time", "Rest Set", "Sound"];
const workoutDescriptions = ["15 secs", "30 secs", ""];
const workoutSettingsIcons = [CountIconSvg, CountIconSvg, SoundIconSvg];

const voiceOptions = [
  "Text Voice",
  "Select TTS engine",
  "Download TTS Engine",
  "Voice Language",
  "Device TTS Settings",
];

const voiceDescriptions = [
  "",
  "Google Text-to-speech Engine",
  "",
  "Default",
  "",
];

const generalSettings = [
  "Health Data",
  "Remind me to workout everyday",
  "Language Option",
  "Sync to Google",
  "Share with friends",
];

const generalDescriptions = ["", "3x daily", "Default", ""];

const supportUs = ["Rate Us", "Feedback", "Privacy Policy"];

const supportUsDescriptions = ["", "", ""];

const settingName: Record<
  "Workout" | "Voice Options" | "General Settings" | "Support Us",
  { options: string[]; descriptions: string[]; icons: (() => JSX.Element)[] }
> = {
  Workout: {
    options: workoutSettings,
    descriptions: workoutDescriptions,
    icons: workoutSettingsIcons,
  },
  "Voice Options": {
    options: voiceOptions,
    descriptions: voiceDescriptions,
    icons: voiceIcons,
  },
  "General Settings": {
    options: generalSettings,
    descriptions: generalDescriptions,
    icons: generalIcons,
  },
  "Support Us": {
    options: supportUs,
    descriptions: supportUsDescriptions,
    icons: supportUsIcons,
  },
};

export default function settings() {
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
          paddingVertical: 25,
        }}
      />
      <ScrollView style={styles.contentContainer}>
        {Object.keys(settingName).map((sectionKey, sectionIndex) => (
          <View key={sectionIndex}>
            <TitleText
              style={styles.optionsHeader}
              color={Colors.light.primary_colors.soft_white}
              size={16}
            >
              {sectionKey}
            </TitleText>
            <View style={styles.optionsContainer}>
              {settingName[sectionKey as keyof typeof settingName].options.map(
                (option, optionIndex) => (
                  <Pressable
                    key={`${sectionKey}-${optionIndex}`}
                    onPress={() => {
                      console.log(`${option} Pressed`);
                    }}
                  >
                    <Options
                      name={option}
                      IconL={
                        settingName[sectionKey as keyof typeof settingName]
                          .icons[optionIndex]
                      }
                      key={optionIndex}
                    >
                      {
                        settingName[sectionKey as keyof typeof settingName]
                          .descriptions[optionIndex]
                      }
                    </Options>
                  </Pressable>
                )
              )}
            </View>
          </View>
        ))}
        <View style={styles.blankBottom}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    backgroundColor: Colors.dark.background,
  },
  contentContainer: {
    marginLeft: pxToWidth(24),
    flex: 1,
  },
  optionsContainer: {
    marginTop: pxToHeight(12),
    width: pxToWidth(342),
    flexDirection: "column",
    gap: pxToHeight(12),
  },
  optionsHeader: {
    marginTop: pxToHeight(24),
    alignSelf: "flex-start",
  },
  blankBottom: {
    height: pxToHeight(24),
  },
});
