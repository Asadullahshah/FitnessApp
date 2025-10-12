import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { workoutDummyData } from '@/constants/DummyData'

const MoodWorkout = () => {
  const router = useRouter()
  const { moodId } = useLocalSearchParams()
  
  // Find the mood workout
  const moodWorkout = workoutDummyData.moodWorkouts.find(m => m.id === moodId)
  
  if (!moodWorkout) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Mood workout not found</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#4FC3F7" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{moodWorkout.title}</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Create Workout Section */}
        <View style={styles.createWorkoutSection}>
          <View style={styles.characterContainer}>
            <Image
              source={moodWorkout.image}
              style={styles.characterImage}
            />
          </View>
          <View style={styles.createWorkoutContent}>
            <Text style={styles.createWorkoutTitle}>Create a Custom Focus workout</Text>
            <TouchableOpacity style={styles.createWorkoutButton}>
              <Text style={styles.createWorkoutButtonText}>Create Workout</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quest Section */}
        <View style={styles.questSection}>
          <Text style={styles.questTitle}>Here's your quest</Text>
          <Text style={styles.questSubtitle}>go conquer!</Text>
        </View>

        {/* Exercise List - Only show if exercises exist */}
        {moodWorkout.exercises.length > 0 && (
          <View style={styles.exerciseList}>
            {moodWorkout.exercises.map((exercise, index) => (
              <TouchableOpacity
                key={exercise.id}
                style={styles.exerciseCard}
                onPress={() => router.push(`/(tabs)/workout/exercise/${exercise.id}` as any)}
              >
                <View style={styles.exerciseContent}>
                  <View style={styles.exerciseInfo}>
                    <Text style={styles.exerciseName}>{exercise.name}</Text>
                    <Text style={styles.exerciseDescription}>{exercise.description}</Text>
                  </View>
                  <View style={styles.repsContainer}>
                    <Text style={styles.repsText}>{exercise.reps}</Text>
                  </View>
                </View>
                <Image
                  source={exercise.image}
                  style={[styles.exerciseImage, { borderColor: exercise.borderColor }]}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Done Button (hidden) */}
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText}>I'm Done</Text>
        </TouchableOpacity>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default MoodWorkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
  },
  scrollView: {
    flex: 1,
  },
  errorText: {
    color: '#F2F2F2',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6F61',
    textAlign: 'center',
    flex: 1,
  },
  headerRight: {
    width: 32,
  },
  createWorkoutSection: {
    paddingHorizontal: 24,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  characterContainer: {
    width: 143,
    height: 145,
  },
  characterImage: {
    width: 143,
    height: 145,
    resizeMode: 'contain',
  },
  createWorkoutContent: {
    flex: 1,
    paddingTop: 35,
  },
  createWorkoutTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#F2F2F2',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 12,
  },
  createWorkoutButton: {
    height: 26,
    paddingHorizontal: 12,
    backgroundColor: 'linear-gradient(180deg, #FF6F61 0%, #99433A 100%)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  createWorkoutButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#F2F2F2',
    textAlign: 'center',
  },
  questSection: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  questTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F2F2F2',
    textAlign: 'center',
    lineHeight: 21,
  },
  questSubtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 15,
    marginTop: 4,
    marginLeft: 1,
  },
  exerciseList: {
    paddingHorizontal: 24,
    marginTop: 16,
    gap: 16,
  },
  exerciseCard: {
    width: 342,
    height: 110,
    backgroundColor: '#1A2738',
    borderRadius: 16,
    shadowColor: 'rgba(104, 104, 104, 0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 19,
    elevation: 4,
    position: 'relative',
  },
  exerciseContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingTop: 20,
  },
  exerciseInfo: {
    flex: 1,
    maxWidth: 146,
  },
  exerciseName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#E0E0E0',
    lineHeight: 18,
    marginBottom: 6,
  },
  exerciseDescription: {
    fontSize: 10,
    fontWeight: '300',
    color: '#F2F2F2',
    lineHeight: 15,
  },
  repsContainer: {
    width: 27,
    height: 27,
    backgroundColor: '#1A202D',
    borderWidth: 1,
    borderColor: '#4FC3F7',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  repsText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#CBC4C4',
    textAlign: 'center',
    lineHeight: 15,
  },
  exerciseImage: {
    width: 80,
    height: 78,
    position: 'absolute',
    right: 16,
    top: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  doneButton: {
    width: 94,
    height: 26,
    backgroundColor: '#FF6F61',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 24,
    opacity: 0,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 7,
  },
  doneButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 18,
  },
  bottomSpacing: {
    height: 100,
  },
})

