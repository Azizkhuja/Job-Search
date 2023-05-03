import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
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

  useEffect(() => {
    retriveShowAll(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setFetching(true);
  };

  if (searchLoader && page === 1) {
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
          renderItem={({ item }) => (
            <ShowAllCard
              item={item}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            fetching && (
              <View style={[styles.container, styles.horizontal]}>
                <Text>Loading more jobs...</Text>
              </View>
            )
          }
        />
      )}
    </View>
  );
};

export default ShowAll;
