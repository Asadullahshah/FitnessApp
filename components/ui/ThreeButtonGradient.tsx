import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BelliconSvg from './BellIconSvg';

type Props = {
  onButton1Press?: () => void;
  onButton2Press?: () => void;
  onButton3Press?: () => void;
};

const ThreeButtonGradient: React.FC<Props> = ({ 
  onButton1Press, 
  onButton2Press, 
  onButton3Press 
}) => {
  return (
    <LinearGradient
      colors={['#c96c6c', '#325d78']} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <TouchableOpacity  onPress={onButton1Press}>
        {/* <Text style={styles.text}>Button 1</Text> */}
        <Image source={require('../../assets/images/strekFire.png')} style={{ width: 32, height: 32 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onButton2Press}>
        {/* <Text style={styles.text}>Button 2</Text> */}
        <Image source={require('../../assets/images/surpriseBox.png')} style={{ width: 52, height: 52 }} />
      </TouchableOpacity>

      <TouchableOpacity  onPress={onButton3Press}>
        {/* <Text style={styles.text}>Button 3</Text> */}
        <BelliconSvg />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    height: 46,
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
