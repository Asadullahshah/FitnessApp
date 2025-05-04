import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

interface GroupCardProps {
  imageSource: any;
  title: string;
  members: string;
  icon: React.ReactNode;
  onAddPress: () => void;
}

const SweatSpaceCard: React.FC<GroupCardProps> = ({
  imageSource,
  title,
  members,
  icon,
  onAddPress,
}) => {
  return (
    <View
      style={{
        marginRight: 10,
        // height: 200,
        width: 190,
        marginHorizontal: 10,
        // backgroundColor: 'red'
      }}
    >
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>{icon}</View>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.members}>{members}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onAddPress}>
          <LinearGradient
            colors={["#FF6F61", "#99433A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.addButton}
          >
            <Text style={styles.plusText}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 108,
    resizeMode: "cover",
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    marginTop: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    width: 20,
    height: 20,
    backgroundColor: "#112240",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 15,
    fontFamily: "regular",
  },
  members: {
    color: Colors.light.primary_colors.coral_red,
    fontSize: 8,
    fontWeight: 400,
    lineHeight: 10,
    fontFamily: "regular",
    marginTop: 2,
  },
  addButton: {
    width: 24,
    height: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default SweatSpaceCard;
