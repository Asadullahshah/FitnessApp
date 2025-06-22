import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { router } from "expo-router";

interface AuthContextType {
  session: Session | null;
  accessToken: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // useEffect(() => {
  //   const getSession = async () => {
  //     const { data } = await supabase.auth.getSession();
  //     let currentSession = data.session;

  //     // If there's no session, try refreshing the token
  //     if (!currentSession) {
  //       console.log("Session expired, trying to refresh token...");
  //       const { data: refreshedSession, error } =
  //         await supabase.auth.refreshSession();

  //       if (refreshedSession?.session) {
  //         currentSession = refreshedSession.session;
  //       } else {
  //         console.log("Token refresh failed:", error);
  //         router.replace("/(Onboarding)"); // Redirect to login if refresh fails
  //       }
  //     }

  //     setSession(currentSession);
  //     setAccessToken(currentSession?.access_token || null);
  //   };

  //   getSession();

  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (_event, newSession) => {
  //       if (!newSession) {
  //         console.log("User logged out or session expired.");
  //         router.replace("/(Login)"); // Redirect to login
  //       }
  //       setSession(newSession);
  //       setAccessToken(newSession?.access_token || null);
  //     }
  //   );

  //   return () => {
  //     authListener.subscription.unsubscribe();
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ session, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
