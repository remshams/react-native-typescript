import * as React from "react";
import { Text, View } from "react-native";
import i18n from "../../__shared__/i18n/i18n";

export const ProjectList = () => (
  <View>
    <Text>{i18n.projects.list.title}</Text>
  </View>
);

export default ProjectList;
