import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ActivityCardProps {
  title: string;
  description: string;
  likes: number;
  comments: number;
}

const TrendingConversations: React.FC<ActivityCardProps> = ({ title, description, likes, comments }) => {
  return (
    <View style={styles.card}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }} // Dummy avatar
          style={styles.avatar}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.iconWithText}>
          <FontAwesome name="thumbs-up" size={18} color="#4FC3F7" />
          <Text style={styles.bottomText}>{likes} gave kudos</Text>
        </View>
        <View style={styles.iconWithText}>
          <FontAwesome name="comment-o" size={18} color="#4FC3F7" />
          <Text style={styles.bottomText}>{comments} comments</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#11151c',
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: 'red',
    shadowOffset: {
      width: 100,
      height: 200,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: '#ccc',
    marginTop: 4,
    fontSize: 14,
    flexShrink: 1,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  bottomText: {
    color: '#ccc',
    marginLeft: 6,
    fontSize: 13,
  },
});

export default TrendingConversations;
