import { router, Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { TitleText } from "@/components/ui/TitleText";
import { Text, View } from "react-native";
import { SettingsIconSvg } from "@/components/ui/SettingIconSvg";
import BackIconSvg from "@/components/ui/BackIconSvg";

export default function HomeStackLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        contentStyle: {
          backgroundColor: colorScheme === "dark" ? "#0A0E1A" : "#0A0E1A",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="notification"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <TitleText size={20}>Notifications</TitleText>,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => (
            <BackIconSvg
              onPress={() => router.back()}
              style={{ marginLeft: 20 }} />
          ),
          headerRight: () => (
            <SettingsIconSvg
              onPress={() => router.back()}
              style={{ marginRight: 20 }}
            />
          ),
          headerBackground: () => (
            <View
              style={{
                backgroundColor: Colors.light.secondary_colors.dark_navy,
                height: 50,
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="surprise" options={{ headerShown: false }} />
    </Stack>
  );
}
