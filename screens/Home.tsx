import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HomeBalance, HomeHeaderBar, TrendingList } from "../components/Home";
import { COLORS, dummyData, FONTS, icons, images, SIZES } from "../constants";
import { RootStackParamList } from "../types";
type HomeScreenNavProp = StackNavigationProp<
  RootStackParamList,
  "CryptoDetail"
>;

const Home = ({ navigation }: { navigation: HomeScreenNavProp }) => {
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  const renderHeader = () => {
    return (
      <View style={{ width: "100%", height: 290, ...styles.shadow }}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{ flex: 1, alignItems: "center" }}
        >
          {/*Header Bar */}
          <HomeHeaderBar />
          {/*Balance */}
          <HomeBalance
            {...{
              balance: dummyData.portfolio.balance,
              changes: dummyData.portfolio.changes,
            }}
          />
          {/*Trending */}
          <View
            style={{
              position: "absolute",
              bottom: "-30%",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h2,
                paddingLeft: SIZES.padding,
              }}
            >
              Trending
            </Text>
            <TrendingList {...{ trending }} />
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>{renderHeader()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Home;
