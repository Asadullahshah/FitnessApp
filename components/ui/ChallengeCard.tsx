import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { formatNumber } from '@/constants/DummyData';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface ChallengeCardProps {
  id: string;
  title: string;
  category: string;
  duration: string;
  type: string;
  image_url: any;
  member_count: number;
  joined_members: any[];
  status: string;
  difficulty: string;
  onPress?: () => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  category,
  duration,
  type,
  image_url,
  member_count,
  joined_members,
  difficulty,
  onPress,
}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={image_url}
        style={styles.card}
        imageStyle={styles.image}
      >
        {/* Gradient overlay */}
        <LinearGradient
          colors={['rgba(29, 40, 47, 0.1)', 'rgba(29, 40, 47, 0.2)', 'rgba(29, 40, 47, 0.3)']}
          locations={[0, 0.5, 1]}
          style={styles.gradientOverlay}
        />
        
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{category}</Text>
        </View>

        <View style={styles.bottomContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{duration} | {type}</Text>
          <View style={styles.membersRow}>
            <View style={styles.avatars}>
              {joined_members.slice(0, 3).map((member, index) => (
                <Image
                  key={index}
                  source={member}
                  style={[styles.avatar, { marginLeft: index === 0 ? 0 : -8 }]}
                />
              ))}
            </View>
            <Text style={styles.joinedText}>{formatNumber(member_count)} joined</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 40,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    // marginHorizontal: 20,
    marginBottom: 16,
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    backgroundColor: '#000',
  },
  image: {
    resizeMode: 'cover',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 12,
  },
  badge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(73, 76, 65, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 0.4,
    borderColor: '#6E6A5C',
    zIndex: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  bottomContent: {
    // backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    zIndex: 2,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    marginBottom: 6,
  },
  subTitle: {
    color: '#E0E0E0',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginBottom: 12,
  },
  membersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
  },
  avatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
  joinedText: {
    color: '#E0E0E0',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
});

export default ChallengeCard;
