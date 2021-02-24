export type RootStackParamList = {
  Home: undefined;
  CryptoDetail: undefined;
  Transaction: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Portfolio: undefined;
  Transaction: undefined;
  Prices: undefined;
  Settings: undefined;
};

export type TabParamList = Partial<BottomTabParamList>;
