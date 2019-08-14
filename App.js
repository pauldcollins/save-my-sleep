import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

// PAGES
import HomeScreen from "./pages/HomeScreen";
import DetailsScreen from "./pages/DetailsScreen";
import TimerScreen from "./pages/TimerScreen";

const RootStack = createStackNavigator(
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
const TheSleepApp = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <TheSleepApp />;
  }
}
