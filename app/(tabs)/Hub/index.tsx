import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import TrendingConversations from "@/components/ui/TrendingConversations";
import SweatSpaceCard from "@/components/ui/SweatSpaceCard";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { TitleText } from "@/components/ui/TitleText";
import ChallengeCard from "@/components/ui/ChallengeCard";
import { hubDummyData } from "@/constants/DummyData";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function HubScreen() {
  const scrollX = useSharedValue(0);
  const router = useRouter();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const handleTopNavPress = (item: any) => {
    console.log(`Navigating to ${item.name}`);
    // TODO: Add navigation logic here
  };

  const handleSweatSpacePress = (space: any) => {
    console.log(`Opening community: ${space.title}`);
    router.push(`/(tabs)/Hub/community/${space.id}` as any);
  };

  const handleSweatSpaceAdd = (space: any) => {
    console.log(`Joining ${space.title}`);
    // TODO: Add join logic here
  };

  const handleChallengePress = (challenge: any) => {
    console.log(`Joining challenge: ${challenge.title}`);
    // TODO: Add challenge join logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>The</Text>
        <Text style={styles.title}>
          <Text style={[styles.title, styles.sweatText]}> Sweat </Text>
          Society
        </Text>
      </View>

      {/* Top Navigation */}
      <View style={styles.topNav}>
        {hubDummyData.topNavItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.navItem}
            onPress={() => handleTopNavPress(item)}
          >
            <View style={styles.circle}>
              <Image source={item.icon} style={styles.navIcon} />
            </View>
            <Text style={styles.navText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Main Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* Trending Conversations Section */}
        <View style={styles.trendingSection}>
          <View style={styles.trendingSectionHeader}>
            <Text style={styles.sectionTitle}>
              Trending conversations 🔥
            </Text>
          </View>
          
          <Animated.FlatList
            data={hubDummyData.trendingPosts}
            renderItem={({ item }) => <TrendingConversations {...item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            contentContainerStyle={styles.trendingList}
            snapToInterval={width} // Snap to each post width
            decelerationRate="fast"
            bounces={false}
          />
          
          <View style={styles.scrollIndicatorContainer}>
            <ScrollIndicator
              scrollX={scrollX}
              itemCount={hubDummyData.trendingPosts.length}
              itemWidth={width} // Exact width of each trending post card
            />
          </View>
        </View>

        {/* Sweat Spaces Section */}
        <View style={styles.sweatSpacesSection}>
          <View style={styles.sectionHeader}>
            <TitleText size={16} color="#fff">
              Sweat Spaces
            </TitleText>
            <TouchableOpacity>
              <Text style={styles.seeMore}>see more</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={hubDummyData.sweatSpaces}
            renderItem={({ item }) => (
              <SweatSpaceCard
                {...item}
                onAddPress={() => handleSweatSpaceAdd(item)}
                onPress={() => handleSweatSpacePress(item)}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sweatSpacesList}
          />
        </View>

        {/* Challenges Section */}
        <View style={styles.challengesSection}>
          <Text style={styles.sectionTitle}>Join the challenge</Text>
          
          {hubDummyData.challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              {...challenge}
              onPress={() => handleChallengePress(challenge)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const windowWidth = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    color: "#fff",
    lineHeight: 34,
  },
  sweatText: {
    color: Colors.light.primary_colors.coral_red,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 20,
    marginBottom: 32,
  },
  navItem: {
    alignItems: "center",
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.light.primary_colors.sky_blue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    backgroundColor: Colors.light.secondary_colors.dark_navy,
  },
  navIcon: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  navText: {
    color: Colors.light.primary_colors.mint_green,
    fontSize: 11,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "center",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  trendingSection: {
    marginBottom: 32,
  },
  trendingSectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
    alignItems: "flex-start",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    fontWeight: "700",
    color: "#fff",
  },
  seeMore: {
    color: "#E0E0E0",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
  },
  trendingList: {
    paddingHorizontal: 0,
  },
  scrollIndicatorContainer: {
    width: width - 40,
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 10,
  },
  sweatSpacesSection: {
    marginBottom: 40,
  },
  sweatSpacesList: {
    paddingHorizontal: 20,
  },
  challengesSection: {
    flexDirection: "column",
    paddingHorizontal: 20,
    gap: 12,
  },
});
