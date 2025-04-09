import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

const genderOptions = [
  { label: "Male", icon: require("../assets/images/male.png") },
  { label: "Female", icon: require("../assets/images/female.png") },
];
const GenderSelect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState<any>("");

  useEffect(() => {
    if (selectedGender) {
      console.log("selectedGender ===>", selectedGender)
      AsyncStorage.setItem("gender", JSON.stringify(selectedGender.label));    
    }
  }, [selectedGender]);
  

  return (
    <View style={styles.container}>
      {/* Select Button */}
      <Pressable
        style={styles.selectBox}
        onPress={() => setIsVisible(!isVisible)}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          {selectedGender ? (
            <>
              <Image source={selectedGender.icon} style={styles.icon} />
              <Text style={[styles.selectedText]}>{selectedGender.label}</Text>
            </>
          ) : (
            <>
              <Image
                source={require("../assets/images/male.png")}
                style={styles.icon}
              />
              <Text style={styles.selectedText}>Avatar</Text>
            </>
          )}
          <AntDesign name="up" size={16} color="#FFF" />
        </View>
      </Pressable>

      {/* Dropdown Options */}
      {isVisible && (
        <View style={styles.dropdown}>
          {genderOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => {
                setSelectedGender(option);
                setIsVisible(false);
              }}
            >
              <Image source={option.icon} style={styles.icon} />
              <Text
                style={[
                  styles.optionText,
                  option.label === selectedGender.label
                    ? { color: Colors.light.primary_colors.sky_blue }
                    : { color: Colors.light.primary_colors.soft_white },
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignSelf: "center",
    marginTop: Platform.OS === "ios" ? 16 : 16,
  },
  selectBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 12,
    justifyContent: "space-between",
  },
  selectedText: {
    color: Colors.light.primary_colors.soft_white,
    fontSize: 16,
  },
  dropdown: {
    position: "absolute",
    top: -150,
    backgroundColor: "#1C2A39",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4FC3F7",
    padding: 12,
    boxShadow: "2px 0px 4px 6px rgba(50, 213, 241, 0.5)",
    boxSizing: "border-box",
    elevation: 5,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default GenderSelect;
