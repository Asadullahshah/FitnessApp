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

// Profile Screen Dummy Data
export const profileDummyData = {
  user: {
    name: "Joseph Crown",
    avatar: require("@/assets/images/avatar.png"),
    stats: {
      height: "185cm",
      age: 24,
      weight: "70KG"
    },
    friends: {
      count: 18,
      image: require("@/assets/images/candle.png")
    }
  },
  badges: [
    { id: "1", name: "First Workout", icon: "🏆", earned: true },
    { id: "2", name: "Week Warrior", icon: "⚡", earned: true },
    { id: "3", name: "Month Master", icon: "🔥", earned: false },
    { id: "4", name: "Consistency King", icon: "👑", earned: false },
  ],
  progressTracker: {
    totalWorkouts: 47,
    weeklyGoal: 5,
    currentStreak: 12,
    longestStreak: 23,
    caloriesBurned: 3480,
    hoursExercised: 38.5
  }
};

// Favorites Screen Dummy Data
export const favoritesDummyData = {
  myPicks: [
    {
      id: "1",
      title: "Glory Gains",
      image: require("@/assets/images/push-ups.png"),
      author: {
        name: "P",
        avatar: "#1E395A"
      },
      isFavorited: true
    },
    {
      id: "2", 
      title: "Back Down, Back up",
      image: require("@/assets/images/side-squats.png"),
      author: {
        name: "H",
        avatar: "#1E395A"
      },
      isFavorited: true
    },
    {
      id: "3",
      title: "No Mercy Monday", 
      image: require("@/assets/images/jumping-jacks.png"),
      author: {
        name: "W",
        avatar: "#1E395A"
      },
      isFavorited: true
    },
    {
      id: "4",
      title: "Beast Mode Bootcamp",
      image: require("@/assets/images/push-ups.png"),
      author: {
        name: "P",
        avatar: "#1E395A"
      },
      isFavorited: true
    },
    {
      id: "5",
      title: "Core Meltdown",
      image: require("@/assets/images/side-squats.png"),
      author: {
        name: "H", 
        avatar: "#1E395A"
      },
      isFavorited: true
    },
    {
      id: "6",
      title: "Squat Squat Away",
      image: require("@/assets/images/jumping-jacks.png"),
      author: {
        name: "P",
        avatar: "#1E395A"
      },
      isFavorited: true
    },
    {
      id: "7",
      title: "Reckless Reps",
      image: require("@/assets/images/push-ups.png"),
      author: {
        name: "P",
        avatar: "#1E395A"
      },
      isFavorited: true
    },
    {
      id: "8",
      title: "Rep Rumble",
      image: require("@/assets/images/side-squats.png"),
      author: {
        name: "H",
        avatar: "#1E395A"
      },
      isFavorited: true
    }
  ],
  categories: [
    {
      id: "workouts",
      name: "App Workouts",
      icon: "W",
      color: "#A5D6A7"
    },
    {
      id: "hub", 
      name: "Hub",
      icon: "H",
      color: "#A5D6A7"
    },
    {
      id: "programs",
      name: "Programs", 
      icon: "P",
      color: "#A5D6A7"
    }
  ]
};

// Workout Screen Dummy Data
export const workoutDummyData = {
  // Muscle Groups with progress tracking
  muscleGroups: [
    {
      id: "back",
      name: "Back",
      description: "Build a back that's stronger than your excuses.",
      progress: { completed: 1, total: 6 },
      images: [
        require("@/assets/images/biceps.png"),
        require("@/assets/images/shoulder.png"),
        require("@/assets/images/biceps.png"),
        require("@/assets/images/shoulder.png"),
      ],
      cardType: "large" // 163x209
    },
    {
      id: "arms",
      name: "Arms", 
      description: "Get those guns ready for flexing.",
      progress: { completed: 4, total: 6 },
      images: [
        require("@/assets/images/biceps.png"),
        require("@/assets/images/shoulder.png"),
      ],
      cardType: "medium" // 163x164
    },
    {
      id: "fullbody",
      name: "Full Body",
      description: "For when you're feeling ambitious…",
      progress: { completed: 3, total: 6 },
      images: [
        require("@/assets/images/biceps.png"),
        require("@/assets/images/shoulder.png"),
        require("@/assets/images/chest.png"),
        require("@/assets/images/biceps.png"),
      ],
      cardType: "large" // 163x209
    },
    {
      id: "chest",
      name: "Chest",
      description: "For the push-ups you keep avoiding.",
      progress: { completed: 5, total: 6 },
      images: [
        require("@/assets/images/chest.png"),
      ],
      cardType: "medium", // 163x164
      isLarge: true
    },
    {
      id: "legs", 
      name: "Legs",
      description: "Tired of skipping leg day? Yeah, us too. Lock-in!",
      progress: { completed: 3, total: 6 },
      images: [
        require("@/assets/images/foot.png"),
        require("@/assets/images/foot.png"),
      ],
      cardType: "medium" // 163x164
    },
    {
      id: "abs",
      name: "Abs",
      description: "Show off your core strength (and your abs eventually).",
      progress: { completed: 5, total: 6 },
      images: [
        require("@/assets/images/biceps.png"),
      ],
      cardType: "medium", // 163x164
      isLarge: true
    },
    {
      id: "shoulders",
      name: "Shoulders", 
      description: "For when you're ready to go big or go home…",
      progress: { completed: 3, total: 6 },
      images: [
        require("@/assets/images/shoulder.png"),
        require("@/assets/images/biceps.png"),
        require("@/assets/images/shoulder.png"),
      ],
      cardType: "large" // 163x209
    }
  ],

  // Individual Exercises by muscle group
  exercises: {
    chest: [
      {
        id: "wide-pushups",
        name: "Wide pushups",
        description: "Full chest activation. Targets outer chest and stretches pec",
        reps: "20x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "beginner",
        borderColor: "#4FC3F7"
      },
      {
        id: "chest-squeeze",
        name: "Chest Squeeze", 
        description: "Squeeze palms together to activate chest. Targets your full chest",
        reps: "8x",
        image: require("@/assets/images/chest.png"),
        difficulty: "intermediate",
        borderColor: "#A5D6A7"
      },
      {
        id: "explosive-clap-pushups",
        name: "Explosive Clap Push-Ups",
        description: "Builds power and fast-twitch chest fibers. Targets the entire chest",
        reps: "15x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "advanced",
        borderColor: "#FF6F61"
      },
      {
        id: "chest-dips",
        name: "Chest Dips",
        description: "Targets lower chest using elevated support.",
        reps: "15x", 
        image: require("@/assets/images/push-ups.png"),
        difficulty: "intermediate",
        borderColor: "#4FC3F7"
      },
      {
        id: "incline-pushups",
        name: "Incline pushups",
        description: "Hands elevated on a surface; great for beginners too. Targets uppper chest",
        reps: "20x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "beginner",
        borderColor: "#FF6F61"
      },
      {
        id: "decline-pushups", 
        name: "Decline pushups",
        description: "Legs elevated on a surface; Hits lower chest and shoulders hard.",
        reps: "15x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "advanced",
        borderColor: "#4FC3F7"
      },
      {
        id: "diamond-pushups",
        name: "Diamond Pushups",
        description: "Emphasizes inner chest and triceps. Targets chest and triceps",
        reps: "15x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "advanced", 
        borderColor: "#FF6F61"
      }
    ],
    back: [
      {
        id: "pull-ups",
        name: "Pull-ups",
        description: "Classic back builder. Targets lats and upper back.",
        reps: "10x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "intermediate",
        borderColor: "#4FC3F7"
      },
      {
        id: "superman-hold",
        name: "Superman Hold",
        description: "Lower back strength. Targets erector spinae.",
        reps: "30s",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "beginner",
        borderColor: "#A5D6A7"
      },
      {
        id: "inverted-rows",
        name: "Inverted Rows",
        description: "Horizontal pulling power. Targets mid-back and lats.",
        reps: "15x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "intermediate",
        borderColor: "#4FC3F7"
      },
      {
        id: "back-extensions",
        name: "Back Extensions",
        description: "Build posterior chain strength. Targets lower back.",
        reps: "20x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "beginner",
        borderColor: "#FF6F61"
      },
      {
        id: "deadlifts",
        name: "Deadlifts",
        description: "Full back engagement. Targets entire posterior chain.",
        reps: "12x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "advanced",
        borderColor: "#4FC3F7"
      },
      {
        id: "reverse-snow-angels",
        name: "Reverse Snow Angels",
        description: "Upper back activation. Targets rear delts and traps.",
        reps: "15x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "intermediate",
        borderColor: "#A5D6A7"
      },
      {
        id: "lat-pulldown",
        name: "Lat Pulldown",
        description: "Wide back development. Targets latissimus dorsi.",
        reps: "15x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "intermediate",
        borderColor: "#FF6F61"
      }
    ],
    shoulders: [
      {
        id: "pike-pushups",
        name: "Pike Pushups",
        description: "Shoulder strength builder. Targets anterior deltoids.",
        reps: "15x",
        image: require("@/assets/images/shoulder.png"),
        difficulty: "intermediate",
        borderColor: "#4FC3F7"
      },
      {
        id: "lateral-raises",
        name: "Lateral Raises",
        description: "Build wide shoulders. Targets lateral deltoids.",
        reps: "20x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "beginner",
        borderColor: "#A5D6A7"
      },
      {
        id: "overhead-press",
        name: "Overhead Press",
        description: "Complete shoulder development. Targets all deltoid heads.",
        reps: "12x",
        image: require("@/assets/images/shoulder.png"),
        difficulty: "intermediate",
        borderColor: "#FF6F61"
      },
      {
        id: "front-raises",
        name: "Front Raises",
        description: "Front delt focus. Targets anterior deltoids.",
        reps: "15x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "beginner",
        borderColor: "#4FC3F7"
      },
      {
        id: "arnold-press",
        name: "Arnold Press",
        description: "Full shoulder rotation. Targets all three deltoid heads.",
        reps: "12x",
        image: require("@/assets/images/shoulder.png"),
        difficulty: "advanced",
        borderColor: "#A5D6A7"
      },
      {
        id: "handstand-pushups",
        name: "Handstand Pushups",
        description: "Ultimate shoulder challenge. Targets shoulders and core.",
        reps: "8x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "advanced",
        borderColor: "#FF6F61"
      },
      {
        id: "shoulder-taps",
        name: "Shoulder Taps",
        description: "Stability and strength. Targets shoulders and core.",
        reps: "20x",
        image: require("@/assets/images/shoulder.png"),
        difficulty: "beginner",
        borderColor: "#4FC3F7"
      }
    ],
    arms: [
      {
        id: "bicep-curls",
        name: "Bicep Curls", 
        description: "Build those peaks. Targets biceps.",
        reps: "15x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "beginner",
        borderColor: "#A5D6A7"
      },
      {
        id: "tricep-dips",
        name: "Tricep Dips",
        description: "Back of the arm power. Targets triceps.",
        reps: "15x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "intermediate",
        borderColor: "#4FC3F7"
      },
      {
        id: "hammer-curls",
        name: "Hammer Curls",
        description: "Forearm and bicep builder. Targets brachialis and biceps.",
        reps: "15x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "beginner",
        borderColor: "#FF6F61"
      },
      {
        id: "close-grip-pushups",
        name: "Close Grip Pushups",
        description: "Tricep emphasis. Targets triceps and inner chest.",
        reps: "15x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "intermediate",
        borderColor: "#A5D6A7"
      },
      {
        id: "concentration-curls",
        name: "Concentration Curls",
        description: "Isolated bicep peak. Targets bicep peak.",
        reps: "12x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "intermediate",
        borderColor: "#4FC3F7"
      },
      {
        id: "overhead-tricep-extension",
        name: "Overhead Tricep Extension",
        description: "Long head tricep focus. Targets tricep long head.",
        reps: "15x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "beginner",
        borderColor: "#FF6F61"
      },
      {
        id: "21s-curls",
        name: "21s Curls",
        description: "Ultimate bicep burner. Targets entire bicep.",
        reps: "21x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "advanced",
        borderColor: "#4FC3F7"
      }
    ],
    legs: [
      {
        id: "squats",
        name: "Squats",
        description: "King of leg exercises. Targets quads and glutes.",
        reps: "20x",
        image: require("@/assets/images/foot.png"),
        difficulty: "beginner",
        borderColor: "#4FC3F7"
      },
      {
        id: "lunges",
        name: "Lunges",
        description: "Single leg power. Targets quads, glutes, and hamstrings.",
        reps: "20x",
        image: require("@/assets/images/foot.png"),
        difficulty: "beginner",
        borderColor: "#A5D6A7"
      },
      {
        id: "bulgarian-split-squats",
        name: "Bulgarian Split Squats",
        description: "Unilateral leg strength. Targets quads and glutes.",
        reps: "15x",
        image: require("@/assets/images/foot.png"),
        difficulty: "intermediate",
        borderColor: "#FF6F61"
      },
      {
        id: "calf-raises",
        name: "Calf Raises",
        description: "Build strong calves. Targets gastrocnemius.",
        reps: "25x",
        image: require("@/assets/images/foot.png"),
        difficulty: "beginner",
        borderColor: "#4FC3F7"
      },
      {
        id: "jump-squats",
        name: "Jump Squats",
        description: "Explosive leg power. Targets quads, glutes, and calves.",
        reps: "15x",
        image: require("@/assets/images/foot.png"),
        difficulty: "intermediate",
        borderColor: "#A5D6A7"
      },
      {
        id: "wall-sit",
        name: "Wall Sit",
        description: "Isometric quad burner. Targets quadriceps.",
        reps: "45s",
        image: require("@/assets/images/foot.png"),
        difficulty: "beginner",
        borderColor: "#4FC3F7"
      },
      {
        id: "pistol-squats",
        name: "Pistol Squats",
        description: "Advanced single leg strength. Targets entire lower body.",
        reps: "10x",
        image: require("@/assets/images/foot.png"),
        difficulty: "advanced",
        borderColor: "#FF6F61"
      }
    ],
    abs: [
      {
        id: "crunches",
        name: "Crunches",
        description: "Core crusher. Targets upper abs.",
        reps: "25x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "beginner",
        borderColor: "#A5D6A7"
      },
      {
        id: "plank",
        name: "Plank",
        description: "Hold the line. Targets entire core.",
        reps: "60s",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "beginner",
        borderColor: "#4FC3F7"
      },
      {
        id: "russian-twists",
        name: "Russian Twists",
        description: "Oblique destroyer. Targets obliques.",
        reps: "30x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "intermediate",
        borderColor: "#FF6F61"
      },
      {
        id: "leg-raises",
        name: "Leg Raises",
        description: "Lower ab killer. Targets lower abs.",
        reps: "20x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "intermediate",
        borderColor: "#A5D6A7"
      },
      {
        id: "bicycle-crunches",
        name: "Bicycle Crunches",
        description: "Dynamic core work. Targets entire core.",
        reps: "30x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "beginner",
        borderColor: "#4FC3F7"
      },
      {
        id: "mountain-climbers",
        name: "Mountain Climbers",
        description: "Core and cardio combo. Targets abs and endurance.",
        reps: "40x",
        image: require("@/assets/images/jumping-jacks.png"),
        difficulty: "intermediate",
        borderColor: "#FF6F61"
      },
      {
        id: "v-ups",
        name: "V-Ups",
        description: "Advanced ab crusher. Targets full rectus abdominis.",
        reps: "15x",
        image: require("@/assets/images/biceps.png"),
        difficulty: "advanced",
        borderColor: "#4FC3F7"
      }
    ],
    fullbody: [
      {
        id: "burpees",
        name: "Burpees",
        description: "Full body torture. Targets everything.",
        reps: "15x",
        image: require("@/assets/images/jumping-jacks.png"),
        difficulty: "advanced",
        borderColor: "#FF6F61"
      },
      {
        id: "jumping-jacks",
        name: "Jumping Jacks",
        description: "Classic cardio. Targets full body coordination.",
        reps: "30x",
        image: require("@/assets/images/jumping-jacks.png"),
        difficulty: "beginner",
        borderColor: "#A5D6A7"
      },
      {
        id: "bear-crawl",
        name: "Bear Crawl",
        description: "Primal movement pattern. Targets shoulders, core, and legs.",
        reps: "30s",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "intermediate",
        borderColor: "#4FC3F7"
      },
      {
        id: "sprawls",
        name: "Sprawls",
        description: "Burpee's cousin. Targets full body and cardio.",
        reps: "15x",
        image: require("@/assets/images/jumping-jacks.png"),
        difficulty: "advanced",
        borderColor: "#FF6F61"
      },
      {
        id: "inchworms",
        name: "Inchworms",
        description: "Mobility and strength. Targets hamstrings, core, and shoulders.",
        reps: "12x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "beginner",
        borderColor: "#A5D6A7"
      },
      {
        id: "man-makers",
        name: "Man Makers",
        description: "Ultimate full body exercise. Targets everything.",
        reps: "10x",
        image: require("@/assets/images/push-ups.png"),
        difficulty: "advanced",
        borderColor: "#4FC3F7"
      },
      {
        id: "thruster",
        name: "Thrusters",
        description: "Squat to press combo. Targets legs, shoulders, and core.",
        reps: "15x",
        image: require("@/assets/images/shoulder.png"),
        difficulty: "intermediate",
        borderColor: "#FF6F61"
      }
    ]
  },

  // Difficulty levels
  difficultyLevels: [
    { id: 1, name: "Beginner", color: "#4FC3F7", active: true },
    { id: 2, name: "Intermediate", color: "#1D5F7C", active: false },
    { id: 3, name: "Advanced", color: "#1D5F7C", active: false }
  ],

  // Tab options for workout filter
  tabOptions: [
    { id: "bodypart", name: "Body Part", active: true },
    { id: "programs", name: "Programs", active: false },
    { id: "mood", name: "Mood", active: false }
  ],

  // Workout Plans - detailed workout sessions
  workoutPlans: {
    chest: {
      id: "chest-iron-no-bench",
      title: "Iron Chest, No Bench",
      duration: "20 mins",
      caloriesBurned: 300,
      difficulty: "beginner",
      description: "The first step is the hardest. Lucky for you, today's workout is just your warm-up for the beast you're about to become",
      focusArea: "Chest",
      videoFile: "chest_workout_intro.mp4", // Video will be stored in app directory
      sections: [
        {
          id: "warmup",
          title: "Warm up",
          exercises: [
            {
              id: "push-up-plank-hold",
              name: "Push-up Plank Hold",
              description: "No excuses, no equipment, just YOU vs gravity",
              duration: "01:00",
              image: require("@/assets/images/push-ups.png"),
              isActive: true,
              videoFile: "plank_hold.mp4"
            },
            {
              id: "arm-circles",
              name: "Arm Circles", 
              description: "Stretch it out, you flexible beast!",
              duration: "00:30",
              image: require("@/assets/images/biceps.png"),
              videoFile: "arm_circles.mp4"
            }
          ]
        },
        {
          id: "workout",
          title: "Workout",
          progress: "0 of 3",
          exercises: [
            {
              id: "standard-push-ups",
              name: "Standard Push-Ups",
              description: "Drop down and get that full chest engagement to kick things off.",
              reps: "15x",
              image: require("@/assets/images/push-ups.png"),
              videoFile: "standard_pushups.mp4"
            },
            {
              id: "incline-push-ups",
              name: "Incline Push-Ups", 
              description: "Drop down, hands elevated and get that full chest engagement to kick things off.",
              reps: "15x",
              image: require("@/assets/images/push-ups.png"),
              videoFile: "incline_pushups.mp4"
            },
            {
              id: "chest-squeeze",
              name: "Chest Squeeze",
              description: "Drop down and get that full chest engagement to kick things off.",
              reps: "15x", 
              image: require("@/assets/images/chest.png"),
              videoFile: "chest_squeeze.mp4"
            },
            {
              id: "dips",
              name: "Dips",
              description: "Drop down and get that full chest engagement to kick things off.",
              reps: "15x",
              image: require("@/assets/images/push-ups.png"),
              videoFile: "dips.mp4"
            },
            {
              id: "decline-push-ups",
              name: "Decline Push-ups",
              description: "Legs elevated on a surface; Hits lower chest and shoulders hard.",
              reps: "15x",
              image: require("@/assets/images/push-ups.png"),
              videoFile: "decline_pushups.mp4"
            }
          ]
        }
      ]
    }
  },

  // Exercise Instructions - step by step guides
  exerciseInstructions: {
    "push-up-plank-hold": {
      id: "push-up-plank-hold",
      name: "Plank Hold",
      description: "No excuses, no equipment, just YOU vs gravity",
      duration: "01:00",
      focusArea: "Chest",
      videoFile: "plank_hold_demo.mp4",
      image: require("@/assets/images/push-ups.png"),
      steps: [
        {
          id: "step-1",
          number: "01",
          title: "Brace Those Arms",
          description: "To make the gestures feel more relaxed, stretch your arms as you start this movement. No bending of hands."
        },
        {
          id: "step-2", 
          number: "02",
          title: "Rest at The Toe",
          description: "The basis of this movement is jumping. Now, what needs to be considered is that you have to use the tips of your feet"
        },
        {
          id: "step-3",
          number: "03", 
          title: "Adjust Foot Movement",
          description: "Jumping Jack is not just an ordinary jump. But, you also have to pay close attention to leg movements."
        },
        {
          id: "step-4",
          number: "04",
          title: "Clapping Both Hands", 
          description: "This cannot be taken lightly. You see, without realizing it, the clapping of your hands helps you to keep your rhythm while doing the Jumping Jack"
        }
      ]
    },
    "standard-push-ups": {
      id: "standard-push-ups",
      name: "Standard Push-Ups",
      description: "Drop down and get that full chest engagement to kick things off.",
      reps: "15x",
      focusArea: "Chest",
      videoFile: "standard_pushups_demo.mp4",
      image: require("@/assets/images/push-ups.png"),
      steps: [
        {
          id: "step-1",
          number: "01",
          title: "Get Into Position",
          description: "Start in a high plank position with hands slightly wider than shoulder-width apart."
        },
        {
          id: "step-2",
          number: "02", 
          title: "Lower Your Body",
          description: "Lower your chest towards the ground while keeping your body in a straight line."
        },
        {
          id: "step-3",
          number: "03",
          title: "Push Back Up",
          description: "Push through your palms to return to the starting position with control."
        },
        {
          id: "step-4",
          number: "04",
          title: "Maintain Form",
          description: "Keep your core engaged and avoid letting your hips sag or pike up."
        }
      ]
    },
    "pull-ups": {
      id: "pull-ups",
      name: "Pull-ups",
      description: "Classic back builder. Targets lats and upper back.",
      reps: "10x",
      focusArea: "Back",
      videoFile: "pull_ups_demo.mp4",
      image: require("@/assets/images/biceps.png"),
      steps: [
        {
          id: "step-1",
          number: "01",
          title: "Grip The Bar",
          description: "Start by gripping the bar with palms facing away, hands shoulder-width apart."
        },
        {
          id: "step-2",
          number: "02",
          title: "Hang Fully Extended",
          description: "Let your body hang with arms fully extended and engage your lats."
        },
        {
          id: "step-3",
          number: "03",
          title: "Pull Up",
          description: "Pull your body up until your chin clears the bar, leading with your chest."
        },
        {
          id: "step-4",
          number: "04",
          title: "Lower With Control",
          description: "Lower yourself back down slowly to the starting position."
        }
      ]
    },
    "squats": {
      id: "squats",
      name: "Squats",
      description: "King of leg exercises. Targets quads and glutes.",
      reps: "20x",
      focusArea: "Legs",
      videoFile: "squats_demo.mp4",
      image: require("@/assets/images/foot.png"),
      steps: [
        {
          id: "step-1",
          number: "01",
          title: "Set Your Stance",
          description: "Stand with feet shoulder-width apart, toes slightly pointed outward."
        },
        {
          id: "step-2",
          number: "02",
          title: "Lower Down",
          description: "Push your hips back and bend your knees to lower down as if sitting in a chair."
        },
        {
          id: "step-3",
          number: "03",
          title: "Reach Depth",
          description: "Lower until thighs are at least parallel to the ground, keeping chest up."
        },
        {
          id: "step-4",
          number: "04",
          title: "Drive Up",
          description: "Push through your heels to return to the starting position powerfully."
        }
      ]
    },
    "plank": {
      id: "plank",
      name: "Plank",
      description: "Hold the line. Targets entire core.",
      duration: "60s",
      focusArea: "Abs",
      videoFile: "plank_demo.mp4",
      image: require("@/assets/images/push-ups.png"),
      steps: [
        {
          id: "step-1",
          number: "01",
          title: "Get Into Position",
          description: "Start on your forearms and toes with elbows directly under shoulders."
        },
        {
          id: "step-2",
          number: "02",
          title: "Align Your Body",
          description: "Keep your body in a straight line from head to heels, no sagging or piking."
        },
        {
          id: "step-3",
          number: "03",
          title: "Engage Your Core",
          description: "Brace your abs as if preparing for a punch and squeeze your glutes."
        },
        {
          id: "step-4",
          number: "04",
          title: "Hold Strong",
          description: "Maintain this position while breathing steadily, don't hold your breath."
        }
      ]
    },
    "pike-pushups": {
      id: "pike-pushups",
      name: "Pike Pushups",
      description: "Shoulder strength builder. Targets anterior deltoids.",
      reps: "15x",
      focusArea: "Shoulders",
      videoFile: "pike_pushups_demo.mp4",
      image: require("@/assets/images/shoulder.png"),
      steps: [
        {
          id: "step-1",
          number: "01",
          title: "Form The Pike",
          description: "Start in downward dog position with hips high and hands shoulder-width apart."
        },
        {
          id: "step-2",
          number: "02",
          title: "Lower Your Head",
          description: "Bend your elbows to lower your head toward the ground between your hands."
        },
        {
          id: "step-3",
          number: "03",
          title: "Keep Hips High",
          description: "Maintain the pike position throughout, don't let your hips drop."
        },
        {
          id: "step-4",
          number: "04",
          title: "Press Back Up",
          description: "Push through your palms to return to the starting pike position."
        }
      ]
    },
    "bicep-curls": {
      id: "bicep-curls",
      name: "Bicep Curls",
      description: "Build those peaks. Targets biceps.",
      reps: "15x",
      focusArea: "Arms",
      videoFile: "bicep_curls_demo.mp4",
      image: require("@/assets/images/biceps.png"),
      steps: [
        {
          id: "step-1",
          number: "01",
          title: "Stand Ready",
          description: "Stand with feet shoulder-width apart, holding weights at your sides with palms forward."
        },
        {
          id: "step-2",
          number: "02",
          title: "Curl Up",
          description: "Bend at the elbows to curl the weights up toward your shoulders."
        },
        {
          id: "step-3",
          number: "03",
          title: "Squeeze At Top",
          description: "At the top, squeeze your biceps hard for a moment."
        },
        {
          id: "step-4",
          number: "04",
          title: "Lower Controlled",
          description: "Lower the weights back down slowly with control, don't just drop them."
        }
      ]
    },
    "burpees": {
      id: "burpees",
      name: "Burpees",
      description: "Full body torture. Targets everything.",
      reps: "15x",
      focusArea: "Full Body",
      videoFile: "burpees_demo.mp4",
      image: require("@/assets/images/jumping-jacks.png"),
      steps: [
        {
          id: "step-1",
          number: "01",
          title: "Start Standing",
          description: "Begin in a standing position with feet shoulder-width apart."
        },
        {
          id: "step-2",
          number: "02",
          title: "Drop Down",
          description: "Squat down and place your hands on the ground, then jump feet back to plank."
        },
        {
          id: "step-3",
          number: "03",
          title: "Push-Up",
          description: "Perform a push-up, keeping your body in a straight line."
        },
        {
          id: "step-4",
          number: "04",
          title: "Jump Up",
          description: "Jump feet back to hands, then explode up into a jump with arms overhead."
        }
      ]
    }
  },

  // Programs - Multi-day workout programs
  programs: [
    {
      id: "beast-mode-breakdown",
      title: "Beast Mode Breakdown",
      duration: "10 Days",
      completed: 2,
      total: 10,
      difficulty: "beginner",
      image: require("@/assets/images/chest.png"),
      borderColor: "#4FC3F7",
      locked: false,
      description: "This program doesn't care about your excuses, it cares about results. Every session is a blend of sweat-drenching, muscle burning moves to leave you stronger, faster, and feeling unstoppable. From HIIT to beastly strength sets, you'll break down barriers (and maybe your ego) one rep at a time."
    },
    {
      id: "hiit-or-quit",
      title: "HIIT or Quit",
      duration: "14 Days",
      completed: 0,
      total: 14,
      difficulty: "intermediate",
      image: require("@/assets/images/jumping-jacks.png"),
      borderColor: "#FF6F61",
      locked: false,
      description: "High intensity interval training that will push you to your limits. No excuses, just results."
    },
    {
      id: "sculpt-strengthen",
      title: "Sculpt and Strengthen",
      duration: "30 Days",
      completed: 0,
      total: 30,
      difficulty: "beginner",
      image: require("@/assets/images/biceps.png"),
      borderColor: "#A5D6A7",
      locked: false,
      description: "Build lean muscle and functional strength with this comprehensive 30-day program."
    },
    {
      id: "legend",
      title: "LEGend",
      duration: "10 Days",
      completed: 2,
      total: 10,
      difficulty: "advanced",
      image: require("@/assets/images/foot.png"),
      borderColor: "#FF6F61",
      locked: false,
      description: "Become a leg day legend with this intense lower body focused program."
    },
    {
      id: "absurd-abs",
      title: "Absurd Abs",
      duration: "21 Days",
      completed: 0,
      total: 21,
      difficulty: "intermediate",
      image: require("@/assets/images/biceps.png"),
      borderColor: "#A5D6A7",
      locked: false,
      description: "Carve out that six-pack with 21 days of core-crushing workouts."
    },
    {
      id: "flexibility-fury",
      title: "Flexibility Fury",
      duration: "10 Days",
      completed: 7,
      total: 10,
      difficulty: "beginner",
      image: require("@/assets/images/shoulder.png"),
      borderColor: "#4FC3F7",
      locked: false,
      description: "Improve flexibility and mobility while building strength."
    },
    {
      id: "no-mercy-core",
      title: "No Mercy Core",
      duration: "10 Days",
      completed: 1,
      total: 10,
      difficulty: "advanced",
      image: require("@/assets/images/biceps.png"),
      borderColor: "#4FC3F7",
      locked: false,
      description: "Extreme core training for those who want to take it to the next level."
    },
    {
      id: "cardio-conqueror",
      title: "Cardio Conqueror",
      duration: "14 Days",
      completed: 0,
      total: 14,
      difficulty: "intermediate",
      image: require("@/assets/images/jumping-jacks.png"),
      borderColor: "#4FC3F7",
      locked: false,
      description: "Master cardiovascular endurance with this heart-pumping program."
    }
  ],

  // Program Days - detailed day structure
  programDays: {
    "beast-mode-breakdown": {
      days: [
        {
          id: 1,
          title: "Day 1",
          completed: true,
          locked: false,
          exercises: 5,
          duration: "4 mins"
        },
        {
          id: 2,
          title: "Day 2",
          completed: false,
          locked: false,
          exercises: 5,
          duration: "4 mins"
        },
        {
          id: 3,
          title: "Day 3",
          completed: false,
          locked: false,
          exercises: 5,
          duration: "4 mins"
        },
        {
          id: 4,
          title: "Day 4",
          completed: false,
          locked: true,
          exercises: 5,
          duration: "4 mins"
        },
        {
          id: 5,
          title: "Day 5",
          completed: false,
          locked: true,
          exercises: 5,
          duration: "4 mins"
        },
        {
          id: 6,
          title: "Day 6",
          completed: false,
          locked: true,
          exercises: 5,
          duration: "4 mins"
        },
        {
          id: 7,
          title: "Day 7",
          completed: false,
          locked: true,
          exercises: 5,
          duration: "4 mins"
        },
        {
          id: 8,
          title: "Day 8",
          completed: false,
          locked: true,
          exercises: 5,
          duration: "4 mins"
        },
        {
          id: 9,
          title: "Day 9",
          completed: false,
          locked: true,
          exercises: 5,
          duration: "4 mins"
        },
        {
          id: 10,
          title: "Day 10",
          completed: false,
          locked: true,
          exercises: 5,
          duration: "4 mins"
        }
      ],
      dayWorkouts: {
        1: {
          title: "Day 1",
          exercises: "5 Exercises | 4 mins",
          description: "The first step is the hardest. Lucky for you, today's workout is just your warm-up for the beast you're about to become",
          warmup: [
            {
              id: "arm-circles-day1",
              name: "Arm Circles",
              description: "Stretch it out, you flexible beast!",
              duration: "00:30",
              image: require("@/assets/images/biceps.png"),
              isActive: true
            },
            {
              id: "high-knees-day1",
              name: "High Knees",
              description: "Loosen up those shoulders and flex your way into beast mode",
              reps: "15x",
              image: require("@/assets/images/jumping-jacks.png")
            }
          ],
          workout: [
            {
              id: "glute-bridges-day1",
              name: "Glute Bridges",
              description: "You asked for cardio, now you're paying the price!",
              reps: "15x",
              image: require("@/assets/images/foot.png")
            },
            {
              id: "high-knees-workout-day1",
              name: "High Knees",
              description: "Let's work on those strong arms...",
              duration: "00:30",
              image: require("@/assets/images/jumping-jacks.png")
            },
            {
              id: "shoulder-taps-day1",
              name: "Shoulder Taps",
              description: "Let's work on those strong arms...",
              duration: "00:30",
              image: require("@/assets/images/shoulder.png")
            }
          ]
        }
      }
    }
  },

  // Mood Workouts - Mental wellness focused exercises
  moodWorkouts: [
    {
      id: "focus-charge",
      title: "Focus Charge",
      description: "Increase clarity before meetings or big tasks.",
      image: require("@/assets/images/chest.png"), // Character image
      borderColor: "#4FC3F7",
      exercises: [
        {
          id: "explosive-clap-pushups-focus",
          name: "Explosive Clap Push-Ups",
          description: "Builds power and fast-twitch chest fibers. Targets the entire chest",
          reps: "15x",
          image: require("@/assets/images/chest.png"),
          borderColor: "#FF6F61"
        },
        {
          id: "chest-squeeze-focus",
          name: "Chest Squeeze",
          description: "Squeeze palms together to activate chest. Targets your full chest",
          reps: "8x",
          image: require("@/assets/images/chest.png"),
          borderColor: "#A5D6A7"
        },
        {
          id: "wide-pushups-focus",
          name: "Wide pushups",
          description: "Full chest activation. Targets outer chest and stretches pec",
          reps: "20x",
          image: require("@/assets/images/chest.png"),
          borderColor: "#4FC3F7"
        },
        {
          id: "chest-dips-focus",
          name: "Chest Dips",
          description: "Targets lower chest using elevated support.",
          reps: "15x",
          image: require("@/assets/images/chest.png"),
          borderColor: "#4FC3F7"
        },
        {
          id: "incline-pushups-focus",
          name: "Incline pushups",
          description: "Hands elevated on a surface; great for beginners too. Targets uppper chest",
          reps: "20x",
          image: require("@/assets/images/chest.png"),
          borderColor: "#FF6F61"
        },
        {
          id: "decline-pushups-focus",
          name: "Decline pushups",
          description: "Legs elevated on a surface; Hits lower chest and shoulders hard.",
          reps: "15x",
          image: require("@/assets/images/chest.png"),
          borderColor: "#4FC3F7"
        },
        {
          id: "diamond-pushups-focus",
          name: "Diamond Pushups",
          description: "Emphasizes inner chest and triceps. Targets chest and triceps",
          reps: "15x",
          image: require("@/assets/images/chest.png"),
          borderColor: "#FF6F61"
        }
      ]
    },
    {
      id: "meditation",
      title: "Meditation",
      description: "Silence the noise, Zone in, not out.",
      image: require("@/assets/images/chest.png"), // Meditation character
      borderColor: "#4FC3F7",
      exercises: []
    },
    {
      id: "breathing",
      title: "Breathing",
      description: "Deadlines can wait. Oxygen first. Power up with each breath.",
      image: require("@/assets/images/chest.png"), // Breathing character
      borderColor: "#4FC3F7",
      exercises: []
    },
    {
      id: "stretching",
      title: "Stretching",
      description: "Desk job got you stiff? Bend so life doesn't break you. Stretch, reset.",
      image: require("@/assets/images/chest.png"), // Stretching character
      borderColor: "#4FC3F7",
      exercises: []
    }
  ]
};
  