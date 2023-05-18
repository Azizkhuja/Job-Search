import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./onBoarding.style";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingViewScreen = ({ handleSignIn }) => {
  return (
    <>
      <Onboarding
        pages={[
          {
            backgroundColor: "#e3e3e3",
            image: (
              <Image
                source={require("../../assets/images/image-4.png")}
                style={styles.onboardingImage}
                resizeMode="contain"
              />
            ),
            title: "Something",
            subtitle: "Done with React Native Onboarding Swiper",
            titleStyles: { color: "red" },
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../assets/images/image-5.png")}
                style={styles.onboardingImage}
                resizeMode="contain"
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../assets/images/image-6.png")}
                style={styles.onboardingImage}
                resizeMode="contain"
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
      <TouchableOpacity style={styles.googleBtn} onPress={handleSignIn}>
        <View style={styles.googleIconWrapper}>
          <Image
            source={{
              uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
            }}
          />
        </View>
        <Text style={styles.btnText}>Sign in with google</Text>
      </TouchableOpacity>
    </>
  );
};

export default OnboardingViewScreen;
