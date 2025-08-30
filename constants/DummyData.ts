export const notifications = [
    {
      id: '1',
      title: 'No more scrolling, get up and stretch!',
      date: '2025-04-14T10:00:00Z',
      icon: '✋',
    },
    {
      id: '2',
      title: 'Drink water, pity yourself!',
      date: '2025-04-15T13:10:00Z',
      icon: '💧',
    },
    {
      id: '3',
      title: 'Congrats! You didn’t puss out today!',
      date: '2025-04-09T08:30:00Z',
      icon: '💪',
    },
    {
      id: '4',
      title: 'Hey, it’s time for lunch',
      date: '2025-04-08T12:00:00Z',
      icon: '🍱',
    },
  ];
  
// Hub Screen Dummy Data
export const hubDummyData = {
  // Top Navigation Items
  topNavItems: [
    {
      id: "1",
      name: "My Friends",
      icon: require("@/assets/images/friends.png"),
      route: "Friends",
    },
    {
      id: "2", 
      name: "Achievements",
      icon: require("@/assets/images/achivements.png"),
      route: "Achievements",
    },
    {
      id: "3",
      name: "Leaderboard", 
      icon: require("@/assets/images/leaderboard.png"),
      route: "Leaderboard",
    },
    {
      id: "4",
      name: "Guides",
      icon: require("@/assets/images/guides.png"),
      route: "Guides",
    },
  ],

  // Trending Conversations (Posts)
  trendingPosts: [
    {
      id: "1",
      author: {
        first_name: "Fitness",
        last_name: "Guru",
        username: "fitness_guru",
        profile_picture_url: "https://i.pravatar.cc/100?img=1",
      },
      title: "Fitness Guru",
      content: "New feature dropped! Check out the leaderboard updates 🏆",
      upvote_count: 12000,
      comment_count: 32,
      created_at: "2024-12-03T22:24:00Z",
      community: {
        title: "What's Hot",
        slug: "whats-hot",
      },
    },
    {
      id: "2",
      author: {
        first_name: "Workout",
        last_name: "Pro",
        username: "workout_pro",
        profile_picture_url: "https://i.pravatar.cc/100?img=2",
      },
      title: "Workout Pro",
      content: "Just completed my 30-day challenge! Who's joining me for the next one? 💪",
      upvote_count: 8500,
      comment_count: 156,
      created_at: "2024-01-01T00:00:00Z",
      community: {
        title: "Challenge Champions",
        slug: "challenge-champions",
      },
    },
    {
      id: "3",
      author: {
        first_name: "Health",
        last_name: "Coach",
        username: "health_coach",
        profile_picture_url: "https://i.pravatar.cc/100?img=3",
      },
      title: "Health Coach",
      content: "Remember: Consistency beats perfection every time. Keep pushing! 🔥",
      upvote_count: 21000,
      comment_count: 89,
      created_at: "2024-01-01T00:00:00Z",
      community: {
        title: "Motivation Station",
        slug: "motivation-station",
      },
    },
    // Community-specific posts for "What's hot"
    {
      id: "4",
      author: {
        first_name: "John",
        last_name: "Doe",
        username: "john_doe",
        profile_picture_url: "https://i.pravatar.cc/100?img=4",
      },
      title: "John Doe",
      content: "Stay in the loop with important announcements from our community! 📢",
      upvote_count: 3200,
      comment_count: 45,
      created_at: "2024-01-01T00:00:00Z",
      community: {
        title: "What's hot",
        slug: "whats-hot",
      },
    },
    {
      id: "5",
      author: {
        first_name: "Sarah",
        last_name: "Wilson",
        username: "sarah_wilson",
        profile_picture_url: "https://i.pravatar.cc/100?img=5",
      },
      title: "Sarah Wilson",
      content: "New fitness trends and hot topics discussion starting tomorrow! 🚀",
      upvote_count: 1800,
      comment_count: 23,
      created_at: "2024-01-01T00:00:00Z",
      community: {
        title: "What's hot",
        slug: "whats-hot",
      },
    },
    // Community-specific posts for "Chit - Chat & Chill"
    {
      id: "6",
      author: {
        first_name: "Jane",
        last_name: "Smith",
        username: "jane_smith",
        profile_picture_url: "https://i.pravatar.cc/100?img=6",
      },
      title: "Jane Smith",
      content: "Casual conversations about fitness and life - what's on your mind today? 💭",
      upvote_count: 950,
      comment_count: 67,
      created_at: "2024-01-01T00:00:00Z",
      community: {
        title: "Chit - Chat & Chill",
        slug: "chit-chat-chill",
      },
    },
    {
      id: "7",
      author: {
        first_name: "Mike",
        last_name: "Johnson",
        username: "mike_johnson",
        profile_picture_url: "https://i.pravatar.cc/100?img=7",
      },
      title: "Mike Johnson",
      content: "How do you balance fitness with your daily routine? Share your tips! ⚖️",
      upvote_count: 1200,
      comment_count: 34,
      created_at: "2024-01-01T00:00:00Z",
      community: {
        title: "Chit - Chat & Chill",
        slug: "chit-chat-chill",
      },
    },
    // Community-specific posts for "Morning Warriors"
    {
      id: "8",
      author: {
        first_name: "Alex",
        last_name: "Brown",
        username: "alex_brown",
        profile_picture_url: "https://i.pravatar.cc/100?img=8",
      },
      title: "Alex Brown",
      content: "Early bird fitness enthusiasts unite! Who's up for a 5 AM workout? 🌅",
      upvote_count: 2800,
      comment_count: 89,
      created_at: "2024-01-01T00:00:00Z",
      community: {
        title: "Morning Warriors",
        slug: "morning-warriors",
      },
    },
    {
      id: "9",
      author: {
        first_name: "Emma",
        last_name: "Davis",
        username: "emma_davis",
        profile_picture_url: "https://i.pravatar.cc/100?img=9",
      },
      title: "Emma Davis",
      content: "Morning workout routine check-in! What did you accomplish today? 💪",
      upvote_count: 1500,
      comment_count: 56,
      created_at: "2024-01-01T00:00:00Z",
      community: {
        title: "Morning Warriors",
        slug: "morning-warriors",
      },
    },
  ],

  // Sweat Spaces (Communities)
  sweatSpaces: [
    {
      id: "1",
      title: "What's hot",
      description: "Latest fitness trends and hot topics",
      banner_url: require("@/assets/images/whats-new.png"),
      icon_url: require("@/assets/images/guides.png"),
      member_count: 24000,
      is_featured: true,
      is_private: false,
      status: "active",
      slug: "whats-hot",
      owner: {
        first_name: "John",
        last_name: "Doe",
        username: "fitness_guru",
        profile_picture_url: "https://i.pravatar.cc/100?img=4",
      },
    },
    {
      id: "2",
      title: "Chit - Chat & Chill",
      description: "Casual conversations about fitness and life",
      banner_url: require("@/assets/images/chit-chat.png"),
      icon_url: require("@/assets/images/chit-chat.png"),
      member_count: 12000,
      is_featured: false,
      is_private: false,
      status: "active",
      slug: "chit-chat-chill",
      owner: {
        first_name: "Jane",
        last_name: "Smith",
        username: "chill_chat",
        profile_picture_url: "https://i.pravatar.cc/100?img=5",
      },
    },
    {
      id: "3",
      title: "Morning Warriors",
      description: "Early bird fitness enthusiasts unite!",
      banner_url: require("@/assets/images/whats-new.png"),
      icon_url: require("@/assets/images/achivements.png"),
      member_count: 8500,
      is_featured: true,
      is_private: false,
      status: "active",
      slug: "morning-warriors",
      owner: {
        first_name: "Mike",
        last_name: "Johnson",
        username: "morning_mike",
        profile_picture_url: "https://i.pravatar.cc/100?img=6",
      },
    },
  ],

  // Challenges
  challenges: [
    {
      id: "1",
      title: "Upper Body Challenge",
      category: "Upper Body",
      duration: "10 days",
      type: "Strength",
      image_url: require("@/assets/images/push-ups.png"),
      member_count: 3800,
      joined_members: [
        require("@/assets/images/john.png"),
        require("@/assets/images/ana.png"),
        require("@/assets/images/bella.png"),
      ],
      status: "active",
      difficulty: "Intermediate",
    },
    {
      id: "2",
      title: "Squat Squat Away",
      category: "Lower Body", 
      duration: "30 days",
      type: "Strength",
      image_url: require("@/assets/images/side-squats.png"),
      member_count: 2300,
      joined_members: [
        require("@/assets/images/john.png"),
        require("@/assets/images/ana.png"),
        require("@/assets/images/bella.png"),
      ],
      status: "active",
      difficulty: "Advanced",
    },
    {
      id: "3",
      title: "Cardio Blast",
      category: "Cardio",
      duration: "21 days", 
      type: "Endurance",
      image_url: require("@/assets/images/jumping-jacks.png"),
      member_count: 5600,
      joined_members: [
        require("@/assets/images/john.png"),
        require("@/assets/images/ana.png"),
        require("@/assets/images/bella.png"),
      ],
      status: "active",
      difficulty: "Beginner",
    },
  ],
};

// Helper function to format numbers (e.g., 12000 -> "12k")
export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
};

// Helper function to format member count
export const formatMemberCount = (count: number): string => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k members';
  }
  return count + ' members';
};
  