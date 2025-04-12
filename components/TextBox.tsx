import React, { Children, useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import icons from Expo
import { Colors } from "@/constants/Colors";
import { pxToHeight, pxToWidth } from "@/utils";

type CustomIconProps = {
  children: React.ReactNode; // Accepts any valid React elements
};

const CustomIcon: React.FC<CustomIconProps> = ({ children }) => (
  <View style={styles.leftIcon}>{children}</View>
);

const TextBox = ({
  customIcon,
  leftIcon,
  rightIcon,
  secureTextEntry = false,
  onChangeText,
  value,
  placeholder,
  ...props
}: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      {/* Left Icon */}
      {customIcon ? (
        <CustomIcon>{customIcon}</CustomIcon>
      ) : leftIcon ? (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color="#ccc"
          style={styles.leftIcon}
        />
      ) : null}

      {/* Text Input */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        secureTextEntry={secureTextEntry ? isPasswordVisible : false}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />

      {/* Right Icon (Password Toggle) */}
      {rightIcon && (
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={() =>
            secureTextEntry && setIsPasswordVisible(!isPasswordVisible)
          }
        >
          <MaterialCommunityIcons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={20}
            color="#ccc"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.secondary_colors.dark_navy,
    borderRadius: 12,
    height: pxToHeight(48),
    width: pxToWidth(342),
    // paddingHorizontal: pxToWidth(12),
    // paddingVertical: pxToHeight(14),
  },
  leftIcon: {
    marginRight: pxToWidth(14),
    marginLeft: pxToWidth(16),
  },
  input: {
    flex: 1,
    color: Colors.light.inputText,
    fontSize: pxToWidth(14),
    fontFamily: "regular",
    // fontWeight: 400,
  },
  rightIcon: {
    marginLeft: pxToWidth(10),
  },
});

export default TextBox;
