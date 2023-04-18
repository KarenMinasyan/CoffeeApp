import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COFFEES, COLORS } from "./src/helpers/constants";
import HomeScreen from "./src/screens/HomeScreen";
import CoffeeDetailScreen from "./src/screens/CoffeeDetailScreen";

const App = () => (
  <View style={styles.container}>
    <HomeScreen />
    {/*<CoffeeDetailScreen coffee={COFFEES[4]} />*/}
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark
  }
});
