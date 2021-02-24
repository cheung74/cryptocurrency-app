import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Image } from "react-native";
import { TabButton, TabCustomButton } from "../components/BottomTab";
import { COLORS, icons } from "../constants";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { Home } from "../screens";
import { BottomTabParamList, TabParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: "transparent",
          height: 100,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused} text="home" icon={icons.home} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              focused={focused}
              text="portfolio"
              icon={icons.pie_chart}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Transaction"
        component={TransactionStackNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.transaction}
              resizeMode="contain"
              style={{ width: 30, height: 30, tintColor: COLORS.white }}
            />
          ),
          tabBarButton: (props) => <TabCustomButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="Prices"
        component={PricesStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              text="prices"
              icon={icons.line_graph}
              focused={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              text="settings"
              focused={focused}
              icon={icons.settings}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<TabParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </HomeStack.Navigator>
  );
}

const PortfolioStack = createStackNavigator<TabParamList>();

function PortfolioStackNavigator() {
  return (
    <PortfolioStack.Navigator>
      <PortfolioStack.Screen
        name="Portfolio"
        component={Home}
        options={{ headerShown: false }}
      />
    </PortfolioStack.Navigator>
  );
}

const TransactionStack = createStackNavigator<TabParamList>();

function TransactionStackNavigator() {
  return (
    <TransactionStack.Navigator>
      <TransactionStack.Screen
        name="Transaction"
        component={Home}
        options={{ headerShown: false }}
      />
    </TransactionStack.Navigator>
  );
}

const PricesStack = createStackNavigator<TabParamList>();

function PricesStackNavigator() {
  return (
    <PricesStack.Navigator>
      <PricesStack.Screen
        name="Prices"
        component={Home}
        options={{ headerShown: false }}
      />
    </PricesStack.Navigator>
  );
}

const SettingStack = createStackNavigator<TabParamList>();

function SettingStackNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Settings"
        component={Home}
        options={{ headerShown: false }}
      />
    </SettingStack.Navigator>
  );
}
