import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "https://forge-lnyk.onrender.com";

export interface SignupRequest {
  avatar: "male" | "female";
  email: string;
  motivational_tone_id: number;
  password: string;
  username: string;
}

export interface SignupResponse {
  access_token: string;
  id: string;
  is_email_verified: boolean;
}

export interface VerifyEmailRequest {
  code: string;
  email: string;
}

export interface VerifyEmailResponse {
  user: {
    id: number;
    username: string;
    email: string;
    profile_picture_url: string;
    is_verified: boolean;
  };
  access_token: string;
}

export interface UsernameAvailabilityResponse {
  available: boolean;
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  id: string;
  is_email_verified: boolean;
}

export interface HealthResponse {
  status: string;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      console.log("response", response);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Health check
  async checkHealth(): Promise<HealthResponse> {
    return this.request<HealthResponse>("/");
  }

  // Test API connection
  async testConnection(): Promise<boolean> {
    try {
      const response = await this.checkHealth();
      return response.status === "ok";
    } catch (error) {
      console.error("API connection test failed:", error);
      return false;
    }
  }

  // Check username availability
  async checkUsernameAvailability(username: string): Promise<UsernameAvailabilityResponse> {
    return this.request<UsernameAvailabilityResponse>(`/auth/username/check`, {
      method: "POST",
      body: JSON.stringify({ username }),
    });
  }

  // Signup
  async signup(data: SignupRequest): Promise<SignupResponse> {
    return this.request<SignupResponse>("/auth/register/email", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Verify email
  async verifyEmail(data: VerifyEmailRequest): Promise<VerifyEmailResponse> {
    return this.request<VerifyEmailResponse>("/auth/verify-email", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Store user data locally
  async storeUserData(access_token: string, id: string, is_email_verified:boolean): Promise<void> {
    await AsyncStorage.setItem("access_token", access_token);
    await AsyncStorage.setItem("id", id);
    await AsyncStorage.setItem("is_email_verified", is_email_verified.toString());
    // if (access_token) {
    //   await AsyncStorage.setItem("accessToken", accessToken);
    // }
  }

  // Get stored user data
  async getUserData(): Promise<{
    userId: string | null;
    username: string | null;
    email: string | null;
    accessToken: string | null;
  }> {
    const userId = await AsyncStorage.getItem("userId");
    const username = await AsyncStorage.getItem("username");
    const email = await AsyncStorage.getItem("email");
    const accessToken = await AsyncStorage.getItem("accessToken");
    
    return { userId, username, email, accessToken };
  }

  // Login
  async login(data: LoginRequest): Promise<LoginResponse> {
    return this.request<LoginResponse>("/auth/login/email", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Clear stored user data
  async clearUserData(): Promise<void> {
    await AsyncStorage.removeItem("userId");
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("email");
    await AsyncStorage.removeItem("accessToken");
  }
}

export const apiService = new ApiService(); 