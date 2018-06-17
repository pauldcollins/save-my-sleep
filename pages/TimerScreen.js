import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Button
} from "react-native";
import StopWatch from "./StopWatch";
import { StackNavigator } from "react-navigation";

// content
import * as content from "./content";

class TimerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
      step: "first"
    };
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  componentDidUpdate() {
    console.log("testset");
  }

  toggleStopwatch() {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false
    });
  }

  resetStopwatch() {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  }

  restartStopwatch() {
    this.setState({ stopwatchReset: true });
  }

  timerEvents() {
    this.restartStopwatch();
    // if (this.state.step === "first") {
    //   this.setState({ step: "second" });
    //   this.toggleStopwatch();
    // } else if (this.state.step === "second") {
    //   this.setState({ step: "first" });
    //   this.toggleStopwatch();
    // }
    console.log(this.state);
  }

  getFormattedTime(time) {
    if (time === "02") {
      this.timerEvents();
    }
    // this.currentTime = time;
  }

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    // const itemId = params ? params.itemId : null;
    // const screenName = params ? params.screenName : null;
    const screenName = "the878Method";
    const contentArray = params ? content[screenName].content : null;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{content[screenName].heading}</Text>
          <Text style={styles.headerSubText}>
            {content[screenName].subHeading}
          </Text>
        </View>

        <View
          style={[
            { backgroundColor: content[screenName].backgroundColor },
            styles.contentContainer
          ]}
        >
          <StopWatch
            laps
            start={this.state.stopwatchStart}
            reset={this.state.stopwatchReset}
            options={options}
            getTime={this.getFormattedTime.bind(this)}
          />
          <TouchableHighlight onPress={this.toggleStopwatch}>
            <Text style={{ fontSize: 30 }}>
              {!this.state.stopwatchStart ? "Start" : "Stop"}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetStopwatch}>
            <Text style={{ fontSize: 30 }}>Reset</Text>
          </TouchableHighlight>
        </View>

        <Button
          title="Back to home"
          onPress={() => this.props.navigation.goBack()}
        />
      </ScrollView>
    );
  }
}

const options = {
  container: {
    flex: 1
  },
  container: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 5,
    width: 220
  },
  text: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 7
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 30,
    paddingBottom: 30
  },
  headerText: {
    fontSize: 30,
    color: "#545455",
    textAlign: "center"
  },
  headerSubText: {
    fontSize: 20,
    color: "#545455",
    textAlign: "center",
    paddingTop: 10,
    paddingHorizontal: 20
  },
  contentContainer: {
    flex: 3,
    paddingVertical: 10
  },
  contentText: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "left",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1
  },
  separator: {
    height: 1,
    backgroundColor: "#FFF",
    opacity: 0.3
  },
  button: {
    marginHorizontal: 40,
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: "#189972",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});

AppRegistry.registerComponent("TimerScreen", () => TimerScreen);

export default TimerScreen;
