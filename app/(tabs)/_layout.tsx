import DumbleSvg from "@/components/DumbleSvg";
import HubSvg from "@/components/HubSvg";
import ProfileSvg from "@/components/ProfileSvg";
import { TitleText } from "@/components/ui/TitleText";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import BackIconSvg from "@/components/ui/BackIconSvg";
import { SettingsIconSvg } from "@/components/ui/SettingIconSvg";
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
});
