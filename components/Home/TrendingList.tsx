import React from "react";
import { FlatList } from "react-native";
import { TrendingItem } from ".";
import { SIZES } from "../../constants";

const TrendingList = ({ trending }: any) => {
  return (
    <FlatList
      contentContainerStyle={{ marginTop: SIZES.base }}
      data={trending}
      renderItem={({ item, index }: any) => (
        <TrendingItem {...{ item, index }} />
      )}
      keyExtractor={(item) => `${item.id}`}
      horizontal
      showsHorizontalScrollIndicator={false}
    ></FlatList>
  );
};

export default TrendingList;
