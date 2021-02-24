import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";

const TabCustomButton = ({ children, onPress }: BottomTabBarButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
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

export default TabCustomButton;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
