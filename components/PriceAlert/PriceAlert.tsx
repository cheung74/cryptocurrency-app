import React from "react";
import {
  Image,
  StyleSheetProperties,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, icons, SHADOW, SIZES } from "../../constants";

const PriceAlert: React.FC<{ customContainerStyle: StyleSheetProperties }> = ({
  customContainerStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding * 4.5,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        ...customContainerStyle,
        ...SHADOW.primary,
      }}
    >
      <Image
        source={icons.notification_color}
        style={{ width: 30, height: 30 }}
      />
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h3 }}>Set Price Alert</Text>
        <Text style={{ ...FONTS.body4 }}>
          Get noticed when your coins are moving
        </Text>
      </View>

      <Image
        source={icons.right_arrow}
        style={{ width: 25, height: 25, tintColor: COLORS.gray }}
      />
    </TouchableOpacity>
  );
};

export default React.memo(PriceAlert);
