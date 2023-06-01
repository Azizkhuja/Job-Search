import { Button, SafeAreaView, Image } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../constants";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./onboarding/onBoarding.style";
import { Stack } from "expo-router";

const Home = () => {
  const router = useRouter();
  const DoneButton = ({ ...props }) => <Button title={"Done"} {...props} />;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "",
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
            title: "Something",
            subtitle: "Done with React Native Onboarding Swiper",
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
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
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
