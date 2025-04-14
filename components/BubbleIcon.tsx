import { Colors } from "@/constants/Colors";
import { pxToHeight } from "@/utils";
import { Image, StyleSheet, View } from "react-native";

export const BubbleIcon = ({ img }: { img: any }) => (
  <View style={styles.bubble}>
    <Image style={styles.image} source={img} />
  </View>
);

const styles = StyleSheet.create({
  bubble: {
    width: pxToHeight(50),
    height: pxToHeight(50),
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: Colors.light.primary_colors.sky_blue,
    backgroundColor: "#122439",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: pxToHeight(25),
    height: pxToHeight(25),
  },
});
