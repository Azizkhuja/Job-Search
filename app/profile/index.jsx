import { Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const ProfileInfo = () => {
  return <Button title="Log out" onPress={handleLogOut} />;
};

export default ProfileInfo;
