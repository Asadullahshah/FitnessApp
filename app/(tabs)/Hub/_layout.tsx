import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function HubLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colorScheme === "dark" ? "#0A0E1A" : "#0A0E1A",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="community" options={{ headerShown: false }} />
    </Stack>
  );
}
