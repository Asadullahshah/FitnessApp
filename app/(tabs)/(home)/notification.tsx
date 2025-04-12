import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import BackIconSvg from "@/components/ui/BackIconSvg";
import { SettingsIconSvg } from "@/components/ui/SettingIconSvg";
import { pxToHeight, pxToWidth } from '@/utils';

const notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.streakBox}>
        <Text style={styles.headerText}>Reminders, and the occasional guilt trip!</Text>
        </View>
      </View>
    </View>
  )
}

export default notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
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
      color: Colors.light.secondary_colors.dark_gray
    },
    streakBox: {
      height: '50%',
      position: "absolute",
      bottom: 0,
      width: '100%',
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
})