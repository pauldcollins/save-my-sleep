import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";

// PAGES
import HomeScreen from "./pages/HomeScreen";
import DetailsScreen from "./pages/DetailsScreen";
import TimerScreen from "./pages/TimerScreen";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    Timer: {
      screen: TimerScreen
    }
  },
  {
    initialRouteName: "Timer"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
