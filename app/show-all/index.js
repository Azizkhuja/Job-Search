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
};

export default ShowAll;
