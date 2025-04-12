import DumbleSvg from "@/components/DumbleSvg";
import HubSvg from "@/components/HubSvg";
import ProfileSvg from "@/components/ProfileSvg";
import { SettingsIconSvg } from "@/components/ui/SettingIconSvg";
import { TitleText } from "@/components/ui/TitleText";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import BackIconSvg from "@/components/ui/BackIconSvg";
import { pxToWidth, pxToHeight } from "../../utils";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.light.primary_colors.dark_gray,
          minHeight: 81,
          paddingTop: 20,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 6,
          borderTopStartRadius: 14,
          borderTopEndRadius: 14,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                {
                  borderColor: focused
                    ? Colors.light.primary_colors.sky_blue
                    : Colors.light.primary_colors.coral_red,
                },
                styles.tabLabelCircle,
              ]}
            >
              <FontAwesome
                name="home"
                size={24}
                color={
                  focused
                    ? Colors.light.primary_colors.sky_blue
                    : Colors.light.primary_colors.coral_red
                }
                style={{ justifyContent: "center" }}
              />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                {
                  borderColor: focused
                    ? Colors.light.primary_colors.sky_blue
                    : Colors.light.primary_colors.coral_red,
                },
                styles.tabLabelCircle,
              ]}
            >
              <DumbleSvg
                color={
                  focused
                    ? Colors.light.primary_colors.sky_blue
                    : Colors.light.primary_colors.coral_red
                }
              />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tabs.Screen
        name="hub"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                {
                  borderColor: focused
                    ? Colors.light.primary_colors.sky_blue
                    : Colors.light.primary_colors.coral_red,
                },
                styles.tabLabelCircle,
              ]}
            >
              <HubSvg
                color={
                  focused
                    ? Colors.light.primary_colors.sky_blue
                    : Colors.light.primary_colors.coral_red
                }
              />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <TitleText size={20}>My Profile</TitleText>,
          headerTitleAlign: "center",
          headerBackground: () => (
            <View
              style={{
                backgroundColor: Colors.light.secondary_colors.dark_navy,
                height: 50,
              }}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                {
                  borderColor: focused
                    ? Colors.light.primary_colors.sky_blue
                    : Colors.light.primary_colors.coral_red,
                },
                styles.tabLabelCircle,
              ]}
            >
              <ProfileSvg
                color={
                  focused
                    ? Colors.light.primary_colors.sky_blue
                    : Colors.light.primary_colors.coral_red
                }
              />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
          headerShown: true,
          headerStyle: {
            height: pxToHeight(156),
            backgroundColor: Colors.light.secondary_colors.dark_navy,
          },
          headerTitle: () => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: pxToHeight(32),
                  width: pxToWidth(341),
                  marginHorizontal: pxToWidth(25),
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Pressable onPress={() => console.log("Back pressed")}>
                  <BackIconSvg />
                </Pressable>
                <TitleText size={20}>My Profile</TitleText>
                <Pressable onPress={() => console.log("Settings pressed")}>
                  <SettingsIconSvg />
                </Pressable>
              </View>
              <View
                style={{
                  backgroundColor: Colors.dark.background,
                  borderRadius: 8,
                  height: pxToHeight(33),
                  width: pxToWidth(74),
                  marginTop: pxToHeight(19),
                  // marginBottom: pxToHeight(18),
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "marker",
                    fontSize: pxToHeight(20),
                    color: "white",
                  }}
                >
                  20🔥
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabLabelCircle: {
    borderWidth: 2,
    borderRadius: 36,
    padding: 12,
    height: 50,
    width: 50,
    justifyContent: "center",
  },
  headerContainer: {},
  header: {
    height: pxToHeight(32),
    width: "100%",
    marginTop: pxToHeight(16),
    marginHorizontal: pxToWidth(25),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
  },
  streakBox: {
    marginTop: 8,
    backgroundColor: Colors.light.primary_colors.sky_blue,
    borderRadius: 8,
    padding: 4,
  },
  streakText: {
    color: Colors.light.primary_colors.dark_gray,
    fontWeight: "bold",
  },
});
