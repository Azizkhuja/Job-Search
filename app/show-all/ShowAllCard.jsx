import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../utils";
import styles from "../../components/common/cards/nearby/nearbyjobcard.style";
import { icons } from "../../constants";

const ShowAllCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image resizeMode="contain" style={styles.logImage} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ShowAllCard;
