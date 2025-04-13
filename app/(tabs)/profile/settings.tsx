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

const workoutSettings = ["Countdown Time", "Rest Set", "Sound"];
const workoutDescriptions = ["15 secs", "15 secs", ""];
const workoutSettingsIcons = [CountIconSvg, CountIconSvg, SoundIconSvg];

const voiceOptions = [
  "Text Voice",
  "Select TTS engine",
  "Download TTS Engine",
  "Voice Language",
  "Device TTS Settings",
];

const generalSettings = [
  "Health Data",
  "Remind me to workout everyday",
  "Language Option",
  "Sync to Google",
  "Share with friends",
];

const supportUs = ["Rate Us", "Feedback", "Privacy Policy"];

export default function settings() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <TitleText
          style={styles.optionsHeader}
          color={Colors.light.primary_colors.soft_white}
          size={16}
        >
          Workout
        </TitleText>
        <View style={styles.optionsContainer}>
          {workoutSettings.map((v, i) => (
            <Pressable
              key={i}
              onPress={() => {
                console.log(`${v} Pressed`);
              }}
            >
              <Options name={v} IconL={workoutSettingsIcons[i]} key={i}>
                {workoutDescriptions[i]}
              </Options>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
