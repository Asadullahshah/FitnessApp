import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TrendingConversations from '@/components/ui/TrendingConversations';
import { hubDummyData } from '@/constants/DummyData';

export default function CommunityDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  // Find the community data based on the ID
  const community = hubDummyData.sweatSpaces.find(space => space.id === id);
  
  // Filter posts for this specific community
  const communityPosts = hubDummyData.trendingPosts.filter(post => 
    post.community.slug === community?.slug
  );

  const handleBackPress = () => {
    router.back();
  };

  const handleJoinCommunity = () => {
    console.log(`Joining community: ${community?.title}`);
    // TODO: Replace with actual API call
  };

  if (!community) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Community not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={20} color={Colors.light.primary_colors.sky_blue} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{community.title}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Banner Image */}
        <View style={styles.bannerContainer}>
          <Image source={community.banner_url} style={styles.bannerImage} />
          <LinearGradient
            colors={['rgba(29, 40, 47, 0.1)', 'rgba(29, 40, 47, 0.3)']}
            style={styles.bannerOverlay}
          />
        </View>

        {/* Community Info */}
        <View style={styles.communityInfo}>
          <Text style={styles.description}>{community.description}</Text>
          
          {/* Community Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <MaterialCommunityIcons name="account-group-outline" size={20} color={Colors.light.primary_colors.sky_blue} />
              </View>
              <Text style={styles.statText}>{community.member_count.toLocaleString()} members</Text>
            </View>
            
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Ionicons name="document-text-outline" size={20} color={Colors.light.primary_colors.sky_blue} />
              </View>
              <Text style={styles.statText}>500 posts</Text>
            </View>
          </View>

          {/* Join Community Button */}
          <TouchableOpacity onPress={handleJoinCommunity} style={styles.joinButtonContainer}>
            <LinearGradient
              colors={[Colors.light.primary_colors.coral_red, '#99433A']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.joinButton}
            >
              <Text style={styles.joinButtonText}>Join Community</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Community Posts */}
        <View style={styles.postsSection}>
          {communityPosts.length > 0 ? (
            communityPosts.map((post) => (
              <TrendingConversations key={post.id} {...post} />
            ))
          ) : (
            <View style={styles.noPostsContainer}>
              <Text style={styles.noPostsText}>No posts yet in this community</Text>
              <Text style={styles.noPostsSubtext}>Be the first to share something!</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
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
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: Colors.light.secondary_colors.navy_blue,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.light.primary_colors.coral_red,
    fontFamily: 'Poppins-SemiBold',
  },
  headerSpacer: {
    width: 32,
  },
  scrollView: {
    paddingVertical: 16,
    flex: 1,
  },
  bannerContainer: {
    marginHorizontal: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.light.primary_colors.sky_blue,
    overflow: 'hidden',
    maxHeight: 200,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  communityInfo: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 12,
    marginHorizontal: 24,
  },
  description: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 500,
    color: Colors.light.inputText,
    fontFamily: 'Poppins-Regular',
    lineHeight: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-start',
  },
  statItem: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIcon: {
  //   width: 32,
  //   height: 32,
  //   backgroundColor: Colors.light.secondary_colors.navy_blue,
  //   borderRadius: 8,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  },
  statText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: 300,
  },
  joinButtonContainer: {
    alignSelf: 'flex-start',
  },
  joinButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  postsSection: {
    marginTop: 24,
    paddingBottom: 40,
  },
  noPostsContainer: {
    alignItems: 'center',
  },
  noPostsText: {
    fontSize: 16,
    color: '#E0E0E0',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  noPostsSubtext: {
    fontSize: 14,
    color: '#B8B4C1',
    fontFamily: 'Poppins-Regular',
  },
  errorText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 100,
  },
}); 