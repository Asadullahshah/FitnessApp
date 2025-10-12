import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { workoutDummyData } from '@/constants/DummyData'

const WorkoutVideo = () => {
  const router = useRouter()
  const { exerciseId } = useLocalSearchParams()
  const [isPlaying, setIsPlaying] = useState(false)
  
  // Get exercise data
  const exercise = workoutDummyData.exerciseInstructions[exerciseId as keyof typeof workoutDummyData.exerciseInstructions]
  
  if (!exercise) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E1A" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#4FC3F7" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>{exercise.name}</Text>
        
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons name="heart-outline" size={20} color="#FF6F61" />
        </TouchableOpacity>
      </View>

      {/* Difficulty Indicator */}
      <View style={styles.difficultyContainer}>
        <Text style={styles.difficultyLabel}>Difficulty</Text>
        <View style={styles.difficultyCard}>
          <View style={styles.difficultyBg} />
          <View style={styles.difficultyDots}>
            <View style={[styles.difficultyDot, { backgroundColor: '#4FC3F7' }]} />
            <View style={[styles.difficultyDot, { backgroundColor: '#204860' }]} />
            <View style={[styles.difficultyDot, { backgroundColor: '#204860' }]} />
          </View>
        </View>
      </View>

      {/* Video Player */}
      <View style={styles.videoContainer}>
        <Image
          source={require('@/assets/images/women-planking.png')}
          style={styles.videoPlaceholder}
        />
        
        {/* Video Controls Overlay */}
        <View style={styles.videoControls}>
          <View style={styles.progressContainer}>
            <Text style={styles.timeText}>00:02</Text>
            <View style={styles.progressBar}>
              <View style={styles.progressBarBg} />
              <View style={styles.progressBarFill} />
            </View>
            <Text style={styles.timeText}>-00:38</Text>
          </View>
          
          <TouchableOpacity style={styles.fullscreenButton}>
            <Ionicons name="expand" size={20} color="#A5D6A7" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Workout Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>1</Text>
          <Text style={styles.statLabel}>Set</Text>
        </View>
        
        <View style={styles.statBox}>
          <Text style={styles.statValue}>8</Text>
          <Text style={styles.statLabel}>Reps</Text>
        </View>
        
        <View style={styles.statBox}>
          <Ionicons name="settings-outline" size={22} color="#545E60" />
        </View>
        
        <View style={styles.statBox}>
          <Text style={styles.statValue}>30s</Text>
          <Text style={styles.statLabel}>Rest</Text>
        </View>
      </View>

      {/* Related Exercises */}
      <View style={styles.relatedExercises}>
        <View style={styles.relatedExercise}>
          <Image
            source={require('@/assets/images/shoulder.png')}
            style={styles.relatedImage}
          />
        </View>
        <View style={styles.relatedExercise}>
          <Image
            source={require('@/assets/images/chest.png')}
            style={styles.relatedImage}
          />
        </View>
        <View style={styles.relatedExercise}>
          <Image
            source={require('@/assets/images/biceps.png')}
            style={styles.relatedImage}
          />
        </View>
      </View>

      {/* Exercise Description */}
      <Text style={styles.description}>
        Trust the process, thrust the hips, and feel the core scream for mercy.
      </Text>

      {/* Calories Info */}
      <View style={styles.caloriesContainer}>
        <Text style={styles.caloriesText}>Calories Torched: 20 kcal</Text>
        <Ionicons name="flame" size={16} color="#FF6F61" />
      </View>

      {/* Start Workout Button */}
      <TouchableOpacity 
        style={styles.startButton}
        onPress={() => router.push('/app/(tabs)/workout/ready' as any)}
      >
        <Text style={styles.startButtonText}>Start Workout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WorkoutVideo

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
  difficultyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 16,
    gap: 12,
    justifyContent: 'center',
  },
  difficultyLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  difficultyCard: {
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
  videoContainer: {
    width: '100%',
    height: 227,
    marginTop: 8,
    position: 'relative',
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  videoControls: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  progressBar: {
    flex: 1,
    height: 6,
    position: 'relative',
  },
  progressBarBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(167, 172, 185, 0.56)',
    borderRadius: 2,
  },
  progressBarFill: {
    position: 'absolute',
    width: '10%',
    height: '100%',
    backgroundColor: '#90E092',
    borderRadius: 2,
  },
  fullscreenButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 32,
    backgroundColor: '#0F1B2A',
    borderWidth: 1,
    borderColor: '#4FC3F7',
    borderRadius: 16,
    padding: 9,
    gap: 12,
    justifyContent: 'space-between',
  },
  statBox: {
    backgroundColor: '#142336',
    borderRadius: 10,
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  statValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#9FABCE',
    textAlign: 'center',
  },
  relatedExercises: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 24,
    backgroundColor: '#0F1B2A',
    borderWidth: 1,
    borderColor: '#4FC3F7',
    borderRadius: 16,
    padding: 11,
    gap: 32,
    justifyContent: 'center',
  },
  relatedExercise: {
    backgroundColor: '#122435',
    borderRadius: 8,
    padding: 5,
    width: 40,
    height: 40,
  },
  relatedImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#D9D9D9',
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 24,
    marginTop: 32,
  },
  caloriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 24,
  },
  caloriesText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A5D6A7',
  },
  startButton: {
    backgroundColor: '#FF6F61',
    marginHorizontal: 24,
    marginTop: 32,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#5F5C5C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F2F2F2',
  },
})


