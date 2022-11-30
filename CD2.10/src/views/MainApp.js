import { View, StyleSheet, StatusBar } from "react-native";
import AllGifsList from "../components/AllGifsList";
import Header from "../components/Header";

import * as React from 'react';
function MainApp() {
  return (
    <View style={styles.appContainer}>
      <StatusBar hidden />
      <Header />
      <AllGifsList />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1, backgroundColor: "#fff" },
});

export default MainApp;