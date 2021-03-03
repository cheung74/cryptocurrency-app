import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

type Props = { right: boolean };

const HeaderBar: React.FC<Props> = ({ right }) => {
  const navigation = useNavigation();

  return (
    <View style={{ paddingHorizontal: SIZES.padding, flexDirection: "row" }}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
          <Text style={{ marginLeft: SIZES.base, ...FONTS.h3 }}>Back</Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default React.memo(HeaderBar);
