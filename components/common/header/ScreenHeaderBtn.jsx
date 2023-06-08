import { Image, TouchableOpacity } from "react-native";
import { useRouter, useSearchParams } from "expo-router";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/profile");
  };

  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={router.push("/profile")}
    >
      <Image
        source={{ uri: iconUrl }}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
