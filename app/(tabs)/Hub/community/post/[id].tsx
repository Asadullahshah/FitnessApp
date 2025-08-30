import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Dummy data for the post and comments
const dummyPostData = {
  id: "1",
  author: {
    first_name: "Fitness",
    last_name: "Guru",
    username: "fitness_guru",
    profile_picture_url: "https://i.pravatar.cc/100?img=1",
  },
  content: "New feature dropped! Check out the leaderboard updates 🏆",
  upvote_count: 12000,
  comment_count: 32,
  created_at: "2024-12-03T22:24:00Z",
  community: {
    title: "What's Hot",
    slug: "whats-hot",
  },
  comments: [
    {
      id: "1",
      author: {
        first_name: "Sarah",
        last_name: "babyy",
        username: "sarah_babyy",
        profile_picture_url: "https://i.pravatar.cc/100?img=10",
      },
      content: "Just checked it out and I'm already obsessed",
      likes: 3,
      created_at: "2024-12-03T22:30:00Z",
    },
    {
      id: "2",
      author: {
        first_name: "Fitness",
        last_name: "Guru",
        username: "fitness_guru",
        profile_picture_url: "https://i.pravatar.cc/100?img=1",
      },
      content: "Yo this is crazy! I love that we can finally see our progress next to others.",
      likes: 30,
      created_at: "2024-12-03T22:35:00Z",
    },
    {
      id: "3",
      author: {
        first_name: "Sam",
        last_name: "flex",
        username: "sam_flex",
        profile_picture_url: "https://i.pravatar.cc/100?img=11",
      },
      content: "Okayyy this is dope. I was already doing my thing lowkey but now y'all gave us a whole board to flex on?",
      likes: 200,
      created_at: "2024-12-03T22:40:00Z",
    },
    {
      id: "4",
      author: {
        first_name: "Fitness",
        last_name: "Guru",
        username: "fitness_guru",
        profile_picture_url: "https://i.pravatar.cc/100?img=1",
      },
      content: "Ain't no way I'm staying at the bottom of that board 💀 time to lace up and lock in. This is the push I needed",
      likes: 3,
      created_at: "2024-12-03T22:45:00Z",
    },
    {
      id: "5",
      author: {
        first_name: "Hannah",
        last_name: "Sule",
        username: "hannah_sule",
        profile_picture_url: "https://i.pravatar.cc/100?img=12",
      },
      content: "Yo this is crazy! I love that we can finally see our progress next to others.",
      likes: 15,
      created_at: "2024-12-03T22:50:00Z",
    },
  ],
};

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [commentText, setCommentText] = useState('');
  
  // In a real app, you'd fetch the post data based on the ID
  const post = dummyPostData;

  const handleBackPress = () => {
    router.back();
  };

  const handleShareComment = () => {
    if (commentText.trim()) {
      console.log('Sharing comment:', commentText);
      // TODO: Replace with actual API call
      setCommentText('');
    }
  };

  const handleLikeComment = (commentId: string) => {
    console.log('Liking comment:', commentId);
    // TODO: Replace with actual API call
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'numeric', 
        day: 'numeric',
        year: 'numeric'
      });
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      {/* <View style={styles.mainHeader}> */}

      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={20} color={Colors.light.primary_colors.sky_blue} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{post.community.title}</Text>
        <View style={styles.headerSpacer} />
      {/* </View> */}
      </View>
      <View style={styles.subHeader}>
        <TouchableOpacity style={styles.postsButton}>
        <LinearGradient
              colors={['rgba(79, 195, 247, 0.2)', 'rgba(255, 111, 97, 0.2)']}
            //   locations={[0, 1.245]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.subheadingGradient}
            >
          <Text style={styles.postsButtonText}>Posts</Text>
            </LinearGradient>
        </TouchableOpacity>

      </View>

      <KeyboardAvoidingView 
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Main Post */}
          <View style={styles.mainPost}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.author.profile_picture_url }} style={styles.authorAvatar} />
              <View style={styles.authorInfo}>
                <Text style={styles.authorName}>{post.author.first_name} {post.author.last_name}</Text>
                <Text style={styles.postTimestamp}>
                  {formatTime(post.created_at)} • {formatDate(post.created_at)}
                </Text>
              </View>
            </View>
            
            <Text style={styles.postContent}>{post.content}</Text>
            
            <View style={styles.postEngagement}>
              <View style={styles.engagementItem}>
                <MaterialCommunityIcons name="thumb-up-outline" size={16} color={Colors.light.primary_colors.sky_blue} />
                <Text style={styles.engagementText}>{post.upvote_count.toLocaleString()} gave kudos</Text>
              </View>
              <View style={styles.engagementItem}>
                <MaterialCommunityIcons name="comment-outline" size={14} color={Colors.light.primary_colors.sky_blue} />
                <Text style={styles.engagementText}>{post.comment_count} comments</Text>
              </View>
            </View>
          </View>
          <View style={styles.divider}></View>

          {/* Comments Section */}
          <View style={styles.commentsSection}>
            {post.comments.map((comment) => (
              <View key={comment.id} style={styles.commentItem}>
                <Image source={{ uri: comment.author.profile_picture_url }} style={styles.commentAvatar} />
                <View style={styles.commentContent}>
                  <Text style={styles.commentAuthorName}>{comment.author.first_name} {comment.author.last_name}</Text>
                  <Text style={styles.commentText}>{comment.content}</Text>
                  <View style={styles.commentActions}>
                    <TouchableOpacity 
                      style={styles.likeButton}
                      onPress={() => handleLikeComment(comment.id)}
                    >
                      <Ionicons name="heart-outline" size={9} color="#FF6B6B" />
                      <Text style={styles.likeCount}>{comment.likes} likes</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Comment Input */}
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Say something cool"
            placeholderTextColor="#B8B4C1"
            value={commentText}
            onChangeText={setCommentText}
            multiline
          />
          <TouchableOpacity 
            style={styles.shareButton}
            onPress={handleShareComment}
            disabled={!commentText.trim()}
          >
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
//   mainHeader: {},
  header: {
    backgroundColor: Colors.light.header,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.secondary_colors.dark_navy,
  },
  subHeader: {
    backgroundColor: Colors.light.header,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
  },
  backButton: {
    width: 32,
    height: 32,
    // alignSelf: 'flex-start',
    backgroundColor: Colors.light.secondary_colors.navy_blue,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    // alignSelf: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.light.primary_colors.coral_red,
    fontFamily: 'Poppins-SemiBold',
  },
  headerSpacer: {
    width: 32,
  },
  postsButton: {
    // backgroundColor: Colors.light.secondary_colors.dark_navy,
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    // borderRadius: 16,
    // width: '100%'
  },
  subheadingGradient: {
    paddingHorizontal: 24, 
    paddingVertical: 4,
    borderRadius: 8,
    // opacity: 0.2,
  },
  postsButtonText: {
    // opacity: 1,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // paddingVertical: 24,
    marginTop: 28,
    // paddingBottom: 16,
  },
  mainPost: {
    // backgroundColor: Colors.light.secondary_colors.navy_blue,
    marginHorizontal: 24,
    // padding: 16,
    // borderRadius: 16,
    marginBottom: 24,
//     paddingBottom: 24,
//     borderBottomWidth: 1,
// borderBottomColor: '#FFFFFF4F',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 9,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    color: Colors.light.primary_colors.soft_white,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    marginBottom: 2,
  },
  postTimestamp: {
    color: Colors.light.primary_colors.softer_white,
    fontSize: 8,
    fontFamily: 'Poppins-Regular',
    // lineHeight: 15,
    fontWeight: 400,
  },
  postContent: {
    color: Colors.light.primary_colors.softer_white,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: 300,
    lineHeight: 20,
    marginBottom: 16,
  },
  postEngagement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 16,
    // borderTopWidth: 1,
    // borderTopColor: '#2A2F38',
  },
  engagementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  engagementText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    fontWeight: 400,
  },
  divider: {
    height: 1,
    backgroundColor: '#FFFFFF4F',
    width: '100%',
  },
  commentsSection: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  commentAvatar: {
    width: 24,
    height: 24,
    borderRadius: 16,
    marginRight: 5,
  },
  commentContent: {
    flex: 1,
  },
  commentAuthorName: {
    color: Colors.light.primary_colors.soft_white,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
  },
  commentText: {
    color: Colors.light.primary_colors.soft_white,
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    fontWeight: 300,
    lineHeight: 15,
    marginBottom: 6,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likeCount: {
    color: Colors.light.primary_colors.soft_white,
    fontSize: 8,
    fontFamily: 'Poppins-Regular',
    fontWeight: 500,
    lineHeight: 15,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: Colors.light.header,
    borderTopWidth: 1,
    borderTopColor: '#D1E1EF1A',
  },
  commentInput: {
    flex: 1,
    // backgroundColor: '#2A2F38',
    // borderRadius: 20,
    // paddingHorizontal: 16,
    // paddingVertical: 12,
    color: 'rgba(255, 255, 255, 0.60)',
    fontSize: 10,
    fontWeight: 300,
    // textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    // marginRight: 12,
    // maxHeight: 80,
  },
  shareButton: {
    backgroundColor: Colors.light.primary_colors.coral_red,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  shareButtonText: {
    color: Colors.light.primary_colors.soft_white,
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
}); 