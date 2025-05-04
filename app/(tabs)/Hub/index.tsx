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
import { sub } from "date-fns";
import SweatSpaceCard from "@/components/ui/SweatSpaceCard";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { TitleText } from "@/components/ui/TitleText";
import { LinearGradient } from "expo-linear-gradient";
import ChallengeCard from "@/components/ui/ChallengeCard";

const navData = [
  {
    name: "Friends",
    icon: require("@/assets/images/friends.png"),
  },
  {
    name: "Achievements",
    icon: require("@/assets/images/achivements.png"),
  },
  {
    name: "Leaderboard",
    icon: require("@/assets/images/leaderboard.png"),
  },
  {
    name: "Guides",
    icon: require("@/assets/images/guides.png"),
  },
];

const sweatSpaceDummyData = [
  {
    id: "1",
    imageSource: require("@/assets/images/whats-new.png"), // replace with valid image path
    title: "Sweat Space 1",
    members: "150+ members",
    icon: <MaterialIcons name="fitness-center" size={10} color="#fff" />,
    onAddPress: () => console.log("Add Sweat Space 1"),
  },
  {
    id: "2",
    imageSource: require("@/assets/images/chit-chat.png"),
    title: "Morning Burn",
    members: "200+ members",
    icon: <MaterialIcons name="whatshot" size={10} color="#fff" />,
    onAddPress: () => console.log("Add Morning Burn"),
  },
  {
    id: "3",
    imageSource: require("@/assets/images/whats-new.png"),
    title: "HIIT Club",
    members: "120+ members",
    icon: <MaterialIcons name="timer" size={10} color="#fff" />,
    onAddPress: () => console.log("Add HIIT Club"),
  },
];

const dummyData = [
  {
    id: 1,
    title: "Fitness Guru",
    description:
      "New feature dropped! Check out the Leaderboard for updates 🏆",
    likes: 120,
    comments: 45,
    date: sub(new Date(), { days: 2 }).toDateString(),
  },
  {
    id: 2,
    title: "Fitness Guru",
    description:
      "New feature dropped! Check out the Leaderboard for updates 🏆",
    likes: 120,
    comments: 45,
    date: sub(new Date(), { days: 2 }).toDateString(),
  },
  {
    id: 3,
    title: "Best workout routines ",
    description:
      "What works for you? New feature dropped! Check out the Leaderboard for updates New feature dropped! Check out the Leaderboard for updates",
    likes: 200,
    comments: 60,
    date: sub(new Date(), { days: 3 }).toDateString(),
  },
];

const john = require("@/assets/images/john.png");
const jane = require("@/assets/images/ana.png");
const sarah = require("@/assets/images/bella.png");

const sweatSpaceImage = require("@/assets/images/whats-new.png");
const { width } = Dimensions.get("window");
export default function index() {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.title}>The</Text>
        <Text style={styles.title}>
          <Text
            style={[
              styles.title,
              { color: Colors.light.primary_colors.coral_red },
            ]}
          >
            Sweat
          </Text>{" "}
          Society{" "}
        </Text>
      </View>
      {/* Friends, Achivements, leaderboard, guides */}
      <View style={styles.topNav}>
        {navData.map((item, index) => (
          // using item.name as router name we can navigate to the respective screen
          <TouchableOpacity
            key={index}
            style={{ alignItems: "center" }}
            onPress={() => console.log(item.name)}
          >
            <View style={styles.circle}>
              <Image source={item.icon} style={{ width: 80, height: 80 }} />
            </View>
            <Text
              style={{
                color: Colors.light.primary_colors.mint_green,
                fontSize: 10,
                fontFamily: "regular",
                fontWeight: 500,
                alignSelf: "center",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* this is where we start the scrollView */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.trendingConvo}>
          <Text style={styles.subTitle}>Trending Conversations</Text>
          <Animated.FlatList
            data={dummyData}
            renderItem={({ item }) => <TrendingConversations {...item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={true}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
          />
          <View style={{ alignSelf: "flex-end", paddingHorizontal: 20 }}>
            <ScrollIndicator
              scrollX={scrollX}
              itemCount={dummyData.length}
              itemWidth={width}
            />
          </View>
        </View>
        {/* Sweat Spaces section */}
        <View style={styles.sweatSpace}>
          <View style={styles.sweatspaceheader}>
            <TitleText size={14} color="#fff">
              Sweat Spaces
            </TitleText>

            <TouchableOpacity>
              <Text style={styles.seeMore}>see more</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={sweatSpaceDummyData}
            renderItem={({ item }) => {
              return (
                <SweatSpaceCard
                  imageSource={item.imageSource}
                  title={item.title}
                  members={item.members}
                  icon={item.icon}
                  onAddPress={item.onAddPress}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            horizontal={true}
            contentContainerStyle={{ marginBottom: 20 }}
          />
        </View>

        {/* challeneges */}
        <View>
          <Text style={styles.subTitle}>Challenges</Text>
          {dummyData.map((item) => (
            <ChallengeCard
              key={item.id}
              imageSource={sweatSpaceImage}
              title={item.title}
              members={[jane, john, sarah]}
              icon="🏆"
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "regular",
    color: "#fff",
  },
  subTitle: {
    fontSize: 14,
    fontFamily: "regular",
    fontWeight: 700,
    color: "#fff",
    marginStart: 20,
    marginBottom: 12,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 22,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.light.primary_colors.sky_blue, // Light blue border
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    alignSelf: "center",
  },
  trendingConvo: {
    marginBottom: 32,
  },
  sweatSpace: {
    width: "100%",
    marginBottom: 18,
  },
  sweatspaceheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  seeMore: {
    color: "#E0E0E0",
    fontSize: 10,
    fontFamily: "regular",
    fontWeight: 300,
  },
});
