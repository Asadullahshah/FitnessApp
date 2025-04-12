import { Redirect } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        // Refresh token to ensure it's valid
        const { error } = await supabase.auth.refreshSession();
        if (error) {
          console.log("!!!!!!!!!!!!!!!!Session refresh failed:", error.message);
          setSession(null);
        } else {
          setSession(session);
        }
      } else {
        setSession(null);
      }

      setLoading(false);
    };

    checkSession();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Show loading indicator while checking session
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // this is the old code /////////////////////
  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])
  // {session && session.user && <Text>{session.user.id}</Text>}
  // return <Redirect href="/(Onboarding)" />;
  // if(!session) return <Redirect href="/(Login)" />;
  ///////////////////////////
  if (session) {
    return <Redirect href={"/(tabs)/(home)"} />; // Redirect to the main app or dashboard
  } else {
    return <Redirect href="/(Onboarding)" />;
  }
}
