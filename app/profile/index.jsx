import { Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const ProfileInfo = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      // Remove user data from AsyncStorage
      await AsyncStorage.removeItem("@user");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };
  return <Button title="Log out" onPress={handleLogOut} />;
};

export default ProfileInfo;
