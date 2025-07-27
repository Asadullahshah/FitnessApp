import React, { createContext, useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import { apiService } from "@/lib/api";

interface User {
  userId: string;
  username: string;
  email: string;
  accessToken: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const userData = await apiService.getUserData();
      
      if (userData.userId && userData.username && userData.email && userData.accessToken) {
        setUser({
          userId: userData.userId,
          username: userData.username,
          email: userData.email,
          accessToken: userData.accessToken,
        });
      } else {
        setUser(null);
        // Redirect to onboarding if no user data
        router.replace("/(Onboarding)");
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setUser(null);
      router.replace("/(Onboarding)");
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await apiService.clearUserData();
      setUser(null);
      router.replace("/(Onboarding)");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signOut, checkAuth }}>
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
