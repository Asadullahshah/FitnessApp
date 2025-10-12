import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'

const ReadyScreen = () => {
  const router = useRouter()
  const { exerciseId } = useLocalSearchParams()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Navigate to video player after countdown
          setTimeout(() => {
            if (exerciseId) {
              router.push(`/(tabs)/workout/video/${exerciseId}` as any)
            } else {
              router.push('/(tabs)/workout/arena' as any)
            }
          }, 500)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [exerciseId])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Are you <Text style={styles.titleHighlight}>Ready?</Text>
      </Text>

      <View style={styles.countdownContainer}>
        <Text style={styles.countdownNumber}>{countdown}</Text>
        
        <Image
          source={require('@/assets/images/fire.png')}
          style={styles.fireImage}
        />
      </View>

      <Text style={styles.subtitle}>
        Turn your <Text style={styles.subtitleHighlight}>Volume</Text> up
      </Text>
    </View>
  )
}

export default ReadyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  titleHighlight: {
    color: '#FF6F61',
  },
  countdownContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  countdownNumber: {
    fontSize: 200,
    fontWeight: '400',
    color: '#4FC3F7',
    textAlign: 'center',
    lineHeight: 240,
    fontFamily: 'System',
  },
  fireImage: {
    width: 74,
    height: 74,
    marginTop: 80,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitleHighlight: {
    color: '#FF6F61',
  },
})


