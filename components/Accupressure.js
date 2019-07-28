import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { Audio } from "expo";

import * as content from "./../pages/content";
import styles from "./../constants/styles";

const formattedSeconds = sec =>
  Math.floor(sec / 60) + ":" + ("0" + (sec % 60)).slice(-2);

class Accupressure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      lastClearedIncrementer: null,
      steps: {
        currentStep: "step1",
        step1: 10,
        step2: 60,
        step3: 10,
        step4: 60,
        step5: 10,
        step6: 60,
        loops: 6,
        loopsComplete: 0
      }
    };
    this.incrementer = null;

    this.heartBeat = new Audio.Sound();
  }

  async componentWillMount() {
    this.heartBeat.loadAsync(require("./../assets/sounds/Accupressure.wav"));
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
        this.state.steps.currentStep = "step1";
        this.state.steps.loopsComplete = this.state.steps.loopsComplete + 1;
        this.handleResetClick();
        this.handleStartClick();
      }
    }
  }

  handleStartClick() {
    if (
      this.state.steps.currentStep === "step1" &&
      (this.state.secondsElapsed === 0 ||
        this.state.secondsElapsed === this.state.steps.step6)
    ) {
      this.handlePlaySound();
    }

    this.incrementer = setInterval(
      () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        }),
      1000
    );
  }

  handleStopSound = async val => {
    try {
      await this.heartBeat.setPositionAsync(0);
      await this.heartBeat.stopAsync();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  handleStopClick() {
    this.handleStopSound();
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      lastClearedIncrementer: null,
      steps: {
        currentStep: "step1",
        step1: 10,
        step2: 60,
        step3: 10,
        step4: 60,
        step5: 10,
        step6: 60,
        loops: 2,
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

export default Accupressure;