import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ThreeButtonGradient = () => {
  const handlePress = (btn: string) => {
    console.log(`${btn} button pressed`);
  };

  return (
    <LinearGradient
      colors={['#c96c6c', '#325d78']} // reddish to bluish
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      {['Button 1', 'Button 2', 'Button 3'].map((label, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handlePress(label)}
        >
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ThreeButtonGradient;
