import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GroupCardProps {
  imageSource: any;
  title: string;
  members: string;
  icon: React.ReactNode;
  onAddPress: () => void;
}

const SweatSpaceCard: React.FC<GroupCardProps> = ({ imageSource, title, members, icon, onAddPress }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            {icon}
          </View>
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
  cardContainer: {
    backgroundColor: "red",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    width: 36,
    height: 36,
    backgroundColor: "#112240",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  members: {
    color: "#ff6961",
    fontSize: 12,
    marginTop: 2,
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default SweatSpaceCard;
