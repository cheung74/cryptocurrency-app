import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS, SHADOW } from "../../constants";

const TabCustomButton: React.FC<BottomTabBarButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOW.secondary,
      }}
      onPress={onPress}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={{ width: 70, height: 70, borderRadius: 35 }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default React.memo(TabCustomButton);
