import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { COLORS, FONTS, icons } from "../../constants";

type props = {
  focused: boolean;
  text: string;
  icon: ImageSourcePropType;
};

const TabButton = ({ focused, text, icon }: props) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? COLORS.primary : COLORS.black,
        }}
      />
      <Text
        style={{
          color: focused ? COLORS.primary : COLORS.black,
          ...FONTS.body5,
        }}
      >
        {text.toUpperCase()}
      </Text>
    </View>
  );
};

export default React.memo(TabButton);
