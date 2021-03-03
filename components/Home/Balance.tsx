import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

type Props = {
  balance: string;
  changes: string;
};
const Balance: React.FC<Props> = ({ balance, changes }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
        Your Portfolio Balance
      </Text>
      <Text
        style={{
          marginTop: SIZES.base,
          color: COLORS.white,
          ...FONTS.h1,
        }}
      >
        ${balance}
      </Text>
      <Text style={{ color: COLORS.white, ...FONTS.body5 }}>
        {changes} Last 24 hours
      </Text>
    </View>
  );
};

export default React.memo(Balance);
