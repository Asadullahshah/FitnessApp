import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { workoutDummyData } from '@/constants/DummyData'

const WorkoutPlan = () => {
  const router = useRouter()
  const { planId } = useLocalSearchParams()
  
  // Get workout plan data
  const workoutPlan = workoutDummyData.workoutPlans[planId as keyof typeof workoutDummyData.workoutPlans]
  
  if (!workoutPlan) {
    return null
  }

  const renderExerciseCard = (exercise: any, sectionType: 'warmup' | 'workout') => {
    const isActive = exercise.isActive || false
    
    return (
      <TouchableOpacity 
        key={exercise.id}
        style={[styles.exerciseCard, isActive && styles.activeExerciseCard]}
        onPress={() => {
          if (sectionType === 'warmup' && isActive) {
            router.push(`/(tabs)/workout/ready?exerciseId=${exercise.id}` as any)
          } else {
            router.push(`/(tabs)/workout/exercise/${exercise.id}` as any)
          }
        }}
      >
        <View style={styles.exerciseContent}>
          <View style={styles.exerciseImageContainer}>
            <View style={styles.exerciseImageBg} />
            <Image
              source={exercise.image}
              style={styles.exerciseImage}
            />
          </View>
          
          <View style={styles.exerciseInfo}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>
          </View>
          
          <TouchableOpacity style={styles.nextButton}>
            <Ionicons name="chevron-forward-circle-outline" size={24} color="#73717E" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.exerciseMetric}>
          {exercise.duration || exercise.reps}
        </Text>
      </TouchableOpacity>
    )
  }

  const renderSection = (section: any) => {
    return (
      <View key={section.id} style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.progress && (
            <Text style={styles.sectionProgress}>{section.progress}</Text>
          )}
          {section.id === 'warmup' && (
            <TouchableOpacity style={styles.rearrangeButton}>
              <Ionicons name="reorder-three" size={14} color="#E0E0E0" />
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.exercisesList}>
          {section.exercises.map((exercise: any) => 
            renderExerciseCard(exercise, section.id)
          )}
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E1A" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#4FC3F7" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Workout {workoutPlan.focusArea}</Text>
        
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons name="heart-outline" size={20} color="#FF6F61" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#545E60" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Video Section */}
        <View style={styles.videoSection}>
          <Image
            source={require('@/assets/images/women-planking.png')}
            style={styles.videoPlaceholder}
          />
          <TouchableOpacity 
            style={styles.startButton}
            onPress={() => router.push(`/(tabs)/workout/ready?exerciseId=${workoutPlan.sections[0].exercises[0].id}` as any)}
          >
            <Text style={styles.startButtonText}>Start</Text>
            <View style={styles.playIcon} />
          </TouchableOpacity>
        </View>

        {/* Workout Info */}
        <View style={styles.workoutInfo}>
          <Text style={styles.workoutTitle}>{workoutPlan.title}</Text>
          
          <View style={styles.workoutMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Difficulty</Text>
              <View style={styles.difficultyIndicator}>
                <View style={styles.difficultyBg} />
                <View style={styles.difficultyDots}>
                  <View style={[styles.difficultyDot, { backgroundColor: '#4FC3F7' }]} />
                  <View style={[styles.difficultyDot, { backgroundColor: '#1D5F7C', opacity: 0.4 }]} />
                  <View style={[styles.difficultyDot, { backgroundColor: '#1D5F7C', opacity: 0.4 }]} />
                </View>
              </View>
            </View>
            
            <View style={styles.metaItem}>
              <Ionicons name="time-outline" size={16} color="#E0E0E0" />
              <Text style={styles.metaDuration}>{workoutPlan.duration}</Text>
            </View>
          </View>
          
          <View style={styles.caloriesInfo}>
            <Text style={styles.caloriesText}>Calories Torched: {workoutPlan.caloriesBurned}kcal</Text>
            <Ionicons name="flame" size={16} color="#FF6F61" />
          </View>
          
          <Text style={styles.workoutDescription}>{workoutPlan.description}</Text>
        </View>

        {/* How to do it */}
        <TouchableOpacity style={styles.howToButton}>
          <Text style={styles.howToTitle}>How To Do It</Text>
          <View style={styles.howToRight}>
            <Text style={styles.howToSeeSteps}>See Steps</Text>
            <Ionicons name="chevron-down" size={19} color="#F2F2F2" />
          </View>
        </TouchableOpacity>

        {/* Focus Area */}
        <Text style={styles.focusAreaTitle}>Focus Area</Text>

        {/* Workout Sections */}
        {workoutPlan.sections.map(renderSection)}

        {/* Start Workout Button */}
        <TouchableOpacity style={styles.startWorkoutButton}>
          <Text style={styles.startWorkoutText}>Start Workout</Text>
        </TouchableOpacity>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default WorkoutPlan

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  likeButton: {
    width: 32,
    height: 32,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
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
  videoSection: {
    height: 298,
    position: 'relative',
    backgroundColor: '#0F1B2A',
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  startButton: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6F61',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
  },
  startButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F2F2F2',
  },
  playIcon: {
    width: 15,
    height: 15,
    backgroundColor: '#F2F2F2',
    borderRadius: 2,
    transform: [{ rotate: '90deg' }],
  },
  workoutInfo: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F2F2F2',
    marginBottom: 16,
  },
  workoutMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  metaLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  difficultyIndicator: {
    width: 74,
    height: 31,
    position: 'relative',
  },
  difficultyBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#FF6F61',
    opacity: 0.2,
    borderRadius: 8,
  },
  difficultyDots: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 8,
    top: 10,
    left: 11,
  },
  difficultyDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  metaDuration: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A5D6A7',
  },
  caloriesInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
  },
  caloriesText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  workoutDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B6B4C1',
    lineHeight: 18,
    letterSpacing: 0.06,
    marginBottom: 24,
  },
  howToButton: {
    backgroundColor: '#0F1B2A',
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  howToTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A5D6A7',
  },
  howToRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  howToSeeSteps: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B6B4C1',
  },
  focusAreaTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F2F2F2',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E9E3E4',
  },
  sectionProgress: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B6B4C1',
  },
  rearrangeButton: {
    width: 30,
    height: 30,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exercisesList: {
    gap: 16,
  },
  exerciseCard: {
    backgroundColor: '#0F1B2A',
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 16,
    minHeight: 110,
  },
  activeExerciseCard: {
    borderWidth: 1,
    borderColor: '#4FC3F7',
  },
  exerciseContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  exerciseImageContainer: {
    width: 60,
    height: 60,
    position: 'relative',
    marginRight: 12,
  },
  exerciseImageBg: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0F8A40',
    opacity: 0.3,
    borderRadius: 12,
  },
  exerciseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  exerciseInfo: {
    flex: 1,
    gap: 8,
  },
  exerciseName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E0E0E0',
  },
  exerciseDescription: {
    fontSize: 10,
    fontWeight: '300',
    color: '#F2F2F2',
    lineHeight: 12,
  },
  nextButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseMetric: {
    fontSize: 10,
    fontWeight: '400',
    color: '#A5D6A7',
    textAlign: 'right',
    paddingRight: 8,
  },
  startWorkoutButton: {
    backgroundColor: '#FF6F61',
    marginHorizontal: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#5F5C5C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  startWorkoutText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F2F2F2',
  },
  bottomSpacing: {
    height: 100,
  },
})
