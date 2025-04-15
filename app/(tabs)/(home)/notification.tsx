import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { pxToHeight, pxToWidth } from "@/utils";
import { groupNotifications } from "@/constants/Scripts";
import NotificationItem from "@/components/NotificationItem";

const notification = () => {
  const notifications = [
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
  const { thisWeek, lastWeek } = groupNotifications(notifications);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.streakBox}>
          <Text style={styles.headerText}>
            Reminders, and the occasional guilt trip!
          </Text>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {/* <Text style={styles.sectionTitle}>This week</Text>
        {thisWeek.map((item: any) => (
          <NotificationItem key={item.id} {...item} />
        ))}

        <Text style={styles.sectionTitle}>Last week</Text>
        {lastWeek.map((item: any) => (
          <NotificationItem key={item.id} {...item} />
        ))} */}
        {
          notifications.map((item: any) => (
            <NotificationItem key={item.id} {...item} />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#0A0B12",
    padding: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    marginVertical: 12,
    fontWeight: "700",
  },
  headerContainer: {
    height: pxToHeight(135),
    width: pxToWidth(390),
    backgroundColor: Colors.light.secondary_colors.dark_navy,
    alignItems: "center",
  },
  header: {
    height: pxToHeight(32),
    width: pxToWidth(341),
    marginTop: pxToHeight(16),
    marginHorizontal: pxToWidth(25),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "regular",
    fontStyle: "normal",
    color: Colors.light.secondary_colors.dark_gray,
  },
  streakBox: {
    height: "50%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
