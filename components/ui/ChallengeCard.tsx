import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, ImageURISource } from 'react-native';

const { width } = Dimensions.get('window');

interface SweatSpaceCardProps {
  title: string;
  imageSource: ImageURISource;
  members: ImageURISource[]; // array of image URLs
  icon: any;      // category text like "Lower Body"
  onAddPress?: () => void;
}

const ChallengeCard: React.FC<SweatSpaceCardProps> = ({
  title,
  imageSource,
  members,
  icon,
}) => {
  return (
    <ImageBackground
      source={imageSource}
      style={styles.card}
      imageStyle={styles.image}
    >
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{icon}</Text>
      </View>

      <View style={styles.bottomContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>30 days | Strength</Text>
        <View style={styles.membersRow}>
          <View style={styles.avatars}>
            {members.map((uri, index) => (
                console.log(uri),
              <Image
                key={index}
                source={uri}
                style={[styles.avatar, { marginLeft: index === 0 ? 0 : -10 }]}
              />
            ))}
          </View>
          <Text style={styles.joinedText}>2.3k joined</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 14,
    justifyContent: 'flex-end',
    backgroundColor: '#000',
    marginLeft: 10,
    marginBottom: 16,
  },
  image: {
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  bottomContent: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subTitle: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 4,
  },
  membersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  avatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  joinedText: {
    color: '#ccc',
    fontSize: 12,
    marginLeft: 8,
  },
});

export default ChallengeCard;
