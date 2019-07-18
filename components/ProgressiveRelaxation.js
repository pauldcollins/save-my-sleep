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

class The878Method extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      lastClearedIncrementer: null,
      steps: {
        currentStep: "step1",
        // breathe in and out, 30 seconds
        step1: 30,
        // Stretch your toes for 10 seconds
        step2: 10,
        // Relax and breathe for 30 seconds
        step3: 30,
        // Stretch your toes and calves for 10 seconds
        step4: 10,
        // Relax and breathe for 30 seconds
        step5: 30,
        // Clench your glutes for 10 seconds
        step6: 10,
        // Relax and breathe for 30 seconds
        step7: 30,
        // Hold your stomach muscles for 10 seconds
        step8: 10,
        // Relax and breathe for 30 seconds
        step9: 30,
        // Stretch your arms and fingers for 10 seconds
        step10: 10,
        // Relax and breathe for 30 seconds
        step11: 30,
        // Tense your face by stretching a smile for 10 seconds
        step12: 10,
        // Relax and breathe for 1 minute, feel the mattress supporting you
        step13: 60,
        loops: 3,
        loopsComplete: 0
      }
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
    this.handlePlaySound();

    if (
      this.state.steps.loopsComplete === this.state.steps.loops &&
      this.state.steps.currentStep === "step1"
    ) {
      this.handleResetClick();
      this.handleStopClick();
      this.state.steps.loopsComplete = 0;
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
        this.state.steps.currentStep = "step3";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step3" &&
        this.state.secondsElapsed === this.state.steps.step3
      ) {
        this.state.steps.currentStep = "step4";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step4" &&
        this.state.secondsElapsed === this.state.steps.step4
      ) {
        this.state.steps.currentStep = "step5";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step5" &&
        this.state.secondsElapsed === this.state.steps.step5
      ) {
        this.state.steps.currentStep = "step6";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step6" &&
        this.state.secondsElapsed === this.state.steps.step6
      ) {
        this.state.steps.currentStep = "step7";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step7" &&
        this.state.secondsElapsed === this.state.steps.step7
      ) {
        this.state.steps.currentStep = "step8";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step8" &&
        this.state.secondsElapsed === this.state.steps.step8
      ) {
        this.state.steps.currentStep = "step9";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step9" &&
        this.state.secondsElapsed === this.state.steps.step9
      ) {
        this.state.steps.currentStep = "step10";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step10" &&
        this.state.secondsElapsed === this.state.steps.step10
      ) {
        this.state.steps.currentStep = "step11";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step11" &&
        this.state.secondsElapsed === this.state.steps.step11
      ) {
        this.state.steps.currentStep = "step12";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step12" &&
        this.state.secondsElapsed === this.state.steps.step12
      ) {
        this.state.steps.currentStep = "step13";
        this.handleResetClick();
        this.handleStartClick();
      } else if (
        this.state.steps.currentStep === "step13" &&
        this.state.secondsElapsed === this.state.steps.step13
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
        // breathe in and out, 30 seconds
        step1: 30,
        // Stretch your toes for 10 seconds
        step2: 10,
        // Relax and breathe for 30 seconds
        step3: 30,
        // Stretch your toes and calves for 10 seconds
        step4: 10,
        // Relax and breathe for 30 seconds
        step5: 30,
        // Clench your glutes for 10 seconds
        step6: 10,
        // Relax and breathe for 30 seconds
        step7: 30,
        // Hold your stomach muscles for 10 seconds
        step8: 10,
        // Relax and breathe for 30 seconds
        step9: 30,
        // Stretch your arms and fingers for 10 seconds
        step10: 10,
        // Relax and breathe for 30 seconds
        step11: 30,
        // Tense your face by stretching a smile for 10 seconds
        step12: 10,
        // Relax and breathe for 1 minute, feel the mattress supporting you
        step13: 60,
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
    const { steps, secondsElapsed } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>
            {formattedSeconds(secondsElapsed)}
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

export default The878Method;
