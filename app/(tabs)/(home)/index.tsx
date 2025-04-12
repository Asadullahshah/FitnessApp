import SunriseSvg from "@/components/SunriseSvg";
import ThreeButtonGradient from "@/components/ui/ThreeButtonGradient";
import { Colors } from "@/constants/Colors";
import { supabase } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Button, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LineSvg from "@/components/ui/LineSvg";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import ChallengeSvg from "@/components/ui/ChallengeSvg";

const index = () => {
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Storage cleared!");
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  };
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    clearStorage();
    router.replace("/");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ThreeButtonGradient
        onButton1Press={() => {
          router.push("/(tabs)/(home)/notification");
        }}
        onButton2Press={() => {
          router.push("/(tabs)/(home)/surprise");
        }}
        onButton3Press={() => {
          router.push("/(tabs)/(home)/notification");
        }}
      />
      <View style={styles.greeting}>
        <View
          style={{
            marginRight: 10,
            gap: 2,
            margin: 10,
          }}
        >
          <SunriseSvg width={50} height={30} />
          <LineSvg height={1} width={60} />
          <Text
            style={{
              color: "#707070",
              fontWeight: "700",
              fontSize: 10,
              marginLeft: 7,
            }}
          >
            14-3
          </Text>
        </View>
        <Text style={styles.greetingText}>
          Morning, <Text style={{ fontWeight: "bold" }}>Joseph</Text>
        </Text>
      </View>
      {/* Line */}
      <View style={styles.line} />
      {/* motivational quote */}
      <ScrollView>
      <View style={styles.motivationContainer}>
        <BlurView intensity={50} tint="light" style={styles.radialBackground}>
        <LinearGradient
          colors={["rgba(79, 195, 247, 0.29)", "#11191D"]}
          start={{ x: 0.4, y: 0.6 }}
          end={{ x: 0.8, y: 1 }}
          style={styles.radialBackground}
        />
        </BlurView>
        <Text style={styles.motivationText} numberOfLines={1} ellipsizeMode="tail">
          Your dream body won’t build itself, time to lock-in for real!
        </Text>
      </View>
      <View style={styles.exerciseCard}>
        <Image
          source={require("@/assets/images/women-planking.png")}
          style={styles.exerciseImage}
        />
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseLevel}>12x</Text>
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style={styles.exerciseTitle}>EXERCISE OF THE DAY</Text>
            <TouchableOpacity style={styles.exerciseBtn}>
              <Text style={styles.exerciseBtnText}>Thrust & Plank It</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Workout of the Day */}
      <View style={styles.workoutCardContainer}>
        <TouchableOpacity style={[styles.workoutCard, {backgroundColor: '#1e222f'}]}>
          <Image source={require("@/assets/images/workout-of-the-day-card.png")} style={{ width: '60%', height: '60%', borderRadius: 16 }} />
          <Text style={styles.workoutTitle}>Workout of <Text style={{ color: '#ff4f4f' }}>The Day</Text></Text>
          <View style={styles.startBtn}>
            <Text style={styles.startBtnText}>Start</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.workoutCard}>
          <View style={styles.challengeBg}>
            <ChallengeSvg width={60} height={100} padding={10} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Challenge Section */}
      <TouchableOpacity style={styles.challengeCard}>
        <Text style={styles.challengeIcon}>💎</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  exerciseCard: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'center',
    backgroundColor: "#b0dffb",
    // borderRadius: 16,
    padding: 12,
    marginBottom: 20,
    position: "relative",
    width: "100%",
    alignSelf: "center",
  },
  exerciseImage: {
    width: 186,
    height: 168,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    marginBottom: 10,
    marginRight: 5,
  },
  exerciseInfo: {
    width: "40%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "bold",
    color: Colors.light.primary_colors.dark_navy,
    marginTop: 80,
  },
  exerciseBtn: {
    backgroundColor: Colors.light.primary_colors.dark_navy,
    borderColor: "#4FC3F7",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  exerciseBtnText: {
    color: "#fff",
    fontSize: 10,
    fontFamily: "regular",
    fontWeight: "500",
  },
  exerciseLevel: {
    position: "absolute",
    top: 8,
    right: 12,
    backgroundColor: "#000",
    color: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: 12,
  },
  greeting: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  sunIcon: {
    fontSize: 16,
    color: "#f9a825",
    marginBottom: 4,
  },
  greetingText: {
    fontSize: 22,
    color: "#fff",
  },
  line: {
    width: "100%",
    height: 0.3,
    backgroundColor: Colors.light.primary_colors.sky_blue,
    marginVertical: 10,
  },
  motivationContainer: {
    margin: 10,
  },

  radialBackground: {
    ...StyleSheet.absoluteFillObject,
    width: 300,
    height: 200,
    borderRadius: 100,
  },

  motivationText: {
    color: "#4FC3F7",
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "300",
    lineHeight: 20,
    letterSpacing: 1.2,
  },
  workoutCardContainer: {
    width: "90%",
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  workoutCard: { 
    width: '40%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  workoutTitle: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  startBtn: {
    backgroundColor: '#ff4f4f',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  startBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  challengeBg: {
    width: "auto",
    height: 50,
    backgroundColor: Colors.light.primary_colors.sky_blue,
    borderRadius: 10,
    padding: 5,
  },
  challengeCard: {
    backgroundColor: '#232b3d',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  challengeIcon: {
    fontSize: 28,
    color: '#fff',
  },
});
