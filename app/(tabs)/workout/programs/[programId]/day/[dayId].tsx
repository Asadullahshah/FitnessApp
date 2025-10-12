import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { workoutDummyData } from '@/constants/DummyData'

const ProgramDayWorkout = () => {
  const router = useRouter()
  const { programId, dayId } = useLocalSearchParams()
  const program = workoutDummyData.programs.find(p => p.id === programId)
  const programDays = workoutDummyData.programDays[programId as keyof typeof workoutDummyData.programDays]
  const dayWorkout = programDays?.dayWorkouts[parseInt(dayId as string)]

  if (!program || !dayWorkout) {
    return null
  }

  const renderExerciseCard = (exercise: any, sectionType: 'warmup' | 'workout') => (
    <TouchableOpacity 
      key={exercise.id}
      style={[
        styles.exerciseCard,
        exercise.isActive && styles.activeExerciseCard
      ]}
      onPress={() => router.push(`/(tabs)/workout/ready?exerciseId=${exercise.id}` as any)}
    >
      <View style={styles.exerciseImageContainer}>
        <Image source={exercise.image} style={styles.exerciseImage} />
      </View>
      <View style={styles.exerciseContent}>
        <Text style={styles.exerciseTitle}>{exercise.name}</Text>
        <Text style={styles.exerciseDescription}>{exercise.description}</Text>
      </View>
      <View style={styles.exerciseDetails}>
        <Ionicons name="arrow-forward-circle-outline" size={24} color="#73717E" style={styles.arrowIcon} />
        <Text style={styles.exerciseRepsDuration}>{exercise.reps || exercise.duration}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E1A" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#4FC3F7" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeButton}>
            <Ionicons name="heart-outline" size={20} color="#FF6F61" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{program.title}</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="ellipsis-vertical" size={20} color="#545E60" />
          </TouchableOpacity>
        </View>

        {/* Video Section */}
        <View style={styles.videoContainer}>
          <Image
            source={require('@/assets/images/women-planking.png')}
            style={styles.videoPlaceholder}
          />
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>{program.difficulty}</Text>
          </View>
          <TouchableOpacity 
            style={styles.startButton}
            onPress={() => router.push(`/(tabs)/workout/ready?exerciseId=${dayWorkout.warmup[0]?.id}` as any)}
          >
            <Ionicons name="play" size={24} color="#F2F2F2" />
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>

        {/* Workout Details */}
        <View style={styles.workoutDetailsContainer}>
          <View style={styles.workoutInfoRow}>
            <Text style={styles.workoutPlanTitle}>{dayWorkout.title}</Text>
            <View style={styles.durationContainer}>
              <Text style={styles.durationText}>{dayWorkout.exercises}</Text>
              <Ionicons name="timer-outline" size={16} color="#E0E0E0" />
            </View>
          </View>
          <View style={styles.caloriesContainer}>
            <Text style={styles.caloriesText}>Calories Torched: 300kcal</Text>
            <Text style={styles.fireEmoji}>🔥</Text>
          </View>
          <Text style={styles.workoutDescription}>{dayWorkout.description}</Text>
        </View>

        {/* Warm up Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Warm up</Text>
          <TouchableOpacity style={styles.rearrangeButton}>
            <Ionicons name="reorder-four-outline" size={14} color="#E0E0E0" />
          </TouchableOpacity>
        </View>
        {dayWorkout.warmup.map((exercise) =>
          renderExerciseCard(exercise, 'warmup')
        )}

        {/* Workout Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Workout</Text>
          <Text style={styles.workoutProgress}>0 of {dayWorkout.workout.length}</Text>
        </View>
        {dayWorkout.workout.map((exercise) =>
          renderExerciseCard(exercise, 'workout')
        )}

        {/* Drag to Rearrange Tooltip */}
        <View style={styles.tooltipContainer}>
          <Text style={styles.tooltipText}>Drag to rearrange workout order</Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProgramDayWorkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#0F1B2A',
    height: 155,
    position: 'relative',
  },
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 60,
    left: 24,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6F61',
    textAlign: 'center',
    position: 'absolute',
    top: 64,
    left: 99,
  },
  likeButton: {
    width: 32,
    height: 32,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 108,
    right: 66,
  },
  menuButton: {
    width: 32,
    height: 32,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 108,
    right: 24,
  },
  videoContainer: {
    width: '100%',
    height: 298,
    backgroundColor: '#0F1B2A',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: -70,
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.8,
  },
  difficultyBadge: {
    position: 'absolute',
    top: 108,
    left: 126,
    width: 110,
    height: 31,
    backgroundColor: 'rgba(79, 195, 247, 0.2)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  difficultyText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#FF6F61',
    borderRadius: 12,
    position: 'absolute',
    bottom: 20,
    left: 24,
    gap: 6,
  },
  startButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F2F2F2',
  },
  workoutDetailsContainer: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  workoutInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  workoutPlanTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F2F2F2',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  durationText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A5D6A7',
  },
  caloriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    marginBottom: 16,
  },
  caloriesText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  fireEmoji: {
    fontSize: 16,
  },
  workoutDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B6B4C1',
    lineHeight: 18,
    letterSpacing: 0.06,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E9E3E4',
  },
  rearrangeButton: {
    width: 30,
    height: 30,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1D1617',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.07,
    shadowRadius: 40,
    elevation: 5,
  },
  workoutProgress: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B6B4C1',
  },
  exerciseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F1B2A',
    borderRadius: 16,
    marginHorizontal: 24,
    marginBottom: 12,
    padding: 16,
  },
  activeExerciseCard: {
    borderColor: '#4FC3F7',
    borderWidth: 1,
  },
  exerciseImageContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(15, 138, 64, 0.3)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  exerciseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  exerciseContent: {
    flex: 1,
    gap: 8,
  },
  exerciseTitle: {
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
  exerciseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  arrowIcon: {
    transform: [{ rotate: '-90deg' }],
  },
  exerciseRepsDuration: {
    fontSize: 10,
    fontWeight: '400',
    color: '#A5D6A7',
  },
  tooltipContainer: {
    marginTop: 16,
    marginRight: 24,
    alignSelf: 'flex-end',
    backgroundColor: '#0F1B2A',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 8,
    shadowColor: 'rgba(79, 195, 247, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 34,
    elevation: 5,
  },
  tooltipText: {
    fontSize: 8,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 12,
  },
})

