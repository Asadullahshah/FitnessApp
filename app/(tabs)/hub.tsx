import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const hub = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hub</Text>
    </View>
  )
}

export default hub

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 20,
    }
})