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
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import GenderSelect from "@/components/GenderSelect";
import { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { shake } from "@/constants/Scripts";

const avatar = () => {
  const { width, height } = useWindowDimensions();

  const [username, setUsername] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if(username){
    AsyncStorage.setItem("username", username);
    console.log("username ===>", username)
  }
  }, [username]);


  const handleUserName = () => {
    if (!username.trim()) {
      setNameError("Username is required.");
      shake(shakeAnim);
    } else {
      setNameError("");
      router.push("/motivation");
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
              <Image source={require("@/assets/images/Smartwatch-bro.png")} style={[styles.svg, { height: height * 0.4 }]} />
            </View>

            {/* Avatar Selection */}
            <GenderSelect />

            {/* Input Field */}
            <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
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
            <Pressable onPress={handleUserName}>
              <LinearGradient
                colors={["#FF6F61", "#99433A"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Go on..</Text>
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
    marginTop: 20,
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
    marginBottom: 20,
  },
});