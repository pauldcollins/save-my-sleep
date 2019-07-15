import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions
} from "react-native";
import { Audio } from "expo";

import * as content from "./../pages/content";

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

const formattedSeconds = sec =>
  Math.floor(sec / 60) + ":" + ("0" + (sec % 60)).slice(-2);

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      lastClearedIncrementer: null,
      steps: content[this.props.screenName].steps
    };
    this.incrementer = null;

    this.heartBeat = new Audio.Sound();
  }

  async componentWillMount() {
    this.heartBeat.loadAsync(
      require("./../assets/sounds/the878/heartbeat_single.wav")
    );
  }

  handlePlaySound = async val => {
    try {
      await this.heartBeat.setPositionAsync(0);
      await this.heartBeat.playAsync();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  componentDidUpdate() {
    const { steps, secondsElapsed } = this.state;
    this.handlePlaySound();

    if (steps.loopsComplete === steps.loops) {
      this.handleResetClick();
      this.handleStopClick();
      steps.loopsComplete = 0;
    } else {
      if (steps.currentStep < steps.totalAmountOfSteps) {
        steps.currentStep += 1;
        this.handleResetClick();
        this.handleStartClick();
      }
      // if (steps.currentStep === "step1" && secondsElapsed === steps.step1) {
      //   steps.currentStep = "step2";
      //   this.handleResetClick();
      //   this.handleStartClick();
      // } else if (
      //   steps.currentStep === "step2" &&
      //   secondsElapsed === steps.step2
      // ) {
      //   steps.currentStep = "step3";
      //   this.handleResetClick();
      //   this.handleStartClick();
      // } else if (
      //   steps.currentStep === "step3" &&
      //   secondsElapsed === steps.step3
      // ) {
      //   steps.currentStep = "step1";
      //   steps.loopsComplete = steps.loopsComplete + 1;
      //   this.handleResetClick();
      //   this.handleStartClick();
      // }
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
      steps: content[this.props.screenName].steps
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0
    });
  }

  render() {
    const { steps, secondsElapsed } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>
            {formattedSeconds(secondsElapsed)}
          </Text>
        </View>
        {secondsElapsed === 0 &&
        steps.loopsComplete === 0 &&
        steps.currentStep === "step1" ? (
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

export default StopWatch;
