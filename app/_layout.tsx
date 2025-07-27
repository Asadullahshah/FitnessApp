import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "@/context/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    regular: require("../assets/fonts/Poppins-Regular.ttf"),
    bold: require("../assets/fonts/Poppins-Bold.ttf"),
    semiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    medium: require("../assets/fonts/Poppins-Medium.ttf"),
    light: require("../assets/fonts/Poppins-Light.ttf"),
    italic: require("../assets/fonts/Poppins-Italic.ttf"),
    protest: require("../assets/fonts/ProtestStrike-Regular.ttf"),
    marker: require("@/assets/fonts/PermanentMarker-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(Onboarding)" options={{ headerShown: false }} />
          <Stack.Screen name="(SignUp)" options={{ headerShown: false }} />
          <Stack.Screen name="(Login)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(EnterTheArena)"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="SurpriseDropScreen" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
