import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
  StatusBar,
  Animated 
} from "react-native";
import SmartwatchBro from "@/assets/images/Smartwatch-bro.svg";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import GenderSelect from "@/components/GenderSelect";
import { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { shake } from "@/constants/Scripts";
import { apiService } from "@/lib/api";

const avatar = () => {
  const { width, height } = useWindowDimensions();

  const [username, setUsername] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [isCheckingUsername, setIsCheckingUsername] = useState<boolean>(false);
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if(username){
    AsyncStorage.setItem("username", username);
    console.log("username ===>", username)
  }
  }, [username]);


  const handleUserName = async () => {
    if (!username.trim()) {
      setNameError("Username is required.");
      shake(shakeAnim);
      return;
    }

    setIsCheckingUsername(true);
    setNameError("");

    try {
      const response = await apiService.checkUsernameAvailability(username.trim());
      
      if (response.available) {
        await AsyncStorage.setItem("username", username.trim());
        router.push("/motivation");
      } else {
        setNameError("Username is already taken. Please choose another one.");
        shake(shakeAnim);
      }
    } catch (error: any) {
      console.error("Username check error:", error);
      setNameError("Failed to check username availability. Please try again.");
      shake(shakeAnim);
    } finally {
      setIsCheckingUsername(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={styles.flexContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.heading}>
              <Text style={[styles.title, { color: Colors.light.primary_colors.coral_red }]}>Need <Text style={styles.title}>to</Text> Know</Text>
              <Text style={styles.title}>Who We're <Text style={[styles.title, { color: Colors.light.primary_colors.coral_red }]}>Yelling</Text> At</Text>
              <Text style={styles.subTitle}>Are you here to burn, build, or survive? We’ve got you!</Text>
            </View>

            <View style={styles.imageContainer}>
              {/* <Image source={require("@/assets/images/Smartwatch-bro.svg")} style={[styles.svg, { height: height * 0.4 }]} /> */}
              <SmartwatchBro /*width={width * 0.8} height={height * 0.4}*/ />
            </View>

            {/* Avatar Selection */}
            <GenderSelect />

            {/* Input Field */}
            <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
              {nameError && <Text style={{ color: "red", fontSize: 12, fontFamily: "regular", fontWeight: 400, marginBottom: 10, textAlign: "center" }}>{nameError}</Text>}
            <TextInput
              style={[styles.input, { borderColor: nameError ? "red" : Colors.light.primary_colors.light_gray_purple }]}
              textAlign="center"
              placeholder="Choose a Username"
              
              value={username}
              onChangeText={setUsername}
              placeholderTextColor={Colors.light.primary_colors.light_gray_purple}
            />
            </Animated.View>

            {/* Button */}
            <Pressable onPress={handleUserName} disabled={isCheckingUsername}>
              <LinearGradient
                colors={["#FF6F61", "#99433A"]}
                locations={[0.05, 0.88]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.button, { opacity: isCheckingUsername ? 0.7 : 1 }]}
              >
                <Text style={styles.buttonText}>
                  {isCheckingUsername ? "Checking..." : "Go on.."}
                </Text>
              </LinearGradient>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default avatar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: "5%",
  },
  heading: {
    marginTop: Platform.OS == "android" ? (StatusBar.currentHeight || 0) + 12 : 12, 
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "bold",
  },
  subTitle: {
    marginTop: 10,
    color: Colors.light.primary_colors.light_gray_purple,
    fontFamily: "regular",
    fontWeight: 400
  },
  svg: {
    resizeMode: "contain",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: "#847F7E",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "medium",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    color: Colors.light.primary_colors.soft_white,
    fontFamily: 'regular',
    fontWeight: 400,
    borderRadius: 12,
    paddingVertical: 13,
    marginBottom: 10,
  },
});