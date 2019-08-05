import React from "react";
import { StackNavigator } from "react-navigation";

// PAGES
import HomeScreen from "./pages/HomeScreen";
import DetailsScreen from "./pages/DetailsScreen";
import TimerScreen from "./pages/TimerScreen";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Details: {
      screen: DetailsScreen
    },
    Timer: {
      screen: TimerScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
