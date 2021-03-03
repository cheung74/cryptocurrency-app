import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const TrendingItem = ({ item, index, navigation }: any) => {
  return (
    <TouchableOpacity
      style={{
        width: 180,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        marginLeft: index === 0 ? SIZES.padding : 0,
        marginRight: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.white,
      }}
      onPress={() => navigation.navigate("CryptoDetail", { currency: item })}
    >
      {/* currency */}
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={item.image}
            resizeMode="cover"
            style={{ width: 25, height: 25, marginTop: 5 }}
          />
        </View>
        <View style={{ marginLeft: SIZES.base }}>
          <Text style={{ ...FONTS.h2 }}>{item.currency}</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            {item.code}
          </Text>
        </View>
      </View>
      {/* value */}
      <View style={{ marginTop: SIZES.radius }}>
        <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
        <Text
          style={{
            color: COLORS[item.type == "I" ? "green" : "red"],
            ...FONTS.h3,
          }}
        >
          {item.changes}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(TrendingItem);
