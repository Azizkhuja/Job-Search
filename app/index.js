import { Button, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./onboarding/onBoarding.style";

const Home = () => {
  const router = useRouter();
  const DoneButton = ({ ...props }) => (
    <Button color="#000" title={"Done"} {...props} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
      <Onboarding
        DoneButtonComponent={DoneButton}
        onSkip={() => router.push(`/login`)}
        onDone={() => router.push(`/login`)}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/images/image-4.png")}
                style={styles.onboardingImage}
                resizeMode="contain"
              />
            ),
            title: "Ignite Your Inner Potential",
            subtitle: "Unleash your hidden strengths",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/images/image-5.png")}
                style={styles.onboardingImage}
                resizeMode="contain"
              />
            ),
            title: "Discover Your Path to Success",
            subtitle: "Dare to dream, achieve greatness",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../assets/images/image-6.png")}
                style={styles.onboardingImage}
                resizeMode="contain"
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Home;
