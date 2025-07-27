import { router, Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TitleText } from "@/components/ui/TitleText";
import { Colors } from "@/constants/Colors";
import { View } from "react-native";
import { ButtonBack } from "@/components/ui/ButtonBack";
import BackIconSvg from "@/components/ui/BackIconSvg";
import { useState } from "react";
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [state, setState] = useState();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: () => (
          <TitleText size={16} style={{ alignSelf: "center" }}>
            Entering the Arena...
          </TitleText>
        ),
        headerStyle: {
          backgroundColor: Colors.light.secondary_colors.dark_navy,
        },
        headerTitleAlign: "center",
        headerBackVisible: false,
        headerLeft: () => (
          <BackIconSvg
            onPress={() => router.back()}
            style={{ marginLeft: 20 }}
          />
        ),
        contentStyle: {
          backgroundColor: colorScheme === "dark" ? "#0A0E1A" : "#0A0E1A",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen
        name="ready"
        options={{ headerShown: true, headerBackVisible: false }}
      />
      <Stack.Screen name="countdown" options={{ headerShown: false }} />
      <Stack.Screen name="workoutVideo" options={{ headerShown: false }} />
    </Stack>
  );
}
