import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Animated,
} from "react-native";

import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from "victory-native";

import { VictoryCustomTheme } from "../styles";

import { dummyData, SIZES, FONTS, icons, COLORS } from "../constants";

import { HeaderBar } from "../components/HeaderBar";
import { CurrencyLabel } from "../components/CurrencyLabel";
import { useRoute } from "@react-navigation/native";
import { TextButton } from "../components/TextButton";

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
  const renderChar = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          alignItems: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
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
      <HeaderBar right />
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingBottom: SIZES.padding,
          }}
        >
          {renderChar()}
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default CryptoDetail;
