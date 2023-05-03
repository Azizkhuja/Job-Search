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
import { useRouter } from "expo-router";
import { checkImageURL } from "../../utils";
import axios from "axios";
import styles from "./showall.style";
import { COLORS } from "../../constants";
import { NearbyJobCard } from "../../components";
import ShowAllCard from "./ShowAllCard";

const ShowAll = () => {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  const retriveShowAll = async (pageNum) => {
    setSearchLoader(true);

    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: "React",
        page: pageNum,
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
      const newData = response.data.data;
      setSearchResult((prevData) => [...prevData, ...newData]);
    } catch (error) {
      setSearchError(error);
    } finally {
      setSearchLoader(false);
      setFetching(false);
    }
  };
};

export default ShowAll;
