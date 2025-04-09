import { supabase } from '@/lib/supabase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Button } from 'react-native'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const index = () => {

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Storage cleared!");
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  };
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    clearStorage();
    router.replace("/");
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: "white"}}>
        Welcome to home!
      </Text>
{/* this LogOut function is temporary and will be removed */}
      <Button title='LogOut' onPress={signOut} color={"#000"}>
      </Button>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
    }
})