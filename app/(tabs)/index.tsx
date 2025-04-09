import ThreeButtonGradient from "@/components/ui/ThreeButtonGradient";
import { Colors } from "@/constants/Colors";
import { supabase } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Button, Image, TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

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
      <ThreeButtonGradient />
      <View style={styles.exerciseCard}>
        <Image
          source={require('@/assets/images/women-planking.png')}
          style={styles.exerciseImage}
        />
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseLevel}>12x</Text>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={styles.exerciseTitle}>EXERCISE OF THE DAY</Text>
          <TouchableOpacity style={styles.exerciseBtn}>
            <Text style={styles.exerciseBtnText}>Thrust & Plank It</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* this LogOut function is temporary and will be removed */}
      <Button title="LogOut" onPress={signOut} color={"#000"}></Button>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  exerciseCard: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    backgroundColor: '#b0dffb',
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
    position: 'relative',
    width: '90%',
    alignSelf: 'center',
  },
  exerciseImage: {
    width: 186,
    height: 168,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    marginBottom: 10,
    marginRight: 5,
  },
  exerciseInfo: {
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'bold',
    color: Colors.light.primary_colors.dark_navy,
    marginTop: 80,
  },
  exerciseBtn: {
    backgroundColor: Colors.light.primary_colors.dark_navy,
    borderColor: '#4FC3F7',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  exerciseBtnText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'regular',
    fontWeight: '500'
  },
  exerciseLevel: {
    position: 'absolute',
    top: 8,
    right: 12,
    backgroundColor: '#000',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: 12,
  },
});
