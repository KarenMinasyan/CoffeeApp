import React from "react";
import { StyleSheet, View } from "react-native";
import { COFFEES, COLORS } from "./src/helpers/constants";
import HomeScreen from "./src/screens/HomeScreen";
import CoffeeDetailScreen from "./src/screens/CoffeeDetailScreen";
import Navigation from "./src/navigations";

const App = () => (
  <View style={styles.container}>
    <Navigation />
    {/*<HomeScreen />*/}
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
