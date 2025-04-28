import { FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import TrendingConversations from '@/components/ui/TrendingConversations';
import { sub } from 'date-fns';
import SweatSpaceCard from '@/components/ui/SweatSpaceCard';
import { MaterialIcons } from '@expo/vector-icons';


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

const sweatSpaceImage = require("@/assets/images/push-ups.png")
export default function index() {
    
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
          <TouchableOpacity key={index} style={{ alignItems: "center" }} onPress={() => console.log(item.name)}>
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
                <FlatList
                    data={[
                        {
                            id: 1,
                            title: "How to stay motivated?",
                            description: "Share your tips and tricks!",
                            likes: 120,
                            comments: 45,
                            date: sub(new Date(), { days: 2 }).toDateString(),
                        },
                        {
                            id: 2,
                            title: "Best workout routines",
                            description: "What works for you?",
                            likes: 200,
                            comments: 60,
                            date: sub(new Date(), { days: 3 }).toDateString(),
                        },
                    ]}
                    renderItem={({ item }) => (
                        <TrendingConversations {...item} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                />
                <Text style={styles.subTitle}>scroll indicator</Text>
            </View>
            {/* Sweat Spaces section */}
            <View>
                    <SweatSpaceCard
                        imageSource={sweatSpaceImage}
                        title="Sweat Space"
                        members="100+ members"
                        icon={<MaterialIcons />}
                        onAddPress={() => console.log("Add Sweat Space")}
                    />
                    {/* NOTE: I have created the SweatSpaceCard component now we just have to refine it a bit and add FlatList */}
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
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        alignSelf: 'center',
      },
    trendingConvo: {
        // backgroundColor: 'red'
        marginBottom: 44
    }
})