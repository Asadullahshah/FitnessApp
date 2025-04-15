import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { pxToHeight, pxToWidth } from "@/utils";
import { groupNotifications } from "@/constants/Scripts";
import NotificationItem from "@/components/NotificationItem";
import { notifications } from "@/constants/DummyData";

const notification = () => {
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
        <Text style={styles.sectionTitle}>This week</Text>
        {thisWeek.map((item: any) => (
          <NotificationItem key={item.id} {...item} />
        ))}

        <Text style={styles.sectionTitle}>Last week</Text>
        {lastWeek.map((item: any) => (
          <NotificationItem key={item.id} {...item} />
        ))}
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
