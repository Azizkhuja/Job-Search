import { Text, View, Button, Image } from "react-native";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import styles from "./profile.style";

const ProfileInfo = ({ userInfo }) => {
  const router = useRouter();
  console.log(userInfo);
  const handleLogOut = async () => {
    try {
      // Remove user data from AsyncStorage
      await AsyncStorage.removeItem("@user");

      // Redirect to login page
      router.push("/");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Profile information",
        }}
      />
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageWrapper}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1504349127888-431216363500?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
              }}
            />
          </View>
        </View>
        <View></View>
      </View>
      <Button title="Log out" onPress={handleLogOut} />
    </>
  );
};

export default ProfileInfo;
