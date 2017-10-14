import * as React from "react";
import { View, Text } from "react-native";

export type MainProps = {
  message: string;
}

const Main = ({ message }: MainProps) => (
  <View>
    <Text>{message}</Text>
  </View>
);

export default Main;
