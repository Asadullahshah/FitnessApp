import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface NotificationItemProps {
  icon: React.ReactNode;
  title: string;
  date: string;
}
const NotificationItem = ({ icon, title, date }: NotificationItemProps) => {
  return (
    <View style={styles.itemContainer}>
    <Text style={styles.icon}>{icon}</Text>
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>About 1 minute ago</Text>
    </View>
  </View>
  )
}

export default NotificationItem

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1A1C24',
        padding: 14,
        borderRadius: 14,
        marginBottom: 10,
      },
      icon: {
        fontSize: 28,
        marginRight: 12,
      },
      title: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 6,
      },
      date: {
        color: '#A0AEC0',
        fontSize: 12,
      },
})