import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
} from "victory-native";
import { CurrencyLabel } from "../components/CurrencyLabel";
import { HeaderBar } from "../components/HeaderBar";
import { PriceAlert } from "../components/PriceAlert";
import { TextButton } from "../components/TextButton";
import { COLORS, dummyData, FONTS, icons, SHADOW, SIZES } from "../constants";
import { VictoryCustomTheme } from "../styles";

const CryptoDetail = ({ navigation }: any) => {
  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];
  const [chartOptions, setChartOptions] = React.useState(
    dummyData.chartOptions
  );
  const [selectedOption, setSelectedOption] = React.useState(chartOptions[0]);

  const optionOnClickHandler = (option: any) => {
    setSelectedOption(option);
  };

  const route = useRoute();
  const { currency }: any = route.params;
  const renderChart = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          alignItems: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...SHADOW.primary,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <View style={{ flex: 1 }}>
            <CurrencyLabel
              icon={currency?.image}
              currency={currency?.currency}
              code={currency?.code}
            />
          </View>
          <View>
            <Text style={{ ...FONTS.h3 }}>${currency?.amount}</Text>
            <Text
              style={{
                color: currency?.type == "I" ? COLORS.green : COLORS.red,
                ...FONTS.h3,
              }}
            >
              {currency?.changes}
            </Text>
          </View>
        </View>
        {/* Chart */}

        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={SIZES.width - 40}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {numberOfCharts.map((item, index) => (
            <View
              key={`chart-${index}`}
              style={{
                marginLeft: index == 0 ? SIZES.base : 0,
              }}
            >
              <View style={{ marginTop: -25 }}>
                <VictoryChart
                  theme={VictoryCustomTheme}
                  height={220}
                  width={SIZES.width - 40}
                >
                  <VictoryLine
                    style={{
                      data: {
                        stroke: COLORS.secondary,
                      },
                      parent: {
                        border: "1px solid #ccc",
                      },
                    }}
                    data={currency?.chartData}
                    categories={{
                      x: ["15 Min", "30 Min", "45 Min", "60 Min"],
                      y: ["15", "30", "45"],
                    }}
                  />
                  <VictoryScatter
                    data={currency?.chartData}
                    size={5}
                    style={{
                      data: { fill: COLORS.secondary },
                    }}
                  />
                  <VictoryAxis
                    style={{
                      grid: { stroke: "transparent" },
                    }}
                  />
                  <VictoryAxis
                    dependentAxis
                    style={{
                      axis: {
                        stroke: "transparent",
                      },
                      grid: { stroke: "grey" },
                    }}
                  />
                </VictoryChart>
              </View>
            </View>
          ))}
        </Animated.ScrollView>

        {/* Options */}

        <View
          style={{
            width: "100%",
            paddingHorizontal: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {chartOptions.map((option) => (
            <TextButton
              key={`option-${option.id}`}
              customContainerStyle={{
                height: 30,
                width: 60,
                borderRadius: 15,
                backgroundColor:
                  selectedOption.id == option.id
                    ? COLORS.primary
                    : COLORS.lightGray,
              }}
              label={option.label}
              customLabelStyle={{
                color:
                  selectedOption.id == option.id ? COLORS.white : COLORS.gray,
                ...FONTS.body5,
              }}
              onPress={() => optionOnClickHandler(option)}
            />
          ))}
        </View>
        {/* Dots */}
        {renderDots()}
      </View>
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={{ height: 30, marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {numberOfCharts.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp",
            });
            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={`dot-${index}`}
                {...{ opacity }}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  };
  const renderBuy = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          padding: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...SHADOW.primary,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: SIZES.radius,
          }}
        >
          {/* Currency */}
          <View style={{ flex: 1 }}>
            <CurrencyLabel
              icon={currency?.image}
              currency={`${currency?.currency} Wallet`}
              code={currency?.code}
            />
          </View>
          {/* Amount */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: SIZES.base }}>
              <Text style={{ ...FONTS.h3 }}>${currency?.wallet.value}</Text>
              <Text
                style={{
                  textAlign: "right",
                  color: COLORS.gray,
                  ...FONTS.body4,
                }}
              >
                {currency?.wallet.crypto} {currency?.code}
              </Text>
            </View>
            <Image
              source={icons.right_arrow}
              resizeMode="cover"
              style={{ width: 20, height: 20, tintColor: COLORS.gray }}
            />
          </View>
        </View>
        <TextButton
          label={"Buy"}
          onPress={() => navigation.navigate("Transaction", { currency })}
        />
      </View>
    );
  };
  const renderAbout = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...SHADOW.primary,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>About {currency.currency}</Text>
        <Text style={{ marginTop: SIZES.base, ...FONTS.body3 }}>
          {currency?.description}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray1,
      }}
    >
      <StatusBar style="dark" />
      <HeaderBar right />
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingBottom: SIZES.padding,
          }}
        >
          {renderChart()}
          {renderBuy()}
          {renderAbout()}
          <PriceAlert
            customContainerStyle={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.radius,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(CryptoDetail);
