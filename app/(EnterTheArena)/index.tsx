// App.js or your screen file (e.g., PickYourMoveScreen.js)
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  Platform,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { pxToHeight, pxToWidth } from "@/utils";
import { LinearGradient } from "expo-linear-gradient";
import { ButtonRed } from "@/components/ui/ButtonRed";
import { router } from "expo-router";
// import { Ionicons } from '@expo/vector-icons'; // Example for hand icon

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const EXERCISES_DATA = [
  {
    id: "1",
    name: "Push-Ups",
    image: require("@/assets/images/push-ups.png"), // Replace with your actual image path
    repsOptions: [0, 5, 10, 15],
    motivation: "Every legend starts at zero",
  },
  {
    id: "2",
    name: "Squats",
    image: require("@/assets/images/side-squats.png"), // Replace with your actual image path
    repsOptions: [0, 8, 12, 20],
    motivation: "Feel the burn, embrace the strength!",
  },
  {
    id: "3",
    name: "Plank",
    image: require("@/assets/images/jumping-jacks.png"), // Replace with your actual image path
    repsOptions: [0, 30, 60, 90], // Assuming seconds for plank
    isDuration: true, // To show "sec"
    motivation: "Hold strong, your core will thank you.",
  },
];

const SWIPE_INSTRUCTION_SEEN_KEY = "@swipeInstructionSeen";

const index = () => {
  const [exercises, setExercises] = useState(EXERCISES_DATA);
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(0);
  const [selectedReps, setSelectedReps] = useState(null);
  const [showSwipeInstruction, setShowSwipeInstruction] = useState(false);
  const flatListRef = useRef(null);

  useEffect(() => {
    // Check if user has seen the instruction before
    const checkInstructionStatus = async () => {
      try {
        const value = await AsyncStorage.getItem(SWIPE_INSTRUCTION_SEEN_KEY);
        if (value === null) {
          setShowSwipeInstruction(true); // Show for new users
        }
      } catch (e) {
        console.error("Failed to load swipe instruction status.", e);
      }
    };
    checkInstructionStatus();
  }, []);

  const currentExercise = exercises[selectedExerciseIndex];

  const handleRepsSelect = (reps: any) => {
    setSelectedReps(reps);
  };

  const handleStartMoving = () => {
    if (selectedReps === null && currentExercise.repsOptions[0] !== 0) {
      // Allow 0 reps without explicit selection
      alert(
        `Please select how many ${
          currentExercise.isDuration ? "seconds" : "reps"
        } you can do for ${currentExercise.name}.`
      );
      return;
    }
    const repsToLog =
      selectedReps === null ? currentExercise.repsOptions[0] : selectedReps;
    console.log(`Starting move: ${currentExercise.name}, Reps: ${repsToLog}`);
    router.push({
      pathname: "/ready",
      params: {
        exerciseName: currentExercise.name,
        reps: repsToLog.toString(), // Convert to string for URL safety
      },
    });
  };

  const handleDoLater = () => {
    console.log("User chose to do it later.");
    // Navigate back or to a different screen
    alert("No problem! Come back when you are ready.");
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const newIndex = viewableItems[0].index;
      if (newIndex !== selectedExerciseIndex) {
        setSelectedExerciseIndex(newIndex);
        setSelectedReps(null); // Reset reps when exercise changes
        if (showSwipeInstruction) {
          dismissSwipeInstruction(); // Dismiss if user swipes
        }
      }
    }
  }).current;

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

  const dismissSwipeInstruction = async () => {
    if (showSwipeInstruction) {
      setShowSwipeInstruction(false);
      try {
        await AsyncStorage.setItem(SWIPE_INSTRUCTION_SEEN_KEY, "true");
      } catch (e) {
        console.error("Failed to save swipe instruction status.", e);
      }
    }
  };

  const renderExerciseCard = ({ item, index }: any) => (
    <View style={styles.cardContainer}>
      <Image
        source={item.image}
        style={styles.exerciseImage}
        resizeMode="contain"
      />
      {/* <Text style={styles.exerciseName}>{item.name}</Text> */}
      <LinearGradient
        colors={["rgba(79, 195, 247, 0.2)", "rgba(255, 111, 97, 0.2)"]}
        start={{ x: 0.1, y: 0.2 }}
        end={{ x: 1, y: 0 }}
        style={{
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          marginBottom: 35,
          // opacity: 0.2,
        }}
      >
        <View style={{ opacity: 1 }}>
          <Text style={styles.exerciseName}>{item.name}</Text>
        </View>
      </LinearGradient>
      <View style={styles.repsSelectionContainer}>
        {item.repsOptions.map((reps: any) => (
          <TouchableOpacity
            key={reps}
            style={[
              styles.repButton,
              selectedReps === reps && styles.selectedRepButton,
            ]}
            onPress={() => handleRepsSelect(reps)}
          >
            <Text
              style={[
                styles.repButtonText,
                selectedReps === reps && styles.selectedRepButtonText,
              ]}
            >
              {reps}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.motivatonContainer}>
        <Text style={styles.motivationText}>{currentExercise.motivation}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.subHeader}>👊 Pick Your Move</Text>
        <Text style={styles.questionText}>
          How many {currentExercise.isDuration ? "seconds" : "reps"} can you do?
        </Text>

        <View style={styles.carouselContainer}>
          <FlatList
            ref={flatListRef}
            data={exercises}
            renderItem={renderExerciseCard}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            style={styles.flatList}
            contentContainerStyle={styles.flatListContent}
            onScrollBeginDrag={dismissSwipeInstruction} // Dismiss on manual scroll start
          />
        </View>

        <View style={styles.footerInfo}>
          <Text style={styles.infoText}>
            If one exercise feels tough, just modify or swipe to something that
            feels right for you!
          </Text>
          <Text style={styles.psText}>PS: This counts as a warm up.</Text>
        </View>

        <ButtonRed
          onPress={handleStartMoving}
          style={styles.startMovingButton}
          children={"Start Moving!"}
        />

        <Text style={styles.iWillDoText}>
          I will do this, but {/* <Pressable onPress={handleDoLater}> */}
          <Text style={styles.doLaterText}>Later</Text>
          {/* </Pressable> */}
        </Text>

        {/* Swipe Instruction Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={showSwipeInstruction}
          onRequestClose={dismissSwipeInstruction} // For Android back button
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={dismissSwipeInstruction} // Dismiss on tap anywhere on overlay
          >
            <View style={styles.modalContent}>
              {/* This View is to prevent the tap from propagating if you only want the card area to be non-tappable to dismiss */}
              <View onStartShouldSetResponder={() => true}>
                <Text style={styles.modalSwipeText}>SWIPE</Text>
                <Text style={styles.modalInstructionText}>
                  to scroll to a different workout
                </Text>
                <Image source={require("@/assets/images/swipe.png")} style={styles.modalSwipeIcon} />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const cardWidth = pxToWidth(310);
const cardHeight = cardWidth + pxToHeight(37); // Adjust as needed
const repButtonWidth = 30;
const repButtonHeight = 30; // Adjust as needed
const CardImagewidth = 262;
const CardImageheight = 132;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 25 : 10,
  },
  backButton: {
    position: "absolute",
    top: Platform.OS === "android" ? 35 : 20,
    left: 20,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E94560", // Reddish pink
    marginBottom: 20,
    marginTop: 20,
  },
  subHeader: {
    fontSize: 16,
    fontFamily: "regular",
    fontStyle: "normal",
    fontWeight: "600",
    color: "#F2F2F2",
    marginBottom: 5,
  },
  questionText: {
    fontSize: 14,
    fontFamily: "regular",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#DADADA", // Light gray
    marginBottom: 20,
    textAlign: "center",
  },
  carouselContainer: {
    height: cardHeight + 40, // Height for card + name
    marginBottom: 20,
    width: "100%", // Ensure it takes full width for centering FlatList items
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    flexGrow: 0, // Important for FlatList inside a View with fixed height
  },
  flatListContent: {},
  cardContainer: {
    width: cardWidth,
    height: cardHeight, // for image and text
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F1B2A", // Slightly lighter card background
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#263647", // Border color
    marginRight: 10, // Spacing between cards
    marginLeft: 30, // Spacing between cards
    paddingVertical: 10,
    boxShadow: "0px 0px 41px 0px rgba(79, 195, 247, 0.12)", // Shadow effect
    elevation: 5, // For Android shadow
  },
  exerciseImage: {
    width: CardImagewidth,
    height: CardImageheight,
    borderRadius: 6,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 10,
    fontWeight: "600",
    color: "#FFF",
    fontFamily: "regular",
  },
  repsSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginBottom: 20,
  },
  repButton: {
    backgroundColor: "#1E395A", // Blueish
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderRadius: 30,
    minWidth: repButtonWidth,
    height: repButtonHeight,
    alignItems: "center",
    justifyContent: "center",
    filter: " drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25))",
  },
  selectedRepButton: {
    backgroundColor: "#E94560", // Reddish pink for selected
  },
  repButtonText: {
    color: "#4FC3F7",
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",
    fontFamily: "regular",
  },
  selectedRepButtonText: {
    color: "#FFF",
  },
  motivationText: {
    fontSize: 14,
    color: "#AEAEB2",
    textAlign: "center",
    paddingHorizontal: 10,
    fontStyle: "italic",
  },
  footerInfo: {
    alignItems: "center",
    marginBottom: 25,
  },
  infoText: {
    fontSize: 14,
    color: "#ACA7A7",
    fontStyle: "normal",
    fontWeight: "400",
    fontFamily: "regular",
    textAlign: "center",
    marginBottom: 8,
  },
  psText: {
    fontSize: 12,
    color: "#A5D6A7", // Gold/Yellow for PS background: #A5D6A7;
    textAlign: "center",
    fontWeight: "bold",
  },
  startMovingButton: {
    marginBottom: 15,
  },
  startMovingButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  iWillDoText: {
    color: "#AEAEB2",
    fontSize: 14,
    // textDecorationLine: 'underline',
  },
  doLaterText: {
    color: "#FF6F61", // Reddish pink
    fontSize: 16,
    fontWeight: "bold",
    // textDecorationLine: 'underline',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    // justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    // This should mimic the card's position and size approximately
    // Or you can calculate its position based on the FlatList's layout
    // For simplicity, I'm centering it. You might need to adjust `top` and `left`
    // using onLayout of the carouselContainer if you want it precisely over the card.
    width: cardWidth,
    height: 116, // Let content define height
    backgroundColor: "#0F1B2A", // Semi-transparent card background
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 34px 1px rgba(79, 195, 247, 0.25)", // Shadow effect
    marginTop: screenHeight / 4, // Adjust to position it in the middle of the screen
  },
  modalSwipeText: {
    color: "#4FC3F7",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "regular",
    marginBottom: 10,
    textAlign: "center",
  },
  modalSwipeIcon: {
    width: 28,
    height: 28,
    alignSelf: "center",
  },
  modalInstructionText: {
    color: "#DDD",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "regular",
    textAlign: "center",
    marginBottom: 12,
  },
  motivatonContainer: {
    width: "90%",
    height: "auto",
    backgroundColor: "#1A2738", // Blueish background for motivation text
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#263647", // Border color
    // marginBottom: 20,
    alignItems: "center",
    // justifyContent: 'center',
  },
});

export default index;
