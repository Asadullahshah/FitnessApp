import React from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ViewStyle,
} from "react-native";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface SafeViewProps {
  mTop?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const SafeView: React.FC<SafeViewProps> = ({ mTop, children, style }) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          marginTop:
            Platform.OS == "android"
              ? (StatusBar.currentHeight || 0) + pxtoheight(0 + (mTop ?? 0))
              : pxtoheight(0 + (mTop ?? 0)),
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
