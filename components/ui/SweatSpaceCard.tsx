import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { formatMemberCount } from "@/constants/DummyData";
import { Ionicons } from "@expo/vector-icons";

interface SweatSpaceCardProps {
  id: string;
  title: string;
  description: string;
  banner_url: any;
  icon_url: any;
  member_count: number;
  is_featured: boolean;
  is_private: boolean;
  status: string;
  owner: {
    first_name: string;
    last_name: string;
    username: string;
    profile_picture_url: string;
  };
  onAddPress?: () => void;
  onPress?: () => void;
}

const SweatSpaceCard: React.FC<SweatSpaceCardProps> = ({
  title,
  description,
  banner_url,
  icon_url,
  member_count,
  is_featured,
  onAddPress,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Image source={banner_url} style={styles.bannerImage} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Image source={icon_url} style={styles.icon} />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.members}>{formatMemberCount(member_count)}</Text>
          </View>
        </View>
        <TouchableOpacity 
          onPress={(e) => {
            e.stopPropagation(); // Prevent triggering the card's onPress
            onAddPress?.();
          }} 
          style={styles.addButtonContainer}
        >
          <LinearGradient
            colors={[Colors.light.primary_colors.coral_red, "#99433A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.addButton}
          >
            {/* Icon options:
              - Ionicons name="add" size={20} - Simple plus
              - Ionicons name="add-circle" size={24} - Plus in circle
              - Ionicons name="add-outline" size={20} - Outlined plus
              - Ionicons name="add-sharp" size={20} - Sharp/angular plus
            */}
            <Ionicons name="add" size={14} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 14,
    width: 200,
    // marginHorizontal: 8,
  },
  bannerImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderRadius: 12,
  },
  content: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingRight: 5,
    marginTop: 12,
  },
  textContainer: {
    // width: 84,
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
    marginRight: 12,
  },
  iconContainer: {
    width: 20,
    height: 20,
    backgroundColor: Colors.light.secondary_colors.dark_navy,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  textContent: {
    // width: 84,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
    lineHeight: 18,
    // marginBottom: 4,
  },
  members: {
    color: Colors.light.primary_colors.coral_red,
    fontSize: 10,
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
    lineHeight: 12,
  },
  addButtonContainer: {
    alignSelf: "flex-start",
  },
  addButton: {
    width: 24,
    height: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SweatSpaceCard;
