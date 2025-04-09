import { SafeAreaView, StyleSheet, Text, Image, View, ImageBackground } from 'react-native'

const workoutVideo = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./../../assets/images/pushup-difficulty-3.png')} >
        <SafeAreaView style={styles.container}>
            <Text>Workout</Text>
            </SafeAreaView>
        </ImageBackground>
    </View>
  )
}

export default workoutVideo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
    },
})