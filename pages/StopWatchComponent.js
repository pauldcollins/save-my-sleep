import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions
} from "react-native";

import * as content from "./content";

const formattedSeconds = sec =>
  Math.floor(sec / 60) + ":" + ("0" + (sec % 60)).slice(-2);

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      lastClearedIncrementer: null,
      steps: {
        currentStep: "step1",
        step1: 2,
        step2: 4,
        loops: 3,
        loopsComplete: 0
      }
    };
    this.incrementer = null;
  }

  componentDidUpdate() {
    console.log("TEST");
    if (
      this.state.steps.loopsComplete === this.state.steps.loops &&
      this.state.steps.currentStep !== "step1"
    ) {
      this.handleResetClick();
      this.handleStopClick();
      // this.state.steps.loopsComplete = 0;
    } else {
      if (
        this.state.steps.currentStep === "step1" &&
        this.state.secondsElapsed === this.state.steps.step1
      ) {
        this.state.steps.currentStep = "step2";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step2" &&
        this.state.secondsElapsed === this.state.steps.step2
      ) {
        this.state.steps.currentStep = "step1";
        this.state.steps.loopsComplete = this.state.steps.loopsComplete + 1;
        this.handleResetClick();
        this.handleStartClick();
      }
    }
  }

  handleStartClick() {
    this.incrementer = setInterval(
      () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        }),
      1000
    );
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      lastClearedIncrementer: null,
      steps: {
        currentStep: "step1",
        step1: 2,
        step2: 4,
        loops: 3,
        loopsComplete: 0
      }
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>
            {formattedSeconds(this.state.secondsElapsed)}
          </Text>
        </View>
        {this.state.secondsElapsed === 0 &&
        this.state.steps.loopsComplete === 0 &&
        this.state.steps.currentStep === "step1" ? (
          <TouchableHighlight
            style={[
              styles.button,
              {
                backgroundColor: content[this.props.screenName].backgroundColor
              }
            ]}
            onPress={this.handleStartClick.bind(this)}
          >
            <Text style={styles.buttonText}>start</Text>
          </TouchableHighlight>
        ) : (
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleStopClick.bind(this)}
          >
            <Text style={styles.buttonText}>stop</Text>
          </TouchableHighlight>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  timer: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  timerText: {
    fontSize: 40,
    color: "#545455"
  },
  button: {
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.5,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});

export default StopWatch;
