import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { SettingsIconSvg } from "@/components/ui/SettingIconSvg";
import BackIconSvg from "@/components/ui/BackIconSvg";
import { LinearGradient } from "expo-linear-gradient";
import { profileDummyData } from "@/constants/DummyData";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const options = [
  "Favorite",
  "Premium", 
  "Progress Tracker",
  "Motivational Tone"
];

const otherOptions = ["Workout Manual"];

const profile = () => {
  // Calculate positions for circular layout
  const getCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (2 * Math.PI * index) / total - Math.PI / 2; // Start from top
    const centerX = 152.5; // Center of the 305px circle
    const centerY = 152.5; // Center of the 305px circle
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { 
      x: x - 30, // Half of option item width (60/2)
      y: y - 35  // Half of option item height including label
    };
  };

  const circularOptions = [
    { label: "Badges", icon: "🎯", route: null },
    { label: "Premium", icon: "💳", route: null },
    { label: "Progress\nTracker", icon: "📊", route: null },
    { label: "Motivational\nTone", icon: "🎤", route: null },
    { label: "Workout\nManual", icon: "📖", route: null },
    { label: "Favorite", icon: "❤️", route: "/(tabs)/profile/favorites" },
  ];

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#0F1B2A" />
      
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <BackIconSvg />
        </Pressable>
        
        <Text style={styles.headerTitle}>My Profile</Text>
        
        <Pressable onPress={() => router.push("/(tabs)/profile/settings")} style={styles.settingsButton}>
          <SettingsIconSvg />
        </Pressable>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your dedication leaves footprints,{'\n'}here's the map
      </Text>

      {/* Stats Card */}
      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{profileDummyData.user.stats.height}</Text>
          <Text style={styles.statLabel}>Height</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{profileDummyData.user.stats.age}</Text>
          <Text style={styles.statLabel}>Age</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{profileDummyData.user.stats.weight}</Text>
          <Text style={styles.statLabel}>Weight</Text>
        </View>
      </View>

      {/* Central Circle Area */}
      <View style={styles.centralArea}>
        {/* Main Circle Background */}
        <View style={styles.mainCircle}>
          <View style={styles.innerCircle} />
        </View>

        {/* User Profile in Center */}
        <View style={styles.userProfile}>
          <View style={styles.avatarContainer}>
            <Image
              source={profileDummyData.user.avatar}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>{profileDummyData.user.name}</Text>
          <Pressable style={styles.uploadButton}>
            <LinearGradient
              colors={["#FF6F61", "#99433A"]}
              style={styles.uploadGradient}
            >
              <Text style={styles.uploadText}>📤 Upload</Text>
            </LinearGradient>
          </Pressable>
        </View>

        {/* Circular Options */}
        {circularOptions.map((option, index) => {
          const position = getCircularPosition(index, circularOptions.length, 105);
          return (
            <Pressable
              key={index}
              style={[
                styles.optionItem,
                {
                  left: position.x,
                  top: position.y,
                }
              ]}
              onPress={() => {
                if (option.route) {
                  router.push(option.route as any);
                } else {
                  console.log(`${option.label} pressed`);
                }
              }}
            >
              <View style={styles.optionCircle}>
                <Text style={styles.optionIcon}>{option.icon}</Text>
              </View>
              <Text style={styles.optionLabel}>{option.label}</Text>
            </Pressable>
          );
        })}
      </View>

      {/* Friends Section */}
      <View style={styles.friendsSection}>
        <View style={styles.friendsCircle}>
          <Image
            source={profileDummyData.user.friends.image}
            style={styles.friendsImage}
          />
        </View>
        <Text style={styles.friendsText}>{profileDummyData.user.friends.count} Friends</Text>
      </View>

      {/* Sign Out Button */}
      <Pressable style={styles.signOutButton}>
        <LinearGradient
          colors={["#4FC3F7", "#FF6F61"]}
          style={styles.signOutGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.signOutIcon}>🚪</Text>
          <Text style={styles.signOutText}>Sign out</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#0F1B2A',
    height: 80,
  },
  backButton: {
    backgroundColor: '#122435',
    borderRadius: 8,
    padding: 4,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 18,
    color: '#FF6F61',
    textAlign: 'center',
  },
  settingsButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: 0.06,
    color: '#B2B2B2',
    marginTop: 16,
    marginHorizontal: 24,
  },
  statsCard: {
    width: 341,
    height: 65,
    backgroundColor: '#0F1B2A',
    opacity: 0.8,
    borderRadius: 18,
    alignSelf: 'center',
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: "#1D1617",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.07,
    shadowRadius: 40,
    elevation: 5,
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    color: '#A5D6A7',
    textAlign: 'center',
  },
  statLabel: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    color: '#B6B4C1',
    textAlign: 'center',
  },
  centralArea: {
    position: 'relative',
    width: 305,
    height: 305,
    alignSelf: 'center',
    marginTop: 50,
    marginHorizontal: 'auto',
  },
  mainCircle: {
    position: 'absolute',
    width: 305,
    height: 305,
    backgroundColor: 'rgba(79, 195, 247, 0.15)',
    borderRadius: 152.5,
    shadowColor: 'rgba(79, 195, 247, 0.09)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 67,
    elevation: 10,
  },
  innerCircle: {
    display: 'none', // Hide the inner circle for cleaner look
  },
  userProfile: {
    position: 'absolute',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -44 }, { translateY: -59 }],
    width: 88,
    height: 118,
  },
  avatarContainer: {
    width: 43,
    height: 43,
    borderRadius: 21.5,
    borderWidth: 1,
    borderColor: '#A5D6A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
  },
  userName: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    color: '#F2F2F2',
    marginTop: 12,
    textAlign: 'center',
  },
  uploadButton: {
    marginTop: 12,
  },
  uploadGradient: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 99,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  uploadText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 10,
    color: '#F2F2F2',
  },
  optionItem: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    gap: 6,
  },
  optionCircle: {
    width: 43,
    height: 43,
    backgroundColor: 'rgba(16, 32, 48, 0.9)',
    borderRadius: 21.5,
    borderWidth: 1,
    borderColor: '#4FC3F7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(141, 141, 141, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 4,
  },
  optionIcon: {
    fontSize: 20,
  },
  optionLabel: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    color: '#B6B4C1',
    textAlign: 'center',
    lineHeight: 12,
    marginTop: 2,
    width: 60,
  },
  friendsSection: {
    alignItems: 'center',
    marginTop: 40,
    gap: 12,
  },
  friendsCircle: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 1,
    borderColor: '#4FC3F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendsImage: {
    width: 28,
    height: 28,
    shadowColor: 'rgba(255, 206, 192, 0.3)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 5,
  },
  friendsText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    color: '#A5D6A7',
    textAlign: 'center',
  },
  signOutButton: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 100,
  },
  signOutGradient: {
    width: 111,
    height: 42,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: 'rgba(79, 195, 247, 0.2)',
  },
  signOutIcon: {
    fontSize: 18,
  },
  signOutText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    color: '#F2F2F2',
  },
});
