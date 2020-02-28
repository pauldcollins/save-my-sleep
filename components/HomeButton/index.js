import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

// content
import * as content from "./../../pages/content";

const the878Method = require("../../assets/sounds/The878MethodLong.mp3");
const progressiveRelaxation = require("../../assets/sounds/ProgressiveRelaxationLong.mp3");
const accupressure = require("../../assets/sounds/AccupressureLong.mp3");
const countingBackwards = require("../../assets/sounds/CountingBackwardsLong.mp3");
const leftNostrilBreathing = require("../../assets/sounds/LeftNostrilBreathingLong.mp3");

import { colors } from "../../pages/content";

var { width, height } = Dimensions.get("window");

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
  controlArea: {
    flexDirection: "row",
    padding: 10,
    borderColor: colors.blackBlue,
    borderRadius: 10
  },
  linkText: {
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
    paddingHorizontal: 10
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center"
  },
  closeText: {
    fontSize: 15,
    color: colors.white,
    textDecorationLine: "underline"
  },
  subText: {
    fontSize: 18
  },
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.5,
    zIndex: 100
  },
  modalInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blackBlue,
    height: "100%",
    width: "100%"
  },
  controlButton: {
    marginHorizontal: 20
  }
});

class HomeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      modalVisible: false
    };

    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
    this.heartBeat.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
  }

  componentWillUnmount() {
    this.handleStopSound();
    this.heartBeat.unloadAsync();
  }

  handleShowPlayer() {
    this.setModalVisible(true);
  }

  handlePlaySound = async () => {
    try {
      // await this.heartBeat.setPositionAsync(0);
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

  handlePauseSound = async val => {
    try {
      await this.heartBeat.pauseAsync();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  handleSkipForwardSound = () => {
    try {
      this.heartBeat
        .playAsync()
        .then(async playbackStatus => {
          console.log("playbackStatus", playbackStatus);
          if (playbackStatus.positionMillis >= playbackStatus.durationMillis) {
            this.setState({ playing: false });
            this.heartBeat.setPositionAsync(0);
          } else {
            this.heartBeat.setPositionAsync(
              playbackStatus.positionMillis + 15000
            );
          }
        })
        .catch(error => {
          console.log("ERROR", error);
        });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  handleSkipBackwardSound = () => {
    try {
      this.heartBeat
        .playAsync()
        .then(async playbackStatus => {
          this.heartBeat.setPositionAsync(
            playbackStatus.positionMillis - 15000
          );
        })
        .catch(error => {
          console.log("ERROR", error);
        });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  handleStartClick() {
    this.handlePlaySound();
    this.setState({ playing: true });
  }

  handlePauseClick() {
    this.handlePauseSound();
    this.setState({ playing: false });
  }

  handleStopClick() {
    this.handleStopSound();
    this.setState({ playing: false });
  }

  handleSkipForwardClick() {
    this.handleSkipForwardSound();
    this.setState({ playing: true });
  }

  handleSkipBackwardClick() {
    this.handleSkipBackwardSound();
    this.setState({ playing: true });
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
          <TouchableOpacity onPress={() => this.handleShowPlayer()}>
            <Text style={styles.linkText}>Play Audio</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.overlay} /> */}

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onShow={() => this.handleStartClick()}
          onRequestClose={() => this.handleStopClick()}
          style={styles.overlay}
        >
          <View style={styles.modalInner}>
            <View style={styles.controlArea}>
              <TouchableOpacity
                onPress={() => this.handleSkipBackwardClick()}
                style={styles.controlButton}
              >
                <Ionicons name="md-skip-backward" size={60} color="white" />
                <Text style={styles.buttonText}>15 Sec</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.handleStopClick()}
                style={styles.controlButton}
              >
                <Ionicons name="md-square" size={60} color="white" />
                <Text style={styles.buttonText}>Stop</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  {
                    playing ? this.handlePauseClick() : this.handleStartClick();
                  }
                }}
                style={styles.controlButton}
              >
                {playing ? (
                  <Ionicons name="md-pause" size={60} color="white" />
                ) : (
                  <Ionicons name="md-play" size={60} color="white" />
                )}
                <Text style={styles.buttonText}>
                  {playing ? "Pause" : "Play"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.handleSkipForwardClick()}
                style={styles.controlButton}
              >
                <Ionicons name="md-skip-forward" size={60} color="white" />
                <Text style={styles.buttonText}>15 Sec</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                this.handleStopClick();
                this.setModalVisible(!this.state.modalVisible);
              }}
              style={{ marginTop: 40 }}
            >
              <Text style={styles.closeText}>Close player</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default HomeButton;
