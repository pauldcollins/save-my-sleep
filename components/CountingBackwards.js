import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { Audio } from "expo-av";

import * as content from "./../pages/content";
import styles from "./../constants/styles";

// const formattedSeconds = sec =>
//   Math.floor(sec / 60) + ":" + ("0" + (sec % 60)).slice(-2);

class CountingBackwards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 100,
      lastClearedIncrementer: null,
      steps: {
        currentStep: "step1",
        step1: 100,
        loops: 10,
        loopsComplete: 0
      }
    };
    this.incrementer = null;
  }

  async componentWillMount() {
    this.heartBeat = new Audio.Sound();
    this.heartBeat.loadAsync(require("../assets/sounds/CountingBackwards.mp3"));

    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true,
      staysActiveInBackground: true
    });
    await Audio.setIsEnabledAsync(true);
    await this.heartBeat.setPositionAsync(0);
  }

  handlePlaySound = async val => {
    try {
      await this.heartBeat.setPositionAsync(0);
      await this.heartBeat.playAsync();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  handleStopSound = async val => {
    try {
      await this.heartBeat.setPositionAsync(0);
      await this.heartBeat.stopAsync();
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
        this.state.secondsElapsed === 0
      ) {
        this.state.steps.currentStep = "step1";
        this.state.steps.loopsComplete = this.state.steps.loopsComplete + 1;
        this.handleResetClick();
        this.handleStartClick();
      }
    }
  }

  componentWillUnmount() {
    this.handleStopSound();
    this.heartBeat.unloadAsync();
  }

  handleStartClick() {
    if (
      this.state.steps.currentStep === "step1" &&
      (this.state.secondsElapsed === 0 ||
        this.state.secondsElapsed === this.state.steps.step1)
    ) {
      this.handlePlaySound();
    }

    this.incrementer = setInterval(
      () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed - 1
        }),
      2000
    );
  }

  handleStopClick() {
    this.handleStopSound();
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 100,
      lastClearedIncrementer: null,
      steps: {
        currentStep: "step1",
        step1: 100,
        loops: 10,
        loopsComplete: 0
      }
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 100
    });
  }

  render() {
    const { steps, secondsElapsed } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{secondsElapsed}</Text>
        </View>
        {this.state.secondsElapsed === 100 &&
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

export default CountingBackwards;
