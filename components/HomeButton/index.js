import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

// content
import * as content from "./../../pages/content";

const the878Method = require("../../assets/sounds/The878MethodLong.mp3");
const progressiveRelaxation = require("../../assets/sounds/ProgressiveRelaxationLong.mp3");
const accupressure = require("../../assets/sounds/AccupressureLong.mp3");
const countingBackwards = require("../../assets/sounds/CountingBackwardsLong.mp3");
const leftNostrilBreathing = require("../../assets/sounds/LeftNostrilBreathingLong.mp3");

import { colors } from "../../pages/content";

const styles = StyleSheet.create({
  linkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 26,
    color: colors.white,
    textAlign: "center"
  },
  linkArea: {
    flexDirection: "row",
    marginTop: 5
  },
  linkText: {
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
    paddingHorizontal: 10
  },
  subText: {
    fontSize: 18
  }
});

class HomeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  async componentWillMount() {
    this.heartBeat = new Audio.Sound();
    this.heartBeat.loadAsync(eval(this.props.screenName));

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

  handlePlaySound = async () => {
    try {
      await this.heartBeat.setPositionAsync(0);
      await this.heartBeat.playAsync();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  componentDidUpdate() {
    // this.handleResetClick();
    // this.handleStartClick();
  }

  componentWillUnmount() {
    this.handleStopSound();
    this.heartBeat.unloadAsync();
  }

  handleStartClick() {
    this.handlePlaySound();
    this.setState({ playing: true });
  }

  handleStopSound = async val => {
    try {
      // await this.heartBeat.setPositionAsync(0);
      await this.heartBeat.stopAsync();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  handleStopClick() {
    this.handleStopSound();
    this.setState({ playing: false });
  }

  render() {
    const { playing } = this.state;

    return (
      <View
        style={[
          // { backgroundColor: content[this.props.screenName].backgroundColor },
          styles.linkContainer
        ]}
      >
        <Text style={styles.titleText}>
          {content[this.props.screenName].buttonText}
        </Text>
        <View style={styles.linkArea}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Details", {
                screenName: this.props.screenName
              });
            }}
          >
            <Text style={styles.linkText}>View details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              {
                playing ? this.handleStopClick() : this.handleStartClick();
              }
            }}
          >
            <Text style={styles.linkText}>
              {playing ? "Stop Audio" : "Play Audio"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeButton;
