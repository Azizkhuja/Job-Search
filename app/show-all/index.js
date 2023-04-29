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
import { useFetch } from "../../hook/useFetch";
import axios from "axios";

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
        query: "Python developer in Texas, USA",
        page: "1",
        num_pages: "1",
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
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
    return <ActivityIndicator size="large" />;
  }

  if (searchError) {
    return <Text>{searchError.message}</Text>;
  }

  return <View></View>;
};

export default ShowAll;
