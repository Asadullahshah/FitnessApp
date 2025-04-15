import { Animated } from "react-native";
import { isSameWeek, subWeeks, parseISO } from "date-fns";
import { notifications } from "./DummyData";

export const shake = (shakeAnim: Animated.Value) => {
  Animated.sequence([
    Animated.timing(shakeAnim, {
      toValue: 10,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(shakeAnim, {
      toValue: -10,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(shakeAnim, {
      toValue: 6,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(shakeAnim, {
      toValue: -6,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(shakeAnim, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
  ]).start();
};

export const groupNotifications = (list: any) => {
  const now = new Date();
  const thisWeek: any = [];
  const lastWeek: any = [];

  notifications?.forEach((item: any) => {
    const date = parseISO(item.date);
    if (isSameWeek(date, now)) {
      thisWeek.push(item);
    } else if (isSameWeek(date, subWeeks(now, 1))) {
      lastWeek.push(item);
    }
  });

  return { thisWeek, lastWeek };
};
