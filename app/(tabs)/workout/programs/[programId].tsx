import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { workoutDummyData } from '@/constants/DummyData'

const ProgramDetail = () => {
  const router = useRouter()
  const { programId } = useLocalSearchParams()
  const program = workoutDummyData.programs.find(p => p.id === programId)
  const programDays = workoutDummyData.programDays[programId as keyof typeof workoutDummyData.programDays]

  if (!program || !programDays) {
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
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons name="heart-outline" size={20} color="#FF6F61" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{program.title}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image with Gradient */}
        <View style={styles.heroContainer}>
          <View style={styles.heroGradient} />
          <Text style={styles.heroTitle}>{program.title}</Text>
        </View>

        {/* Program Info */}
        <View style={styles.infoSection}>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Ionicons name="calendar" size={12} color="#C8DBF9" style={styles.tagIcon} />
              <Text style={styles.tagText}>{program.duration}</Text>
            </View>
            <View style={[styles.tag, styles.noEquipmentTag]}>
              <Ionicons name="fitness" size={12} color="#FDEEED" style={styles.tagIcon} />
              <Text style={styles.tagText}>No Equipment</Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.description}>{program.description}</Text>
        </View>

        {/* Days Horizontal Scroll */}
        <ScrollView 
          horizontal 
          style={styles.daysScrollContainer}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.daysScrollContent}
        >
          {programDays.days.map((day, index) => (
            <TouchableOpacity
              key={day.id}
              style={[
                styles.dayCard,
                day.completed && styles.dayCardCompleted,
                day.locked && styles.dayCardLocked
              ]}
              disabled={day.locked}
              onPress={() => router.push(`/(tabs)/workout/programs/${programId}/day/${day.id}` as any)}
            >
              <Text style={[
                styles.dayTitle,
                day.completed && styles.dayTitleCompleted,
                day.locked && styles.dayTitleLocked
              ]}>
                {day.title}
              </Text>
              <View style={[
                styles.dayIconCircle,
                day.completed && styles.dayIconCircleCompleted,
                day.locked && styles.dayIconCircleLocked
              ]}>
                {day.completed ? (
                  <Ionicons name="checkmark" size={16} color="#4FC3F7" />
                ) : day.locked ? (
                  <Ionicons name="lock-closed" size={16} color="rgba(211, 205, 205, 0.6)" />
                ) : (
                  <Ionicons name="play" size={16} color="#4FC3F7" style={{ transform: [{ rotate: '90deg' }] }} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Start Program Button */}
        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => router.push(`/(tabs)/workout/programs/${programId}/day/1` as any)}
        >
          <Text style={styles.startButtonText}>Start Program</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProgramDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
  },
  header: {
    height: 104,
    backgroundColor: '#0F1B2A',
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
  likeButton: {
    width: 32,
    height: 32,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 56,
    right: 24,
    shadowColor: '#1D1617',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.07,
    shadowRadius: 40,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6F61',
    position: 'absolute',
    top: 60,
    left: 99,
  },
  heroContainer: {
    height: 155,
    backgroundColor: '#0F1B2A',
    position: 'relative',
    justifyContent: 'flex-end',
    paddingLeft: 24,
    paddingBottom: 24,
  },
  heroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  heroTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 24,
    letterSpacing: 0.01,
    zIndex: 1,
  },
  infoSection: {
    paddingHorizontal: 24,
    marginTop: 15,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: '#1756B7',
    borderRadius: 10.5,
    height: 24,
  },
  noEquipmentTag: {
    backgroundColor: '#DE776F',
  },
  tagIcon: {
    marginLeft: 4,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 15,
    textAlign: 'center',
    marginRight: 8,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B6B4C1',
    lineHeight: 20,
    letterSpacing: 0.04,
  },
  daysScrollContainer: {
    marginTop: 24,
    marginLeft: 24,
    height: 89,
  },
  daysScrollContent: {
    paddingRight: 24,
    gap: 16,
  },
  dayCard: {
    width: 50.08,
    height: 88.97,
    backgroundColor: '#0E1827',
    borderRadius: 51,
    alignItems: 'center',
    position: 'relative',
  },
  dayCardCompleted: {
    backgroundColor: '#0E1827',
  },
  dayCardLocked: {
    backgroundColor: 'rgba(14, 24, 39, 0.8)',
    opacity: 0.8,
  },
  dayTitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 18,
    textAlign: 'center',
  },
  dayTitleCompleted: {
    fontWeight: '600',
  },
  dayTitleLocked: {
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  dayIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#4FC3F7',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
  },
  dayIconCircleCompleted: {
    borderColor: '#4FC3F7',
  },
  dayIconCircleLocked: {
    borderColor: 'rgba(211, 205, 205, 0.6)',
  },
  startButton: {
    marginHorizontal: 24,
    marginTop: 40,
    height: 48,
    backgroundColor: '#FF6F61',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(95, 92, 92, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F2F2F2',
  },
})

