import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const pxtowidth = (px: number) => (px / 390) * width;
const pxtoheight = (px: number) => (px / 844) * height;

interface OTPInputProps {
  digits: string[];
  setDigits: (digits: string[]) => void;
  focusedIndex: number | null;
  setFocusedIndex: (index: number | null) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({
  digits,
  setDigits,
  focusedIndex,
  setFocusedIndex,
}) => {
  const inputs = useRef<(TextInput | null)[]>([]);
  const [filledIndices, setFilledIndices] = useState<boolean[]>(
    Array(digits.length).fill(false)
  );

  const handleChange = (text: string, index: number) => {
    if (/^\d?$/.test(text)) {
      const newDigits = [...digits];
      newDigits[index] = text;
      setDigits(newDigits);

      const newFilledIndices = [...filledIndices];
      newFilledIndices[index] = text !== "";
      setFilledIndices(newFilledIndices);

      if (text && index < inputs.current.length - 1) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      if (digits[index] === "" && index > 0) {
        inputs.current[index - 1]?.focus();
      } else {
        const newDigits = [...digits];
        newDigits[index] = "";
        setDigits(newDigits);

        const newFilledIndices = [...filledIndices];
        newFilledIndices[index] = false;
        setFilledIndices(newFilledIndices);
      }
    }
  };

  return (
    <View style={styles.container}>
      {digits.map((digit, index) => (
        <TextInput
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
          style={[
            styles.input,
            focusedIndex === index && styles.inputFocused,
            filledIndices[index] && styles.inputFilled,
          ]}
          textAlign="center"
          // selectionColor="transparent"
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
          onKeyPress={(e) => handleKeyPress(e, index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    // height: pxtoheight(48),
    // width: pxtowidth(264),
    alignItems: "center",
    gap: pxtowidth(14),
    marginTop: pxtoheight(32),
    alignSelf: "center",
  },
  input: {
    width: pxtowidth(48),
    height: pxtoheight(48),
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: Colors.light.secondary_colors.dark_navy,
    textAlign: "center",
    fontSize: pxtowidth(18),
    fontFamily: "regular",
    color: "#B6B4C1",
    marginBottom: pxtoheight(395),
  },
  inputFocused: {
    borderColor: Colors.light.primary_colors.mint_green,
  },
  inputFilled: {
    borderColor: Colors.light.primary_colors.mint_green,
  },
});

export default OTPInput;
