import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { workoutDummyData } from '@/constants/DummyData'

const MuscleGroupWorkout = () => {
  const router = useRouter()
  const { muscleGroup } = useLocalSearchParams()
  
  // Get exercises for this muscle group
  const exercises = workoutDummyData.exercises[muscleGroup as keyof typeof workoutDummyData.exercises] || []
  
  // Get muscle group info
  const groupInfo = workoutDummyData.muscleGroups.find(group => group.id === muscleGroup)
  
  const renderExerciseCard = (exercise: any, index: number) => {
    return (
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
          
          {/* Reps indicator */}
          <View style={styles.repsContainer}>
            <Text style={styles.repsText}>{exercise.reps}</Text>
          </View>
        </View>
        
        {/* Exercise Image */}
        <Image
          source={exercise.image}
          style={[styles.exerciseImage, { borderColor: exercise.borderColor }]}
        />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E1A" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#4FC3F7" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>
            {groupInfo?.name || 'Workout'}
          </Text>
          
          <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="ellipsis-horizontal" size={20} color="#545E60" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Custom Workout Section */}
        <View style={styles.customWorkoutSection}>
          <View style={styles.customWorkoutCard}>
            <View style={styles.muscleIconsContainer}>
              {groupInfo?.images?.slice(0, 3).map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={styles.customWorkoutIcon}
                />
              ))}
            </View>
            <View style={styles.customWorkoutContent}>
              <Text style={styles.customWorkoutTitle}>
                Create a Custom {groupInfo?.name || 'Workout'} workout
              </Text>
              <TouchableOpacity 
                style={styles.createWorkoutButton}
                onPress={() => router.push(`/(tabs)/workout/plan/${muscleGroup}` as any)}
              >
                <Text style={styles.createWorkoutButtonText}>Create Workout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quest Section */}
        <View style={styles.questSection}>
          <Text style={styles.questTitle}>Here's your quest</Text>
          <Text style={styles.questSubtitle}>go conquer!</Text>
        </View>

        {/* Exercises List */}
        <View style={styles.exercisesContainer}>
          {exercises.map((exercise, index) => renderExerciseCard(exercise, index))}
        </View>

        {/* Done Button */}
        <View style={styles.doneButtonContainer}>
          <TouchableOpacity style={styles.doneButton}>
            <Text style={styles.doneButtonText}>I'm Done</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default MuscleGroupWorkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
  },
  header: {
    backgroundColor: '#0F1B2A',
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
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
  },
  moreButton: {
    width: 40,
    height: 40,
    backgroundColor: '#122435',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  customWorkoutSection: {
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 40,
  },
  customWorkoutCard: {
    backgroundColor: '#0F1B2A',
    borderColor: '#263647',
    borderWidth: 1,
    borderRadius: 16,
    padding: 29,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  muscleIconsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  customWorkoutIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  customWorkoutContent: {
    alignItems: 'center',
    gap: 12,
  },
  customWorkoutTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#F2F2F2',
    textAlign: 'center',
  },
  createWorkoutButton: {
    backgroundColor: '#FF6F61',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createWorkoutButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#F2F2F2',
  },
  questSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  questTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F2F2F2',
    textAlign: 'center',
    marginBottom: 4,
  },
  questSubtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  exercisesContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  exerciseCard: {
    backgroundColor: '#1A2738',
    borderRadius: 16,
    padding: 16,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#686868',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 19,
    elevation: 8,
  },
  exerciseContent: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  exerciseInfo: {
    gap: 6,
  },
  exerciseName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#E0E0E0',
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
    borderColor: '#4FC3F7',
    borderWidth: 1,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  repsText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#CBC4C4',
  },
  exerciseImage: {
    width: 80,
    height: 78,
    borderRadius: 8,
    borderWidth: 1,
    resizeMode: 'cover',
    marginLeft: 16,
  },
  doneButtonContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: '#FF6F61',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 6,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 4,
  },
  doneButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  bottomSpacing: {
    height: 100,
  },
})
