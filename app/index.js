import { useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
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

WebBrowser.maybeCompleteAuthSession();

// WEB: 263726367933-pj0pfojsu0c82th77fv3dojvkr173av5.apps.googleusercontent.com
// iOS: 263726367933-i9h1f61b47iudrrvqmb148h5i2na0q5c.apps.googleusercontent.com
// Android: 263726367933-cqdiihn4pkacv4mnad1fmlrevr7vakn9.apps.googleusercontent.com

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "263726367933-cqdiihn4pkacv4mnad1fmlrevr7vakn9.apps.googleusercontent.com",
    iosClientId:
      "263726367933-i9h1f61b47iudrrvqmb148h5i2na0q5c.apps.googleusercontent.com",
    webClientId:
      "263726367933-pj0pfojsu0c82th77fv3dojvkr173av5.apps.googleusercontent.com",
  });

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
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
          <Button title="Yuup" onPress={() => promptAsync()} />
          {/* <Text>{JSON.stringify(userInfo)}</Text> */}
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
    </SafeAreaView>
  );
};

export default Home;
