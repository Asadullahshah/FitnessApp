import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { workoutDummyData } from '@/constants/DummyData'

const ExerciseDetail = () => {
  const router = useRouter()
  const { exerciseId } = useLocalSearchParams()
  const [showSteps, setShowSteps] = useState(false)
  
  // Get exercise instructions
  const exercise = workoutDummyData.exerciseInstructions[exerciseId as keyof typeof workoutDummyData.exerciseInstructions]
  
  if (!exercise) {
    return null
  }

  const renderStep = (step: any, index: number) => {
    const isLast = index === exercise.steps.length - 1
    
    return (
      <View key={step.id} style={styles.stepContainer}>
        <View style={styles.stepNumber}>
          <Text style={styles.stepNumberText}>{step.number}</Text>
        </View>
        
        <View style={styles.stepCircle}>
          <View style={styles.stepCircleBorder} />
          <View style={styles.stepCircleFill} />
        </View>
        
        {!isLast && <View style={styles.stepLine} />}
        
        <View style={styles.stepContent}>
          <Text style={styles.stepTitle}>{step.title}</Text>
          <Text style={styles.stepDescription}>{step.description}</Text>
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
        
        <Text style={styles.headerTitle}>Workout Chest</Text>
        
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons name="heart-outline" size={20} color="#FF6F61" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Video Section */}
        <View style={styles.videoSection}>
          <Image
            source={exercise.image}
            style={styles.videoPlaceholder}
          />
          
          {/* Exercise Badge */}
          <View style={styles.exerciseBadge}>
            <Text style={styles.exerciseBadgeText}>{exercise.name}</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.startButton}
            onPress={() => router.push(`/(tabs)/workout/ready?exerciseId=${exerciseId}` as any)}
          >
            <Text style={styles.startButtonText}>Start</Text>
            <View style={styles.playIcon} />
          </TouchableOpacity>
        </View>

        {/* How to do it Button */}
        <TouchableOpacity 
          style={styles.howToButton}
          onPress={() => setShowSteps(!showSteps)}
        >
          <Text style={styles.howToTitle}>How To Do It</Text>
          <View style={styles.howToRight}>
            <Text style={styles.howToSeeSteps}>See Steps</Text>
            <Ionicons 
              name={showSteps ? "chevron-up" : "chevron-down"} 
              size={19} 
              color="#F2F2F2" 
            />
          </View>
        </TouchableOpacity>

        {/* Steps Section */}
        {showSteps && (
          <View style={styles.stepsSection}>
            {exercise.steps.map((step: any, index: number) => renderStep(step, index))}
          </View>
        )}

        {/* Focus Area */}
        <Text style={styles.focusAreaTitle}>Focus Area</Text>

        {/* Warm up Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Warm up</Text>
            <TouchableOpacity style={styles.rearrangeButton}>
              <Ionicons name="reorder-three" size={14} color="#E0E0E0" />
            </TouchableOpacity>
          </View>
          
          {/* Current Exercise Card */}
          <View style={styles.exerciseCard}>
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
          </View>
        </View>

        {/* Workout Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Workout</Text>
            <Text style={styles.sectionProgress}>0 of 3</Text>
          </View>
          
          {/* Workout Exercises */}
          {workoutDummyData.workoutPlans.chest.sections[1].exercises.map((workoutExercise: any, index: number) => (
            <View key={workoutExercise.id} style={[styles.exerciseCard, styles.workoutExerciseCard]}>
              <View style={styles.exerciseContent}>
                <View style={styles.exerciseImageContainer}>
                  <View style={styles.exerciseImageBg} />
                  <Image
                    source={workoutExercise.image}
                    style={styles.exerciseImage}
                  />
                </View>
                
                <View style={styles.exerciseInfo}>
                  <Text style={styles.exerciseName}>{workoutExercise.name}</Text>
                  <Text style={styles.exerciseDescription}>{workoutExercise.description}</Text>
                </View>
                
                <TouchableOpacity style={styles.nextButton}>
                  <Ionicons name="chevron-forward-circle-outline" size={24} color="#73717E" />
                </TouchableOpacity>
              </View>
              
              <Text style={styles.exerciseMetric}>
                {workoutExercise.reps}
              </Text>
            </View>
          ))}
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ExerciseDetail

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
  exerciseBadge: {
    position: 'absolute',
    top: 108,
    left: '50%',
    transform: [{ translateX: -55 }],
    backgroundColor: '#4FC3F7',
    paddingHorizontal: 18,
    paddingVertical: 4,
    borderRadius: 8,
    opacity: 0.2,
  },
  exerciseBadgeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
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
  howToButton: {
    backgroundColor: '#0F1B2A',
    marginHorizontal: 18,
    marginTop: 24,
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
  stepsSection: {
    paddingHorizontal: 18,
    marginBottom: 24,
  },
  stepContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  stepNumber: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  stepCircle: {
    position: 'absolute',
    left: 28.5,
    top: 0,
    width: 21,
    height: 20,
  },
  stepCircleBorder: {
    position: 'absolute',
    width: 21,
    height: 20,
    backgroundColor: '#2A2C38',
    borderWidth: 1.2,
    borderColor: '#4FC3F7',
    borderRadius: 10,
  },
  stepCircleFill: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#4FC3F7',
    borderRadius: 5,
    top: 5,
    left: 5.5,
  },
  stepLine: {
    position: 'absolute',
    left: 39,
    top: 25,
    width: 1,
    height: 79,
    borderLeftWidth: 1,
    borderLeftColor: '#4FC3F7',
    borderStyle: 'dashed',
  },
  stepContent: {
    marginLeft: 65,
    paddingRight: 20,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#E9E3E4',
    marginBottom: 6,
  },
  stepDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B6B4C1',
    lineHeight: 18,
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
    paddingHorizontal: 20,
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
  exerciseCard: {
    backgroundColor: '#0F1B2A',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    minHeight: 110,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#4FC3F7',
  },
  workoutExerciseCard: {
    borderColor: 'transparent',
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
  bottomSpacing: {
    height: 100,
  },
})
