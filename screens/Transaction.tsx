import { useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { CurrencyLabel } from "../components/CurrencyLabel";
import { HeaderBar } from "../components/HeaderBar";
import { TextButton } from "../components/TextButton";
import { TransactionHistory } from "../components/TransactionHistory";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";

const Transaction = () => {
  const route = useRoute();
  const { currency }: any = route.params;
  const renderTrade = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: SIZES.padding,
          borderRadius: SIZES.padding,
          backgroundColor: COLORS.white,
          ...SHADOW.primary,
        }}
      >
        <CurrencyLabel
          icon={currency?.image}
          currency={currency?.currency}
          code={currency?.code}
        />
        <View
          style={{
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding * 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h2 }}>
            ${currency?.wallet.crypto} {currency?.code}
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            {currency.wallet.value}
          </Text>
        </View>
        <TextButton label="Trade" onPress={() => console.log("Trade")} />
      </View>
    );
  };
  const renderTradeHistory = () => {
    return (
      <TransactionHistory
        customContainerStyle={{
          ...SHADOW.primary,
        }}
        history={currency?.transactionHistory}
      />
    );
  };
  return (
    <SafeAreaView>
      <HeaderBar right={false} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingBottom: SIZES.padding,
          }}
        >
          {renderTrade()}
          {renderTradeHistory()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Transaction);
