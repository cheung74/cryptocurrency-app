import React from "react";
import { StyleSheetProperties, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

type Props = {
  label: string;
  customContainerStyle: StyleSheetProperties;
  customLabelStyle: StyleSheetProperties;
  onPress: () => void;
};

const TextButton: React.FC<Props> = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green,
        ...customContainerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...customLabelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(TextButton);
