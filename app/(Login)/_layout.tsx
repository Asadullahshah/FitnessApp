import { router, Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect } from "react";
import * as Linking from "expo-linking";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  useEffect(() => {
    const handleDeepLink = ({ url }: { url: string }) => {
      const parsed = Linking.parse(url);
      console.log("🔗 Deep link received:", url);
      console.log("Parsed link:", parsed);

      // Example: myapp://(Login)/resetpass -> path: (Login)/resetpass
      if (parsed.path === "(Login)/resetpass") {
        router.push("/(Login)/resetpass");
      }
    };

    // Add listener for deep link events
    const subscription = Linking.addEventListener("url", handleDeepLink);

    // Check if app was opened from a deep link
    Linking.getInitialURL().then((url) => {
      if (url) handleDeepLink({ url });
    });

    return () => {
      subscription.remove();
    };
  }, []);
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
      <Stack.Screen name="forgotpass" options={{ headerShown: false }} />
      <Stack.Screen name="resetpass" options={{ headerShown: false }} />
      <Stack.Screen name="newpass" options={{ headerShown: false }} />
    </Stack>
  );
}
