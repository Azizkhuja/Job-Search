import { Text, Button } from "react-native";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const ProfileInfo = ({ userInfo }) => {
  const router = useRouter();
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
      <Button title="Log out" onPress={handleLogOut} />
    </>
  );
};

export default ProfileInfo;