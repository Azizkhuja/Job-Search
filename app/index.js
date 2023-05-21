import { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingViewScreen from "./onboarding/OnboardingViewScreen";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./onboarding/onBoarding.style";

WebBrowser.maybeCompleteAuthSession();

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.REACT_NATIVE_ANDROID_GOOGLE_SIGN_IN,
    iosClientId: process.env.REACT_NATIVE_IOS_GOOGLE_SIGN_IN,
    webClientId: process.env.REACT_NATIVE_WEB_GOOGLE_SIGN_IN,
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");

    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;

    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();

      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {}
  };

  const DoneButton = ({ ...props }) => <Button title={"Done"} {...props} />;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {userInfo ? (
        <>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: COLORS.lightWhite },
              headerShadowVisible: false,
              headerLeft: () => (
                <Image source={icons.menu} style={{ width: 30, height: 30 }} />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={userInfo?.picture} dimension="100%" />
              ),
              headerTitle: "",
            }}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                padding: SIZES.medium,
              }}
            >
              <Text>{JSON.stringify(userInfo, null, 2)}</Text>
              <Button
                title="Log out"
                onPress={() => AsyncStorage.removeItem("@user")}
              />
              <Welcome
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={() => {
                  if (searchTerm) {
                    router.push(`/search/${searchTerm}`);
                  }
                }}
              />

              <Popularjobs />
              <Nearbyjobs />
            </View>
          </ScrollView>
        </>
      ) : (
        <>
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
          <OnboardingViewScreen handleSignIn={() => promptAsync()} />
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
