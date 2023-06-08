import { Image, TouchableOpacity } from "react-native";
import { useRouter, useSearchParams } from "expo-router";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={{ uri: iconUrl }}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
