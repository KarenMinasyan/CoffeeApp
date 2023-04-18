import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "src/helpers/constants";
import Navigation from "src/navigations";

const App = () => (
  <View style={styles.container}>
    <Navigation />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark
  }
});
