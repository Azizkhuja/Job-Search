import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./onBoarding.style";

const OnboardingViewScreen = ({ handleSignIn }) => {
  return (
    <View style={styles.onboardingWrapper}>
      <Image
        style={styles.onboardingImage}
        source={require("../../assets/images/image-7.png")}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.googleBtn} onPress={handleSignIn}>
        <View style={styles.googleIconWrapper}>
          <Image
            style={styles.googleIcon}
            source={{
              uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
            }}
          />
        </View>
        <Text style={styles.btnText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingViewScreen;
