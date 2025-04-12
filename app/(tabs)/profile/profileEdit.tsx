import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
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

export default function profileEdit() {
  return (
    <SafeAreaView style={styles.contentContainer}>
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
      <View style={styles.input}>
        <TextBox placeholder={"70"} customIcon={<WeightIconSvg />} />
      </View>
      <View style={styles.input}>
        <TextBox placeholder={"185"} customIcon={<HeightIconSvg />} />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.dark.background,
    flex: 1,
    alignItems: "center",
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
});
