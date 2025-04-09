import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TitleText } from "@/components/ui/TitleText";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: () => <TitleText size={16}>Entering the Arena...</TitleText>,
        headerStyle: {
          backgroundColor: Colors.light.secondary_colors.dark_navy,

        },
        contentStyle: {
          backgroundColor: colorScheme === "dark" ? "#0A0E1A" : "#0A0E1A",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="ready" options={{ headerShown: true, headerBackVisible: false }} />
      <Stack.Screen name="countdown" options={{ headerShown: false }} />
      <Stack.Screen name="workoutVideo" options={{ headerShown: false }} />
    </Stack>
  );
}
