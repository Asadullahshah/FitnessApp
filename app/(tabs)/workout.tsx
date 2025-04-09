import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const workout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>workout</Text>
    </View>
  )
}

export default workout

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