import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
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
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Transaction"
        component={TransactionStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Prices"
        component={PricesStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<TabParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Home" }}
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
        options={{ headerTitle: "Portfolio" }}
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
        options={{ headerTitle: "Transaction" }}
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
        options={{ headerTitle: "Price" }}
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
        options={{ headerTitle: "Setting" }}
      />
    </SettingStack.Navigator>
  );
}
