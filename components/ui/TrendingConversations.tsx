import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Thumbsup from "../ThumbsupSvg";
import CommentsSvg from "../CommentsSvg";
import { formatNumber } from "@/constants/DummyData";

interface TrendingConversationsProps {
  id: string;
  author: {
    first_name: string;
    last_name: string;
    username: string;
    profile_picture_url: string;
  };
  title: string;
  content: string;
  upvote_count: number;
  comment_count: number;
  created_at: string;
  community: {
    title: string;
    slug: string;
  };
}

const { width: windowWidth } = Dimensions.get("window");

const TrendingConversations: React.FC<TrendingConversationsProps> = ({
  id,
  author,
  content,
  upvote_count,
  comment_count,
}) => {
  const router = useRouter();

  const handlePostPress = () => {
    router.push(`/Hub/community/post/${id}`);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePostPress} activeOpacity={0.7}>
      <View style={styles.topSection}>
        <Image
          source={{ uri: author.profile_picture_url }}
          style={styles.avatar}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.authorName}>{author.first_name} {author.last_name}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.iconWithText}>
          <Thumbsup width={14} height={14} />
          <Text style={styles.bottomText}>{formatNumber(upvote_count)} gave kudos</Text>
        </View>
        <View style={styles.iconWithText}>
          <CommentsSvg width={13} height={14} />
          <Text style={styles.bottomText}>{comment_count} comments</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.secondary_colors.navy_blue,
    width: windowWidth - 40,
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  authorName: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 4,
  },
  content: {
    color: "#E0E0E0",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    lineHeight: 18,
    flexShrink: 1,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  bottomText: {
    color: "#B8B4C1",
    fontSize: 11,
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
  },
});

export default TrendingConversations;
