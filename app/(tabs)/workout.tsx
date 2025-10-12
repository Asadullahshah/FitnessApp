import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { workoutDummyData } from '@/constants/DummyData'

const Workout = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('mood')
  const [activeDifficulty, setActiveDifficulty] = useState(1)

  const renderMuscleGroupCard = (group: any, index: number) => {
    const isLarge = group.cardType === 'large'
    const progressPercentage = (group.progress.completed / group.progress.total) * 100

    return (
      <TouchableOpacity 
        key={group.id}
        style={[
          styles.muscleGroupCard, 
          isLarge ? styles.largeCard : styles.mediumCard,
          getCardPosition(index)
        ]}
        onPress={() => router.push(`/(tabs)/workout/${group.id}` as any)}
      >
        {/* Progress indicator */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {group.progress.completed}/{group.progress.total}
          </Text>
          <Text style={styles.progressLabel}>
            {group.progress.completed === group.progress.total ? 'Workout Completed' : 'Workout'}
          </Text>
        </View>

        {/* Images */}
        <View style={styles.imagesContainer}>
          {group.images.map((image: any, imgIndex: number) => (
            <Image
              key={imgIndex}
              source={image}
              style={[styles.exerciseImage, getImagePosition(imgIndex, group.images.length, group.isLarge)]}
            />
          ))}
        </View>

        {/* Title and Description */}
        <View style={styles.cardContent}>
          <Text style={styles.muscleGroupTitle}>{group.name}</Text>
          <Text style={styles.muscleGroupDescription}>{group.description}</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBar}>
          <View style={styles.progressBarBg} />
          <View style={[styles.progressBarFill, { width: `${progressPercentage}%` }]} />
        </View>
      </TouchableOpacity>
    )
  }

  const getCardPosition = (index: number) => {
    const positions = [
      { top: 459, left: 24 }, // Full Body - large
      { top: 639, left: 203 }, // Arms - medium  
      { top: 684, left: 24 }, // Back - large
      { top: 459, left: 203 }, // Chest - medium
      { top: 909, left: 24 }, // Legs - medium
      { top: 819, left: 203 }, // Abs - medium
      { top: 1019, left: 203 } // Shoulders - large
    ]
    return {
      position: 'absolute' as const,
      top: positions[index]?.top || 459,
      left: positions[index]?.left || 24,
    }
  }

  const getImagePosition = (imgIndex: number, totalImages: number, isLarge?: boolean) => {
    if (isLarge) {
      return {
        position: 'absolute' as const,
        top: 22,
        left: 77,
        width: 70,
        height: 70,
      }
    }

    if (totalImages === 1) {
      return {
        position: 'absolute' as const,
        top: 25,
        left: 77,
        width: 70,
        height: 70,
      }
    }

    // Multiple images layout
    const positions = [
      { top: 14, left: 107 },
      { top: 60, left: 107 },
      { top: 38, left: 61 },
      { top: 87, left: 107 },
    ]

    return {
      position: 'absolute' as const,
      top: positions[imgIndex]?.top || 14,
      left: positions[imgIndex]?.left || 107,
      width: 40,
      height: 40,
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E1A" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#4FC3F7" />
        </TouchableOpacity>
        
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Sweat or Regret?</Text>
          <Text style={styles.headerSubtitle}>Because progress doesn't come free</Text>
        </View>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={styles.searchInputContainer}>
              <Ionicons name="search" size={20} color="#9E9E9E" />
              <Text style={styles.searchPlaceholder}>Find Workout</Text>
            </View>
            <View style={styles.filterContainer}>
              <Ionicons name="options" size={20} color="#000" />
            </View>
          </View>
          <TouchableOpacity style={styles.expandButton}>
            <Ionicons name="chevron-forward" size={31} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Workout Title */}
        <Text style={styles.workoutTitle}>Workout</Text>

        {/* Difficulty Selector */}
        <View style={styles.difficultyContainer}>
          <Text style={styles.difficultyLabel}>Difficulty</Text>
          <View style={styles.difficultyCard}>
            <View style={styles.difficultyBg} />
            <View style={styles.difficultyDots}>
              {workoutDummyData.difficultyLevels.map((level) => (
                <View
                  key={level.id}
                  style={[
                    styles.difficultyDot,
                    { backgroundColor: level.active ? level.color : '#1D5F7C' },
                    { opacity: level.active ? 1 : 0.4 }
                  ]}
                />
              ))}
            </View>
          </View>
        </View>

        {/* Random Workout Tip */}
        <View style={styles.randomTip}>
          <Text style={styles.randomTipText}>Throw a dice and get a random workout</Text>
        </View>

        {/* Tab Selector */}
        <View style={styles.tabContainer}>
          {workoutDummyData.tabOptions.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, activeTab === tab.id && styles.activeTab]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          ))}
          <View style={styles.diceButton}>
            <Ionicons name="dice" size={24} color="#FFFFFF" />
          </View>
        </View>

        {/* Subtitle */}
        {activeTab !== 'mood' && (
          <Text style={styles.subtitle}>
            {activeTab === 'programs' 
              ? 'Pick a program, get sweaty, & make those gains' 
              : 'Pick the body part you want to punish (reward)'}
          </Text>
        )}

        {/* Muscle Groups Grid */}
        {activeTab === 'bodypart' && (
          <View style={styles.muscleGroupsContainer}>
            {workoutDummyData.muscleGroups.map((group, index) => 
              renderMuscleGroupCard(group, index)
            )}
          </View>
        )}

        {/* Programs Grid */}
        {activeTab === 'programs' && (
          <View style={styles.programsGrid}>
            {workoutDummyData.programs.map((program, index) => {
              const row = Math.floor(index / 2)
              const col = index % 2
              const top = 459 + (row * 178) // 166 height + 12 gap
              const left = col === 0 ? 24 : 203
              
  return (
                <TouchableOpacity
                  key={program.id}
                  style={[
                    styles.programCard,
                    {
                      position: 'absolute',
                      top,
                      left,
                    }
                  ]}
                  onPress={() => router.push(`/(tabs)/workout/programs/${program.id}` as any)}
                >
                  <Image
                    source={program.image}
                    style={[styles.programImage, { borderColor: program.borderColor }]}
                  />
                  <Text style={styles.programTitle}>{program.title}</Text>
                  
                  <View style={styles.programProgressContainer}>
                    <View style={styles.programProgressBg}>
                      <View style={styles.programProgressCircle}>
                        <Text style={styles.programProgressText}>
                          {program.completed === 0 ? program.duration : `${program.completed}/${program.total}`}
                        </Text>
                      </View>
                      {program.locked && (
                        <View style={styles.programLockIcon}>
                          <Ionicons name="lock-closed" size={12} color="#4FC3F7" />
                        </View>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        )}

        {/* Mood Workouts Grid */}
        {activeTab === 'mood' && (
          <View style={styles.moodContainer}>
            {workoutDummyData.moodWorkouts.map((mood, index) => (
              <TouchableOpacity
                key={mood.id}
                style={styles.moodCard}
                onPress={() => router.push(`/(tabs)/workout/mood/${mood.id}` as any)}
              >
                <View style={styles.moodImageContainer}>
                  <Image
                    source={mood.image}
                    style={styles.moodImage}
                  />
                </View>
                <View style={styles.moodContent}>
                  <View style={styles.moodTitleBadge}>
                    <Text style={styles.moodTitleText}>{mood.title}</Text>
                  </View>
                  <Text style={styles.moodDescription}>{mood.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Workout Character */}
        <View style={styles.characterContainer}>
          <Image
            source={require('@/assets/images/women-planking.png')}
            style={styles.characterImage}
          />
    </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Workout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: '#0A0E1A',
  },
  header: {
    backgroundColor: '#0F1B2A',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  headerContent: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
        fontSize: 20,
    fontWeight: '700',
    color: '#FF6F61',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.32,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#B6B4C1',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    height: 48,
    backgroundColor: '#263238',
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  searchPlaceholder: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9E9E9E',
  },
  filterContainer: {
    width: 33,
    height: 33,
    backgroundColor: '#E9E6E6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  expandButton: {
    width: 48,
    height: 48,
    backgroundColor: '#FF6F61',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
  scrollView: {
    flex: 1,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F2F2F2',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  difficultyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
    gap: 12,
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
  randomTip: {
    alignSelf: 'center',
    backgroundColor: '#182025',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 9,
    marginBottom: 24,
    opacity: 0.8,
  },
  randomTipText: {
    fontSize: 6,
    fontWeight: '300',
    color: '#F2F2F2',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: '#263238',
    borderRadius: 12,
    height: 50,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: '#122435',
    borderColor: '#4FC3F7',
    borderWidth: 1,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9E9E9E',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  diceButton: {
    width: 54,
    height: 50,
    backgroundColor: '#263238',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9E9E9E',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 24,
  },
  muscleGroupsContainer: {
    height: 1300,
    position: 'relative',
    marginHorizontal: 0,
  },
  muscleGroupCard: {
    backgroundColor: '#0F1B2A',
    borderRadius: 16,
    position: 'absolute',
  },
  largeCard: {
    width: 163,
    height: 209,
  },
  mediumCard: {
    width: 163,
    height: 164,
  },
  progressContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  progressText: {
    fontSize: 8,
    fontWeight: '400',
    color: '#9E9E9E',
    textAlign: 'center',
  },
  progressLabel: {
    fontSize: 8,
    fontWeight: '400',
    color: '#9E9E9E',
    textAlign: 'center',
  },
  imagesContainer: {
    position: 'relative',
  },
  exerciseImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cardContent: {
    position: 'absolute',
    bottom: 39,
    left: 12,
    right: 12,
    gap: 6,
  },
  muscleGroupTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  muscleGroupDescription: {
    fontSize: 10,
    fontWeight: '400',
    color: '#B6B4C1',
    lineHeight: 15,
  },
  progressBar: {
    position: 'absolute',
    bottom: 15,
    left: 31,
    width: 101,
    height: 3,
  },
  progressBarBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#5F6467',
    borderRadius: 1,
  },
  progressBarFill: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#A5D6A7',
    borderRadius: 1,
  },
  characterContainer: {
    position: 'absolute',
    top: 1120,
    left: 79,
    width: 52,
    height: 70,
  },
  characterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomSpacing: {
    height: 200,
  },
  programsGrid: {
    position: 'relative',
    width: '100%',
    minHeight: 1200, // Height to accommodate all cards
    marginTop: 13,
  },
  programCard: {
    width: 163,
    height: 166,
    backgroundColor: '#0F1B2A',
    borderRadius: 16,
    position: 'relative',
    marginBottom: 12,
  },
  leftCard: {
    marginRight: 0,
  },
  rightCard: {
    marginLeft: 0,
  },
  programImage: {
    width: 61,
    height: 35,
    position: 'absolute',
    top: 21,
    left: 51,
    borderRadius: 5,
    borderWidth: 1,
  },
  programTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F2F2F2',
    textAlign: 'center',
    position: 'absolute',
    top: 68,
    left: 12,
    right: 12,
    lineHeight: 18,
  },
  programProgressContainer: {
    position: 'absolute',
    bottom: 16,
    left: 12,
    right: 12,
  },
  programProgressBg: {
    width: 139,
    height: 34,
    backgroundColor: '#4FC3F7',
    opacity: 0.2,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'relative',
  },
  programProgressCircle: {
    width: 32,
    height: 32,
    backgroundColor: '#1A2738',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#4FC3F7',
    position: 'absolute',
    top: 1,
    left: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  programProgressText: {
    fontSize: 10,
    fontWeight: '400',
    color: '#CBC4C4',
    textAlign: 'center',
  },
  programLockIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#1A2738',
    borderRadius: 12,
    position: 'absolute',
    top: 5,
    right: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Mood Workouts Styles
  moodContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 16,
  },
  moodCard: {
    width: 342,
    height: 237,
    backgroundColor: 'transparent',
    marginBottom: 16,
  },
  moodImageContainer: {
    width: 143,
    height: 145,
    alignSelf: 'center',
    marginBottom: 16,
  },
  moodImage: {
    width: 143,
    height: 145,
    resizeMode: 'contain',
  },
  moodContent: {
    width: 152,
    alignSelf: 'center',
  },
  moodTitleBadge: {
    height: 30,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(79, 195, 247, 0.2)',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  moodTitleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F2F2F2',
    textAlign: 'center',
    lineHeight: 21,
  },
  moodDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#E0E0E0',
    textAlign: 'center',
    lineHeight: 18,
  },
})