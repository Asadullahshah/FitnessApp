import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Thumbsup from "../ThumbsupSvg";
import CommentsSvg from "../CommentsSvg";

interface ActivityCardProps {
  title: string;
  description: string;
  likes: number;
  comments: number;
}

const { width: windowWidth } = Dimensions.get("window");

const TrendingConversations: React.FC<ActivityCardProps> = ({
  title,
  description,
  likes,
  comments,
}) => {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }} // Dummy avatar
            style={styles.avatar}
          />
          <View style={{ marginLeft: 10, width: "90%" }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.iconWithText}>
            <Thumbsup width={14} height={14} />
            <Text style={styles.bottomText}>{likes} gave kudos</Text>
          </View>
          <View style={styles.iconWithText}>
            <CommentsSvg width={13} height={14} />
            <Text style={styles.bottomText}>{comments} comments</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0F1E2D",
    width: windowWidth - 20,
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: "red",
    shadowOffset: {
      width: 100,
      height: 200,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 8,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 20,
  },
  title: {
    color: "#fff",
    fontWeight: 500,
    lineHeight: 15,
    fontFamily: "regular",
    fontSize: 12,
  },
  description: {
    color: "#ccc",
    marginTop: 4,
    fontSize: 10,
    flexShrink: 1,
    fontWeight: 300,
    lineHeight: 15,
    fontFamily: "regular",
  },
  bottomSection: {
    flexDirection: "row",
    paddingHorizontal: "10%",
    justifyContent: "space-between",
    // marginTop: 8,
  },
  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  bottomText: {
    color: "#ccc",
    marginLeft: 6,
    fontSize: 10,
    fontWeight: 300,
    fontFamily: "regular",
  },
});

export default TrendingConversations;
