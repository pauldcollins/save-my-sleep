import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

// PAGES
import HomeScreen from "./pages/HomeScreen";
import ContactScreen from "./pages/ContactScreen";
import DetailsScreen from "./pages/DetailsScreen";
import TimerScreen from "./pages/TimerScreen";

const MainStackNavigator = createStackNavigator(
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

const RootNavigator = createStackNavigator(
  {
    MainCardNavigator: {
      screen: MainStackNavigator
    },
    Contact: {
      screen: ContactScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const TheSleepApp = createAppContainer(RootNavigator);

export default class App extends React.Component {
  render() {
    return <TheSleepApp />;
  }
}
