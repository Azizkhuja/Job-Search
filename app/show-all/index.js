import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { checkImageURL } from "../../utils";
import axios from "axios";
import styles from "./showall.style";
import { COLORS } from "../../constants";
import { NearbyJobCard } from "../../components";

const ShowAll = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const retriveShowAll = async () => {
    setSearchLoader(true);

    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: "React",
        page: "1",
        num_pages: "1",
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": process.env.REACT_NATIVE_API_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error);
    } finally {
      setSearchLoader(false);
    }
  };

  useEffect(() => {
    retriveShowAll();
  }, []);

  if (searchLoader) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={COLORS.blue} />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (searchError) {
    return <Text>{searchError.message}</Text>;
  }

  return (
    <View>
      {searchResult.length > 0 && (
        <FlatList
          data={searchResult}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Text>{item.employer_name}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default ShowAll;
