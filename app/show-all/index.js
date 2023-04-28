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

  return <View></View>;
};

export default ShowAll;
