import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  profileImageContainer: {
    height: "40%",
    width: "100%",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  imageSelf: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    marginTop: 10,
  },
});

export default styles;
