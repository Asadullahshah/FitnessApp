import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import BackIconSvg from "@/components/ui/BackIconSvg";
import { LinearGradient } from "expo-linear-gradient";
import { favoritesDummyData } from "@/constants/DummyData";

const FavoritesScreen = () => {
  const [searchText, setSearchText] = useState("");

  const filteredPicks = favoritesDummyData.myPicks.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderFavoriteItem = (item: any) => (
    <View key={item.id} style={styles.favoriteItemContainer}>
      <View style={styles.favoriteItem}>
        {/* Workout Image */}
        <Image source={item.image} style={styles.workoutImage} />
        
        {/* Title */}
        <Text style={styles.itemTitle}>{item.title}</Text>
        
        {/* Author Circle */}
        <View style={styles.authorCircle}>
          <Text style={styles.authorInitial}>{item.author.name}</Text>
        </View>
        
        {/* Heart Icon */}
        <Pressable style={styles.heartButton}>
          <View style={styles.heartIconContainer}>
            <View style={styles.heartBg}>
              <Text style={styles.heartIcon}>❤️</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#0F1B2A" />
      
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <BackIconSvg />
        </Pressable>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Favorites</Text>
          <Text style={styles.subtitle}>A collection of everything you deemed worthy</Text>
        </View>

        {/* Search Section */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search collection"
                placeholderTextColor="#9E9E9E"
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
            <LinearGradient
              colors={["#FF6F61", "#99433A"]}
              style={styles.expandButton}
            >
              <Text style={styles.expandIcon}>›</Text>
            </LinearGradient>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesSection}>
          {favoritesDummyData.categories.map((category) => (
            <View key={category.id} style={styles.categoryItem}>
              <View style={styles.categoryCircle}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{category.name}</Text>
            </View>
          ))}
        </View>

        {/* My Picks Section */}
        <View style={styles.myPicksSection}>
          <Text style={styles.sectionTitle}>My picks</Text>
          
          {filteredPicks.map(renderFavoriteItem)}
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#0F1B2A',
    paddingTop: Platform.OS === "android" ? 20 : 44,
    paddingLeft: 24,
    paddingRight: 24,
    position: 'relative',
  },
  backButton: {
    backgroundColor: '#122435',
    borderRadius: 8,
    padding: 4,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#0A0E1A',
  },
  titleSection: {
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 24,
  },
  mainTitle: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.32,
    color: '#FF6F61',
    marginBottom: 24,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#B6B4C1',
    paddingHorizontal: 34.5,
  },
  searchSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  searchInputContainer: {
    flex: 1,
    height: 48,
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#9E9E9E',
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
  },
  expandButton: {
    width: 48,
    height: 48,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandIcon: {
    fontSize: 31,
    color: '#F2F2F2',
    transform: [{ rotate: '-90deg' }],
  },
  categoriesSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 37.5,
    marginBottom: 24,
    gap: 32,
  },
  categoryItem: {
    alignItems: 'center',
    gap: 12,
  },
  categoryCircle: {
    width: 25,
    height: 25,
    backgroundColor: '#1E395A',
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  categoryIcon: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    color: '#4FC3F7',
  },
  categoryLabel: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    color: '#A5D6A7',
  },
  myPicksSection: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#F2F2F2',
    marginBottom: 12,
  },
  favoriteItemContainer: {
    marginBottom: 12,
  },
  favoriteItem: {
    width: 342,
    height: 45,
    backgroundColor: '#0F1B2A',
    borderRadius: 6,
    position: 'relative',
    shadowColor: 'rgba(109, 108, 108, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  workoutImage: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 12,
    top: 8,
    borderRadius: 6,
  },
  authorCircle: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 260,
    top: 8,
    backgroundColor: '#1E395A',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  authorInitial: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: '#4FC3F7',
  },
  heartButton: {
    position: 'absolute',
    width: 32,
    height: 32,
    left: 298,
    top: 7,
  },
  heartIconContainer: {
    width: 32,
    height: 32,
  },
  heartBg: {
    width: 32,
    height: 32,
    backgroundColor: '#122435',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(106, 100, 101, 0.12)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 10,
  },
  heartIcon: {
    fontSize: 16,
    color: '#FF6F61',
  },
  itemTitle: {
    position: 'absolute',
    left: 54,
    top: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#E0E0E0',
  },
});
