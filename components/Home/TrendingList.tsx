import React from "react";
import { FlatList } from "react-native";

import { SIZES } from "../../constants";
import TrendingItem from "./TrendingItem";

const TrendingList = ({ trending, navigation }: any) => {
  return (
    <FlatList
      contentContainerStyle={{ marginTop: SIZES.base }}
      data={trending}
      renderItem={({ item, index }: any) => (
        <TrendingItem {...{ item, index, navigation }} />
      )}
      keyExtractor={(item) => `${item.id}`}
      horizontal
      showsHorizontalScrollIndicator={false}
    ></FlatList>
  );
};

export default TrendingList;
