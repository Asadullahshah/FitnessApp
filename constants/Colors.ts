/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#0A0E1A",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    inputText: "#B6B4C1",
    primary_colors: {
      coral_red: "#FF6F61",
      sky_blue: "#4FC3F7",
      mint_green: "#A5D6A7",
      soft_white: "#F2F2F2",
      light_gray_purple: "#B8B4C1",
      dark_gray: "#182025",
    },
    secondary_colors: {
      deep_black: "#181D25",
      navy_blue: "#122435",
      dark_navy: "#0F1B2A",
      soft_gray: "#D6D6D6",
      medium_gray: "#C2C2C2",
      dark_gray: "#878787",
    },
  },
  dark: {
    text: "#ECEDEE",
    background: "#0A0E1A",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    // test comment
  },
};
