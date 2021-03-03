import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LogBox,
} from "react-native";
import { HomeBalance, HomeHeaderBar, TrendingList } from "../components/Home";
import { TransactionHistory } from "../components/TransactionHistory";
import { PriceAlert } from "../components/PriceAlert";
import { COLORS, dummyData, FONTS, images, SIZES, SHADOW } from "../constants";

/* Type for navigation

type HomeScreenNavProp = StackNavigationProp<
  RootStackParamList,
  "CryptoDetail"
>;
{ navigation }: { navigation: HomeScreenNavProp }
*/
const Home = () => {
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  const [transactionHistory, setTransactionHistory] = React.useState(
    dummyData.transactionHistory
  );

  React.useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const renderHeader = () => {
    return (
      <View style={{ width: "100%", height: 290, ...SHADOW.primary }}>
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
  const renderAlert = () => {
    return <PriceAlert />;
  };

  const renderNotice = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...SHADOW.primary,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
          Investing Safety
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            color: COLORS.white,
            ...FONTS.body4,
            lineHeight: 18,
          }}
        >
          It's very difficult to time an investment, especially when the market
          is volatile. Learn how to use dollar cost averaging to your advantage.
        </Text>
        <TouchableOpacity
          style={{
            marginTop: SIZES.base,
          }}
          onPress={() => console.log("click")}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              color: COLORS.green,
              ...FONTS.h3,
            }}
          >
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderTransactionHistory = () => {
    return (
      <TransactionHistory
        customContainerStyle={{ ...SHADOW.primary }}
        history={transactionHistory}
      />
    );
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        {renderHeader()}
        {renderAlert()}
        {renderNotice()}
        {renderTransactionHistory()}
      </View>
    </ScrollView>
  );
};

export default React.memo(Home);
