import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const ArenaScreen = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('@/assets/images/women-planking.png')}
        style={styles.backgroundImage}
      />

      {/* Close Button */}
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="#4FC3F7" />
      </TouchableOpacity>

      {/* Workout Label */}
      <View style={styles.workoutLabel}>
        <Text style={styles.workoutLabelText}>Cardio Burn</Text>
      </View>

      {/* Bottom Character */}
      <View style={styles.characterContainer}>
        <Image
          source={require('@/assets/images/women-planking.png')}
          style={styles.characterImage}
        />
        
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText}>I'm Done</Text>
        </TouchableOpacity>
      </View>

      {/* Countdown Overlay */}
      <View style={styles.countdownOverlay}>
        <View style={styles.countdownContainer}>
          <Ionicons name="time-outline" size={58} color="#263238" style={{ opacity: 0.6 }} />
          <Text style={styles.countdownText}>0</Text>
        </View>
      </View>
    </View>
  )
}

export default ArenaScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  closeButton: {
    position: 'absolute',
    top: 24,
    right: 24,
    width: 32,
    height: 32,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '90deg' }],
  },
  workoutLabel: {
    position: 'absolute',
    top: '50%',
    right: 308,
    width: 201,
    height: 46,
    backgroundColor: '#7E7E7E',
    opacity: 0.7,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#122435',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 9,
    elevation: 5,
    transform: [{ rotate: '90deg' }],
  },
  workoutLabelText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.7,
    transform: [{ rotate: '90deg' }],
  },
  characterContainer: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    transform: [{ rotate: '90deg' }],
  },
  characterImage: {
    width: 52,
    height: 70,
    resizeMode: 'contain',
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
    textAlign: 'center',
  },
  countdownOverlay: {
    position: 'absolute',
    bottom: 296,
    right: 712,
    transform: [{ rotate: '90deg' }],
  },
  countdownContainer: {
    width: 89,
    height: 70,
    backgroundColor: '#262626',
    opacity: 0.45,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#122435',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 9,
    elevation: 5,
  },
  countdownText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FF6F61',
    textAlign: 'center',
    position: 'absolute',
  },
})


